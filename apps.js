$(() => {
    const btnPosts = $("#btnPosts");
    const resultadoPosts = $("#resultadoPosts");
    const inputBuscar = $("#inputBuscar");
    const form = $("#form")


    form.on("submit", (e) => {
        e.preventDefaul();
    })

    $('img.logo').parent().css('text-align','center');
  
    btnPosts.on("click", () => {
      console.log("me diste click");
      $.ajax({
        url: "https://www.superheroapi.com/api.php/3525635500807579/${inputBuscar.val()}",
        type: "GET",
        dataType: "JSON",
        success(data) {
          console.log(data);
          
            resultadoPosts.append(`
                <article class="col-12 col-md-4 mb-2">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="..." class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                    <h5 class="card-title">${data.name}</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            
            `);
          
        },
        error(err) {
          console.log(err);
        }
      });
    });
  });
  

