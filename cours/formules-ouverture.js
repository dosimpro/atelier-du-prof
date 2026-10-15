/* Cours : Les formules d’ouverture (2AM, Séquence 1).
   Fichier de DONNÉES : modifier un cours ne change pas la version de l’application. */
window.COURS = window.COURS || [];
COURS.push({
  id: "formules-ouverture",
  titre: "Les formules d’ouverture",
  niveau: "2AM",
  ajoute: "2026-10-15",
  eyebrow: "2AM · Projet 1 « Dire et jouer un conte » · Séquence 1 · Vocabulaire",
  phases: [
    { titre: "Mise en situation", duree: 5, blocs: [
      { type:"note", text:"Rappeler le schéma du conte. Faire répondre deux ou trois élèves à l’oral avant d’afficher la réponse." },
      { type:"question", q:"Comment appelle-t-on la première partie d’un conte ?", a:"La situation initiale." },
      { type:"schema" },
      { type:"question", q:"Citez le titre d’un conte que vous connaissez. Comment commence-t-il ?", a:"Réponses libres : « Il était une fois… », « Il y a très longtemps… »" }
    ]},
    { titre: "Écoute : le conte", duree: 7, blocs: [
      { type:"note", text:"Projeter le film et lancer la lecture. Demander aux élèves de lever la main dès qu’ils entendent l’expression qui ouvre le conte." },
      { type:"film", titre:"Le bûcheron honnête", scenes:[
        { m:"Situation initiale", s:"forest", t:"<mark>Il y a longtemps</mark>, dans une forêt, vivait un pauvre bûcheron. Chaque jour, il coupait du bois qu’il vendait au marché." },
        { m:"Élément perturbateur", s:"fall", t:"Un matin, alors qu’il travaillait au bord de la rivière, sa hache lui glissa des mains et tomba au fond de l’eau." },
        { m:"Péripétie", s:"sad", t:"Le bûcheron s’assit et pleura : sans sa hache, comment allait-il nourrir sa famille ?" },
        { m:"Péripétie", s:"gold", t:"Soudain, un génie sortit de l’eau avec une hache en or. « Est-ce la tienne ? » « Non, ce n’est pas la mienne », répondit le bûcheron." },
        { m:"Péripétie", s:"silver", t:"Le génie plongea de nouveau et rapporta une hache en argent. « Ce n’est pas la mienne non plus », dit l’honnête homme." },
        { m:"Dénouement", s:"iron", t:"Enfin, il remonta une vieille hache en fer. « Oui, c’est la mienne ! » s’écria le bûcheron, tout heureux." },
        { m:"Situation finale", s:"end", t:"Pour récompenser son honnêteté, le génie lui offrit les trois haches. Depuis ce jour, le bûcheron vécut heureux avec sa famille." }
      ]},
      { type:"question", q:"Par quelle expression le conte commence-t-il ?", a:"« Il y a longtemps »." },
      { type:"question", q:"Quelle qualité du bûcheron est récompensée ?", choices:["Sa force","Son honnêteté","Sa richesse"], correct:1, a:"Son honnêteté." }
    ]},
    { titre: "Observation", duree: 8, blocs: [
      { type:"support", titre:"Support (manuel p. 13) : Un bûcheron honnête", html:"Il y a longtemps, dans une forêt, un pauvre bûcheron coupait du bois qu’il vendait au marché." },
      { type:"question", q:"1) Le texte ci-dessus est extrait d’…", choices:["une fable","un conte","une légende"], correct:1, a:"Un conte." },
      { type:"question", q:"2) Qui est le personnage principal de cette histoire ?", choices:["Le marchand","Le bûcheron","Le génie"], correct:1, a:"Le bûcheron." },
      { type:"question", q:"3) Que faisait le bûcheron dans la forêt ?", a:"Il coupait du bois qu’il vendait au marché." }
    ]},
    { titre: "Analyse", duree: 12, blocs: [
      { type:"support", titre:"Support", html:"<mark>Il y a longtemps</mark>, dans une forêt, un pauvre bûcheron coupait du bois qu’il vendait au marché." },
      { type:"question", q:"1) Que représente la première phrase du texte ?", a:"C’est la situation initiale." },
      { type:"question", q:"2) Par quelle expression est-elle introduite ?", a:"« Il y a longtemps »." },
      { type:"question", q:"3) Cette expression s’appelle :", choices:["un connecteur d’énumération","une formule d’ouverture","une formule qui introduit la situation finale"], correct:1, a:"Une formule d’ouverture." },
      { type:"question", q:"4) Par quels autres mots ou expressions peut-on la remplacer ?", a:"Il était une fois, il y a bien longtemps, autrefois, jadis, dans le vieux temps, en des temps très anciens…" },
      { type:"question", q:"5) Quelle information apportent les formules d’ouverture ?", choices:["Où se passe l’histoire ?","Quand se passe l’histoire ?","Qui raconte l’histoire ?"], correct:1, a:"Elles situent l’histoire dans le temps : elles répondent à la question « Quand ? »." }
    ]},
    { titre: "Fixation", duree: 8, blocs: [
      { type:"fixation", rule:"Pour introduire le conte et situer l’histoire dans le temps, on emploie <b>une formule d’ouverture</b>.",
        items:["Il était une fois…","Il y a longtemps…","Il y a bien longtemps…","Jadis…","Autrefois…","En des temps anciens…","Dans un passé lointain…","Dans le vieux temps…"] },
      { type:"note", text:"Faire répéter chaque formule à voix haute (clic sur une formule pour l’écouter), puis faire recopier la règle dans les cahiers." }
    ]},
    { titre: "Évaluation", duree: 15, blocs: [
      { type:"colorier", titre:"Activité 1 : Colorie les formules d’ouverture.",
        items:[["Il y a bien longtemps",1],["finalement",0],["autrefois",1],["soudain",0],["ainsi",0],["jadis",1],["tout à coup",0],["il y avait une fois",1],["ensuite",0],["dans un passé lointain",1]] },
      { type:"completer", titre:"Activité 2 : Complète les situations initiales par une formule d’ouverture.",
        phrases:["___, dans un royaume oublié de tous, vivait un roi juste et bon.",
                 "___, vivaient deux frères : l’un était riche et l’autre était pauvre.",
                 "___, une magicienne habitait dans une grande maison.",
                 "___, une belle fille qui s’appelait Loundja vivait avec ses parents et sa grand-mère dans un petit village."],
        options:["Il était une fois","Il y a très longtemps","Autrefois","Jadis","Soudain","Enfin","Ensuite"],
        good:["Il était une fois","Il y a très longtemps","Autrefois","Jadis"] },
      { type:"trier", titre:"Activité 3 (nouvelle) : Classe chaque expression dans la bonne boîte.",
        bins:["Formule d’ouverture","Formule de clôture","Connecteur du récit"],
        items:[["Il était une fois",0],["Ils vécurent heureux pour toujours",1],["Soudain",2],["Jadis",0],["Depuis ce jour",1],["Tout à coup",2],["Autrefois",0],["Et mon conte est fini",1],["Ensuite",2]] },
      { type:"intrus", titre:"Activité 4 (nouvelle) : Trouve l’intrus dans chaque liste.",
        rows:[ {items:["Jadis","Autrefois","Soudain","Il était une fois"], i:2, why:"« Soudain » annonce un événement brusque, ce n’est pas une formule d’ouverture."},
               {items:["Il y a longtemps","Enfin","Dans un passé lointain","En des temps anciens"], i:1, why:"« Enfin » marque la fin d’une suite d’actions."},
               {items:["Il était une fois","Ils vécurent heureux","Il y a bien longtemps","Jadis"], i:1, why:"« Ils vécurent heureux » est une formule de clôture."} ] }
    ]},
    { titre: "Production écrite", duree: 5, blocs: [
      { type:"production", consigne:"À ton tour, rédige une courte situation initiale du conte « Blanche-Neige et les sept nains » en employant une formule d’ouverture.",
        exemple:"Il y a bien longtemps, dans un grand palais, vivait une belle fille qui s’appelait Blanche-Neige, car elle était blanche comme la neige. Elle vivait avec son père et sa belle-mère." },
      { type:"liens", titre:"Pour aller plus loin (à la maison)", items:[
        ["Écouter des contes lus (France Culture, contes et histoires)","https://www.radiofrance.fr/franceculture/podcasts/serie-contes-et-legendes"],
        ["Vidéos : « Le bûcheron honnête » (recherche YouTube)","https://www.youtube.com/results?search_query=le+b%C3%BBcheron+honn%C3%AAte+conte"] ] }
    ]}
  ]
});
