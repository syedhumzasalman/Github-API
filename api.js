document.title = "GITHUB API";

let githubUser = document.querySelector("#githubUser");
let contentBox = document.querySelector("#contentBox");
let profiledisplay = document.getElementById("profiledisplay");

// console.log(githubUser);

githubUser.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    Loading();
  }
});

function Loading() {
  if (/^ *$/.test(githubUser.value)) {
    Swal.fire({
      icon: "error",
      text: "Please enter a UserName.",
      confirmButtonText: "OK",
    });
    return
  }
    contentBox.innerHTML = ` <div class="loop-wrapper">
        <div class="mountain"></div>
        <div class="hill"></div>
        <div class="tree"></div>
        <div class="tree"></div>
        <div class="tree"></div>
        <div class="rock"></div>
        <div class="truck"></div>
        <div class="wheels"></div>
        </div> `;

        setTimeout(() => {
            fetch(`https://api.github.com/users/${githubUser.value}`)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        if (data.message) {
            Swal.fire({ 
                    icon: "error",
                    text: "Please enter a Valid UserName.",
                    confirmButtonText: "OK",
                });
                return;
            }
            //   console.log(data);
            profiledisplay.innerHTML = `<div class="book">
            <button></button>
            <div class="mycard">
                <img class="profile-img" src="${data.avatar_url}" alt="Profile Picture">
                <h2 class="username">${data.name || "No Name Provided"}</h2>
                <p class="description">${data.bio || "No Bio Available"}</p>
                <p class="joined-date">Joined: ${new Date(data.created_at).toDateString()}</p>
                <a href="${data.html_url}" class="visit-profile">Visit Profile</a>
              </div>
            <div class="cover">
            <img class="myimg" src="https://ih1.redbubble.net/image.4510478347.3043/st,small,507x507-pad,600x600,f8f8f8.u3.jpg" alt="">
            </div>
        </div>`
            
        });
        }, 2000);


  
}