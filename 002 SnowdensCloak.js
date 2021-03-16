/* 
Code to run a twitter bot that will tweet certain words at @NSA + @DHS everytime X account tweets
Inspired by Ben Grosser's Scaremail Project 
and also Daniel Shiffman's node.js twitter bot tutorials, available here:
https://shiffman.net/a2z/twitter-bots/
*/

// set up

var startTime = new Date().toLocaleString(); //sets time 
console. log( startTime + 'The streambot is starting');//Make sure everything is ok. 
var Twit = require('twit'); //requires twit package 
var config = require('./config'); // Gets seperate config file I've setup with keys
var T = new Twit(config);//run config file
 //end of setup 

    
var userID = 'XXXXX'; // insert twitter userID of account you want to react to. 

var stream = T.stream('statuses/filter', { follow: ( userID ) });  
 stream.on('tweet', function (tweet) {
   
    var tweetTime = new Date().toLocaleString(); //set time tweet was sent

    if (tweet.user.id == userID) {
      console.log(tweetTime + " - " + "THIS WAS SENT BY THE USER WE WANT TO TRACK!")
      thisTweet();
   } 
   
});





function thisTweet(){

var wordsNSA= "Afghanistan, Agent, Agriculture, Agro, Aid, Air borne, Air Marshal, Airplane, Airport, Al Qaeda, Al-Shabaab, Ammonium nitrate, AMTRAK, Anthrax, Antiviral, Artistic Assassins, Assassination, Attack, Authorities, Avalanche, Avian, Bacteria, BART, Biological, Biological event, Biological weapon, Black out, Blister agent, Blizzard, Body scanner, Bomb squad, Bomb threat, Border, Border Patrol, Border Protection, Botnet, Breach, Bridge, Brown out, Brush fire, Brute forcing, Burn, Burst, Cain and abel, Cancelled, Car bomb, Cartel, Center for Disease Control, Chemical, Chemical agent, Chemical burn, Chemical fire, Chemical spill, Chemical weapon, China, Ciudad Juarez, Closure, Cloud, Coast Guard, Cocaine, Collapse, Colombia, Computer infrastructure, Conficker, Consular, Contamination, Conventional weapon, Cops, Crash, Crest, Critical infrastructure, Customs, Cyber attack, Cyber Command, Cyber security, Cyber terror, DDOS, Deaths, Decapitated, Delays, Denial of service, Dirty bomb, Disaster, Disaster assistance, Disaster management, Dock, Domestic security, Drill, Drug, Drug Administration, Drug cartel, Drug trade, Drug war, E. Coli, Earthquake, Ebola, Eco terrorism, El Paso, Electric, Emergency, Emergency management, Emergency response, Enriched, Epidemic, Erosion, Evacuation, Evacuation, Execution, Exercise, Explosion, Exposure, Extreme weather, Extremism, Facility, Failure, Federal Bureau, First responder, Flood, Flu, Food Poisoning, Foot and Mouth, Forest fire, Fort Hancock, Fundamentalism, Fusion Center, Gang, Gangs, Gas, Grid, Gulf Cartel, Gunfight, H1N1, H5N1, Hacker, Hail, Hamas, Hazardous, Hazardous material, Hazmat, Help, Heroin, Hezbollah, Home grown, Homeland Defense, Homeland security, Hostage, Human to Animal, Human to human, Hurricane, Ice, IED, Illegal immigrants, Incident, Industrial spill, Infection, Influenza, Interstate, Iran, Iraq, Islamist, Jihad, Juarez, Keylogger, Kidnap, La Familia, Landing, Law enforcement, Leak, Lightening, Listeria, Lockdown, Looting, Magnitude, Malware, Marijuana, Meth Lab, Methamphetamine, Metro, Mexican army, Mexico, Militia Shooting, Mitigation, Mudslide, Mutation, Mysql injection, Narcos, Narcotics, National Guard, National infrastructure, National preparedness, National security, Nationalist, Nerve agent, New Federation, Nigeria, North Korea, Norvo Virus, Nuclear, Nuclear facility, Nuclear threat, Organized crime, outage, Outbreak, Pakistan, Pandemic, Phishing, Phreaking, Pipe bomb, Pirates, Plague, PLF, PLO, Plot, Plume, Police, Pork, Port, Port Authority, Powder, Power, Power lines, Power outage, Prevention, Public Health, Quarantine, Radiation, Radicals, Radioactive, Recall, Recovery, Recruitment, Red Cross, Relief, Resistant, Response, Ricin, Riot, Rootkit, Salmonella, San Diego, Sarin, Scammers, Screening, Secret Service, Security, Service disruption, Shelter-in-place, Shootout, Shots fired, Sick, Sleet, Small Pox, Smart, Smuggling, Snow, Social media, Somalia, Southwest, Spammer, Spillover, Standoff, State of emergency, Storm, Strain, Stranded, Subway, Suicide attack, Suicide bomber, Suspicious device, Suspicious package, Suspicious substance, SWAT, Swine, Symptoms, Taliban, Tamiflu, Tamil Tigers, Target, Task Force, Telecommunications, Temblor, Terror, Terror Tuberculosis, Terrorism, Threat, Tijuana, Tornado, Toxic, Toxic Agro, Trafficking, Tremor, Trojan, Tsunami, Tsunami Warning Center, Tucson, Twister, Typhoon, U.S. Consulate, United Nations, Vaccine, Violence, Virus, Warning, Watch, Water borne, Wave, Weapons cache, Weapons grade, Wildfire, World Health Organization, Worm, Yemen, Yuma, DHS, FEMA, CIA, DEA, FBI, ATF, ICE, TSA, FAA, UN, CDC, FDA, WHO, Waihopai, INFOSEC, Information Security, Information Warfare, IW, IS, Priavacy, Information Terrorism, Terrorism Defensive Information, Defense Information Warfare, Offensive Information, Offensive Information Warfare, National Information Infrastructure, InfoSec, Reno, Compsec, Computer Terrorism, Firewalls, Secure Internet Connections, ISS, Passwords, DefCon V, Hackers, Encryption, Espionage, USDOJ, NSA, CIA, S/Key, SSL, FBI, Secert Service, USSS, Defcon, Military, White House, Undercover, NCCS, Mayfly, PGP, PEM, RSA, Perl-RSA, MSNBC, bet, AOL, AOL TOS, CIS, CBOT, AIMSX, STARLAN, 3B2, BITNET, COSMOS, DATTA, E911, FCIC, HTCIA, IACIS, UT/RUS, JANET, JICC, ReMOB, LEETAC, UTU, VNET, BRLO, BZ, CANSLO, CBNRC, CIDA, JAVA, Active X, Compsec 97, LLC, DERA, Mavricks, Meta-hackers, ^?, Steve Case, Tools, Telex, Military Intelligence, Scully, Flame, Infowar, Bubba, Freeh, Archives, Sundevil, jack, Investigation, ISACA, NCSA, spook words, Verisign, Secure, ASIO, Lebed, ICE, NRO, Lexis-Nexis, NSCT, SCIF, FLiR, Lacrosse, Flashbangs, HRT, DIA, USCOI, CID, BOP, FINCEN, FLETC, NIJ, ACC, AFSPC, BMDO, NAVWAN, NRL, RL, NAVWCWPNS, NSWC, USAFA, AHPCRC, ARPA, LABLINK, USACIL, USCG, NRC, ~, CDC, DOE, FMS, HPCC, NTIS, SEL, USCODE, CISE, SIRC, CIM, ISN, DJC, SGC, UNCPCJ, CFC, DREO, CDA, DRA, SHAPE, SACLANT, BECCA, DCJFTF, HALO, HAHO, FKS, 868, GCHQ, DITSA, SORT, AMEMB, NSG, HIC, EDI, SAS, SBS, UDT, GOE, DOE, GEO, Masuda, Forte, AT, GIGN, Exon Shell, CQB, CONUS, CTU, RCMP, GRU, SASR, GSG-9, 22nd SAS, GEOS, EADA, BBE, STEP, Echelon, Dictionary, MD2, MD4, MDA, MYK, 747,777, 767, MI5, 737, MI6, 757, Kh-11, Shayet-13, SADMS, Spetznaz, Recce, 707, CIO, NOCS, Halcon, Duress, RAID, Psyops, grom, D-11, SERT, VIP, ARC, S.E.T. Team, MP5k, DREC, DEVGRP, DF, DSD, FDM, GRU, LRTS, SIGDEV, NACSI, PSAC, PTT, RFI, SIGDASYS, TDM. SUKLO, SUSLO, TELINT, TEXTA. ELF, LF, MF, VHF, UHF, SHF, SASP, WANK, Colonel, domestic disruption, smuggle, 15kg, nitrate, Pretoria, M-14, enigma, Bletchley Park, Clandestine, nkvd, argus, afsatcom, CQB, NVD, Counter Terrorism Security, Rapid Reaction, Corporate Security, Police, sniper, PPS, ASIS, ASLET, TSCM, Security Consulting, High Security, Security Evaluation, Electronic Surveillance, MI-17, Counterterrorism, spies, eavesdropping, debugging, interception, COCOT, rhost, rhosts, SETA, Amherst, Broadside, Capricorn, Gamma, Gorizont, Guppy, Ionosphere, Mole, Keyhole, Kilderkin, Artichoke, Badger, Cornflower, Daisy, Egret, Iris, Hollyhock, Jasmine, Juile, Vinnell, B.D.M.,Sphinx, Stephanie, Reflection, Spoke, Talent, Trump, FX, FXR, IMF, POCSAG, Covert Video, Intiso, r00t, lock picking, Beyond Hope, csystems, passwd, 2600 Magazine, Competitor, EO, Chan, Alouette,executive, Event Security, Mace, Cap-Stun, stakeout, ninja, ASIS, ISA, EOD, Oscor, Merlin, NTT, SL-1, Rolm, TIE, Tie-fighter, PBX, SLI, NTT, MSCJ, MIT, 69, RIT, Time, MSEE, Cable & Wireless, CSE, Embassy, ETA, Porno, Fax, finks, Fax encryption, white noise, pink noise, CRA, M.P.R.I., top secret, Mossberg, 50BMG, Macintosh Security, Macintosh Internet Security, Macintosh Firewalls, Unix Security, VIP Protection, SIG, sweep, Medco, TRD, TDR, sweeping, TELINT, Audiotel, Harvard, 1080H, SWS, Asset, Satellite imagery, force, Cypherpunks, Coderpunks, TRW, remailers, replay, redheads, RX-7, explicit, FLAME, Pornstars, AVN, Playboy, Anonymous, Sex, chaining, codes, Nuclear, 20, subversives, SLIP, toad, fish, data havens, unix, c, a, b, d, the, Elvis, quiche, DES, 1*, NATIA, NATOA, sneakers, counterintelligence, industrial espionage, PI, TSCI, industrial intelligence, H.N.P., Juiliett Class Submarine, Locks, loch, Ingram Mac-10, sigvoice, ssa, E.O.D., SEMTEX, penrep, racal, OTP, OSS, Blowpipe, CCS, GSA, Kilo Class, squib, primacord, RSP, Becker, Nerd, fangs, Austin, Comirex, GPMG, Speakeasy, humint, GEODSS, SORO, M5, ANC, zone, SBI, DSS, S.A.I.C., Minox, Keyhole, SAR, Rand Corporation, Wackenhutt, EO, Wackendude, mol, Hillal, GGL, CTU, botux, Virii, CCC, Blacklisted 411, Internet Underground, XS4ALL, Retinal Fetish, Fetish, Yobie, CTP, CATO, Phon-e, Chicago Posse, l0ck, spook keywords, PLA, TDYC, W3, CUD, CdC, Weekly World News, Zen, World Domination, Dead, GRU, M72750, Salsa, 7, Blowfish, Gorelick, Glock, Ft. Meade, press-release, Indigo, wire transfer, e-cash, Bubba the Love Sponge, Digicash, zip, SWAT, Ortega, PPP, crypto-anarchy, AT&T, SGI, SUN, MCI, Blacknet, Middleman, KLM, Blackbird, plutonium, Texas, jihad, SDI, Uzi, Fort Meade, supercomputer, bullion, 3, Blackmednet, Propaganda, ABC, Satellite phones, Planet-1, cryptanalysis, nuclear, FBI, Panama, fissionable, Sears Tower, NORAD, Delta Force, SEAL, virtual, Dolch, secure shell, screws, Black-Ops, Area51, SABC, basement, data-haven, black-bag, TEMPSET, Goodwin, rebels, ID, MD5, IDEA, garbage, market, beef, Stego, unclassified, utopia, orthodox, Alica, SHA, Global, gorilla, Bob, Pseudonyms, MITM, Gray Data, VLSI, mega, Leitrim, Yakima, Sugar Grove, Cowboy, Gist, 8182, Gatt, Platform, 1911, Geraldton, UKUSA, veggie, 3848, Morwenstow, Consul, Oratory, Pine Gap, Menwith, Mantis, DSD, BVD, 1984, Flintlock, cybercash, government, hate, speedbump, illuminati, president, freedom, cocaine, $, Roswell, ESN, COS, E.T., credit card, b9, fraud, assasinate, virus, anarchy, rogue, mailbomb, 888, Chelsea, 1997, Whitewater, MOD, York, plutonium, William Gates, clone, BATF, SGDN, Nike, Atlas, Delta, TWA, Kiwi, PGP 2.6.2., PGP 5.0i, PGP 5.1, siliconpimp, Lynch, 414, Face, Pixar, IRIDF, eternity server, Skytel, Yukon, Templeton, LUK, Cohiba, Soros, Standford, niche, 51, H&K, USP, ^, sardine, bank, EUB, USP, PCS, NRO, Red Cell, Glock 26, snuffle, Patel, package, ISI, INR, INS, IRS, GRU, RUOP, GSS, NSP, SRI, Ronco, Armani, BOSS, Chobetsu, FBIS, BND, SISDE, FSB, BfV, IB, froglegs, JITEM, SADF, advise, TUSA, HoHoCon, SISMI, FIS, MSW, Spyderco, UOP, SSCI, NIMA, MOIS, SVR, SIN, advisors, SAP, OAU, PFS, Aladdin, chameleon man, Hutsul, CESID, Bess, rail gun, Peering, 17, 312, NB, CBM, CTP, Sardine, SBIRS, SGDN, ADIU, DEADBEEF, IDP, IDF, Halibut, SONANGOL, Flu, &, Loin, PGP 5.53, EG&G, AIEWS, AMW, WORM, MP5K-SD, 1071, WINGS, cdi, DynCorp, UXO, Ti, THAAD, package, chosen, PRIME, SURVIAC";

//splits word list divided by comma
var splitNSA = wordsNSA.split(",");

//picks a random word from list
var randomNSA = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA2 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA3 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA4 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA5 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA6 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA7 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA8 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA9 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA10 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA11 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA12 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA13 = splitNSA[Math.floor(Math.random() * splitNSA.length)];
var randomNSA14 = splitNSA[Math.floor(Math.random() * splitNSA.length)];


var all = ".@NSAgov" + ".@DHSgov" + randomNSA + randomNSA2 + randomNSA3 + randomNSA4 + randomNSA5 + randomNSA6 + randomNSA7 + randomNSA8 + randomNSA9 + randomNSA10 + randomNSA11 + randomNSA12 + randomNSA13 + randomNSA14;
tweetIt(all);

}

 	function tweetIt(txt){

var tweet = {
	status :  txt 
}


 T.post('statuses/update',tweet,tweeted);

}
  
  function tweeted(err, data, response) {//this is my call back function don't really need it here 
  if (err){ // but am using if there is an error
  	console.log("something went wrong!");//after it tweets tells me if it works
  }else{
  	console.log("It Worked");
  
  }
  }


    