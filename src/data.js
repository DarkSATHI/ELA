import {
    enigmes,
    titres_enigme,
    reponses,
    images,
    informations
} from './enigmes.js'

export let donnees = {
    commencer: false,
    directrice: "",
    commentaire: false,
    titres_enigme: titres_enigme,
    titre_enigme: "",
    images: images,
    image: "",
    enigmes: enigmes,
    enigme: "",
    proposition: '',
    reponse: reponses,
    number: 0,
    equipe: "",
    informations: informations,
    lien: "assets/steganographie.py",
    cdi: "assets/cdi.png",
    reponseFausse: false,
    points: 40,
    info: true,
    date: new Date()
}