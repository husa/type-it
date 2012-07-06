var Lecture = function (param) {
	this.sample = {
		// Alphabet with keycodes
		alphabet : {
			//first line	
			96  : '`',
			49  : '1',
			50  : '2',
			51  : '3',
			52  : '4',
			53  : '5',
			54  : '6',
			55  : '7',
			56  : '8',
			57  : '9',
			48  : '0',
			189 : '-',
			187 : '=',
			// second line
			81  : 'q',
			87  : 'w',
			69  : 'e',
			82  : 'r',
			84  : 't',
			89  : 'y',
			85  : 'u',
			73  : 'i',
			79  : 'o',
			80  : 'p',
			219 : '[',
			221 : ']',
			220 : '\\ ',
			// third line
			65  : 'a',
			83  : 's',
			68  : 'd',
			70  : 'f',
			71  : 'g',
			72  : 'h',
			74  : 'j',
			75  : 'k',
			76  : 'l',
			186 : ';',
			222 : "'",
			//fourth line
			90  : 'z',
			88  : 'x',
			67  : 'c',
			86  : 'v',
			66  : 'b',
			78  : 'n',
			77  : 'm',
			188 : ',',
			190 : '.',
			1901 : '/'
		},

		// Lessons
		level : {
			newLetters : ['quite a lot'],
			lesson : 'This is a simple text. With this application You can easily learn blind typing. To start learning simply choose a language and a level you want to start with in a upper menu. Have fun!'
		}
	}

	this.english = {
		// Alphabet with keycodes
		alphabet : {
			//first line	
			96  : '`',
			49  : '1',
			50  : '2',
			51  : '3',
			52  : '4',
			53  : '5',
			54  : '6',
			55  : '7',
			56  : '8',
			57  : '9',
			48  : '0',
			189 : '-',
			187 : '=',
			// second line
			81  : 'q',
			87  : 'w',
			69  : 'e',
			82  : 'r',
			84  : 't',
			89  : 'y',
			85  : 'u',
			73  : 'i',
			79  : 'o',
			80  : 'p',
			219 : '[',
			221 : ']',
			220 : '\\ ',
			// third line
			65  : 'a',
			83  : 's',
			68  : 'd',
			70  : 'f',
			71  : 'g',
			72  : 'h',
			74  : 'j',
			75  : 'k',
			76  : 'l',
			186 : ';',
			222 : "'",
			//fourth line
			90  : 'z',
			88  : 'x',
			67  : 'c',
			86  : 'v',
			66  : 'b',
			78  : 'n',
			77  : 'm',
			188 : ',',
			190 : '.',
			190 : '/'
		},

		// Lessons
		level1 : {
			newLetters : ['f', 'j'],
			lesson : 'fj j f j f f fj f fj fj ffj f fjf f f jj f fj jf jf fj jfj fjf ffj ffj fj ff f f ff fj fj ffjj jjjf j f jj fj jj jfj ff f ff ff fj ffj ff jfj jf jff ffj f ff ffj f fjf j fj ffj fj jj ffj jj f jfj jff j ffj ffjj ff j f fjf ffj jff ffj jf ffj jff fj fj f f f f fj jff ffj fjf f j j jf jf j jfj fjf fj ff fj jfj jfj fj jff fj f ffjj f fjf ffj jfj ff j ff jf jjjf jf j jff jfj j f jj f jfj fj j jff jfj jfj jff jf fj jj j j fjf j fj j fj j f j f ff j ffjj j jfj ffjj jfj f jfj f fj f f f jfj j jf jfj fj j jf f fjf fjf jf ff ff fjf fjf fjf jfj jjjf j f jf jfj f jjjf f ff ff jf f fj ffj fj fj jf f ff jf f j j jfj f jff fj j f fjf f jfj jf f jfj jjjf'
		},
		level2 : {
			newLetters : ['k', 'd'],
			lesson : 'djd k djd k fdj k fdj k k jdd dd k kf dd k k dd k d fdfk k k kf d kf fdfk k fdj k df jk jdd jkjd jjkk d k k d d d d k k d kf d d dd k d jjd d d dkk jkjd k k k djd dkk kf fdj k fdfk k k fdj k dkk d d df df df k k djd dd k d d d dd jdd d kf fdj k k d jkjd k k k djd k d dd d jdd jjd d d d jdd d k k dd fdfk jjkk k fdfk k d d fdfk jjkk kfd k k dd k k dkk jjd jjkk k kfd df kfd d d d fdj df jdd k d jdd k d k k k jjkk dd d d k jk df k jjkk d k k k jjkk d fdfk fdfk fdj d k d jjkk djd k k k k djd k d d d df k k djd k kfd df k k k d k dd kfd df d kfd k k k kfd djd k k jk dd dd df d d jk k kf jjd kf kf k df d k jkjd kf k jjd fdfk k k kfd d'
		},
		level3 : {
			newLetters : ['l', 's'],
			lesson : 's sl s fl skl s sl fl skl sfj l sk s sk ss s sfj jss l fs ss fs sk jss sk s fl s l fs s fl jss sfj l s sk l sk s fs s ss l fl l sf fl lll skl sfj sk dsk sk sfj ss sf l fl jssj fl l l jss sfj sk sk s fl fl s jss s s s l fl jssj sl l l s fl sl l fs ss l fs jss s dsk s jssj sk fs l l skl l fl l s l s s sl skl fl s s l skl l fl s skl sk s l l jssj s sk s jss jss sfj sf sl sk s lll jssj sl s s fl l lll fl l sk fl ss dsk fl fl fjjs l fl s s s l s jss skl jss sfj l fl l sfj sfj skl l fl l sk fl fl sk ss l fs l sk l sl fl skl l l sl s fl fjjs fjjs l fjjs l fl ss fl l sk s l l l s s fjjs lll sk ss skl jssj skl fl l l skl fl l s dsk s s sl fl'
		},
		level4 : {
			newLetters : ['n', 't'],
			lesson : 'snaffl dan attack fann na scant fast snack taff ank sna att snac candl tattl tan tac na lan snaf jat staccat na t can fact an fann catcall ta tattl sta nast task cast tan cantata can n lankl slan tall sanda sna flank fact tank cat catcall t cantat latt landfal tal can stanc na snak knac ta annal attac t san canca stall san caftan ta ct t scandal flank last dankl nat cattl stat skat stal stak cact candl fat ana ta flatlan t tal tatt scant flatca dandl staf slat castl fan scantl sna snatc talk sna sna flank cast dandl n task tak lastl alt fan landlad tal ta stan lank flan tal tast sand sta landfall knac landfal cat ants landlad na sata salt caftan anall nat can lastl'
		},
		level5 : {
			newLetters : ['i', 'v'],
			lesson : 'cassi sic laddi affin canin flint inclinin vivain icil ni satinin ci in cit divan finalis tankin sli instatin kil clinicall dis vill vi lil caddis snifflin fit assail nif lanai kil addic lis ick dia infantil satani kind nift jadin visitin stil idl littl si clinicia validat ninn ti fil cavalcad sanit slackin catfis dinin astatin dadaist killin fil sift vial sniffin fantasti lividl li invalid flick satinin di affiancin dia finn inkin acidl final vannin tin itc italic instancin inla insistin slavin vindictiv nai distall affianc ni stick ki sniff tid tilt tacitl clannis jiltin failin ki stasi sanit fiddl savanna atil acclai fiv satanicall lackadaisicall fascia ti sandin valis ai dids didacticall'
		},
		level6 : {
			newLetters : ['m', 'e'],
			lesson : 'dividend lite salesladie vie decam dissect skie enema cancel feminist insentienc decedent fiesta saltcella demiste title steadines scammin fancie   envie fee descent se incivilitie amide site demitass lesse animatedl select latencie naive mantle milkmaid fiftie distinctivel seventeent mainmas finickies distinctivel filme jestin assesse insiste slate skillet lacke manana inte ma falsett mate dietetic entitlemen vesicle stales divvie cleanin enlivenin seeke titte tendenc mistil mi lifelin accidental steak skimme fantasie divest sveltes devianc mistines sassie jade finenes titte dismantle mentalis inadvisedl fannie installe disinfectan midden divisivenes acclaim mf settee svelt animatedl teatime devastate'
		},
		level7 : {
			newLetters : ['h', 'r'],
			lesson : 'dare testifier eradicate terminat trafficke hadin inferenc franti reservedl chef lathere marr atria trait distres hearse trance varnis chattin fifer irise intern merite clicker hesitanc rhiniti crackhead dishe saddler rancidit mandrak rattl threade cardinall larc trisectin intrinsi recreatin stridde ester carcas thirst rifte rascal thres drinke indiscriminatel clarete iridescenc refile resen reelectin airlift tetherin invert resale feathere enfranchisemen rehea earthie fetche thick firecracker interlinke redelive ethnicall tidemar indiscreetl cracklin menhade mishandlin catche ransack headline crest inerran teare cradle sincerit hater firt dinner rent snickerin recklessnes sharer thatche relinin refac heatin reinstatemen'
		},
		level8 : {
			newLetters : ['g', 'o'],
			lesson  : 'overcook rotat comi reconfirmatio reregistratio nomad management forklift storme socialisti shoestring conma iodide lading incontinentl fervo sag gentl mo legitimatin sociologicall dominanc font regicid gallantl migh elongatio nonsmokin integran demoni maroo comicalit toccata fag infliction shatteringl coalfield cloc almight remoldin tanglin fago gonorrhea evocatio dialing solderin ciggie collide monarchie correctiona conciliatio hok roilin integrate cosmologie demonstrate throttle glister avitaminosi noddle odditie chiffo mg solstice steroida conge theor ammoni microcos histologica notifier favor chromaticall chromosoma songste negotiator diagnostic nova glande hornie concavit interconnection'
		},
		level9 : {
			newLetters : ['b', 'p'],
			lesson : 'archbishop parliamentar calibe respel tiebac bon semipro retrospectiv transpir paren snappil absconde nobodie grosbeak podiatr precooke misinterpretatio parad establishin oppos liprea abrasiv dabbl seraph precookin kissabl embarkin breadth airdroppin permeabilit plainsme aberran bonnies gallbladder phaeto beepe packhors deciphermen plastere bloodthirstie cachepo vibration sandblas preme soppie dispos preppe bookmarke neighbore heptagona toboggane despondenc grabber blearil birdbath boast hellebor phonic blint escapemen horrible topographicall portende replier seborrhe peste debark composin trombonis ben bootblac resistibl rebor pikin barnacle pentacle trespasse sparre photocopie dolphin plantin pictographi brittl bipartit potat'
		},
		level10 : {
			newLetters : ['q', 'u'],
			lesson : 'thoroughnes recrudescin tunefulnes rigorousnes imprimatu rounde capsule breakou reintroduce contentiousnes bullfinche biennium augmenter nurse   busb curse quipste munificen beautifie thankfu instruct tranquill stoup inundation undeservin fluf quarto purloinin quaho unheate cherub guffa sufficien ridicule unequivocall redistribute fulsomel herculea portentousnes shogun dangerou gutties samurai knuckl racquetbal babushka emolumen cuboi epilogue frui puddl auctio aqueou quot squint velu abuse pluckil therapeuticall renucleate turnoff busties accusa gustil pluckines neutral nonintellectua uncannil outcropping custodian rutties guardednes platitude grubb mus skunk impugn nonplussin nuptial untrouble flounc unchronicle bushe'
		},
		level11 : {
			newLetters : ['w', 'n'],
			lesson : 'weed rotundin kidnap compartment retakin enlighten adjurin sharin propositione driftne entitlemen debunk peasantr canvas insurgenc nullifie halfpennie middleweigh licensin outdistance sunburst whelmin supplicatin brinines opalescen chardonna aw salutatorian envelo futon outpatien indulgentl fascination blundere constitutionalist reedines endure wavie allianc rustines numskul refrigeratin repartitionin bookworm snowie annihilate noisom unbiassedl widemouthe phrenologica grandniec manipulation contorte airines institutionall accompanist ranke precedenc tackin squanderin sanitarie conjunctiv eastboun downwar monste inkblot sarong nattere cinematographe punchbag retransmittin sawhorse engineer counterpoise wigwa wakefu genr brainstorm'
		},
		level12 : {
			newLetters : ['c', 'x'],
			lesson : 'cull continu spectroscopi captionin complete pronounce accumulatio seraphicall misconstruin conservativenes scrabblin cosmeticia deficiencie   copiousl chican dissociativel pronouncin congenitall extende cementer poleax attachment recombine compatibilitie colorles obscenes spamblock cinchin agrochemica nonreciproca cleare coastlin crumblines insurrectio discounte preconditionin relocke complexion destructibl crawlin corrode decommissione sec percusse discograph beneficia couple pixel officialis affixe lurchin rapprochemen raccoon incom nic doctorin ratche falsificatio ethnicall obsolesce unpunctualit effulgenc lunchroo chaoticall sackful shucke microelectroni watchtowe occurrin processe electrocardiograph'
		},
		level13 : {
			newLetters: ['y', 'z'],
			lesson : 'skylight syllabicatin secularize pygm amazo fizze overemphasize summariz heavyse appetize metaphysicall fraye psychoanalyticall economizer bricklayer mestizo yashmak yukk hygromete glamorizatio synthesi dillydall yup wheezil psychedelic burglariz phyl polytheis ethy nylon delaye psychosomatic highboy polynomiall hysteresi polymerase pyrimidine bowdleriz sterilize gazetteere playtim initializatio haphazar legitimatiz buzzard plasticizin sizzle emblazone zoolog anglicize rhyme dyestuff credenz ray squeezebo swiz stargaze baptiz mobilize throwaway oversizin dynast harmonize sublaye metalize humanizatio buckeye overspecialize graybeard magazine clearway yellow enjoyment layere flywa mizzen baptize capsiz styluse glaz synonymou bellyach'
		},
		level14 : {
			newLetters : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
			lesson : 'I U Frann Iss V Sophe Ma Blanch Janissar Karl Equuleu Jech Dia Mariejeann Filofa Shoshann Cheeve Ludvi Stoicism Alabam Fo Belmon Al Peshawa Episcopalia Tammi Huc Castill McDowel Sabrin Izanam Salina Soav Gerar Margarett Blondell Austin Menande Vandal Winnifre Daun Porsch Thomis Noel TELNE Row Ber Fraue Kenya Trix Pissar Bake Vandal Wale Jua Benghaz Ronal Babylonia Jacobit Guamania Zebede Hagiograph Stou AWO Dustbuste Shani Edgard Rigolett Danic Carr Donn Rosco Jazmi Ermini BB Coloradoa Hebrais Stockhause Tolyatt Marshal VG Haga Kamek Gall Pilcomay Ballar Morto Renascenc Hebride Tup Hoebar Tunisia El Crysta Cheyenn SD Mad SU Silvai Johnn Vis Ramb Luge Demetriu Collie Nettl Dicken Joelyn Conservativ Fonzi'
		}

	}// end English
	
}// end Lecture