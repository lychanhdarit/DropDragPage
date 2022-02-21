$().ready(function () {

    //$("#builderPage div").click(function (e) {
    //    console.log($(this).offset());
    //})

})
let idSelected = "";
function selectTag(event,id) {
    console.log(event);
    idSelected = $(`#${id}`);
    /*console.log(idSelected.offset);*/
    $("#menuEdit").css({ "top": event.y, "right": event.x });
    $("#menuEdit .title").html("Đang chọn: #" + id);
}
function removeSelectTag() {
    idSelected.remove();
}
function ThreeColumnDrag(ev) {
    console.log(ev);
    //If move this tag
    //ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("text", `<div id="threeDrag" class="row" draggable="true" ondragstart="drag(event)" onclick="selectTag(event,'threeDrag')"><div class="col-md-4" draggable="true" ondragstart="drag(event)" >Three Column</div><div class="col-md-4" draggable="true" ondragstart="drag(event)" >Three Column</div><div class="col-md-4" draggable="true" ondragstart="drag(event)" >Three Column</div><div>`);

}

function TwoColumnDrag(ev) {
    console.log(ev);
    //If move this tag
    //ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("text", `<div id="twoDrag" class="row" draggable="true" ondragstart="drag(event)"  onclick="selectTag(event,'twoDrag')"><div class="col-md-6" draggable="true" ondragstart="drag(event)" >Three Column</div><div class="col-md-6" draggable="true" ondragstart="drag(event)" >Three Column</div><div>`);

}

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    console.log(ev);
    var data = ev.dataTransfer.getData("text");
    if (data) {
        console.log(data);
        var tagData = document.getElementById(data);
        if (tagData) {
            ev.target.appendChild(document.getElementById(data));
        }
        //else {
        //    var e = document.createElement('div');
        //    e.innerHTML = data;
        //    ev.target.appendChild(e);
        //} 
    } 
}

function useSectionPriceColumn() {
    $("#builderPage").append(`<div  id="price" class="container page-section" draggable="true" ondragstart="drag(event)"  onclick="selectTag(event,'price')">
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-white bg-primary border-primary">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>
 </div>
`);
}
function useSectionThreeColumn() {
    $("#builderPage").append(`<div class="container px-4 py-5 page-section" id="featured-3" draggable="true" ondragstart="drag(event)"  onclick="selectTag(event,'featured-3')">
    <h2 class="pb-2 border-bottom">Columns with icons</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg>
        </div>
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg>
        </div>
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
        </div>
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg>
        </a>
      </div>
    </div>
  </div>
`);
}

function useSectionSlide() {
    $("#builderPage").append(`<div id="carouselExampleIndicators" class="carousel slide page-section" data-bs-ride="carousel" draggable="true" ondragstart="drag(event)"  onclick="selectTag(event,'carouselExampleIndicators')">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://via.placeholder.com/1600x500" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://via.placeholder.com/1600x500" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://via.placeholder.com/1600x500" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`);
}

function useNavbar() {
    $("#builderPage").append(`<nav  id="menu" class="navbar navbar-expand-lg navbar-light bg-light page-section" draggable="true" ondragstart="drag(event)"  onclick="selectTag(event,'menu')">
              <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled">Disabled</a>
                  </div>
                </div>
              </div>
            </nav>`);
}


function useFooter() {
    $("#builderPage").append(`<footer id="footer" class="pt-4 my-md-5 pt-md-5 border-top page-section" draggable="true" ondragstart="drag(event,'footer')"  onclick="selectTag(event)">
    <div class="row">
      <div class="col-12 col-md">
        <img class="mb-2" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19">
        <small class="d-block mb-3 text-muted">© 2017–2021</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>`);
}