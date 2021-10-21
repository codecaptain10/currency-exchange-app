import * as chartsData from "./chartsData.js";

//Charts
//Variables
//dataset 1
// export let labelChart1 = chartsData.chartsForEuro.dataset1.labelChart1;
// export let dataChart1 = chartsData.chartsForEuro.dataset1.dataChart1;
// export let backgroundColorChart1 = chartsData.chartsForEuro.dataset1.backgroundColorChart1;
// export let borderColorChart1 = chartsData.chartsForEuro.dataset1.borderColorChart1;
//dataset2
// export let labelChart2 = chartsData.chartsForEuro.dataset2.labelChart2;
// export let dataChart2 = chartsData.chartsForEuro.dataset2.dataChart2;
// export let backgroundColorChart2 = chartsData.chartsForEuro.dataset2.backgroundColorChart2;
// export let borderColorChart2 = chartsData.chartsForEuro.dataset2.borderColorChart2;
// //dataset3
// export let labelChart3 = chartsData.chartsForEuro.dataset3.labelChart3;
// export let dataChart3 = chartsData.chartsForEuro.dataset3.dataChart3;
// export let backgroundColorChart3 = chartsData.chartsForEuro.dataset3.backgroundColorChart3;
// export let borderColorChart3 = chartsData.chartsForEuro.dataset3.borderColorChart3;



//chart.js setup
let ctx = document.getElementById("myChart").getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
                label: chartsData.chartsForEuro.dataset1.labelChart1, // Name the series
                data: chartsData.chartsForEuro.dataset1.dataChart1, // Specify the data values array
                fill: false,
                borderColor: chartsData.chartsForEuro.dataset1.borderColorChart1, // Add custom color border (Line)
                backgroundColor: chartsData.chartsForEuro.dataset1.backgroundColorChart1, // Add custom color background (Points and Fill)
                borderWidth: 2 // Specify bar border width
            },
            {
                label: chartsData.chartsForEuro.dataset2.labelChart2, // Name the series
                data: chartsData.chartsForEuro.dataset2.dataChart2, // Specify the data values array
                fill: false,
                borderColor: chartsData.chartsForEuro.dataset2.borderColorChart2, // Add custom color border (Line)
                backgroundColor: chartsData.chartsForEuro.dataset2.backgroundColorChart2, // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }, {
                label: chartsData.chartsForEuro.dataset3.labelChart3, // Name the series
                data: chartsData.chartsForEuro.dataset3.dataChart3, // Specify the data values array
                fill: false,
                borderColor: chartsData.chartsForEuro.dataset3.borderColorChart3, // Add custom color border (Line)
                backgroundColor: chartsData.chartsForEuro.dataset3.backgroundColorChart3, // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }
        ]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});




//Functions
export function changeToEuro() {
    console.log("change to Euro!");

    myChart.data.datasets[0].label = chartsData.chartsForEuro.dataset1.labelChart1;
    myChart.data.datasets[0].data = chartsData.chartsForEuro.dataset1.dataChart1;
    myChart.data.datasets[0].backgroundColor = chartsData.chartsForEuro.dataset1.backgroundColorChart1;
    myChart.data.datasets[0].borderColor = chartsData.chartsForEuro.dataset1.borderColorChart1;

    myChart.data.datasets[1].label = chartsData.chartsForEuro.dataset2.labelChart2;
    myChart.data.datasets[1].data = chartsData.chartsForEuro.dataset2.dataChart2;
    myChart.data.datasets[1].backgroundColor = chartsData.chartsForEuro.dataset2.backgroundColorChart2;
    myChart.data.datasets[1].borderColor = chartsData.chartsForEuro.dataset2.borderColorChart2;

    myChart.data.datasets[2].label = chartsData.chartsForEuro.dataset3.labelChart3;
    myChart.data.datasets[2].data = chartsData.chartsForEuro.dataset3.dataChart3;
    myChart.data.datasets[2].backgroundColor = chartsData.chartsForEuro.dataset3.backgroundColorChart3;
    myChart.data.datasets[2].borderColor = chartsData.chartsForEuro.dataset3.borderColorChart3;
    myChart.update();
}

export function changeToZloty() {
    console.log("change to Zloty!");

    myChart.data.datasets[0].label = chartsData.chartsForZloty.dataset1.labelChart1;
    myChart.data.datasets[0].data = chartsData.chartsForZloty.dataset1.dataChart1;
    myChart.data.datasets[0].backgroundColor = chartsData.chartsForZloty.dataset1.backgroundColorChart1;
    myChart.data.datasets[0].borderColor = chartsData.chartsForZloty.dataset1.borderColorChart1;

    myChart.data.datasets[1].label = chartsData.chartsForZloty.dataset2.labelChart2;
    myChart.data.datasets[1].data = chartsData.chartsForZloty.dataset2.dataChart2;
    myChart.data.datasets[1].backgroundColor = chartsData.chartsForZloty.dataset2.backgroundColorChart2;
    myChart.data.datasets[1].borderColor = chartsData.chartsForZloty.dataset2.borderColorChart2;

    myChart.data.datasets[2].label = chartsData.chartsForZloty.dataset3.labelChart3;
    myChart.data.datasets[2].data = chartsData.chartsForZloty.dataset3.dataChart3;
    myChart.data.datasets[2].backgroundColor = chartsData.chartsForZloty.dataset3.backgroundColorChart3;
    myChart.data.datasets[2].borderColor = chartsData.chartsForZloty.dataset3.borderColorChart3;
    myChart.update();
};

export function changeToDollar() {
    console.log("change to Dollar!");

    myChart.data.datasets[0].label = chartsData.chartsForDollar.dataset1.labelChart1;
    myChart.data.datasets[0].data = chartsData.chartsForDollar.dataset1.dataChart1;
    myChart.data.datasets[0].backgroundColor = chartsData.chartsForDollar.dataset1.backgroundColorChart1;
    myChart.data.datasets[0].borderColor = chartsData.chartsForDollar.dataset1.borderColorChart1;

    myChart.data.datasets[1].label = chartsData.chartsForDollar.dataset2.labelChart2;
    myChart.data.datasets[1].data = chartsData.chartsForDollar.dataset2.dataChart2;
    myChart.data.datasets[1].backgroundColor = chartsData.chartsForDollar.dataset2.backgroundColorChart2;
    myChart.data.datasets[1].borderColor = chartsData.chartsForDollar.dataset2.borderColorChart2;

    myChart.data.datasets[2].label = chartsData.chartsForDollar.dataset3.labelChart3;
    myChart.data.datasets[2].data = chartsData.chartsForDollar.dataset3.dataChart3;
    myChart.data.datasets[2].backgroundColor = chartsData.chartsForDollar.dataset3.backgroundColorChart3;
    myChart.data.datasets[2].borderColor = chartsData.chartsForDollar.dataset3.borderColorChart3;
    myChart.update();
}

export function changeToPfund() {
    console.log("change to Pfund!");

    myChart.data.datasets[0].label = chartsData.chartsForPfund.dataset1.labelChart1;
    myChart.data.datasets[0].data = chartsData.chartsForPfund.dataset1.dataChart1;
    myChart.data.datasets[0].backgroundColor = chartsData.chartsForPfund.dataset1.backgroundColorChart1;
    myChart.data.datasets[0].borderColor = chartsData.chartsForPfund.dataset1.borderColorChart1;

    myChart.data.datasets[1].label = chartsData.chartsForPfund.dataset2.labelChart2;
    myChart.data.datasets[1].data = chartsData.chartsForPfund.dataset2.dataChart2;
    myChart.data.datasets[1].backgroundColor = chartsData.chartsForPfund.dataset2.backgroundColorChart2;
    myChart.data.datasets[1].borderColor = chartsData.chartsForPfund.dataset2.borderColorChart2;

    myChart.data.datasets[2].label = chartsData.chartsForPfund.dataset3.labelChart3;
    myChart.data.datasets[2].data = chartsData.chartsForPfund.dataset3.dataChart3;
    myChart.data.datasets[2].backgroundColor = chartsData.chartsForPfund.dataset3.backgroundColorChart3;
    myChart.data.datasets[2].borderColor = chartsData.chartsForPfund.dataset3.borderColorChart3;
    myChart.update();
}