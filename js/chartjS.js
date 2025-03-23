const ctx1 = document.getElementById('myChart -1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'polarArea',
    data: {
    labels: ['Productos', 'Stock', 'Rendimiento',],
    datasets: [
        {
        label: '# of Votes',
        data: [10000, 8000, 4000,],
        backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
        ],
        },
    ],
},
options: {
    responsive: true,
    title: {
        display: true,
        text: 'Polar Area Chart'
    }
}
});

const ctx2 = document.getElementById('myChart -2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
        {
        label: 'Cantidad de Productos 2024',
        data: [600, 800, 1000, 500, 700, 2500, 900, 2000, 1000, 0, 0, 0,],
        backgroundColor: [
            'rgba(153, 102, 255, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(75, 192, 192, 1)',
        ],
        },
    ],
},
options: {
    responsive: true,
    title: {
        display: true,
        text: 'bar Chart'
    }
}
});
