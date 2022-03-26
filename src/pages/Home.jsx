import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout';
import logo from '../../public/logo.png';

import styles from '../styles/Home.module.css'


export default function Home() {

    return (

        <Layout navbar={false}>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>

            <div className={styles.container}>


                <div className={styles.header}>
                    <div className={styles.header_img}>
                        <Image
                            src={logo}
                            alt="Logo"
                            title="Logo"
                        />
                    </div>

                    <div className={styles.header_title}>
                        @Plant.zila
                    </div>
                    <div className={styles.header_text}>
                        Soy Plant.zila y me gustan las plantas y no sé qué de plantas.
                    </div>
                </div>

                <div className={styles.buttons_container}>
                    <div className={styles.button_module}>
                        Descarga el cultivo del philodendron baby (gratuito)
                    </div>

                    <div className={styles.button_module}>
                        hazte con la guía EL LENGUANE DE LAS PLANTAS BABY (papel)
                    </div>
                    <div className={styles.button_module}>
                        EL LENGUAJE DE LAS PLANRAS BABY (ebook)
                    </div>
                    <div className={styles.button_module}>
                        Invítame a un café
                    </div>
                </div>




            </div>

        </Layout>
    );
}