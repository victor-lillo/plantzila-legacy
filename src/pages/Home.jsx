import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout';


import styles from '../styles/Subscribe.module.css'
import logo from '../../public/logo.png';

const regex_mail = /^((([!#$%&' * +\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/


export default function Home() {

    return (

        <Layout navbar={false}>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>

            <div className={styles.body}>


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


            </div>

        </Layout>
    );
}