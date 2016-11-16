(function() {
  $(document).ready(function() {
    var updateControl;
    $(document).on("click", "li.unselect", function(e) {
      console.log("UNSELECT");
      if (e.which === 1) {
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).siblings().addClass("unselect");
        $(this).removeClass("unselect");
        return $(this).addClass("active");
      }
    });
    $(document).on("click", "li.active", function(e) {
      console.log("ACTIVE");
      if (e.which === 1) {
        e.preventDefault();
        $(this).siblings().addClass("unselect");
        $(this).siblings().removeClass("active");
        $(this).addClass("unselect");
        return $(this).removeClass("active");
      }
    });
    updateControl = function() {
      var image;
      image = $("li.active").attr("value");
      localStorage.setItem("image", image);
      $(".block").each(function() {
        var content, name;
        name = $(this).find(".label").text();
        content = $(this).find("input").val();
        return localStorage.setItem(name, content);
      });
      return setTimeout(function() {
        return updateControl();
      }, 500);
    };
    return updateControl();
  });

}).call(this);

