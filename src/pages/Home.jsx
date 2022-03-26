import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout';

export default function Home() {

    return (
        <Layout>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>

            <h1 className='title'>Home</h1>

        </Layout>
    );
}