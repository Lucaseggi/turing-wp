import React, { useState } from 'react';

import '../styles/HackyText.css'

const HackyText: React.FC = () => {
    const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const finalText = "TURING";
    const [text, setText] = useState<string>(finalText);

    let interval: number;

    const onMouseOver = () => {
        clearInterval(interval);

        let iteration: number = 0;

        interval = setInterval(() => {
            setText((prevText) => {
                return prevText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return finalText[index];
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
            });

            if (iteration >= text.length) {
                clearInterval(interval)
            }

            iteration += 1 / 3;
        }, 40);
    };

    return (
        <h1 className='changing-text' onMouseOver={onMouseOver}>{text}</h1>
    );
};

export default HackyText;
