import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout';


import styles from '../styles/Pedidos.module.css'


const regex_mail = /^((([!#$%&' * +\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/


export default function Home() {


    //State de toda la info que se enviará
    const [query, setQuery] = useState({
        name: "",
        email: "",
        date: "",
    });

    const [isMail, setIsMail] = useState("")
    const [isSent, setIsSent] = useState(false)

    //Controlar mail
    useEffect(() => {

        if (query.email === "") {
            setIsMail(true)
        } else {
            if (regex_mail.test(query.email)) {
                setIsMail(true)
            } else {
                setIsMail(false)
            }
        }
    }, [query.email])


    //Handle del query completo
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }),
            // console.log(e.target)
        );
    };


    //Handle del submit
    const handleSubmit = () => {
        const { name, email, method, date, cart,
            total_price } = query

        const methodModified = (() => {
            if (date)
                return method + '\n' + date
            else
                return `${method}`
        })();

        let cartStringified = ""

        for (const slug in cart) {
            cartStringified += `${slug} [x${cart[slug]}]\n`;
        }

        api_submit({
            name: name,
            email: email,
            method: methodModified,
            cart: cartStringified.slice(0, -1),
            total_price: total_price,
            parsed_stock: parsedStock,
        })
        setIsSent(true)
        noti_submit()
    }


    return (
        <Layout>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home blablabla"></meta>
            </Head>

            <h1 className='title'>Home</h1>


            <div className={`${styles.form_group}`}>
                <label htmlFor="InputName">Nombre</label>
                <input
                    className={styles.text_input}
                    id="InputName"
                    name="name"
                    onChange={handleChange}
                    placeholder="Plant Lover"
                    required
                    type="text"
                />
            </div>


            <div className={`${styles.form_group}`}>
                <label htmlFor="InputEmail">Dirección de correo electrónico</label>
                <input
                    className={isMail ? styles.text_input : `${styles.text_input}  ${styles.input_error} `}
                    id="InputEmail"
                    name="email"
                    onChange={handleChange}
                    placeholder="calthea@plant.com"
                    required
                    type="email"
                />
            </div>



            <button
                onClick={handleSubmit}
                className={styles.submit_button}
                disabled={
                    query.name === '' ||
                    query.email === '' ||
                    isMail === false ||
                    isSent === true
                }
            >
                {isSent ? 'Formulario enviado' : 'Enviar'}
            </button>



        </Layout>
    );
}