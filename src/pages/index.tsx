import React from 'react'
import { ToastContainer } from 'react-toastify'

import Head from 'next/head'
import Image from 'next/image'

import Layout from '@components/Layout'
import avatar from '@public/img/avatar.jpg'

import Instagram from '@components/icons/Instagram'

import 'react-toastify/dist/ReactToastify.css'

import CardItem from '../components/CardItem'
import { SvgList } from '@types'

export default function Home() {
  console.log(`%c Hi!`, 'background: #000000; color: #db0a0a')
  return (
    <Layout>
      <Head>
        <title> @plant.zila | Enlaces</title>
        <meta name='description' content='Soy @plant.zila y aquí puedes encontrar todos mis enlaces. :)'></meta>
      </Head>
      <div className={'content'}>
        <section className={'header'}>
          <div className={'header__img'}>
            <Image src={avatar} alt='@Plant.zila' title='@Plant.zila' />
          </div>

          <div className={'header__title'}>@Plant.zila</div>
          <div className={'header__text'}>
            <p>Soy Cris, bióloga de formación, plantlover de vocación</p>
            <p>¿Me ayudas a divulgar la pasión por las plantas? 💚</p>
          </div>
        </section>

        <section className={'social-container'}>
          <a className={'social-icon'} href='https://instagram.com/plant.zila' target='blank' rel='noopener noreferrer'>
            <Instagram width={65} height={65} />
          </a>
        </section>

        <section className={'cards-container'}>
          <CardItem svg={SvgList.Download} url={'https://mailchi.mp/9cd90d6cbad6/philodendronbaby'}>
            'Descarga gratis «El cultivo del philodendron baby»'
          </CardItem>
          <CardItem svg={SvgList.Book} url={'https://ko-fi.com/s/4c976c68f7'}>
            Hazte con «El lenguaje de las plantas baby» (eBook)
          </CardItem>
          <CardItem svg={SvgList.ShoppingBasket} url={'https://peoople.app/plantzila'}>
            Mis productos recomendados
          </CardItem>
          <CardItem svg={SvgList.Heart} url={'https://ko-fi.com/plantzila'}>
            Apoya mi contenido
          </CardItem>
        </section>
      </div>

      <ToastContainer />
    </Layout>
  )
}
