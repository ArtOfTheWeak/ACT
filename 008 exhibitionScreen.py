#This is script plays on raspbery pi + 7" screen for exhibition purposes.  
#It calls on the protectAmerica.txt file, which has multiple premade versions of the
#the Protect America put through the Ben Grosser's ScareMailTextSwapper.py script.  


#This should be run through ctal-alt-f1 to avoid using LXTerminal
# and let's adjust size etc following this 
# https://www.raspberrypi-spy.co.uk/2014/04/how-to-change-the-command-line-font-size/


import nltk.data
import random
import sys
from time import sleep
import curses 


f = open("protectAmerica",'r')  
text = f.read()

f.close()



while True:


    tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')

    forTweet = text #my code takes text file 

    tok = tokenizer.tokenize(forTweet); #breaks into sentences 

    newTok = random.choice(tok) #selects random sentence 

    newTok = random.choice([x for x in tok if len(x)<280])

    lenghtnewTok = len(newTok) #Gets length of newTOk 

  

    sleep(5)
    #print(chr(12))
    stdscr = curses.initscr()  # initialise clearing screen 
    stdscr.clear()  # Clear the screen
    sleep(2)


    #This is typewrite effect 
    words = newTok # 
    for char in words:
        sleep(0.1)
        sys.stdout.write(char)
        sys.stdout.flush()







