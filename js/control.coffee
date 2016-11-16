$(document).ready ->

    $(document).on "click", "li.unselect", (e) ->
        console.log "UNSELECT"
        if e.which == 1
            e.preventDefault()
            $(this).siblings().removeClass "active"
            $(this).siblings().addClass "unselect"
            $(this).removeClass "unselect"
            $(this).addClass "active"

    $(document).on "click", "li.active", (e) ->
        console.log "ACTIVE"
        if e.which == 1
            e.preventDefault()
            $(this).siblings().addClass "unselect"
            $(this).siblings().removeClass "active"
            $(this).addClass "unselect"
            $(this).removeClass "active"

    updateControl = ->

        # Update local storage for the image...

        image = $("li.active").attr "value"
        localStorage.setItem "image", image

        # and now for the rest
        $(".block").each ->
            name = $(this).find(".label").text()
            content = $(this).find("input").val()

            localStorage.setItem name, content

        # Recall this fuction
        setTimeout ->
            updateControl()
        , 500

    updateControl()
