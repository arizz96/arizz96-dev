---
layout: post
title: Caccia a buonacaccia!
date: 2024-08-27
---

Alla prima iscrizione fatta su [BuonaCaccia](https://buonacaccia.net/) nel 2021, ho provato una certa sensazione di disagio, dovuta alla mia esperienza lavorativa, per il down totale dei sistemi alle 9:00, momento in cui aprono le iscrizioni solitamente.

Al successivo tentativo, ho tenuto l'inspector del browser aperto per provare a capire cosa succede under-the-hood, ma il sistema in ASP.NET non permette troppe automazioni, purtroppo.

Non avendo il supporto tecnologico dalla nostra parte, andava trovato il sistema manuale più rapido ed efficace possibile per garantire le iscrizioni dei nostri capi e ragazzi.

## Considerazioni iniziali

BuonaCaccia implementa un sistema di coda per l'accesso al sito nei momenti di alto carico (come all'apertura delle iscrizioni), quindi se non siete fortunati da poter accedere subito, verrete messi in questa coda e da quel momento avete una finestra temporale di utilizzo. Una volta scaduto il tempo (non riesco a quantificarlo ma almeno 5-10 minuti), si ritornerà in coda. **Non ricaricare la pagina**.

Ci sono due fasi di iscrizione, la prima è la più difficile in quanto prevede una sfida contro il tempo per poter registrare un'iscrizione all'evento, la seconda avrà luogo entro 7 giorni dalla prima e richiede di compilare una serie di campi relativi al partecipante (le numerose email di BuonaCaccia vi ricorderanno della scadenza).

## Scelta degli eventi

Nei giorni precedenti all'apertura degli eventi è importante identificare questi eventi e preparare un comodo riassunto di tutte le informazioni necessarie all'iscrizione e poterle copiare e incollare nei rispettivi campi.

**N.B.**: per gli eventi che prevedono l'iscrizione dei ragazzi, il codice del capo deve essere di un capo unità.

Nel nostro caso (eventi per i ragazzi della branca E/G), creiamo una tabella (su Google Spreadsheet) così composta:

| Nome ragazzo | Nome evento | Data iscrizioni | Link evento | Cod. ragazzo | Cod. capo | Capo iscrizione | N° in lista | Link status
| - |
| Mario Rossi | Campeggiatore \| Maestro dei nodi 3 | 05/04/2024 | https://buonacaccia.net/event.aspx?e=19612 | 123456 | 56789 | Luca | 3 | https://buonacaccia.net/Status.aspx?g=abc&p=123&v=abc

La colonna "Capo iscrizione" permette alla staff di dividersi i ragazzi da iscrivere così da essere più rapidi.   
Avere queste informazioni permette l'accesso istantaneo all'evento, senza dover cercarlo tra la lista degli eventi.

Per noi, l'ordine delle righe riflette le necessità dei ragazzi: proviamo prima le iscrizioni dei ragazzi che più hanno bisogno di questi momenti, a scalare poi chi magari ha già fatto qualche evento negli anni precedenti.

### Ulteriori domande

A seconda del tipo di evento ci potranno essere ulteriori domande da compilare per effettuare la registrazione dell'iscrizione. Per arrivare preparati, consiglio di aprire un evento simile che abbia dei posti disponibili e premere su "Registra una iscrizione!". In questo modo, abbiamo una anteprima della pagina di registrazione, senza completarla.

## Hunger games

> E' giunta l'ora, è giunto il momento

### Pre-iscrizione

1. Le iscrizioni degli eventi aprono alle ore 9:00 del giorno indicato, quindi è importante preparare la tabella con i dati da inserire e le **pagine di evento già aperte una decina di minuti prima**.
2. Alla prima iscrizione della giornata, il sistema chiederà che sia stata presa visione delle [istruzioni](https://buonacaccia.net/Instructions.aspx), quindi **5 minuti prima è utile prenderne visione** (scorrendo fino alla fine e cliccando su "Dichiaro di aver compreso le indicazioni!") così da andare diretti all'iscrizione poi.

### Iscrizione

1. Alle 9:00 esatte (usate un orologio preciso), ricaricate la pagina del primo evento premendo su "Registra una iscrizione!".
2. La successiva pagina vi chiederà il codice del ragazzo da iscrivere (se è un evento per ragazzi), e il codice del capo presentatore. I dati sono comodamente reperibili nella tabella che abbiamo creato. Completare il reCAPTCHA e premere quindi su "Verifica".
3. Il sistema vi mostrerà l'email del capo presentatore, controllatene la correttezza e continuate con l'iscrizione.
4. A seconda dell'evento in questione, ci potrebbero essere ulteriori campi da compilare, come descritto [sopra](#ulteriori-domande).
5. Al termine della registrazione, arriverà una email al capo presentatore con **un link da cliccare il prima possibile**. Dopo aver cliccato sul link, mentre si carica la pagina di conferma, è importante riportare quel link sulla tabella di cui sopra.

Come descritto nelle [considerazioni iniziali](#considerazioni-iniziali), una volta entrati nel sistema (direttamente o dopo aver atteso in coda), abbiamo una finestra temporale di utilizzo senza attese, quindi è importante fare tutto il più velocemente possibile mentre si ha l'accesso.

## Completamento dell'iscrizione

Se siete stati bravi e/o fortunati, siete riusciti ad effettuare la registrazione all'evento, ora non vi rimane che completare l'iscrizione (tramite il link "status iscrizione") compilando le domande e caricando i documenti richiesti dal sistema.

Negli eventi per capi, potrebbe essere necessaria la presentazione di un capo gruppo, assicuratevi che il vostro riesca a completarla prima della scadenza.

> Buona caccia!
