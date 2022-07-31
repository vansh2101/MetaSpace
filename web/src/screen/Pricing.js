import React, {useEffect, useRef} from 'react';
import Navbar from "../components/Navbar";
import {FormControlLabel, Grid, Stack, styled, Switch, Typography} from "@mui/material";
import * as PropTypes from "prop-types";
import PriceCard from "../components/PriceCard";

const Pricing = () => {
    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({theme}) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));
    let yearly = false;
    const year = (e) => {
        yearly = !!e.checked;
        // reload all the cards with the new price
    }

    return (
        <>
            <Navbar/>
            <img src='./img/login.png' className='bg'/>
            <center>
                <h1 className={'heading'}>SUBSCRIPTION PLANS</h1>
            </center>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant={'h6'}>Monthly</Typography>
                <IOSSwitch inputProps={{'aria-label': 'ant design'}} onChange={year}/>
                <Typography variant={'h6'}>Yearly</Typography>
            </Stack>

            <br/>
            <br/>

            <Grid container spacing={4} sx={{display: 'flex', justifyContent: 'center'}}>
                <Grid item xs={3}>
                    <PriceCard price={199} plan={"BASIC"} yearly={yearly} features={["Anonymous ID in Metaverse", "Add personal banner", "Link VR to the website/app", "Voice and Profile security"]} />
                </Grid>
                <Grid item xs={3}>
                    <PriceCard price={329} plan={"STANDARD"} yearly={yearly} features={["Anonymous ID in Metaverse", "Add personal banner", "Link VR to the website/app", "Voice and Profile security", "Sentiment Analysis", "Avatar Customization"]}/>
                </Grid>
                <Grid item xs={3}>
                    <PriceCard price={249} plan={"PREMIUM"} yearly={yearly} features={["Anonymous ID in Metaverse", "Add personal banner", "Link VR to the website/app", "Voice and Profile security", "Sentiment Analysis", "Avatar Customization"]}/>
                </Grid>
            </Grid>

        </>
    );
};

export default Pricing;