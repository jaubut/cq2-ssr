import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Photos from '@/pages/photos'
import Apropos from '@/pages/apropos'
import Etoiles from '@/pages/etoiles'
import Artisans from '@/pages/artisans/index'
import Chanv from '@/pages/artisans/chanv'
import ArtduChanvre from '@/pages/artisans/artduchanvre'
import Crocx from '@/pages/artisans/crocx'
import Jechanvre from '@/pages/artisans/jechanvre'
import VotreMarque from '@/pages/artisans/votremarque'
import Blog from '@/pages/blog/index'
import Slug from '@/pages/blog/_slug'
import Tag from '@/pages/tags/_tag'
import Notfound from '@/pages/notfound'
import Alimentation from '@/pages/alimentation'
import CBD from '@/pages/cbd'
import Construction from '@/pages/construction'
import LeChanvre from '@/pages/lechanvre'
import SoinsCorpo from '@/pages/soinscorpo'
import Textile from '@/pages/textile'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '*',
        name: '404',
        component: Notfound,
        props: true
      },
      {
        path: '/',
        component: Index,
        name: 'Index'
      },
      {
        path: '/alimentation',
        name: 'Alimentation',
        component: Alimentation,
        props: true
      },
      {
        path: '/cbd',
        name: 'CBD',
        component: CBD,
        props: true
      },
      {
        path: '/construction',
        name: 'Construction',
        component: Construction,
        props: true
      },
      {
        path: '/lechanvre',
        name: 'Lechanvre',
        component: LeChanvre,
        props: true
      },
      {
        path: '/soinscorporels',
        name: 'Soins',
        component: SoinsCorpo,
        props: true
      },
      {
        path: '/textile',
        name: 'Textile',
        component: Textile,
        props: true
      },
      {
        path: '/photos',
        component: Photos,
        name: 'Photos'
      },
      {
        path: '/apropos',
        component: Apropos,
        name: 'Apropos'
      },
      {
        path: '/etoiles',
        name: 'Etoile',
        component: Etoiles,
        props: true
      },
      {
        path: '/marques',
        name: 'Artisans',
        component: Artisans,
        props: true
      },
      {
        path: '/marques/chanv',
        name: 'Chanv',
        component: Chanv,
        props: true
      },
      {
        path: '/marques/art-du-chanvre',
        name: 'ArtduChanvre',
        component: ArtduChanvre,
        props: true
      },
      {
        path: '/marques/crocx',
        name: 'Crocx',
        component: Crocx,
        props: true
      },
      {
        path: '/marques/jechanvre',
        name: 'Jechanvre',
        component: Jechanvre,
        props: true
      },
      {
        path: '/marques/votremarque',
        name: 'VotreMarque',
        component: VotreMarque,
        props: true
      },
      {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        props: true
      },
      {
        path: '/blog/:tag/:slug',
        name: ':slug',
        component: Slug,
        props: true
      },
      {
        path: '/tags/:tag',
        name: ':tag',
        component: Tag,
        props: true
      }
    ]
  })
}