function renderCards(){

    for( var i = 0; i < data.length; ++i ) {
        var v = data    [i];
        h5[i].innerHTML = v.title;
        p[i].innerHTML =  v.price;
    }

    // for(var i = 0; i < data.length; i++){
    //       var img = document.createElement('img');
    //       div.img = 'card__image';
    //       div.innerHTML = data[i].image;
    //       document.getElementsByTagName('cards')[0].appendChild(img);
    // }
  } 