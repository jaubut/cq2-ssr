<template>
  <div id="artchanvre">
    <Bloc class="height-normal span-2 photo-un">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('artduchanvre.artduchanvre-1')"></h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('artduchanvre.artduchanvre-2')"></h2>
        <p v-html="$t('artduchanvre.artduchanvre-3')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('artduchanvre.artduchanvre-4')"></h2>
        <p v-html="$t('artduchanvre.artduchanvre-5')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('artduchanvre.artduchanvre-6')"></h2>
        <p v-html="$t('artduchanvre.artduchanvre-7')"></p>
      </Texte>
      <CqOutButton href="https://artduchanvre.com">{{ $t('artduchanvre.artduchanvre-8') }}</CqOutButton>
    </Bloc>
    <Bloc class="span-2 beige">
      <Texte link="#">
        <h2 v-html="$t('artduchanvre.artduchanvre-9')"></h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-cinq">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('artduchanvre.artduchanvre-10')"></h2>
        <p class="justify" v-html="$t('artduchanvre.artduchanvre-11')"></p>
      </Texte>
      <CqOutButton href="https://artduchanvre.com/finitions-">{{ $t('artduchanvre.artduchanvre-12') }}</CqOutButton>
    </Bloc>
    <Bloc class="height-normal photo-six"></Bloc>
    <Bloc class="height-normal photo-sept"></Bloc>
    <Bloc class="height-normal photo-huit">
      <Texte link="#">
        <h2 v-html="$t('artduchanvre.artduchanvre-13')"></h2>
        <p v-html="$t('artduchanvre.artduchanvre-14')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-neuf">
      <Texte link="#">
        <h2 v-html="$t('artduchanvre.artduchanvre-15')"></h2>
        <p v-html="$t('artduchanvre.artduchanvre-16')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-dix"></Bloc>
    <Bloc class="height-normal span-2 photo-onze">
      <Texte link="#">
        <h2 v-html="$t('artduchanvre.artduchanvre-17')"></h2>
        <p v-html="$t('artduchanvre.artduchanvre-18')"></p>
      </Texte>
      <CqOutButton href="https://www.artduchanvre.com">{{ $t('artduchanvre.artduchanvre-19') }}</CqOutButton>
    </Bloc>
  </div>
</template>
    <script>
export default {
  name: 'artduchanvre',
  data () {
    return {
      description: 'Art du chanvre réalise des maisons en chanvre au design et à l’efficacité incomparable. Découvrez notre compte rendu de cet artisan québécois.',
      title: 'Art du Chanvre'
    }
  },
  mounted () {
    this.$initFbSDK()
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: '/artchanvre/finition.png' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
  #artchanvre {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/artchanvre/finition.png);
  }
  .photo-deux {
    background-image: url(~/static/artchanvre/maison4.png);
  }
  .photo-trois {
    background-image: url(~/static/artchanvre/antho-5.png);
  }
  .photo-quattre {
    background-image: url(~/static/artchanvre/antho-4.png);
  }
  .photo-cinq {
    background-image: url(~/static/artchanvre/stairs1.png);
  }
  .photo-six {
    background-image: url(~/static/artchanvre/tadelak.png);
  }
  .photo-sept {
    background-image: url(~/static/artchanvre/blocs.png);
  }
  .photo-huit {
    background-image: url(~/static/artchanvre/stairs2.png);
  }
  .photo-neuf {
    background-image: url(~/static/artchanvre/stairs3.png);
  }
  .photo-dix {
    background-image: url(~/static/artchanvre/photo-7.jpg);
  }
  .photo-onze {
    background-image: url(~/static/artchanvre/antho2.png);
  }
</style>