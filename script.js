var names = {
  "movie_names": [
    {
      "name": 'Avengers Endgame'
    },
    {
      "name": 'Frozen'
    },
    {
      "name": 'Transformer'
    },
  ]
}

$(document).ready(function(){
  var tpl = $("#name-template").html();
  var comp = Handlebars.compile(tpl);
  $(".container").html(comp(names.movie_names[2]));
});

$(document).ready(function(){
  var tpl = $("#name-template").html();
  var comp = Handlebars.compile(tpl);
  $(".container").html(comp(names.movie_names[1]));
});
