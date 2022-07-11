var Song = Backbone.Model.extend({
    defaults: {
        genre: "Jazz"
    }
});

var song = new Song();
song.set("title", "Blue in Green");
song.set({
    artist: "Miles Davis",
    publishYear: 1959
});

/*
    Working with Attributes

    song.set("title", "Blue in Green");

    var title = song.get("title");

    var hasTitle = song.has("title");

    song.unset("title");

    song.clear();
*/