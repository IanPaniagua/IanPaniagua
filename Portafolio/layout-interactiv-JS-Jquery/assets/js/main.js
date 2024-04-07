$(document).ready(function(){


  //SLIDER  
  if(window.location.href.indexOf('index') > -1){
   $(".slider").bxSlider({
        mode: 'fade',
        auto: true,
        pause: 4000,
        speed: 800,
        captions: true,
        slideWidth: 1200
    });
  }
    

    //POST
    if(window.location.href.indexOf('index') > -1){

     var posts = [
        {
            title: 'Prueba de titulo 1',
            date: moment().format('LLL'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos optio aspernatur cupiditate quasi mollitia magni ullam porro voluptatibus. Dolorum sit sed eos assumenda molestiae placeat distinctio asperiores voluptate totam est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fuga earum exercitationem numquam nobis eaque ducimus obcaecati incidunt quam maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magni sed nesciunt tempora modi explicabo error ea veritatis! Recusandae sit beatae quae optio, itaque earum quam voluptatem repellat laboriosam odio.'

        },
        {
            title: 'Prueba de titulo 2',
            date: moment().format('LLL'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos optio aspernatur cupiditate quasi mollitia magni ullam porro voluptatibus. Dolorum sit sed eos assumenda molestiae placeat distinctio asperiores voluptate totam est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fuga earum exercitationem numquam nobis eaque ducimus obcaecati incidunt quam maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magni sed nesciunt tempora modi explicabo error ea veritatis! Recusandae sit beatae quae optio, itaque earum quam voluptatem repellat laboriosam odio.'

        },
        {
            title: 'Prueba de titulo 3',
            date: moment().format('LLL'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos optio aspernatur cupiditate quasi mollitia magni ullam porro voluptatibus. Dolorum sit sed eos assumenda molestiae placeat distinctio asperiores voluptate totam est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fuga earum exercitationem numquam nobis eaque ducimus obcaecati incidunt quam maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magni sed nesciunt tempora modi explicabo error ea veritatis! Recusandae sit beatae quae optio, itaque earum quam voluptatem repellat laboriosam odio.'

        },
        {
            title: 'Prueba de titulo 4',
            date: moment().format('LLL'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos optio aspernatur cupiditate quasi mollitia magni ullam porro voluptatibus. Dolorum sit sed eos assumenda molestiae placeat distinctio asperiores voluptate totam est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fuga earum exercitationem numquam nobis eaque ducimus obcaecati incidunt quam maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magni sed nesciunt tempora modi explicabo error ea veritatis! Recusandae sit beatae quae optio, itaque earum quam voluptatem repellat laboriosam odio.'

        },
        {
            title: 'Prueba de titulo 5',
            date: moment().format('LLL'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos optio aspernatur cupiditate quasi mollitia magni ullam porro voluptatibus. Dolorum sit sed eos assumenda molestiae placeat distinctio asperiores voluptate totam est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fuga earum exercitationem numquam nobis eaque ducimus obcaecati incidunt quam maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magni sed nesciunt tempora modi explicabo error ea veritatis! Recusandae sit beatae quae optio, itaque earum quam voluptatem repellat laboriosam odio.'

        }
     ];
     posts.forEach((item,index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
           <a href="#" class="button-more">Leer más</a>
        </article>
        `;
        console.log(post);
        $("#posts").append(post);
     })
    
    }


     //SELECTOR DE THEMA

     var theme = $("#theme");

     $("#to-green").click(function(){
        theme.attr("href", "assets/css/green.css")
     })
     $("#to-blue").click(function(){
        theme.attr("href", "assets/css/blue.css")
     })
     $("#to-red").click(function(){
        theme.attr("href", "assets/css/red.css")
     })




     //Scroll arriba de la web
     $('.subir').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
     });


     //LOGIN FALSO
     $("#login form").submit(function(){
        var form_name =  $("#form_name").val();

        localStorage.setItem("#form_name", form_name);
     });

     var form_name = localStorage.getItem("#form_name");

     if(form_name != null && form_name != "undefined" ){
        var about_parrafo  = $(".about p");
        about_parrafo.html("<br>Bienvenido, " + "<strong>"+form_name+"</strong> ");
        about_parrafo.append("<a href='#' id= 'logout'>Cerrar sesión</a>");

        $("#login").hide();
        

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        })
     }

   //ACORDEON
   if(window.location.href.indexOf('about') > -1){
      $('#acordeon').accordion();
    }



    //reloj
    if(window.location.href.indexOf('reloj') > -1){
      setInterval(function(){
         var reloj = moment().format('LTS'); ;
      $('#reloj').html(reloj);
      }, 1000);
    }
  });

