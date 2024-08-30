---
layout: post
title: "Stenduino: un progetto che ci ha cambiato la vita"
date: 2023-11-17
language: it
ref: 2023-11-17-stenduino-a-life-changing-project
categories:
- projects
- diy
excerpt: La storia di come Alessandro Rizzo, Mattia Fioraso, Nicola Dal Maso, e Stefan Mirkovic hanno dato luce ad un progetto IoT che ha cambiato per sempre le loro vite professionali.
---

La storia di come Alessandro Rizzo, Mattia Fioraso, Nicola Dal Maso e Stefan Mirkovic hanno dato vita a un progetto IoT che ha cambiato per sempre le loro vite professionali.

## Dove tutto ebbe inizio

Tutto iniziò durante l'ultimo anno delle scuole superiori (2015), quando i nostri professori ci parlarono di un'iniziativa organizzata da [Confartigianato Vicenza](https://www.confartigianatovicenza.it/) che prevedeva la partecipazione a un hackathon. Eravamo compagni sin dal primo giorno di superiori e tutti grandi appassionati di tecnologia e sviluppo software.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/1.png"/>
  </div>
</div>

### L'hackathon

In quel periodo, il tema dell'Internet of Things era in cima alle classifiche, sia per noi che per l'ambiente in cui ci trovavamo, tanto che un gruppo locale, ora conosciuto come [DIH Vicenza](https://digitalinnovationhubvicenza.it/), propose un hackathon con l'IoT come focus.

Alcuni di noi ebbero l'opportunità di partecipare a lezioni in cui il Tinkerkit Basic Kit era lo strumento principale, insieme al potente [Arduino Yún](https://docs.arduino.cc/retired/boards/arduino-yun).

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/2.jpg"/>
  </div>
  <p class="desc">image credits: DIH Vicenza</p>
</div>

> ### Come già detto, eravamo davvero appassionati e spendevamo molto tempo in attività legate al mondo tech. Grazie a questa dedizione, avevamo già sviluppato diversi progetti basati sulle schede Arduino, siti web decorati con eleganti elementi UI, applicazioni server-side sul cloud e molto altro ancora, prima di tutto ciò!

Il tema dell'hackathon è rimasto segreto fino all'inizio della competizione, ma noi avevamo già iniziato a pensare e sviluppare idee legate al mondo IoT, sperando che almeno una di queste potesse rispondere alla sfida che ci attendeva.

In totale, erano 13 i gruppi iscritti a questa gara, portando più di 70 persone al bellissimo [Museo Civico di Bassano del Grappa](http://www.museibassano.it/Museo-Civico).

## Stenduino

L'idea nacque un giorno, quando mia madre mi sgridò per non aver raccolto i vestiti stesi mentre lei era al lavoro, a causa di una pioggia pomeridiana. Probabilmente ero immerso nello sviluppo di qualche idea *nerd*, direi anche molto divertente, tanto che non mi accorsi della pioggia. Ovviamente, questa scusa non poteva reggere.

> ### *La chiave fu proprio concentrarsi sui problemi della vita reale; non è necessario ideare strani e complessi sistemi IoT!*

### Dettagli del progetto
> **Disclaimer**: stiamo scrivendo questo articolo nel 2023, consapevoli che è passato molto tempo e che diverse tecnologie menzionate qui sono ormai obsolete.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/3.jpg"/>
  </div>
  <p class="desc">image credits: DIH Vicenza</p>
</div>

La struttura base del nostro progetto consiste in uno stendino verticale, con misure indicative di 200x80x80 cm, dove i vestiti vengono riposti su diversi livelli delle "braccia".

La funzione primaria del sistema è quella di avvolgere la struttura con un telo quando inizia a piovere. Un sistema semplice per risolvere un problema quotidiano che abbiamo affrontato personalmente.

Fortunatamente, la nostra idea rispettava le richieste dell'hackathon, quindi, nelle 24 ore a nostra disposizione, abbiamo cercato di svilupparla al meglio.

Il telo copre i vestiti grazie a un motore *stepper*, che sposta una tenda: inizialmente piegata su un lato della struttura, un braccio rigido connesso al motore permetteva di dispiegarla. Il motore è azionato automaticamente tramite un servizio meteo consultato costantemente dal sistema.

Abbiamo aggiunto dei sensori di temperatura e umidità per migliorare l'accuratezza dei dati meteo. Inoltre, ogni braccio conteneva dei fili di materiale conduttore, utili a misurare il livello di asciugatura dei vestiti utilizzando l'acqua presente in essi come resistenza elettrica.

Il cuore del sistema è un Arduino Yún, che utilizza la parte di microcontrollore per interagire con il motore e i sensori, e la parte Linux per la comunicazione da e verso internet.

Tutto ciò è alimentato da una piccola batteria al litio collegata a un piccolo pannello solare posizionato sulla superficie superiore della struttura; non è quindi solo uno stendino intelligente, ma anche un dispositivo 100% green!

La struttura fisica del progetto è composta da parti in alluminio, alcuni tubi in PVC e parti stampate in 3D grazie al servizio di 3D printing disponibile in loco durante l'hackathon.

### La scelta del nome

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/4.png"/>
  </div>
</div>

Il nome rispetta una simpatica convenzione della community Arduino, dove i nomi dei progetti *giocano* con il nome della scheda che ne permette il funzionamento.

Unendo quindi le parole "stendino" e "Arduino", è nato il nome Stenduino.

*Per questa particolare chicca, vogliamo ringraziare il nostro caro amico Giulio, esperto in questo tipo di creatività umoristica.*

## Sviluppo del software

Il software di Stenduino è composto da diverse parti:
> **Disclaimer**: abbiamo volutamente lasciato il codice così com'era all'epoca e, di nuovo, siamo consapevoli che è passato molto tempo da allora.
Garantiamo che dopo questo progetto non abbiamo più utilizzato l'italiano per lo sviluppo software.

### Script on-board

Arduino Yún è composto da un microcontrollore e un sistema Linux, entrambi utilizzati in questo progetto: il programma del microcontrollore permette l'interfaccia tra il sistema Linux, il motore e i sensori; la comunicazione tra queste parti avviene tramite un tunnel di console seriale.

Il sistema Linux, invece, esegue un'applicazione Node.js che permette la comunicazione internet tramite push notifications (un semplice canale socket), per inviare i dati rilevati dai sensori al server e per ricevere i comandi richiesti dal server.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/5.png"/>
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/6.png"/>
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/7.png"/>
  </div>
  <p class="desc">Rispettivamente uno script Arduino uno script Node</p>
</div>

### L'applicazione server

Per funzionare al meglio, il dispositivo IoT necessita di un servizio cloud che permetta il controllo remoto, notifiche in tempo reale e la memorizzazione di dati storici. Per lo sviluppo di questa parte abbiamo usato PHP, semplicemente perché era il linguaggio che ci insegnavano a scuola al tempo per lo sviluppo di applicazioni lato server, e abbiamo caricato il tutto sul cloud [Altervista](https://it.altervista.org/) grazie al piano gratuito che offriva ciò di cui avevamo bisogno (web hosting e un database MySQL).

Su molte cose eravamo alle prime armi: usavamo l'italiano per i nomi delle variabili, così come nelle tabelle SQL (come si può vedere nello schema ER sottostante).

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/8.png"/>
  </div>
  <p class="desc">Schema ER del database</p>
</div>

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/9.png"/>
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/10.png"/>
  </div>
  <p class="desc">Script PHP backend</p>
</div>

### Sito web e applicazione Android

Nella prima fase del progetto, abbiamo creato soltanto l'applicazione Android, ma nelle iterazioni successive abbiamo realizzato anche il sito web, utilizzando lo stesso stile e grazie a librerie all'avanguardia per quel periodo come [Polymer](https://polymer-library.polymer-project.org/) e [Material Design](https://m1.material.io/).

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/11.png"/>
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/12.png"/>
  </div>
  <p class="desc">Pagina di login dell'applicazione Android e relativo codice</p>
</div>

## Abbiamo vinto l'hackathon!

Dopo 24 ore di intenso sviluppo e prototipazione della nostra idea, è giunto il momento di assistere alle premiazioni.

> ### Ammetto che ci aspettavamo qualche tipo di riconoscimento per tutto l'impegno e la fatica investiti nel nostro progetto, ma di certo non ci aspettavamo di essere i vincitori!

Abbiamo vinto! Il primo posto è andato a questo gruppo di quattro studenti che hanno portato una soluzione intelligente per un problema quotidiano!

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/13.jpg"/>
  </div>
  <p class="desc">image credits: DIH Vicenza</p>
</div>

### Premio

Come primo premio dell'hackathon, abbiamo vinto una **BlueTek Strato 3D**, una stampante 3D creata da un noto marchio italiano, che abbiamo utilizzato per continuare lo sviluppo del progetto. Attualmente, la stampante si trova nella scuola che frequentavamo all'epoca ed è utilizzata per i corsi di meccatronica lì proposti.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/14.jpg"/>
  </div>
  <p class="desc">image credits: DIH Vicenza</p>
</div>

Questo era solo l'inizio; il vero premio è stata l'energia che questa hackathon ci ha dato e la grande dedizione che abbiamo impiegato per trasformare questa energia in nuove opportunità!

<iframe width="560" height="315" src="https://www.youtube.com/embed/mYIh4SSmVZM?si=g1zJ0S_bJNy1Hisq" title="100100 Challenge - Internet of Things Hackathon." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Maker Faire

Dopo aver vinto l'hackathon, eravamo molto entusiasti e volevamo proseguire con il nostro progetto, così decidemmo di partecipare all'[edizione del 2015 della Maker Faire](https://makerfairerome.eu/it/espositori/?edition=2015&exhibit=235), una famosa fiera il cui slogan è: "*Una celebrazione dell’invenzione, della creatività, della curiosità e dell’apprendimento pratico che mette in mostra il meglio del movimento **Maker** globale dal 2006.*"

Abbiamo ricevuto una sponsorizzazione dal gruppo organizzatore dell'hackathon, che cogliamo l'occasione per ringraziare per il supporto datoci in questa fantastica avventura.

<div class="images-container">
  <div class="images">
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/15.jpg"/>
    <img src="/assets/images/2023-11-17-stenduino-a-life-changing-project/16.jpg"/>
  </div>
  <p class="desc">image credits: DIH Vicenza</p>
</div>

Durante i giorni della fiera, siamo stati immersi in un meraviglioso mondo di innovazioni e innovatori, e per persone come noi, affamate di vedere e dar forma al futuro (in qualche modo), non poteva esserci di meglio.

Abbiamo incontrato tante persone, fatto nuove amicizie e ricevuto alcune interviste, tra cui anche una di [Tom's Hardware](https://www.tomshw.it/), una delle migliori pubblicazioni di tecnologia. Siamo molto fieri di questo.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UoFHcV63oog?si=q-kxQIpTVHvHfMFH" title="Stenduino, lo smart-stendino tutto italiano | Maker Faire 2015" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## E poi?

Dopo la Maker Faire, lo sviluppo del progetto è stato messo in pausa perché abbiamo tutti iniziato a lavorare in aziende diverse, ma contemporaneamente abbiamo continuato il nostro percorso di studi.

Questo progetto ci ha davvero aperto gli occhi su un enorme mondo di opportunità e ha profondamente cambiato il modo in cui vediamo le cose. Quindi, invece di considerare il progetto come concluso, possiamo dire che ha dato inizio alle nostre carriere lavorative!

Vogliamo ancora una volta ringraziare il gruppo [DIH Vicenza](https://digitalinnovationhubvicenza.it/) per aver organizzato quell'hackathon. Inoltre, un ringraziamento speciale va alla nostra [scuola](https://www.iisvaldagno.it/) e in particolare a Riccardo Crosato, per tutto il supporto datoci e per averci inizialmente introdotto a questa fantastica opportunità.

## Menzioni

Abbiamo ricevuto un grande numero di menzioni dopo la nostra vittoria all'hackathon e la partecipazione alla Maker Faire:

Molti articoli sono stati pubblicati sul sito della nostra scuola riguardanti l'[hackathon](https://www.iisvaldagno.it/hackathon-100100-challenge-il-video-riassunto/), la nostra [vittoria](https://www.iisvaldagno.it/hackathon-100100-challenge-gli-studenti-del-marzotto-stravincono/), e la [fiera](https://www.iisvaldagno.it/stenduino-al-maker-faire/).

Alla Maker Faire abbiamo incontrato Massimo Banzi (fondatore di Arduino), e pochi giorni dopo la nostra vittoria all'hackathon, ha menzionato il nostro progetto all'[IoE Forum 2015](https://youtu.be/ZA1vt7zFSog?si=sN18V0Kc51WlJ4zT&t=1069).

Diversi giornali locali e nazionali hanno condiviso la proclamazione del vincitore e la nostra storia associata:

* [corriere.it](https://corriereinnovazione.corriere.it/eventi/2015/24-gennaio-2015/stendibiancheria-avvisa-se-panni-sono-asciutti-sta-piovere--230887871376.shtml)

* [ilgiornaledivicenza.it](https://www.ilgiornaledivicenza.it/territorio-vicentino/bassano/lo-stendino-intelligentevince-ad-quot-hackathon-quot-1.1849200)

* [ilgazzettino.it for Pordenone](https://www.ilgazzettino.it/pay/pordenone_pay/171_stenduino_187_legge_da_solo_le_previsioni_tempo_intuisce_la-1417990.html)

* [ilgazzettino.it](https://www.ilgazzettino.it/home/hackathon_100100_challenge_itisvem-842141.html)

* [ilsole24ore.com](https://barbaraganz.blog.ilsole24ore.com/2015/01/26/in-24-ore-quattro-studenti-hanno-inventato-stenduino-lo-stendino-che-consulta-il-meteo-e-ritira-i-panni-asciutti-centocento/)

* [confartigianatovicenza.it](https://www.confartigianatovicenza.it/hackathon-100100-challenge-di-confartigianato-premiato-lo-stendibiancheria-stenduino-interattivo-e-connesso-al-web/)

* [ninjamarketing.it](https://www.google.com/url?q=https://www.ninjamarketing.it/2015/10/19/maker-faire-2015-cosa-aspettarci-dal-domani/%23:~:text%3Dquelle%2520pi%25C3%25B9%2520interessanti-,stenduino,-%252C%2520lo%2520stendibiancheria%2520intelligente&sa=D&source=docs&ust=1699954354709215&usg=AOvVaw0O9laTO59KAjQ6eN77zOY8)

* [ImpresaDiretta](https://youtu.be/YPtN26MHwjA?t=296)

* [TV2000](https://www.youtube.com/watch?v=aVTZUPDa0bI&t=6540s)

Subito dopo la proclamazione dei vincitori dell'hackathon, abbiamo partecipato a un'[intervista](https://soundcloud.com/matteo-pisanu/radio-due-i-provinciali-puntata-del-27-gennaio) per il podcast di una famosa radio italiana.
