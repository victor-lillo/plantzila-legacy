import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout';


import avatar from '../../public/img/avatar.jpg';

import Instagram from '../../public/img/instagram-svg.js';

import styles from '../styles/Download.module.css'
import 'react-toastify/dist/ReactToastify.css';
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

const pdfUrl = '/pdf/Cristina López - El lenguaje de las plantas baby (versión digital).pdf'

export default function DownloadPage() {

    const clicked = () => {
        toast('Gracias por descargar mi ebook, espero que te guste 😊', {
            position: "top-right",
            icon: '🌱',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (

        <Layout navbar={false}>
            <Head>
                <title> @plant.zila | #SembrArte</title>
                <meta name="description" content="Soy @plant.zila y aquí puedes encontrar mi ebook. Disponible por tiempo limitado para Hauplant. :)"></meta>
            </Head>

            <div className={styles.container}>

                <div className={styles.header}>
                    <div className={styles.header_img}>
                        <Image
                            src={avatar}
                            alt="@Plant.zila"
                            title="@Plant.zila"
                        />
                    </div>

                    <div className={styles.header_title}>
                        @Plant.zila
                    </div>
                    <div className={styles.header_text}>
                        <p>
                            Soy Cris, bióloga de formación, plantlover de vocación
                        </p>
                        <p>
                            ¿Me ayudas a divulgar la pasión por las plantas? 💚
                        </p>
                    </div>
                </div>

                <div className={styles.social_container}>
                    <a
                        className={styles.social_icon}
                        href="https://instagram.com/plant.zila"
                        target='blank'
                    >
                        <Instagram width={65} height={65} />
                    </a>
                </div>

                <a
                    onClick={clicked}
                    href={pdfUrl}
                    download
                    className={styles.download_button}
                >
                    Descargar &quot;El lenguaje de las plantas baby&quot;
                </a>
            </div>
            <ToastContainer />

        </Layout>
    );
}