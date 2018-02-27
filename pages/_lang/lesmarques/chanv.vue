<template>
  <div id="ChanvCo">
    <Bloc class="height-normal span-2 photo-back">
      <Texte link="#" class="align-left">
        <h2>La marque Chanv</h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2> La fondation </h2>
        <p>En 2004, une herboriste, thérapeute et cosmétologue qualifiée du nom de Manon Letarte innove dans le domaine des soins corporels en lançant la gamme chanv. Elle a eu le coup de foudre pour ce qu’elle considère encore aujourd’hui comme la meilleure huile végétale pour la peau: l’huile de chanvre. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="beige height-normal">
      <Texte link="#" class="align-right">
        <h2>À propos</h2>
        <p>Chanv. est une gamme de soins corporels à base d’huiles essentielles et de plantes médicinales de très haute qualité. Les produits sont faits à la main et sans agents préservatifs. <span><a class="hyperlien" href="https://chanv.co">Voir leur site</a></span></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2>« Ne mettez pas sur votre peau ce que vous ne mettriez pas dans votre bouche »</h2>
        <p>C'est la philosophie qui a toujours guidée l'entreprise. La peau est une cellule vivante qui se doit d’être nourrie, tout comme le système digestif, pour lui permettre de bien fonctionner.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal span-2" style="padding: 0;">
      <video autoplay loop muted poster="">
        <source src="../../../assets/video/facebook-chanv.mp4" type="video/mp4">
        <source src="../../../assets/video/facebook-chanv.webm" type="video/webm">
      </video>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">Nos coups de coeur:</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2>Crème peau sensible</h2>
        <p class="justify">En un mot, cette crème est : réconfortante. C’est un choix sûr autant pour la peau sensible que pour la peau sèche ou mâture. Petit conseil : c’est aussi le cadeau parfait pour faire plaisir à son ou sa bien-aimé(e)! </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#" class="align-left">
        <h2>Sérum Coup d'éclat</h2>
        <p class="justify">Le moins qu’on puisse dire, c’est que le sérum porte bien son nom. La peau paraît clairement plus énergisée tout juste après l’application! Le sérum, c’est un élixir aux mille et une vertus, littéralement. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2>Huile corporelle bain & massages</h2>
        <p>Une solution simple, hyper efficace et polyvalente qui combine les bienfaits de l’huile de chanvre et de l’huile essentielle de lavande. Ah oui, la bouteille est seulement 20$, un vrai « deal » pour un produit de cette qualité! </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">Le verdict</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2>Sommaire</h2>
        <p> La qualité des huiles végétales utilisées dans les produits est phénoménale. À notre avis, le rendement qualité/prix est excellent. Toutefois, il faut s’attendre à débourser un peu plus que la moyenne pour profiter de cette gamme de produits. On doit également s’assurer d’utiliser les produits dans un délai de 18 mois (sans agents préservatifs).</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2>Jugez par vous-même!</h2>
      </Texte>
      <CqOutButton href="https://www.chanv.co">Visitez Chanv</CqOutButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'ChanvCo'
}
</script>
<style scoped>
  #ChanvCo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-back {
    background-image: url(~/static/onepagechanv/header.png);
  }
  .photo-deux {
    background-image: url(~/static/onepagechanv/manon.jpg);
  }
  .photo-trois {
    background-image: url(~/static/onepagechanv/cremepeau.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/onepagechanv/serum2.png);
  }
  .photo-cinq {
    background-image: url(~/static/onepagechanv/huile.png);
  }
</style>
