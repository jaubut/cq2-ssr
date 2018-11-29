<template>
  <Bloc class="beige article-back span-v">
        <a :href="article.url" target="_blank">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img :src="article.urlToImage" :alt="article.title">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">{{ article.title }}</div>
                </div>
            </div>
        </a>
  </Bloc>
</template>

<script>
export default {
    name: 'news',
    props: ['article']
}
</script>