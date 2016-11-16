(function() {
  $(document).ready(function() {
    var updateDisplay;
    updateDisplay = function() {
      var image, src;
      src = localStorage.getItem("image");
      console.log(src);
      if (src === "undefined") {
        image = "<img src='img/blank.png' />";
      } else {
        image = "<img src='" + src + "' />";
      }
      console.log(image);
      $(".image div").html(image);
      $(".space").each(function() {
        var content, name, value;
        name = $(this).find("h2").text();
        content = $(this).find("div").val();
        value = localStorage.getItem(name);
        console.log(name + " " + value);
        if (value === "") {
          return $(this).find("div").html("&nbsp;");
        } else {
          return $(this).find("div").html(value);
        }
      });
      return setTimeout(function() {
        return updateDisplay();
      }, 500);
    };
    return updateDisplay();
  });

}).call(this);

