$(() => {
  const chart = $("#chart");
  const personaje = $("#personaje");
  const inputBuscar = $("#inputBuscar");
  const formBuscar = $("#formBuscar");

  $("img.logo").parent().css("text-align", "center");

  formBuscar.on("submit", (e) => {
    e.preventDefault();

    //validar que sea numero solamente
    console.log(inputBuscar.val());
    const soloNumeros = /^\d+$/;

    //console.log(soloNumeros.test(inputBuscar.val()));

    //limpiar chart, personaje y alerta de error
    chart.html("");
    personaje.html("");
    //alert.addClass("d-none");

    if (!soloNumeros.test(inputBuscar.val())){
      return console.log("no escribiste numeros");
    }

    $.ajax({
      url: `https://www.superheroapi.com/api.php/3525635500807579/${inputBuscar.val()}`,
      type: "GET",
      dataType: "JSON",
      success(data) {
        console.log(data);

        personaje.append(`
                    <section class="card mb-3">
                        <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${data.image.url}" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                      <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Nombre: ${data.name}</li>
                                        <li class="list-group-item">Conexiones: ${data.connections['group-affiliation']}</li>
                                        <li class="list-group-item">Publicado por: ${data.biography.publisher}</li>
                                        <li class="list-group-item">Ocupación: ${data.work.occupation}</li>
                                        <li class="list-group-item">Primera Aparición: ${data.biography['first-appearance']}</li>
                                        <li class="list-group-item">Altura: ${data.appearance.height}</li>
                                        <li class="list-group-item">Peso: ${data.appearance.weight}</li>
                                        <li class="list-group-item">Alianzas: ${data.biography.aliases}</li>
                                      </ul>
                                    </div>
                                </div>
                          </div>
                    </section>
            `);

        const optionsChart = {
          animationEnabled: true,
          title: {
            text: "Grafico",
          },
          zoomEnabled: true,
          data: [
            {
              type: "pie",
              showInLegend: true,
              legendText: "{indexLabel}",
              dataPoints: [
                {
                  y:
                    data.powerstats.intelligence !== "null"
                      ? data.powerstats.intelligence
                      : 0,
                  indexLabel: "intelligence",
                },
                {
                  y:
                    data.powerstats.strength !== "null"
                      ? data.powerstats.strength
                      : 0,
                  indexLabel: "strength",
                },
                {
                  y:
                    data.powerstats.speed !== "null"
                      ? data.powerstats.speed
                      : 0,
                  indexLabel: "speed",
                },
                {
                  y:
                    data.powerstats.durability !== "null"
                      ? data.powerstats.durability
                      : 0,
                  indexLabel: "durability",
                },
                {
                  y:
                    data.powerstats.power !== "null"
                      ? data.powerstats.power
                      : 0,
                  indexLabel: "power",
                },
                {
                  y:
                    data.powerstats.combat !== "null"
                      ? data.powerstats.combat
                      : 0,
                  indexLabel: "combat",
                },
              ],
            },
          ],
        };
        chart.CanvasJSChart(optionsChart);
      },
      error(e) {
        console.log(e);
      },
    });
  });
});
