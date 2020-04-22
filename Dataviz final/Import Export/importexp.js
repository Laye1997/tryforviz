var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [{
            data: [6000, 8000, 10000, 13000, 9000, 9000, 10000],
            pointBackgroundColor: 'brown',
            backgroundColor: 'rgba(165,42,42,0.5)',
            borderColor: 'brown',
            borderWidth: 3,
            tension: 0,
            fill: 'start',
            label: 'Exportation et reexportation'
        },{
            data: [8000, 8000, 9000, 12000, 6000, 7000, 9000],
            pointBackgroundColor: 'brown',
            backgroundColor: 'rgba(115,42,42,0.5)',
            borderColor: 'brown',
            borderWidth: 3,
            tension: 0,
            fill: 'start',
            label: 'Importation'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 2000,
                    max: 14000
                }
            }],
            xAxes: [{
                ticks: {
                    display: true 
                }
            }],
        },
        animation: {
            duration: 0,
        },
        hover: {
            animationDuration: 0,
        },
        responsiveAnimationDuration: 0,
        title: {
            display: true,
            text: 'Evolution des importations, exportations et réexpotations '
        }
    }
});
