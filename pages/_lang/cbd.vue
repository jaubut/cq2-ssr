<template>
  <div id="soins">
    <Bloc class="beige span-2">
      <Texte>
        <h2>Une plante médicinale</h2>
        <p>La plante de chanvre contient plus de 70 différents cannabinoïdes avec des effets pharmacologiques différents. Le composé le plus populaire est sans aucun doute le tetrahydrocannabinol (THC). Toutefois, c’est le Cannabidiol (CBD), un composé non-psychoactif, qui pourrait bien bouleverser le monde des soins de santé dans les prochaines années.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Le corps humain</h2>
        <p>Beaucoup de gens ignorent que le corps humain est doté de récepteurs à cannabinoïdes (système endocannabinoïde) et qu’il produit naturellement ses propres molécules. C’est donc dire que nous étions conçus pour recevoir les effets de ces molécules. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-un"></Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Provenance du CBD. </h2>
        <p>L'huile de CBD est extraite de la tige de cultivars de chanvre spécifiquement sélectionnés.  C’est une molécule qui est produite totalement indépendamment du THC. C’est donc dire que l’on peut prélever du CBD sur une plante ne contenant pas de THC.</p>
      </Texte>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
          <h4>Les avantages</h4>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte>
        <h2>1. Santé mentale</h2>
        <p>À l’opposé complètement du THC, les recherches cliniques et précliniques ont montré que le CBD produit des effets antipsychotiques (réduisant les troubles liés aux psychoses) et même anxiolytiques (réduisant l’anxiété). En somme, les études affichent des propriétés thérapeutiques prometteuses pour le traitement des psychoses liées à la schizophrénie. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>2. Stabilité émotionnelle</h2>
        <p>Entre autres, le CBD peut moduler le traitement de la mémoire émotionnelle et diminuer les symptômes associés aux troubles de la mémoire émotionnelle tels que le trouble de stress post-traumatique. On note également une augmentation notable de la qualité de vie des patients atteints par la maladie de Parkinson avec l’usage de CBD. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>3. Santé physique </h2>
        <p>Le CBD est un puissant anticonvulsant et anti-inflammatoire naturel. En d’autres mots, la molécule s’est avérée fortement utile dans le soulagement de douleurs musculaires et spasmes violents, d’où sa popularité grandissante chez les athlètes de sports de combat et dans l’entraînement physique. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>4. Bien plus encore </h2>
        <p>Puisque le CBD est une molécule relativement nouvelle dans le monde de la recherche, de nombreux bienfaits pour la santé demeurent non démontrés par la preuve scientifique, même si de nombreux utilisateurs en témoignent. Parmi eux la longue liste, en voici un échantillon : réduction des problèmes de peau (psoriasis), du taux de sucre dans le sang, des blocages artériels, des crises d’épilepsie, de la dépendance au tabac, du déficit d’attention, des nausées, etc.  </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal span-2 beige">
      <Texte>
        <h2>Précaution: </h2>
        <p>Il faut faire extrêmement attention avec les produits qui se retrouveront sur le marché. D’abord, il pourrait y avoir un manque au niveau de la réglementation et de l’étiquetage des produits de CBD (une infime proportion pourrait recevoir la mention « source de CBD » tout de même.) Aussi, il faut savoir que toutes les applications de CBD ne s’équivalent pas (injection, oral, combustion …). Nous vous conseillons de faire vos recherches et de consulter un professionnel de la santé. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal span-2">
      <Texte>
        <h2>Sources</h2>
          <a href="https://www.nature.com/articles/npp201693"><p>1. Santé mentale et stabilité émotionnelle</p></a> 
          <a href="https://www.nature.com/articles/nri1602"><p>2. Santé physique</p></a>
      </Texte>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'CBD',
  data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le CBD contenu dans le chanvre tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.',
      title: 'CBD'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: 'https://cq2.imgix.net/img/background-social-media.png?w=320&h=320&' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
  #soins {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/cbd/body.png);
  }
  .photo-deux {
    background-image: url(~/static/cbd/cbd3d.png);
  }
  .photo-trois {
    background-image: url(~/static/cbd/meditation.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/cbd/athlete.jpg);
  }
</style>