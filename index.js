const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { TwitterScraper } = require("@tcortega/twitter-scraper");


app.use(bodyParser.json());

const PORT = process.env.PORT || 5001; 


app.post('/download', async (req,res)=>{
    const link = req.query.url;
    
    try{
        const twtScraper = await TwitterScraper.create();
        const tweetMeta = await twtScraper.getTweetMeta(link);
        res.send(tweetMeta);
    } catch(e){
        res.status(500).send({error: 'error'});
    }

});


app.listen(PORT, ()=>{
    console.log('listening');
});