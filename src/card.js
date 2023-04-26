export const card = `

<h1 id="titre" @click="start">The ELA's game</h1>

<div id="start" v-if="info">
<img src="assets/duez.png">
  The ELA's game est une aventure du type Escape-Game.<br>
  Votre équipe doit répondre à une série de questions autour de l'association ELA et de son combat contre les leucodystrophies.<br>
  Vous commencez la partie avec un capital de 40 points.<br>
  Si vous répondez correctement à une énigme vous passez à l'énigme suivante.<br>
  Dans le cas contraire, vous êtes informé de votre erreur et vous perdez 3 points.<br>
  Il est impératif de répondre à l'énigme pour passer à la suivante.<br>
  Attention! Ne pas réactualiser votre page, un timer a été ajouté pour contrôler votre honnêteté.<br>
  <br>
  <label>Donne le nom de ton équipe</label><br><input id="equipe" v-model="equipe"><br>
  <br>  
  <div style="color:rgba(200, 50, 0, 0.8)">Notez l'heure exacte(timer) sur la feuille des aventuriers qui apparaîtra à la page suivante.</div><br>
  <div style="color:rgba(150, 0, 0, 0.5)">Cliquez sur le bandeau ELA pour commencer</div>
</div>

<div id="date" v-if="commencer">Le {{date}}</div>
<div id="points" v-if="commencer">{{equipe}} Vous avez {{points}} point(s)</div>
<div v-if="commencer" class="card mt-3" style="background-color: #12B3B212; margin-right:auto; margin-left:auto; box-shadow: 0.6vw 0.6vw 0.6vw grey;">
  <div class="card-body">
    <div class="row mb-3">
      <div id="titreEnigme" class="col-9">{{titre_enigme}}</div>
      <div class="col-3"><img class="img-thumbnail" :src='image' style="background-color: #12B3B200; border: none"></div>
    </div>

    <div class="row mb-3">
      <div id="enigme" class="col-12" v-if="!commentaire" v-html='enigme'></div>      
    </div>
    <div class="row mb-3">
    <div class="row mb-3" v-if="number == 3 && !commentaire">           
    </div>

    <div class="row">
      <div class="col-12" id="information" v-if="number <= 6 && commentaire" v-html="informations[number]"></div>
    </div>

    <div class="row">
      <div class="col-6" v-if="number <= 6 && !commentaire"><input v-model='proposition'></div>
      <div class="col-6" v-if="number <= 6 && !commentaire"><button class="btn" @click='verification' value='Valider'>Valider</button></div>
    </div>

    <div class="row" v-if="number == 4 && commentaire">
    </div>

    <div class="row">
    <div id="isa" class="col-6" v-if="number == 6 && commentaire"><input v-model='directrice'></div>
    </div>

    <div class="row">
      <div class="col-12" v-if="number <= 5 && commentaire"><button class="btn" @click='next' value='Valider'>Aller à l'énigme {{number + 2}}</button></div>
    
      <div class="col-12" v-if="directrice == 'Nadia Cerise'"><button class="btn" @click='next' value='Valider'>Valider votre Score</button></div>
    </div>

    <div class="row mt-3">
      <div id="reponse" class="col-12" v-if="number <= 6 && !commentaire">Ta réponse est(Valide ta proposition) : {{proposition}}</div>
    </div>

    <div class="row mt-3">
    <img id="erreur1" v-if="reponseFausse" class="col-12" src="https://media4.giphy.com/media/9N2UvCx7wXLnG/giphy.gif">
  </div> 
    <div class="row mt-3">
      <div id="erreur2" v-if="reponseFausse" class="col-12">Ta proposition n'est pas correcte.</div>
    </div>   
    <div class="row mt-3">
    <div id="erreur3" v-if="reponseFausse" class="col-12">Tu peux demander de l'aide sur l'un des stands de l'association ELA mis en place au lycée Paul-Duez.</div>
  </div>   
  </div>
</div>

`