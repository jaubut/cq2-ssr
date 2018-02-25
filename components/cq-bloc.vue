<template>
  <article id="Bloc">
    <slot></slot>
  </article>
</template>
<script>
export default {
}
</script>
<style scoped>
  #Bloc {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    grid-column: span 1;
    align-items: center;
    font-family: 'Barlow', sans-serif;
    background-color: #f6f6f6;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    padding: 5%;
    box-shadow: 0px 3px 2px 0px #c3c3c3a8, -1px -1px 2px 0px #ffffffa8, 0px 4px 2px 0px #f3f3f3a8;
  }
  video {
    width: 100%;
    height: auto;
    background: black;
  }
  #Bloc img {
    width: 100%;
    max-height: 100%;
  }
  .green {
    background: #4F5D56 !important;
    color: white !important;
  }
  .whitebg {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
  }
  .blue {
    background: #4267B2 !important;
  }
  .transparent {
    background: none !important; 
  }
  .white {
    color: white !important;
  }
  .span-2 {
    grid-column: span 2 !important;
  }
  .span-3 {
    grid-column: span 3 !important;
  }
  .span-v {
    grid-row: span 2 !important;
  }
  .height-normal {
    min-height: calc(100vh/2);
    max-height: 100%;
  }
  .height-little {
    height: auto;
  }
  .height-long {
    overflow: scroll !important;
    height: 100% !important;
  }
  .align-left {
    align-items: flex-start !important;
  }
  .align-right {
    align-items: flex-end !important;
  }
  .overflow-yes {
    overflow: visible !important;
  }
  .no-padding {
    padding: 0 !important;
  }
  .beige {
    background-color: #F8F3EB !important;
  }
  .photo-artiste {
    background-size: 150% !important;
    background-image: url(../assets/img/artiste-back.jpg) !important;
  }
  .img-index-quattre {
    max-height: 50% !important;
    border-radius: 5px;
    width: auto !important;
    margin-top: -25px;
  }
  .dark {
    color: white;
  }
  .hover {
    background: rgba(black, 0.5);
    height: 100%;
    width: 100%;
    margin: 5%;
  }
  @media screen and (max-width: 468px) {
    #Bloc {
      grid-column: span 2;
    }
    .span-v {
      grid-row: span 1;
    }
    img {
      width: auto;
    }
    .photo-artiste {
      background-size: 200% !important;  
    }
    .height-normal {
      min-height: calc(100vh/1.7);
      max-width: 100%;
    }
    .span-v {
      height: calc(100vh/1.4)
    }
  }
</style>
