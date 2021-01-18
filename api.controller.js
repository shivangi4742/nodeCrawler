class ApiController  {
    async getDataForMovies(req,res,next) {
        try {
            const data = await this.getData();
            if(data) { res.send(data);}
          } catch (error) {
            console.error(error);
          }
    }
    
    getData = ()=> {
        const p = new Promise((resolve, reject) => {
            const Crawler ={};
            Crawler.request = require('request');
            Crawler.cheerio = require('cheerio');
            Crawler.fs      = require('fs');
            const moviesData = [];
            var url = 'http://www.imdb.com/chart/moviemeter';
            Crawler.request(url, function(err, res, body) {
                if(err) console.log('Error: ' + err);
                var $ = Crawler.cheerio.load(body);
                $('.lister-list tr').each(function(){
                    var title  = $(this).find('.titleColumn a').text().trim();
                    var rating = $(this).find('.imdbRating strong').text().trim();
                    // console.log(title + ' - ' + rating);
                    moviesData.push(title + ' - ' + rating);

                });            
            });
            resolve(moviesData);
        });
    }

}

module.exports = new  ApiController;