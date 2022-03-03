// Use window.addEventListener("scroll",) Event listener.
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount

window.addEventListener("scroll", (e) => {
  // console.log(e.target.scrollingElement.scrollTop);

  if (
    e.target.scrollingElement.scrollTop > -10 &&
    e.target.scrollingElement.scrollTop < 650
  ) {
    // document.querySelector("nav").setAttribute("class", "fixed-top")
    document.querySelector("nav").classList.remove("fixed-top");
  } else {
    document.querySelector("nav").classList.add("fixed-top");
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
