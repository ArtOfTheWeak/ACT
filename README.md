# ACT

The files in this specific git all related to ACT as described in chapter six of the written thesis and  provide an insight to how the project evolved by building on other projects and remixing them.

Act is an online/offline media art intervention that takes the form of an automated bot on the social media platform Twitter. The tweets produced by the bot are an amalgamation of two different text-based sources. The first is the Protect America Act (PAA), an amendment to the Foreign Intelligence Surveillance Act(FISA). FISA was originally passed into law in 1978 to allow the US government to collect intelligence on foreign powers and their respective agents (aclu.org,2021). Along with the Patriot Act (2001), PAA expanded the scope of FISA to permit US intelligence agencies to conduct domestic and foreign surveillance through the development of programs like Prism. Prism was a program that allowed the US National Security Agency (NSA) to collect data belonging to users of Internet services such as Google, Facebook, Outlook and others without the requirement of court orders or any meaningful congressional oversight The second source utilised in Act are a list of words and phrases that were used by the US Department of Homeland Security (DHS) and the National Security Agency (NSA) to monitor social media websites and email. The list contains hundreds of verbs and nouns and is divided into categories including Weather/Disaster/Emergency,Infrastructure Security, Health and Terrorism (epic.org,p.20).


Act borrows both conceptually and practically from Scaremail – a project by artist Ben Grosser. The text sources in Act are combined using the same natural language processing (NLP) algorithm developed by Grosser for the Scaremail project.  Act uses Grosser’s code to randomly selects passages from the Protect America Act, replacing certain words from these passages with conjugated words and phrases from the analyst desktop binder to produce new passages that are meant to be natural but are clearly not. These ‘new’ passages are then outputted to a text file, sections of which are then tweeted by the Act bot. 




Running any of the files will require additional steps, libraries etc which I have commented in where applicable and possible 

**[002 Snowden's Cloak.py](https://github.com/ArtOfTheWeak/ACT/blob/main/002%20SnowdensCloak.js)** 
This is the main javascript code for the Snowden's Cloak Twitter Bot. 

**[003 wordSwap.py](https://github.com/ArtOfTheWeak/ACT/blob/main/003%20originalScareMailSwapper.py)** 
This is the code used to generate text - with the exception of a few changes from, it is **ALL** Ben Grosser's work.It will not work in isolation and will need various libries and text.

See the original [Scaremail project]( https://github.com/bengrosser/scaremail) for full version

**[004 wordSwapTwitter.py](https://github.com/ArtOfTheWeak/ACT/blob/main/004%20wordSwapTwitter.py)**
A different iteration of wordSwap.py that allowed me to output large amounts of text that could be then used in ACT (next). This version is set to output 280 characters.

**[@Protect2007](https://twitter.com/Protect2007) (ACT) consists of three different files** 

**[005 protectBot.py](https://github.com/ArtOfTheWeak/ACT/blob/main/005%20protectBot.py)**
A file to run the bot on twitter  

**[006 protectActRemixed.txt](https://github.com/ArtOfTheWeak/ACT/blob/main/006%20ProtectActRemixed.txt)**
The text file that is used as source, this file/text has been produced using Ben Grosser's script from Scaremail (see 003 wordSwap.py)  

**[007 credentials.py](https://github.com/ArtOfTheWeak/ACT/blob/main/007%20credentials.py)**
A file for the twitter API tokens/keys to allow automation. 

**The final components of this project are the files that were run to allow me a localised version for the purpose of exhibiting publicly, using a raspberry pi and a 7" monitor.** 

**[008 exhibitionScreen.py](https://github.com/ArtOfTheWeak/ACT/blob/main/008%20exhibitionScreen.py)** runs the project locally 

**[009 protectAmerica.txt](https://github.com/ArtOfTheWeak/ACT/blob/main/009%20protectAmercia.txt)** - source text  
 

