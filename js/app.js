$(function() {
    // hide "page 2"
    $(".main-container-2").hide();

    $(".image").css({ "opacity": ".6" });
    // Count to check how many images are selected
    var count = 0;
    // Go to check if i can go to the next page
    var go = false;
    // Object where to store the id of the selected images
    var lego = {};
    $(".image").click(function() {
        // Getting the id of the image selected
        var id = $(this).attr("id");
        // If this key doesn't exist I create it with the value true
        if (lego[id] === undefined) {
            lego[id] = true;
            count++;
        } 
        // If this key exist and it is equal to true I set it to false
        else if (lego[id] === true) {
            lego[id] = false;
            count--;
        } 
        // If this key exist and it is equal to false I set it to true
        else if (lego[id] === false) {
            lego[id] = true;
            count++;
        }
        // If the count is equal to 2 I set go to true
        if (count === 2) {
            go = true;
        } else if (count !== 2) {
            go = false;

        }
        // If the value of the key is true i set this css
        if (lego[id] === true) {
            $(this).css({ "transform": "scale(1.1)", "opacity": "1" });
        } else {
            $(this).css({ "transform": "scale(1)", "opacity": ".6" });
        }
    });

    $(".go-page-2").click(function() {
        // console.log(go);
        // console.log(lego);
        var flag_loop = 0;
        // IF go is = true i am free to go because the images selected are only 2
        if (go === true) {
            $(".main-container").hide();
            $(".main-container-2").show();
            // Object loop where i check the values that are true, when i find them i prepend and append the images (I used the flag_loop as help to prepend the first and append the second)
            for (var key in lego) {
                console.log(key, lego[key]);
                console.log(flag_loop);
                if (lego[key] === true && flag_loop === 0) {
                    $('.images-form-container').prepend('<div class="image" id="city"><img src="./images/' + key + '.png"></div>');
                    flag_loop = 1;
                } else if (lego[key] === true && flag_loop !== 0) {
                    $('.images-form-container').append('<div class="image" id="city"><img src="./images/' + key + '.png"></div>');
                }

            }
        }
    });
});
