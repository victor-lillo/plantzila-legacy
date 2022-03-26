import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout';

import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Blablabla contact"></meta>
            </Head>

            <h1 className='title'>Contact</h1>

            <div className={`paragraph ${styles.example}`}> Module style example</div>

        </Layout>
    );
}