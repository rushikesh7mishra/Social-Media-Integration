



var fimage = document.querySelector('#user');
var fname = document.querySelector('#uname');
var fmail = document.querySelector('#mail');
var fso = document.querySelector('#fout');

fimage.style.visibility = 'hidden';
fname.style.visibility = 'hidden';
fmail.style.visibility = 'hidden';
fso.style.display = 'none';


window.fbAsyncInit = function() {
  FB.init({
    appId      : '1242824256205697',
    cookie     : true,                     // Enable cookies to allow the server to access the session.
    xfbml      : true,                     // Parse social plugins on this webpage.
    version    : 'v11.0'           // Use this Graph API version for this call.
  });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            getUserData();
        } 
        else {
            FB.login(function(response){
                if(response.authResponse){
                    getUserData();
                    
                } 
                else {
                    console.log("Not Authorized.")
                }
            }, {scope: 'email, public_profile', return_scopes: true});
        }
    });
}

function getUserData(){
    FB.api('/me', {fields: 'name,email,picture.type(large)'}, function(response) {
        fimage.setAttribute('src', response.picture.data.url);
        fname.innerHTML =response.name;
        fmail.innerHTML =response.email;

        fimage.style.visibility = 'visible';
        fname.style.visibility = 'visible';
        fmail.style.visibility = 'visible';
        fso.style.display = 'block';
      document.getElementById("bo").style.animationPlayState="running";
                    document.getElementById("content").style.animationPlayState="running";
      

    }); 
}

function logout() {
    FB.getLoginStatus(function(response) {
        if (response.authResponse) {
            FB.logout(function(response){
                fimage.style.visibility = 'hidden';
                fname.style.visibility = 'hidden';
                fmail.style.visibility = 'hidden';
                fso.style.display = 'none';

                
            });
        } else {
            console.log("Unauthorized Logout.")
        }
    });
}
