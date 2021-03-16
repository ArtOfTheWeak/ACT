## The below code is from ScareMail by Ben Grosser 
## Any comments that have a double hastag are mine ## 
## This iteration will swap words from XXX file and 
## The create a new file with a swapped sentence that is less than
## 280 characters 


#!/usr/bin/python


# ScareMail Text Swapper
# version 1.0
#
# Reads a text and uses natural language processing to
# swap out nouns and verbs in the original with an 
# alternate set provided in nouns.txt and verbs.txt
# The new nouns and verbs are correctly modified (e.g.
# via verb conjugation) to fit within the original.
#
# Final result is a new text with the new nouns/verbs
# that also maintains the formatting of the original.
# Output is to a text file in a format suitable for 
# pasting into Javscript code.
#
# Used in the ScareMail project to produce intermediate
# nonsense stories using probable NSA search keywords.
#
# requires CLiPS' pattern.en from:
#   http://www.clips.ua.ac.be/pages/pattern-en
#
# requires Natural Language Toolkit from:
#   http://nltk.org
#
#
# USAGE: ScareMailTextSwapper.py [-h] -i INFILE -o OUTFILE [-p]
#
# optional arguments:
#  -h, --help                       show this help message and exit
#  -i INFILE, --infile INFILE       input file
#  -o OUTFILE, --outfile OUTFILE    output file
#  -p                               prints out results
#
#
# Benjamin Grosser
# 2013

## I was having issues with Pattern but its readMe said to but path to directory, which I did and it worked. 
MODULE = '/Path/To/pattern-2.6'
import sys; 
if MODULE not in sys.path: 
    sys.path.append(MODULE)

## I had to install punkt following this:
## https://stackoverflow.com/questions/26570944/resource-utokenizers-punkt-english-pickle-not-found

from pattern.en import parsetree, pluralize, conjugate, parse, lemma
from random import choice
from re import search
from sys import stdout
import nltk
import nltk.data  
import argparse
import codecs
from json import dumps
from random import randint
from time import sleep


# chance that a contraction will be retained as is
CONTRACTION_CHANCE = 50

# probabilities for noun/verb swapping
SCARY_VERB_CHANCE = 65
SCARY_NOUN_CHANCE = 100 
SCARY_PROPER_NOUN_CHANCE = 100 

# files
DATA_DIR = "data/"
COMMON_NOUNS = "nouns.txt"
COMMON_VERBS = "verbs.txt"
DHS_NOUNS = "DHS-nouns.txt"
DHS_VERBS = "DHS-verbs.txt"
DHS_PROPER_NOUNS = "DHS-proper-nouns.txt"


# takes an input text and swaps out the nouns and verbs with 
# properly conjugated/formatted ones from a different list
def textSwapper(input):

    # setup a tokenizer that handles sentences w/ quotes well
    st = nltk.data.load('tokenizers/punkt/english.pickle')

    # contraction search/replace (so that contractions 
    # aren't seperated by the tokenizer)
    replacements = {" n't":"n't",\
                    " 've":"'ve",\
                    " 'd" :"'d",\
                    " 'll":"'ll",\
                    " 's" :"'s",\
                    " 'm" :"'m",\
                    " 're":"'re"
                   }

    # holds the output as it's built
    result = ""

    openquote = False   # tracks current quote state
    pindex = 0          # current paragraph
    qindex = 0          # open quote position
    qpindex = 0         # open quote paragraph origin 

    # split the input into paragraphs
    input = input.split('\n')
    
    # for each paragraph in the full text
    for pindex,paragraph in enumerate(input):
        #print "P:"

        # split the paragraph up into sentences
        paragraph = st.tokenize(paragraph, realign_boundaries=True)

        # for each sentence in the paragraph
        for sentence in paragraph:
            #print "S:" + sentence

            # for all words within a parsed sentence
            for words in parsetree(sentence, replace=replacements):

                #for each word within the sentence
                for windex,word in enumerate(words):
                    #print word.string + ":" + word.tag
                    #stdout.write(word.string)

                    # ---------------------------------------
                    # swap the nouns and verbs!
                    # ---------------------------------------

#                    if word.tag == "NNP":
#
#                        if(randint(1,100) < SCARY_PROPER_NOUN_CHANCE):
#                            newnoun = choice(scarypropernouns)
#                            newword = "PN:"+newnoun
#
#                    elif word.tag == "NNPS":
#
#                        if(randint(1,100) < SCARY_PROPER_NOUN_CHANCE):
#                            newnoun = choice(scarypropernouns)
#                            newword = "PN:"+pluralize(newnoun)

                    # if it's a plural noun (NNS), choose a new one 
                    # and pluralize it
                    if word.tag == "NNS":

                        if(randint(1,100) < SCARY_NOUN_CHANCE):
                            newnoun = choice(scarynouns)
                        else:
                            newnoun = choice(nouns)

                        if newnoun[0].isupper():
                            newword = newnoun
                        else:
                            newword = pluralize(lemma(newnoun))

                    # else if it's a singular noun, choose a new one
                    elif word.tag == "NN":
                        if word.string.endswith("n't") or word.string.endswith("'ve"):
                            if(randint(1,100) < CONTRACTION_CHANCE):
                                newword = word.string
                            else:
                                newword = choice(nouns)

                        else:
                            newword = choice(nouns)

                    # else if it's a verb, then conjugate a new one based 
                    # on the original verb's form (e.g. 1st person singular, 
                    # 3rd person, etc.)
                    elif word.tag.startswith("VB"):

                        if(randint(1,100) < SCARY_VERB_CHANCE):
                            newverb = choice(scaryverbs)
                        else:
                            newverb = choice(verbs)

                        if word.string.endswith("n't") or\
                           word.string.endswith("'ve") or\
                           word.string.endswith("'d") or\
                           word.string.endswith("'ll") or\
                           word.string.endswith("'m") or\
                           word.string.endswith("'re"):
                            if(randint(1,100) < CONTRACTION_CHANCE):
                                newword = word.string
                            else:
                                newword = conjugate(choice(verbs), word.tag)

                            #print "OLD: "+word.string+", NEW: "+newword
                        else:        
                            newword = conjugate(lemma(newverb), word.tag)

                    # if it's not a noun or a verb, keep the original
                    else:
                        newword = word.string



                    # ---------------------------------------
                    # proper reassembly requires some finesse
                    # ---------------------------------------

                    # if the sentence starts with a quote
                    if word.string == '"' and windex == 0:

                        # as long as we're not closing a previous quote
                        # set some variables to track this quote until
                        # we do close it
                        if not openquote:
                            openquote = True
                            qindex = windex
                            qpindex = pindex
                            #result = result + word.string
                            result = result + newword

                        # otherwise, append and keep going
                        else:
                            openquote = False
                            #result = result + word.string
                            result = result + newword

                        #stdout.write(" CASE1 -- windex = 0")

                    # if the sentence started with a quote in this 
                    # paragraph and this is the second character of
                    # the sentence, write it (and capitalize it)
                    elif windex == 1 and qindex == 0 and\
                        qpindex == pindex and openquote:
                        #result = result + word.string.capitalize()
                        result = result + newword.capitalize()
                        #stdout.write(" CASE2")

                    # if this is after an open quote within a sentence
                    # (but not at the start of it)
                    elif windex == qindex+1 and qpindex == pindex and openquote:
                        #result = result + word.string
                        result = result + newword
                        #stdout.write(" CASE2a")

                    # if this is the first word of the sentence
                    # no space and capitalize() (in case it isn't already)
                    elif windex == 0:
                        #result = result + word.string.capitalize()
                        result = result + newword.capitalize()
                        #stdout.write(" CASE3 -- windex = 0")

                    # if this is punctuation 
                    elif search('[.,?!\"\'\\n;:]',word.string) and len(word.string) == 1:
                        # if this is a closing quote
                        if search('"',word.string) and openquote:
                            openquote = False
                            #result = result + word.string
                            result = result + newword
                            #stdout.write(" CASE4a")


                        # or if this is an opening quote
                        elif search('"',word.string) and not openquote:
                            #result = result + ' ' + word.string
                            result = result + ' ' + newword
                            openquote = True
                            qindex = windex
                            qpindex = pindex
                            #stdout.write(" CASE4b")

                        # else it's some other punctuation and it just
                        # gets written out
                        else:
                            #result = result + word.string
                            result = result + newword
                            #stdout.write(" CASE4c")


                    # else it's just a word in the middle of a sentence,
                    # so it gets written with a preceeding space
                    else:
                        #result = result + ' ' + word.string
                        result = result + ' ' + newword
                        #stdout.write(" CASE5")

                    # reset word index
                    windex = 0

                # reset quote trackers
                qindex = -1 
                qpindex = -1 

            # end of a sentence, add a space
            result = result + ' '

        # end of a paragraph, add a line break
        result = result + '\n\n'

        # quotes don't cross paragraphs
        openquote = False

    return result


## main

## get command line arguments
#parser = argparse.ArgumentParser() #PAUL HAS COMMENTED THIS OUT 
#.add_argument('-i', '--infile', required=True) #PAUL HAS COMMENTED THIS OUT 
#parser.add_argument('-o', '--outfile', required=True) #PAUL HAS COMMENTED THIS OUT 
#parser.add_argument('-p', help="prints out results", action="store_true") #PAUL HAS COMMENTED THIS OUT 
#args=parser.parse_args()

#infile = args.infile #PAUL HAS COMMENTED THIS OUT 
#outfile = args.outfile #PAUL HAS COMMENTED THIS OUT 


# read in the regular nouns and verbs to be used for swapping
# strip out any newlines (\n) in the process
with open(DATA_DIR + COMMON_NOUNS) as f:
    nouns = [line.strip() for line in f]

with open(DATA_DIR + COMMON_VERBS) as f:
    verbs = [line.strip() for line in f]

# read in the "scary" nouns and verbs to be used for swapping
with open(DATA_DIR + DHS_NOUNS) as f:
    scarynouns = [line.strip() for line in f]

with open(DATA_DIR + DHS_VERBS) as f:
    scaryverbs = [line.strip() for line in f]

with open(DATA_DIR + DHS_PROPER_NOUNS) as f:
    scarypropernouns = [line.strip() for line in f]

## May help with sentence splitter
# https://stackoverflow.com/questions/4576077/python-split-text-on-sentences

# open the file with text to be noun/verb swapped
f = open("XXX.txt",'r') ##I changed this to specify a file, rather than input a file when running script. 
text = f.read()

# close the file
f.close()


# swap out nouns/verbs, 
output = textSwapper(text)

# substitute <br> for \n
writeout = output.replace('<br>','') #I have changed this - check back with original code //need to resolve this 



## I added below lines to get select sentences with less than 280 character and output them ## 
import nltk.data
import random

tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')

forTweet = writeout ##my code takes text file 

tok = tokenizer.tokenize(forTweet); ##breaks into sentences 

newTok = random.choice(tok) ##selects random sentence 

newTok = random.choice([x for x in tok if len(x)<280])

lenghtnewTok = len(newTok) ##Gets length of newTOk 

print newTok  ##Prints
print lenghtnewTok ##Prints 

fn = open("A NEW TEXT FILE .txt","w+") ##creates new file and copies swapped text to it. 
fn.write(newTok)
fn.close()


f.close()

