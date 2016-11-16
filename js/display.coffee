$(document).ready ->

    updateDisplay = ->

        # Update the image box
        src = localStorage.getItem "image"
        console.log src

        if src == "undefined"
            image = "<img src='img/blank.png' />"
        else
            image = "<img src='" + src + "' />"

        console.log image

        $(".image div").html image

        # Update everything else
        $(".space").each ->
            name = $(this).find("h2").text()
            content = $(this).find("div").val()

            value = localStorage.getItem name

            console.log name + " " + value

            if value == ""
                $(this).find("div").html "&nbsp;"
            else
                $(this).find("div").html value

        setTimeout ->
            updateDisplay()
        , 500

    updateDisplay()
