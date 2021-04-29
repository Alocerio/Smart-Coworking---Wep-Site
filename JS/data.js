//render components by JQ

$('#navigation').append(`<div class="col-lg-1 d-none d-lg-block">
<div class="d-flex h-100">
    <div class="align-self-center mx-auto lead-xl"><ion-icon name="search-outline"></ion-icon> </div>
</div>
</div>
<div class="col-lg-11">
<nav class="navbar navbar-expand-lg">
 <a class="navbar-brand text-light" href="#">Smart <span class="font-weight-bold">Coworking</span></a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <ion-icon class="lead-xl text-light" name="menu-outline"></ion-icon>
 </button>

 <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ul class="navbar-nav ml-auto text-center">
     <li class="nav-item active">
       <a class="nav-link text-light lead" href="#">Workspace</a>
     </li>
     <li class="nav-item">
       <a class="nav-link text-light lead" href="#">Locations</a>
     </li>
     <li class="nav-item">
       <a class="nav-link text-light lead " href="#" tabindex="-1" aria-disabled="true">Enterprise</a>
     </li>
     <li class="nav-item">
       <a class="nav-link text-light  lead" href="#" tabindex="-1" aria-disabled="true">Contact us</a>
     </li>
     <li class="nav-item">
       <a class="nav-link disable text-light lead-xl d-none d-lg-block " href="#" tabindex="-1" aria-disabled="true"><ion-icon name="menu-outline"></ion-icon></a>
     </li>
   </ul>
 
 </div>
</nav>
</div>`);

$('#socialLinkFullscreen').append(` <div class="d-flex">
<ul class="list-unstyled align-self-center mx-auto">
  <li class="sideways"><a href="#" class="text-light"> Instagram</a></li>
  <li class="sideways"><a href="#" class="text-light">Facebook</a> </li>
  <li class="sideways"><a href="#" class="text-light">Youtube</a> </li>
  <li class="sideways"><a href="#" class="text-light">Twitter</a> </li>
</ul>
</div>`);


$('#colTextHeroLeft').append(` <div class="container align-self-center px-5 content">
                                <h1 class="text-uppercase font-weight-bold mb-4">Cowrking is the new normal</h1>
                                <p class="lead-xl mb-4">We offer flexible workspaces for enterorises or growing startups</p>
                                <a href="#" class="btn btn-primary">Start now</a>
                                </div>`);


   $('#imgHero').append(`<img src="/IMG/imgHero.jpg" class="img-fluid" alt="" srcset="">`);        
   
   
   $('#arrowLeftDown').append(` <div class="d-flex h-100">
                                <div class="align-self-center mx-auto">
                                    <a class="text-light lead-xl" href="#">
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                    </a>
                                </div>
                                </div>`);

    $('#textScroll').append(`<div class="d-flex h-100">
    <div class="align-self-center px-5">
      <a href="" class="text-light"><u>Scroll down form more</u></a>
    </div>
  </div>`);
  
  

    $('#textRight').append(`<div class="p-4 bg-light">
    <h3 class="font-weight-bold text-dark bg-light">
      Online reservation</h3>
    <a href="#" class="lead mb-0 text-dark">
      Schedule a visits
    </a>
  </div>`);
