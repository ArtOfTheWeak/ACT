#This is the working twitter bot for ACT Bot (@Protect2007). 
import tweepy
from time import sleep
from credentials import *
import nltk.data
import random
import sys



# Access and authorize Twitter credentials from credentials.py
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)


# Open text file from (or your chosen file) for reading
my_file = open('ProtectActRemixed.txt', 'r')



text = my_file.read()



# close the file
my_file.close()


while True:     
    tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
    forTweet = text#my code takes text file 
    tok = tokenizer.tokenize(forTweet); #breaks into sentences 
    newTok = random.choice(tok) #selects random sentence 
    newTok = random.choice([x for x in tok if len(x)<280])#Makes sure sentence is less than 280 characters 
    lenghtnewTok = len(newTok) #Gets length of newTOk 
    print newTok  #Prints
    print lenghtnewTok #Prints 

 
    api.update_status( newTok )  #this is the tweet!

    sleep (3600)
    






