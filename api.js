 $(document).ready(function(){

    //Array of search items
    var searchTopic =[];

    // Function for dumping the JSON content for each button into the div
       function displaySearchTopic() {

        var search = $(this).attr("data-name");

        //queryURL for Giphy API
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=BgMajQrP7pJSKLTKeifz6R5o2CDpfsBp&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log("success", response)

          for (var i = 0; i < response.data.length; i++){
            var img = $("<img>").attr("src", response.data[i].images.fixed_height.url)
            $("#search-view").append(img)
            console.log(response.data)
          }

         });
      }

           function renderButtons() {

             // Deleting the buttons prior to adding new movies
            $("#buttons-container").empty();

             // Looping through the array of movies
             for (var i = 0; i < searchTopic.length; i++) {

               // Render buttons
               var newButton = $("<button>");
               newButton.addClass("btn");
               newButton.addClass("gif-btn");
               newButton.text(searchTopic[i]);
               $("#buttons-container").append(newButton);
             }
           }

       // This function handles events where one button is clicked
       $("#add-search").on("click", function(event) {
         event.preventDefault();

         // This line grabs the input from the textbox
         var search = $("#search-input").val().trim();

         // Adding the movie from the textbox to our array
         searchTopic.push(search);

         // Calling renderButtons which handles the processing of our movie array
         renderButtons();

       });

       // Function for displaying the gifs
      //  $(document).on("click", ".search", displaySearchInfo);
       $(document).on("click", ".gif-btn", displaySearchTopic)

       // Calling the renderButtons function to display the initial buttons
       renderButtons();
    

      //  $(".gif").on("click", function() {
        
      //   var state = $(this).attr("data-state");
  
      //    if (state === "still") {
      //      $(this).attr("src", $(this).attr("data-animate"));
      //      $(this).attr("data-state", "animate");
      //    } else {
      //      $(this).attr("src", $(this).attr("data-still"));
      //      $(this).attr("data-state", "still");
      //    }
      //  });


})