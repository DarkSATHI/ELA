import {
    card
} from './src/card.js'

import {
    donnees
} from './src/data.js'


export const turing = {
    template: card,
    data() {
        return donnees
    },
    methods: {
        validation(i) {
            this.titre_enigme = this.titres_enigme[i]
            this.enigme = this.enigmes[i]
            this.image = "assets/" + this.images[i]
        },
        start() {
            if (this.number <= 6) {
                this.commencer = true
                this.validation(this.number)
                this.info = false
                this.date = this.date.toLocaleString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                })

            }
        },
        verification() {
            if (this.proposition.toUpperCase() == this.reponse[this.number].toUpperCase()) {
                this.commentaire = !this.commentaire
                this.reponseFausse = false
            } else {
                this.reponseFausse = true
                this.points -= 3
            }
            this.proposition = ""
        },
        next() {
            this.number += 1
            this.commentaire = !this.commentaire
            if (this.number <= 6) {
                this.validation(this.number)
            } else if (this.number == 7) {
                this.titre_enigme = "Bravo!"
                this.enigme = `Vous avez réussi The ELA's Game avec un total de ${this.points} point(s). Félicitations pour cet exploit remarquable.<img src='assets/IMG_8968-scaled.jpeg'>`
                this.image = "assets/elaTout.png"
                this.directrice = ""
            }
        }
    },
    computed: {
        validationCommentaire() {
            return (this.number <= 6) && (!this.commentaire)
        }
    }
}