<template>
  <div id="ChanvCo">
    <Bloc class="height-normal span-2 beige">
      <Texte link="#" class="align-left">
        <h2>Afficher votre marque</h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2> Notre mission: renouveler l’image du chanvre. </h2>
        <p>À travers notre expérience en marketing numérique, nous avons déployé de nombreuses stratégies web et campagnes de promotion sur différentes plateformes (Google, Facebook, Instagram et infolettres). Nous souhaitons simplifier ce domaine pour les gens du chanvre. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2>Pourquoi afficher sur notre site? </h2>
        <p>Toutes les marques du chanvre ont un défi en commun : rejoindre une clientèle conscientisée. Chez Chanvre Québec, nous consacrons déjà nos énergies pour informer notre auditoire. Nous vous proposons de profiter d’une communauté engagée et déjà implantée. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2>Profil « marque d’ici » sur Chanvre Québec</h2>
        <p>Profiter de notre expertise dans la conception d’un profil attrayant pour votre marque. Ce profil vous permet avant tout de recueillir des clics hyper qualifiés vers votre site internet. Si l’ergonomie de votre site est adaptée, ces clics se traduiront forcément par des ventes. C’est inévitablement le meilleur rapport qualité-prix qui existe en publicité pour les entreprises du chanvre. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2>Version Beta</h2>
        <p>Nous sommes présentement en phase d’expérimentation pour plusieurs services de visibilité et d’image de marque. Faites partie de notre programme Beta pour profiter de ces services à une fraction du prix réel de lancement!  </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige span-2">
      <Texte link="#">
        <h2>Nous sommes facile d'approche</h2>
        <CqOutButton href="mailto:allo@chanvreduquebec.org">Contactez-nous</CqOutButton>
      </Texte>
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
</style>
