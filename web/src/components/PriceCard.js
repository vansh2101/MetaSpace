import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function PriceCard(props) {

    const plan = props.plan;
    const price = props.price;
    const features = props.features;
    const checked = props.yearly;


    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', backgroundColor: '#D9D9D9' }}
        >
        </Box>
    );

    const card = (
        <React.Fragment>
            <CardContent color={"text.primary"} style={{minHeight: '350px', backgroundColor: 'rgba(217, 217, 217, 0.9)',}}>
                <Typography color={"#5200FF"} variant="h5" component="div" style={{fontWeight: 700, fontSize: '2rem'}}>
                    {plan}
                </Typography>
                <br/>
                <Typography variant="h4" sx={{ mb: 1.5, fontWeight: 700}} color="text.primary">
                    {price}/ {checked ? 'yearly' : 'monthly'}
                </Typography>
                <Typography variant="body2" color={"text.primary"}>
                    {features.map((feature, index) => (
                        <React.Fragment key={index}>
                            <img src='./img/point.png' className='check'/>
                            <Typography component={"span"} color={"text.primary"}>{feature}</Typography>
                            <br/>
                        </React.Fragment>
                    ))}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
    return (
        <Box sx={{ minWidth: 275, minHeight: 300 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}