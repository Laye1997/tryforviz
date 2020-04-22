function getOrderedDates(data){
    var dates = [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (!dates.includes(element.year)){
            dates.push(element.year);
        }
    }
    dates.sort((a, b) => a - b);
    return dates;
}
function getValuesYears(data,years){
    var trades = [];
    for (let index = 0; index < years.length; index++) {
        const year = years[index];
        var trd = 0;
        for (let j = 0; j < data.length; j++) {
            const line = data[j];
            if (line.year == year) {
                trd += line.trade;
            }
        }
        trades.push(trd);
    }
    return trades;
}
function getLabels(data) {
    var labels = [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log(element);
        
        if(!labels.includes(element.country)){
            labels.push(element.country);
        }
    }
    return labels;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function getRGBRandomColor(){
    code1 = getRndInteger(100,255);
    code2 =getRndInteger(0,255);
    code3 = getRndInteger(50,255);
    return 'RGB('+code1+','+code2+','+code3+')';
}
function getLabelsColors(labels){
    var colors = [];
    for (let index = 0; index < labels.length; index++) {
        colors.push(getRGBRandomColor());
    }
    return colors;
}
function getDataInRelativeLabelOrder(data,labels){
    var dataLabels = [];
    for (let index = 0; index < labels.length; index++) {
        const lbl = labels[index];
        var s = 0,n=0;
        for (let j = 0; j < data.length; j++) {
            const d = data[j];
            if(d.country == lbl){
                s += d.trade;
                n++;
            }
        }
        dataLabels.push(s/n);
    }
    return dataLabels;
}
function listPays(){
    var myData = getAllData();
    var lbls = getLabels(myData);
    var listOPtions = '<option value="">TOUS LES PAYS</option>';
    for (let index = 0; index < lbls.length; index++) {
        const element = lbls[index];
        listOPtions+='<option value="'+element+'" >'+element+'</option>'
    }
    $("#pays").html(listOPtions);
}
function isInDate(dateDeb,dateFin,dateNow) {
    if (!dateDeb || !dateFin){
        return true;
    }
    dateDeb = parseInt(dateDeb.split("-")[0]);
    dateFin = parseInt(dateFin.split("-")[0]);
    if (dateDeb>dateNow || dateFin<dateNow){
        return false;
    }
    return true;
}
function filterData(data){
    var pays = $("#pays").val();
    var dateDebutStatistiques = $("#dateDebutStatistiques").val();
    var dateFinStatistiques = $("#dateFinStatistiques").val();    
    var newData = [];
    var countryIndicatorSet = false;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (pays) {
            if(!countryIndicatorSet){
                $(".selectedCountry").html(pays);
                countryIndicatorSet = true;
            }
            if(element.country != pays){
                continue;
            }
        }
        if(isInDate(dateDebutStatistiques,dateFinStatistiques,element.year)){
            newData.push(element);
        }
    }
    return newData;
}
function getListeFlows(data){
    var flows = [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (!flows.includes(element.flow)){
            flows.push(element.flow);
        }
    }
    return flows;
}
function getDataInFlowsOrder(data,listeFlows){
    var flowsData = [];
    for (let index = 0; index < listeFlows.length; index++) {
        const element = listeFlows[index];
        var s = 0;
        for (let j = 0; j < data.length; j++) {
            const lineData = data[j];
            if (lineData.flow == element){
                s+=lineData.trade;
            }
        }
        flowsData.push(s);
    }
    return flowsData;
}
function loadGraphes() {
    var myData = getAllData();
    myData = filterData(myData);
    var lbls = getLabels(myData);
    var data = getDataInRelativeLabelOrder(myData,lbls);
    var datesListes = getOrderedDates(myData);
    $(".dateMin").html(datesListes[0]);
    $(".dateMax").html(datesListes[datesListes.length - 1]);
    var dataGroupesByDate = getValuesYears(myData,datesListes);
    console.log(datesListes);
    var areaChartData = {
        labels  : lbls,
        datasets: [
        {
            label               : 'Trade',
            backgroundColor     : 'rgba(60,141,188,0.9)',
            borderColor         : 'rgba(60,141,188,0.8)',
            pointRadius          : true,
            pointColor          : '#3b8bba',
            pointStrokeColor    : 'rgba(60,141,188,1)',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data                : data
        }
        ]
    }
    var linessChartData = {
        labels  : datesListes,
        datasets: [
        {
            label               : 'Trade',
            backgroundColor     : 'rgb(230,1,1)',
            borderColor         : 'rgba(60,241,188,0.8)',
            pointRadius          : true,
            pointColor          : '#3b8bba',
            pointStrokeColor    : 'rgba(60,141,188,1)',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data                : dataGroupesByDate
        }
        ]
    }

    var areaChartOptions = {
        maintainAspectRatio : false,
        responsive : true,
        legend: {
        display: true
        },
        scales: {
        xAxes: [{
            gridLines : {
            display : false,
            }
        }],
        yAxes: [{
            gridLines : {
            display : false,
            }
        }]
        }
    }
    var lineChartCanvas = $('#lineChart').get(0).getContext('2d')
    var lineChartOptions = jQuery.extend(true, {}, areaChartOptions)
    var lineChartData = jQuery.extend(true, {}, linessChartData)
    lineChartData.datasets[0].fill = false;

    lineChartOptions.datasetFill = false

    var lineChart = new Chart(lineChartCanvas, { 
        type: 'line',
        data: lineChartData, 
        options: lineChartOptions
    })

    var donutData = {
        labels: lbls,
        datasets: [
        {
            data: data,
            backgroundColor : getLabelsColors(lbls),
        }
        ]
    }
    
    var listIflow = getListeFlows(myData);
    var dataFlows = getDataInFlowsOrder(myData,listIflow);
    var donutDataIE = {
        labels: listIflow,
        datasets: [
        {
            data: dataFlows,
            backgroundColor : getLabelsColors(lbls),
        }
        ]
    }
    
    // Import export
    var pieChartCanvas = $('#pieChartImportExport').get(0).getContext('2d')
    var pieDataIE        = donutDataIE;
    var pieOptions     = {
        maintainAspectRatio : false,
        responsive : true,
    }

    var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieDataIE,
        options: pieOptions      
    })

    // Trade
    var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    var pieData        = donutData;
    var pieOptions     = {
        maintainAspectRatio : false,
        responsive : true,
    }

    var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieData,
        options: pieOptions      
    })

    var barChartCanvas = $('#barChart').get(0).getContext('2d')
    var barChartData = jQuery.extend(true, {}, areaChartData)

    var barChartOptions = {
        responsive              : true,
        maintainAspectRatio     : false,
        datasetFill             : false
    }

    var barChart = new Chart(barChartCanvas, {
        type: 'bar', 
        data: barChartData,
        options: barChartOptions
    })
}
