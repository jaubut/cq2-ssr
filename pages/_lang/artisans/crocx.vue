<template>
  <div id="Crocx">
    <Bloc class="height-normal span-2 photo-un">
      <Texte class="align-left">
        <h2>La marque Crocx</h2>
      </Texte>
      <CqButton href="https://www.crocx.co">Visitez crocx</CqButton>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2> La fondation </h2>
        <p>Mélissa Lemieux-Daigle, la fondatrice, avait un chien appelé Croquette (crocx) aux prises avec des allergies alimentaires. Crocx a donc pris nassance au travers d’une passion pour les animaux combinés à un questionnement sur les ingrédients utilisés dans les biscuits que l’on retrouve sur le marché. </p>
      </Texte>
    </Bloc >
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal">
      <Texte class="align-right">
        <h2>À propos</h2>
        <p>L’entreprise fût connue initialement pour ces gâteries santé composées d’ingrédients 100% naturelles, 70% biologiques et maintenant enrichies de chanvre (graines, farine et huile). Elles sont fabriquées au Québec. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte class="align-right">
        <h2>Philosophie</h2>
        <p>Au fil des années, Crocx s’est donné comme objectif de participer au bien-être des animaux au Québec par la qualité et les effets de ses produits chez l’animal, mais aussi en appuyant des causes liées aux animaux, dont la qualité de vie des animaux en refuges. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="height-normal">
      <Texte class="align-right">
        <h2>Le renouveau de Crocx</h2>
        <p>C’est en 2017 que l’entreprise LaFeuilleVerte a pris l’initiative de renouveler la gamme Crocx et de la bonifier avec les bienfaits du chanvre. C’est Dany Lefebvre, pionnier dans l’alimentation de chanvre destinée aux animaux, qui poursuit la tradition de qualité cultivée par la marque. <a class="hyperlien"  href="https://crocx.co"><p> Voir leur site</p></a> </p>
      </Texte>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">Nos coups de coeur:</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Supplément nutritif</h2>
        <p class="justify">Le premier supplément nutritif pour animaux à base d'huile de chanvre approuvé par Santé Canada. Une bonne alimentation riche en acides gras (oméga 3 et oméga 6) a une incidence majeure sur la santé, autant pour les humains que pour les animaux. Les témoignages des clients pour se produit sont concluants! </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-six"></Bloc>
    <Bloc class="height-normal photo-sept"></Bloc>
    <Bloc class="height-normal beige">
      <Texte class="align-left">
        <h2>Laisse pour chiens</h2>
        <p class="justify">Nous ne sommes pas des experts en laisse, mais une corde pour chiens munie du textile le plus rigide qui soit (le chanvre) nous semble une excellente idée.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Biscuit pommes et miel</h2>
        <p>La gamme de biscuits est le produit phare de Crocx. Ce sont des gâteries santé pour chiens et pour avoir goûté nous-mêmes les trois sortes (littéralement), la saveur pomme et miel est notre préférée. Reste à savoir si les chiens sont d’accord avec nous! </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-huit"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">Le verdict</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte>
        <h2>Sommaire</h2>
        <p> Crocx est une marque pour le bien-être des animaux. Les ingrédients choisis sont sains et le simple fait qu’ils soient propices à la consommation humaine en dit long sur la qualité du produit. La récente relance apporte une belle dimension à la gamme avec un nouveau produit réellement efficace (le supplément). </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Jugez par vous-mêmes!</h2>
      </Texte>
      <CqButton href="https://www.crocx.co">Visitez crocx</CqButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'Crocx'
}
</script>
<style scoped>
  #Crocx {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/crocx/background2.png);
  }
  .photo-deux {
    background-image: url(~/static/crocx/bethy.png);
  }
  .photo-trois {
    background-image: url(~/static/crocx/top2.png);
  }
  .photo-quattre {
    background-image: url(~/static/crocx/plaisirindompte.png);
  }
  .photo-cinq {
    background-image: url(~/static/crocx/produitchanvre.png);
  }
  .photo-six {
    background-image: url(~/static/crocx/monsieur.jpg);
  }
  .photo-sept {
    background-image: url(~/static/crocx/laissecrocx.jpg);
  }
  .photo-huit {
    background-image: url(~/static/crocx/monsieurvert.jpg);
  }
</style>
