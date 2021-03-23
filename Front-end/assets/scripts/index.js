$(document).ready(function () {

    $('.card').resizable({
        aspectRatio: 16/9
    });

    getFirstCardInformation();

    getSecondCardInformation();

});

$('#FirstCardUpdate').click(function () {
    getFirstCardInformation();
});

$('#SecondCardUpdate').click(function () {
    getSecondCardInformation();
});

function getFirstCardInformation(){

    var endpoint = 'https://localhost:44354/ProgrammingLanguageUsage';

    $('.one').find('.loadingDiv').css('display', 'flex');

    $('#FirstGraph').html('');

    $.ajax({
        "url": endpoint,
        "async": true,
        "crossDomain": true,
        "method": "GET",        

        success: function(respuesta) {
            
            $('.one').find('.loadingDiv').css('display', 'none');

            console.log(respuesta);
                            
            var ctx = document.getElementById('FirstGraph').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [respuesta[0].language, respuesta[1].language, respuesta[2].language, respuesta[3].language, respuesta[4].language],
                    datasets: [{
                        label: 'Cantidad de usuarios por lenguaje de programación',
                        data: [respuesta[0].users,respuesta[1].users,respuesta[2].users,respuesta[3].users,respuesta[4].users],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        },
        error: function() {
            $('.one').find('.loadingDiv').css('display', 'none');
            console.log("No se ha podido obtener la información");
        }
    });  
}

function getSecondCardInformation(){

    var endpoint = 'https://ajith-messages.p.rapidapi.com/getMsgs?category=love';

    $('.two').find('.loadingDiv').css('display', 'flex');

    $('.message').text('');

    $.ajax({
        "url": endpoint,
        "async": true,
        "crossDomain": true,
        "method": "GET", 
        "headers": {
            "x-rapidapi-key": "1679341e09mshd62e3b8485d4feep10a412jsna8f504aceee3",
            "x-rapidapi-host": "ajith-messages.p.rapidapi.com"
        },

        success: function(respuesta) {
            
            $('.two').find('.loadingDiv').css('display', 'none');    
            
            $('.message').text(respuesta.Message);

        },
        error: function() {
            $('.two').find('.loadingDiv').css('display', 'none');
            console.log("No se ha podido obtener la información");
        }
    });  
}

function imagenAleatoria(e){
    debugger;
    var elemento= e.parentElement;
    var cantidadImágenes=9
    var aleatorio=Math.floor(Math.random()*cantidadImágenes)

    elemento.style.backgroundImage = "url(\"/Front-end/assets/images/"+aleatorio+".jpg\")";

    // elemento.innerHTML="<img class='image' src=\"/Front-end/assets/images/"+aleatorio+".jpg\"></img>"
}