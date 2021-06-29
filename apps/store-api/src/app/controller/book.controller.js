var https = require("https");

// Get books by search keyword
async function getBookListByName(req,res) {
    var BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    var url = BASE_URL + req.params.searchword;
    var body = "";
    var books = [];

    https.get(url, function (response) {
    //   if (response.statusCode !== 200) {
    //     res.status(400).send({message:'Invalid input'})
    //   }
      response.on("data", function (data) {
        body += data;
      });

      response.on("end", function () {
        var  data;
        try {
          data = JSON.parse(body).items;
          data.forEach((item) => {
            books.push({
              id: item.id,
              title: item.volumeInfo.title,
              imageLink: item.volumeInfo?.imageLinks?.thumbnail,
              description: item.volumeInfo.description,
              authors: item.volumeInfo.authors,
              ratingsCount: item.volumeInfo.ratingsCount,
              publisher: item.volumeInfo.publisher,
              pageCount: item.volumeInfo.pageCount,
              language: item.volumeInfo.language,
            });
          });
          res.json(books);
        } catch (e) {
          res.status(400).send({message:"Not found search result for requested value"});
        }
      });
    });
};

module.exports = {getBookListByName}