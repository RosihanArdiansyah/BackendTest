const axios = require('axios');
const controller = {};

//Fetch data from API
controller.getItemTags = async function(req,res){
    axios({
        method: 'get',
        url: 'https://api.flickr.com/services/feeds/photos_public.gne?',
        params: {
          method: 'flickr.photos.search',
          tags: req.query.tags,
        //   extras: 'url_n, owner_name, date_taken, views',
          page: req.query.page,
          format: 'json',
          nojsoncallback: 1,
          per_page: 10,
        }
      })
    .then (function(response){
        res.status(200).json({
            message : 'Data flickr API',
            tag : response.data.tags, 
            data : response.data           
        })
    })
    .catch (function(error){
        res.status(404).json({
            message: error.message
        })
    })
}

module.exports = controller;