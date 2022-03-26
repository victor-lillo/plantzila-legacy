import React from 'react'
import Head from 'next/head'

import Layout from './Layout';


export default function AboutCore() {

    return (
        <Layout>
            <Head>
                <title>About us</title>
                <meta name="description" content="Blablabla quienes somos."></meta>
            </Head>

            <h1 className='title'>About us</h1>

        </Layout>
    );
}