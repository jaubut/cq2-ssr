<template>
  <div id="textile">
    <Bloc class="span-2 beige" >
      <Texte>
        <h2>Textile</h2>
        <p>Le textile le plus rigide qui soit.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Pourquoi se vêtir en chanvre? </h2>
        <p>Le vêtement de chanvre nous permet de répondre à un besoin essentiel grâce à un tissu sain, autant pour nous que pour la planète. C’est vraisemblablement le plus vieux textile à avoir été domestiqué par l’homme. Il est temps de redécouvrir ce précieux tissu à notre tour. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-un"></Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal beige">
      <Texte>
        <h2>Vêtement en chanvre au Québec?</h2>
        <p>Le tissu de chanvre provient essentiellement de la Chine, une puissance mondiale dans le domaine. Il y a toutefois des manufactures québécoises qui travaillent ce tissu, dont Respecterre et Abaka. Récemment, Logistik Unicorp a développé un uniforme pour l’armée canadienne fait 100% de chanvre canadien!</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Projet jechanvre</h2>
        <p>« Nous avons créé le projet jechanvre dans le but final de stimuler l’innovation dans ce domaine. 100% des profits réalisés sont réinvestis pour produire de nouvelles collections. C’est l’opportunité pour chacun d’exprimer sa solidarité pour la plante. » </p>
      </Texte>
      <CqButton href="https://www.jechanvre.io">Visitez jechanvre</CqButton>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span>4</span>
          <h4>Les avantages</h4>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Confortable</h2>
        <p>Les fibres de chanvre sont poreuses, formant un tissu qui respire et qui possède une belle isolation thermique, vous gardant au chaud en hiver et au frais en été. Il n’y a qu’un secret à retenir: il s’adoucit avec les lavages.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Écologique</h2>
        <p>Le tissu de chanvre contribue à produire des vêtements écoresponsables. D’abord, les champs de chanvre ont la capacité de capturer le CO2 dans l’atmosphère. Ensuite, pour produire la même quantité de textile, le chanvre consomme quatre fois moins d’eau que le coton et ne requiert pas de pesticides ni de synthèse de composé chimique.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte>
        <h2>Protection corporelle</h2>
        <p> Le textile de chanvre a également pour propriété de nous protéger des menaces externes, il est antibactérien et presque entièrement résistant aux rayons UV. De plus, sa production ne requiert pas d'intrants chimiques et nocifs pour la peau comme ceux que l'on retrouve dans les autres types de textiles. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Rigide et durable</h2>
        <p>La fibre de chanvre est la plus résistante et rigide qui soit. C’est pour cette raison qu'elle retrouve sa popularité dans la fabrication d'uniformes militaires. Les items en chanvre sont un gage de durabilité. <router-link class="hyperlien" to="/blog/textile/pourquoi-se-vetir-en-chanvre"><p>Lire notre article complet sur les avantages du chanvre.</p></router-link> </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
          <h4>À travers le temps</h4>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <p>Le textile de chanvre est vraisemblablement un des plus vieux textiles à avoir été utilisé par l’Homme (par les moines chinois Shinto). En Amérique, on utilisait la corde de chanvre pour sa rigidité dans les navires et pour les uniformes de guerre. Historiquement, la famille impériale japonaise était traditionnellement vêtue de chanvre, un symbole suprême de pureté.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-six"></Bloc>
    <Bloc class="height-normal photo-sept"></Bloc>
    <Bloc class="height-normal">
      <Texte>
        <p>En raison de l’essor de l’industrie du coton et de la prohibition (injustifié) de la plante de chanvre en Amérique du Nord, l’industrie a connu un important recul. Aujourd’hui, son utilisation est en pleine émergence, avec des joueurs comme <strong>Adidas</strong> et Patagonia qui l’utilisent dans leurs créations. </p>
      </Texte>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'textile',
  metaInfo: {
    title: 'Textile'
  }
}
</script>
<style scoped>
  #textile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/textile/samjeremycropped.jpg);
  }
  .photo-deux {
    background-image: url(~/static/textile/textile.jpg);
  }
  .photo-trois {
    background-image: url(~/static/textile/felix2.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/textile/christian.jpg);
  }
  .photo-cinq {
    background-image: url(~/static/textile/corde.jpg);
  }
  .photo-six {
    background-image: url(~/static/textile/shinto.jpg);
  }
  .photo-sept {
    background-image: url(~/static/textile/adidas.jpg);
  }
</style>
