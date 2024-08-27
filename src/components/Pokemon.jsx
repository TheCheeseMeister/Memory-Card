/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function Pokemon({pokemon}) {
    let name = pokemon;
    const [imageURL, setImageURL] = useState("");

    const baseUrl = 'https://pokeapi.co/api/v2/';
    let url = baseUrl + `pokemon/${pokemon}`;

    useEffect(() => {
        let timer = setTimeout(() => getImage(), 0);

        return() => {
            clearTimeout(timer);
        };
    });

    const getImage = () => {
        fetch(url, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                setImageURL(response.sprites.other["official-artwork"].front_default);
            });
    };

    return (
        <>
            <Card variant='outlined' sx={{
                display: 'flex',
                flexDirection: 'center',
                height: 250,
                width: 200,
                padding: 2,
            }}>
                <CardMedia 
                    component='img'
                    image={imageURL}
                    alt={name}
                    sx={{objectFit: 'contain'}}
                />
            </Card>
        </>
    );
}