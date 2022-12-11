import React from 'react';
import Grid from '@mui/material/Grid';

const FeatureList = [
    {
        alt: 'The Verge',
        src: '/img/logos/theverge.svg',
        url: 'https://www.theverge.com/23412661/deauther-watch-wifi-hacking-chip-network-deauthorization-secure-oled',
    },
    {
        alt: 'Hackaday',
        src: '/img/logos/hackaday.png',
        url: 'https://hackaday.com/2019/04/04/pocket-sized-deauther-could-definitely-get-you-in-trouble/',
    },
    {
        alt: 'Wonder How To',
        src: '/img/logos/wonderhowto.png',
        url: 'https://null-byte.wonderhowto.com/how-to/scan-fake-attack-wi-fi-networks-with-esp8266-based-wifi-deauther-0193837/',
    },
    {
        alt: 'ct',
        src: '/img/logos/ct.svg',
        url: 'https://www.heise.de/ct/artikel/WLAN-ausknipsen-mit-dem-WiFi-Deauther-3811861.html',
    },
    {
        alt: 'golem',
        src: '/img/logos/golem.svg',
        url: 'https://www.golem.de/news/wlan-kameras-ausgeknipst-wer-hat-die-winkekatze-geklaut-1910-144199-2.html',
    },
    {
        alt: 'NotebookCheck',
        src: '/img/logos/notebookcheck.svg',
        url: 'https://www.notebookcheck.net/Deauther-Watch-V3-A-smartwatch-aimed-at-hackers-and-penetration-testers.521535.0.html',
    },
];

function Feature({ alt, src, url }) {
    return (
        <Grid item xs={6} sm={4} md={3} sx={{ textAlign: 'center' }}>
            <a href={url} target='_blank' style={{ marginBottom: '-.5rem' }}>
                <img src={src} alt={alt} style={{ maxHeight: '5rem' }} />
            </a>
        </Grid>
    );
}

export default function AboutFeatures() {
    return (
        <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center" sx={{ background: '#222', borderRadius: '.5rem' }}>
            {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
        </Grid>
    );
}