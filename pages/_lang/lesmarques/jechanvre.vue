<template>
  <div id="jechanvre">
    <Bloc class="height-normal span-2 photo-un">
    </Bloc>
    <Bloc class="height-normal photo-deux"> </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2>Mouvement propulsé par Chanvre Québec.</h2>
        <p>« Nous avons créé le projet jechanvre dans le but final de stimuler l’innovation dans le domaine des vêtements en chanvre. 100% des profits réalisés sont réinvestis pour produire de nouvelles collections. C’est l’opportunité pour chacun d’exprimer sa solidarité pour la plante. »</p>
      </Texte>
     </Bloc>
     <Bloc class="height-normal">
      <Texte link="#">
        <h2> La fondation </h2>
        <p>Le projet a vu le jour en 2016 lorsqu’une équipe d’étudiant du Cégep a voulu représenter l’industrie du chanvre à une compétition interécole. Nous leur avons donc « designer » des chandails « jechanvre » pour qu’ils puissent exprimer ce message à leur foire.  Une belle équipe de motivés qui a remporté 4 prix sur 6 (un record)! </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois">
      <CqOutButton href="https://www.jechanvre.io">Visitez jechanvre</CqOutButton>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>3</span>
        <router-link to="#">Les produits</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2>Casquettes en chanvre</h2>
        <p class="justify"> Un mélange « tri-blend » unique qui promet un gage de polyvalence, de confort et de durabilité. 100% des profits de cette collection sont réinvestis pour produire une ligne “made in Canada”.  </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="height-normal photo-six"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span></span>
        <router-link to="#">Le verdict</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2>La mission</h2>
        <p> Notre objectif est de propulser de nouveaux produits sur le marché en collaboration avec différentes marques.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-sept">
      <Texte link="#">
        <h2>Jugez par vous-mêmes!</h2>
      </Texte>
      <CqOutButton href="https://www.jechanvre.io">Visitez jechanvre</CqOutButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'jeChanvre',
  data () {
    return {
      description: 'Je chanvre est notre initiative pour mener au monde des innovations en chanvre.',
      title: 'Je chanvre'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: '/textile/samjeremycropped.jpg' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
  #jechanvre {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/jechanvre/banner.jpg);
  }
  .photo-deux {
    background-image: url(~/static/textile/felix2.jpg);
  }
  .photo-trois {
    background-image: url(~/static/jechanvre/equipe2.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/jechanvre/cantin.jpg);
  }
  .photo-cinq {
    background-image: url(~/static/textile/samuelboulay.jpg);
  }
  .photo-six {
    background-image: url(~/static/jechanvre/cantin2.jpg);
  }
  .photo-sept {
    background-image: url(~/static/textile/samjeremycropped.jpg);
  }
</style>
