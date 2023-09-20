//google


  var gso = document.querySelector('#gout');
 
var gimage = document.querySelector('#user');
var gname = document.querySelector('#uname');
var gmail = document.querySelector('#mail');

gimage.visibility = 'hidden';
gname.visibility = 'hidden';
gmail.visibility = 'hidden';
gso.display = 'none';

function onSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();
    gimage.setAttribute('src', profile.getImageUrl());
    gname.innerText = profile.getName();
    gmail.innerText = profile.getEmail();

    gimage.style.visibility = 'visible';
    gname.style.visibility = 'visible';
    gmail.style.visibility = 'visible';
    gso.style.display = 'block';
    
    document.getElementById("bo").style.animationPlayState="running";
    document.getElementById("content").style.animationPlayState="running";
        
}

function onFailure(error) {
    console.log(error);
}

function renderButton() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 40,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
});
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        gimage.style.visibility = 'hidden';
        gname.style.visibility = 'hidden';
        gmail.style.visibility = 'hidden';
        gso.style.display = 'none';

       
    });
}
