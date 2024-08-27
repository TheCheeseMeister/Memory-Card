import { useEffect, useState } from 'react';

import { Box, Typography } from "@mui/material";
import Pokemon from './Pokemon';

export default function Cards() {
    const [score, setScore] = useState(0);
    const [chosen, setChosen] = useState([]);
    const [displayArray, setDisplayArray] = useState(["pikachu", "eevee", "squirtle", "mew", "psyduck", "charmander", "caterpie", "clefairy"]);

    function shuffle(arr) {
        let newArr = [];

        let num = arr.length - 1;
        while(num >= 0 ) {
            let index = Math.floor(Math.random() * arr.length);

            newArr.push(arr[index]);

            arr.splice(index, 1);
            num -= 1;
        }

        return newArr;
    }

    const addChosen = (poke) => {
        if (chosen.includes(poke)) {
            setChosen([]);
            setScore(0);
        } else {
            setChosen([...chosen, poke]);
            setScore(score+1);
        }

        setDisplayArray(shuffle(displayArray));
    }

    useEffect(() => {
        console.log(chosen);

        if (chosen.length == 8) {
            console.log("That's all, you win!");
        }
    }, [chosen])

    return(
        <>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '24px',
                alignContent: 'center',
                justifyContent: 'center',
            }}>
                {displayArray.map((poke, index) => {
                    return(
                        <Box key={index} onClick={() => addChosen(poke)} sx={{
                            transition: 'scale 0.1s ease-out',
                            '&:hover': {
                                scale: 1.1,
                                cursor: 'pointer',
                            },
                            display: 'flex',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}>
                            <Pokemon pokemon={poke} />
                        </Box>
                    );
                })}
            </Box>

            <Box sx={{
                marginTop: 8,
                textAlign: 'center',
            }}>
                <Typography variant='h5'>Score: {score}</Typography>
            </Box>
        </>
    );
}