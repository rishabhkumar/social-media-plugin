/**
 * Created by rishabh on 28/11/16.
 */


window.fbAsyncInit = function() {
    FB.init({
        appId      : '1329192660438015',
        xfbml      : true,
        version    : 'v2.2'
    });
    FB.AppEvents.logPageView();
};

function info(id) {
    let uid = '/' + id;
    FB.api(uid, 'GET', {fields: 'name, picture.width(200).height(200)'}, (response) => {
        document.getElementById('status').innerHTML = 'Hello ' + response.name;
        document.getElementById('dp').src = response.picture.data.url;
    })
}

function lol(page) {
    let pageURL = '/' + page + '/feed?time_format=U';
    FB.api(pageURL, 'GET', {}, (response) => {
        let feed = '';
        console.log(response);
        for(let i = 0; i<response.data.length; i++) {
            if(response.data[i].message) {
                feed += response.data[i].message + ', <i>' + moment(response.data[i].created_time).fromNow() + '</i><br>';
            }
            else {
                feed += response.data[i].story + ', <i>' + moment(response.data[i].created_time).fromNow() + '</i><br>';
            }
        }
        document.getElementById('feed').innerHTML = feed;
        console.log(feed);
    })
}


(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));