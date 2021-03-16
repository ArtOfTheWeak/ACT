# ACT

The files in this specific git all related to ACT as described in chapter six of the written thesis. 

They are not exact copies of the actual code, and are meant only to provide an insight to how the project evolved by building on other projects andremixing them.

Running any of the files will require additional steps, libraries etc which I have commented in where applicable and possible 

**[002 Snowden's Cloak.py](https://github.com/ArtOfTheWeak/ACT/blob/main/002%20SnowdensCloak.js)** 
This is the main javascript code for the Snowden's Cloak Twitter Bot. 

**[003 wordSwap.py](https://github.com/ArtOfTheWeak/ACT/blob/main/003%20originalScareMailSwapper.py)** 
This is the code used to generate text - with the exception of a few changes from, it is **ALL** Ben Grosser's work.It will not work in isolation and will need various libries and text.

See the original [Scaremail project]( https://github.com/bengrosser/scaremail) for full version

**004wordSwapTwitter.py**
A different iteration of wordSwap.py that allowed me to output large amounts of text that could be then used in ACT (next). This version is set to output 280 characters.

**@Protect2007 (ACT) consists of three different files** 

**005protectBot.py**
A file to run the bot on twitter  

**006protectActRemixed.txt**
The text file that is used as source, this file/text has been produced using Ben Grosser's script from Scaremail (see 003 wordSwap.py)  

**007credentials.py**
A file for the twitter API tokens/keys to allow automation. 

**The final components of this project are the files that were run to allow me a localised version for the purpose of exhibiting publicly, using a raspberry pi and a 7" monitor.** 

**008exhibitionScreen.py** runs the project locally 

**009 protectAmerica.txt** - source text  
 

