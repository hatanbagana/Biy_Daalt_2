// Use window.addEventListener("scroll",) Event listener.
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount
let sda = 0
window.addEventListener("scroll", (e) => {
  // console.log(e.target.scrollingElement.scrollTop);

  if (
    e.target.scrollingElement.scrollTop > -10 &&
    e.target.scrollingElement.scrollTop < 650
  ) {
    // document.querySelector("nav").setAttribute("class", "fixed-top")
    if ( sda > 0) {
      document.querySelector(".ss").remove()
      sda = 0
      
    }
  } else {
    sda = 1
    document.querySelector(".navsda").innerHTML =  `
    <nav class="ss navbar navbar-expand-lg navbar-light bg-white px-0 navbarbandi fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">{finsweet</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-flex align-items-center ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/careers.html">Careers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Services.html">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/contact_us.html">Contact Us</a>
              </li>
              <li class="nav-itemm " id="navitemm">
                <a class="nav-link active orange-btn c-orange" aria-current="page" href="work.html">Clone Project</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`
  }
});


// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener

// Define Play button variable

// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request

// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code

// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request

var xhr = new XMLHttpRequest();
xhr.open("GET", "../data/company_intro.json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    generateHTML()
    var news = JSON.parse(xhr.responseText);

    console.log(news.data);
    const news1 = document.querySelector(".gurvanmedee");
    const news2 = document.querySelector(".footer-latest");
    let strr = "";
    let strr1 = '';
    news.data.forEach((e) => {
      strr += `
                    <div class="col-sm-12 col-md-4 col-xl-4 ">
                      <div class="card  mt-3" >
                          <div class="card-img-top">

                              <img src="${e.thumbnail}" class="" alt="...">
                          </div>
                        <div class="card-body">
                            <h2>${e.title}</h2>
                            <p class="card-text c-gray">${e.content}</p>
                                <a href="" class="c-orange">Learn more</a>
                            </div>
                        </div>
                  </div>
        
        `;
    });


    for(let key in news.data){
        if (news.data[key].hasOwnProperty("title")) {
            
            strr1 += `<div class="col-sm-12  col-md-4 col-lg-4 my-3"> 
            <div class="card latest-card">
                <div class="latest-img">
                    <img src="${news.data[key].thumbnail}" alt="">
                </div>
                <div class="card-body latest-card-body">
                    <h2>${news.data[key].title}</h2>
                    <p>${news.data[key].content}</p>
                    <a href="#" class="c-orange"> Learn More</a>
                </div>
            </div>
        </div>`
        }
        }

    news1.innerHTML = strr;
    news2.innerHTML = strr1;
  }
};
xhr.send();

function generateHTML() {

    // let finesModal = Bootstrap modal Object request

    document.querySelector(".video-img").addEventListener('click', e=>{

        document.querySelector(
          ".modal-body"
        ).innerHTML = `<video class="w-100" controls>
        <source src="/video/mov_bbb.mp4" type="video/mp4" />
    </video> `;

    })
    
}


/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create


// let config = {
//   method: 'POST',
//   headers:{
//     'Content-Type': 'application/json'
//   },
//   body: {
//     email: 'test@gmail.com'
//   }
// }
// fetch(`https://dev-api.mstars.mn/subscribe/subscriptions`, config).then(e => e.json()).then(e=>console.log(e)).catch(error => console.log(error))


// // Example POST method implementation:
// async function postData(url = 'https://dev-api.mstars.mn/subscribe/subscriptions', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: {
//       email: 'test@gmail.com'
//       }
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://dev-api.mstars.mn/subscribe/subscriptions', { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });


// (async () => {
//   const rawResponse = await fetch('https://httpbin.org/post', {
//     method: 'POST',
//     mode: 'no-cors',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: {
//             email: 'test@gmail.com'
//             }
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// })();


document.querySelector(".footer-btn").addEventListener('click', e=>{

  let re  = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  let email = document.getElementById("input-username").value
  if (email.match(re)) {
    fetch('https://dev-api.mstars.mn/subscribe/subscription/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"email": email})
    }).then(res => res.json())
      .then(res => console.log(res))
      .then(e=>{
        let footer_modal = ` 
        <h2>You have successfully subscribed.</h2>`


        document.querySelector(`.footer-modal`).innerHTML = footer_modal
      })


  }else{

    
        let footer_modal = ` 
        <h2 style="color: red;" >error</h2>`



      document.querySelector(`.footer-modal`).innerHTML = footer_modal



  }
  console.log(email);
  })

  document.getElementById("input-username").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    	document.getElementById("footer-submit").submit();
		return false;
    }
});
