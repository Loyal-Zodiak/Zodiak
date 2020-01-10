// google sign in
function onSignIn(googleUser) {
  let idToken = googleUser.getAuthResponse().id_token;
  axios({
    method: "post",
    url: "http://localhost:3000/google",
    data: {
      idToken
    }
  })
    .then(({ data }) => {
      $("#form").hide()
      $("#user-input").show()
      $("#input-nama").val(data.name)
      localStorage.setItem("token", data.token);
    })
    .catch(err => {
      alert("login failed");
    });
}

// log out
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log("User signed out.");
  });
}
