import React from "react";
import styled from 'styled-components'
import Image from 'next/image'

import download from '../../public/img/download.svg';



const ItemContainer = styled.div`
    display: flex;
    align-items: center ;
    width: 90%;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

    padding: 10px;

    background-color: #688D77;
    color: #ECE4DB;

    background-color: #B8CCC0;
    color: #2B3B32;
    color:${({ color }) => color};

    :hover{
        transform: translateY(3px) ;
        filter: brightness(1.2) ;
}
`
const ImgContainer = styled.div`
    width: 40px;
    padding: 3px;

    fill: #AB7C94;

    fill: ${props => props.iconcolor ? props.iconcolor : 'white'};

`

const Text = styled.div`

    display: flex;
    flex-grow: 1;
    flex-basis: 0;

    justify-content: center;
    text-align: center;
`

export default function DisplayItem({ text, svg, iconColor }) {




    return (

        <ItemContainer>

            <ImgContainer iconcolor={iconColor}>
                {svg}
            </ImgContainer>

            <Text>{text}</Text>

        </ItemContainer>


    );
}


