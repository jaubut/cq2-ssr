<template>
  <div id="LeChanvre">
    <Bloc class="beige span-2">
      <Texte class="align-left">
        <h2>Le chanvre, c'est quoi?</h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2> Biologie </h2>
        <p>Le chanvre est une plante de la famille des Cannabaceae. Le chanvre cultivé industriellement est dioïque (femelle et mâle). Une fois pollinisée, la plante produit un grain plutôt que des cocottes (fleurs). Sur le plan chimique, il ne contient pas ou très peu de THC (jusqu’à 0.3%), mais il peut contenir du CBD (non psychoactif). </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-un"></Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal">
      <Texte class="align-right">
        <h2>Statut légal</h2>
        <p>Historiquement, la plante de chanvre a toujours été légale et ses usages industriels nombreux, à l’exception du 20e siècle, où la plante a connu une prohibition pour des motifs malsains. Le chanvre industriel fût légalisé à nouveau en 1998. L’année 2018 annonce une réglementation favorable à l’effervescence de la culture de chanvre (Bill C-45) </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte class="align-right">
        <h2>Utilisations</h2>
        <p>En effet, les usages du chanvre sont variés, notamment : construction, textile, alimentation, soins corporels, médecine, biocarburant, pâte et papier, batterie et biocomposite (plastique). Évidemment, ce sont différentes parties de la plante qui sont exploitées. En bref, le potentiel du chanvre est encore largement inexploité malgré les milliers de produits différents disponibles sur le marché.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="beige span-2">
      <Texte>
        <h2>« On est des gars normaux et on tripe sur le chanvre, on veut que les gens comprennent pourquoi» </h2>
        <p> -Jérémie Aubut, Cofondateur de Chanvre Québec </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Le chanvre Québecois</h2>
        <p class="justify">La filiale de chanvre biologique du Québec est probablement l’une des plus belles au monde entier, le Saguenay se transforme graduellement en vallée du chanvre, les productions bâtent des records, la légalisation de 2018 s’annonce favorable et de nouveaux produits locaux de qualité voient le jour. L’avenir est beau, très beau. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="height-normal beige">
      <Texte class="align-left">
        <h2>Pourquoi parler de chanvre?</h2>
        <p class="justify">Nous croyons que c'est la plus belle solution écologique qui soit. Pour être honnêtes, nous nous considérons redevables envers cette plante qui transforme nos habitudes de vie pour le mieux. Le chanvre est bon pour la Terre, pour les agriculteurs qui la cultivent, pour les entrepreneurs qui l’exploitent et pour les consommateurs qui profitent de ses bienfaits. C’est une plante qui sert l’humanité. </p>
      </Texte>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'LeChanvre'
}
</script>
<style scoped>
  #LeChanvre {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/lechanvre/plante.png);
  }
  .photo-deux {
    background-image: url(~/static/lechanvre/champ2.jpg);
  }
  .photo-trois {
    background-image: url(~/static/lechanvre/tige.png);
  }
  .photo-quattre {
    background-image: url(~/static/lechanvre/paul.jpg);
  }
  .photo-cinq {
    background-image: url(~/static/lechanvre/chanvrons.jpg);
  }
</style>
