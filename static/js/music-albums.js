// Music albums script. It parses data from a JSON file obtained from the Spotify development site
// and displays the info on a webpage.

let albumFile = "/mysite/data/albums.json";

async function loadAlbums(file){
    res = await fetch(file);
    res = await res.json();

    displayAlbums(res);
}


function displayAlbums(res){
    let albumList = document.querySelector('#music-album-list');

    albumList.innerHTML = '';

    res.items.forEach(element => {
        albumList.innerHTML += 
            "<div class='gallery-item'>" +
                "<a target='_blank' href='" + element.album.external_urls.spotify +"'><img src='" + element.album.images[1].url + "'></a>" +
                "<p><strong>" + element.album.name + "</strong></p>" +
                "<p><em>" + element.album.artists[0].name + "</em></p>" +
                "<p>" + element.album.release_date.slice(0, 4) + "</p>" +
                "<p>" + element.album.total_tracks + " songs</p>" +
            "</div>"; 
    });

}


loadAlbums(albumFile);


function sortAlbums(value){
    if (value == 'title') {
        res.items.sort(compareTitle);
    }
    if (value == 'artist') {
        res.items.sort(compareArtist);
    }
    if(value == 'year-asc') {
        res.items.sort(compareYears);
        res.items.reverse();
    }
    if(value == 'year-desc') {
        res.items.sort(compareYears);
    }

    displayAlbums(res);



    //-------
    function compareTitle(a, b){
        if(a.album.name < b.album.name){return -1;}
        if(a.album.name > b.album.name){return 1;}
        return 0;
    }
    
    function compareArtist(a, b){
        if(a.album.artists[0].name < b.album.artists[0].name){return -1;}
        if(a.album.artists[0].name > b.album.artists[0].name){return 1;}
        return 0;
    }
    
    function compareYears(a, b){
        //return b - a;
        return Number(b.album.release_date.slice(0, 4)) - 
            Number(a.album.release_date.slice(0, 4));
    }

    
}



