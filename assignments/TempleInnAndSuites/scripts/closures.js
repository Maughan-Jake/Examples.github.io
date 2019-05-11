var dataRequest = new XMLHttpRequest();
var apiURL = "https://raw.githubusercontent.com/jjmaughan5/jjmaughan5.github.io/master/assignments/TempleInnAndSuites/scripts/templeClosure.json?token=AcYrQks5J5Q7IV5CvI-lr72t80L00penks5cGaqdwA%3D%3D";
dataRequest.open('GET', apiURL, true);
dataRequest.send();

dataRequest.onload = function () {
    // Logan Data
    var templeData = JSON.parse(dataRequest.responseText);

    // I could not get a loop to work so I did the best I could with my limited time
        var Loganclosures1 = templeData['temples'][0]['closures'][0];
        var Loganclosures2 = templeData['temples'][0]['closures'][1];
        var Loganclosures3 = templeData['temples'][0]['closures'][2];
        var Loganclosures4 = templeData['temples'][0]['closures'][3];
        var Loganclosures5 = templeData['temples'][0]['closures'][4];
        var Loganclosures6 = templeData['temples'][0]['closures'][5];
        var Loganclosures7 = templeData['temples'][0]['closures'][6];
        var Loganclosures8 = templeData['temples'][0]['closures'][7];
        var Loganclosures9 = templeData['temples'][0]['closures'][8];
        var Loganclosures10 = templeData['temples'][0]['closures'][9];

        document.getElementById("loganClosure1").innerHTML = Loganclosures1;
        document.getElementById("loganClosure2").innerHTML = Loganclosures2;
        document.getElementById("loganClosure3").innerHTML = Loganclosures3;
        document.getElementById("loganClosure4").innerHTML = Loganclosures4;
        document.getElementById("loganClosure5").innerHTML = Loganclosures5;
        document.getElementById("loganClosure6").innerHTML = Loganclosures6;
        document.getElementById("loganClosure7").innerHTML = Loganclosures7;
        document.getElementById("loganClosure8").innerHTML = Loganclosures8;
        document.getElementById("loganClosure9").innerHTML = Loganclosures9;
        document.getElementById("loganClosure10").innerHTML = Loganclosures10;

    // San Diego Data

        var sandiegoclosures1 = templeData['temples'][1]['closures'][0];
        var sandiegoclosures2 = templeData['temples'][1]['closures'][1];
        var sandiegoclosures3 = templeData['temples'][1]['closures'][2];
        var sandiegoclosures4 = templeData['temples'][1]['closures'][3];
        var sandiegoclosures5 = templeData['temples'][1]['closures'][4];
        var sandiegoclosures6 = templeData['temples'][1]['closures'][5];
        var sandiegoclosures7 = templeData['temples'][1]['closures'][6];
        var sandiegoclosures8 = templeData['temples'][1]['closures'][7];


        document.getElementById("sandiegoClosure1").innerHTML = sandiegoclosures1;
        document.getElementById("sandiegoClosure2").innerHTML = sandiegoclosures2;
        document.getElementById("sandiegoClosure3").innerHTML = sandiegoclosures3;
        document.getElementById("sandiegoClosure4").innerHTML = sandiegoclosures4;
        document.getElementById("sandiegoClosure5").innerHTML = sandiegoclosures5;
        document.getElementById("sandiegoClosure6").innerHTML = sandiegoclosures6;
        document.getElementById("sandiegoClosure7").innerHTML = sandiegoclosures7;
        document.getElementById("sandiegoClosure8").innerHTML = sandiegoclosures8;


        // Bountiful Data
        var bountifulclosures1 = templeData['temples'][2]['closures'][0];
        var bountifulclosures2 = templeData['temples'][2]['closures'][1];
        var bountifulclosures3 = templeData['temples'][2]['closures'][2];
        var bountifulclosures4 = templeData['temples'][2]['closures'][3];
        var bountifulclosures5 = templeData['temples'][2]['closures'][4];
        var bountifulclosures6 = templeData['temples'][2]['closures'][5];
        var bountifulclosures7 = templeData['temples'][2]['closures'][6];
        var bountifulclosures8 = templeData['temples'][2]['closures'][7];

        document.getElementById("bountifulClosure1").innerHTML = bountifulclosures1;
        document.getElementById("bountifulClosure2").innerHTML = bountifulclosures2;
        document.getElementById("bountifulClosure3").innerHTML = bountifulclosures3;
        document.getElementById("bountifulClosure4").innerHTML = bountifulclosures4;
        document.getElementById("bountifulClosure5").innerHTML = bountifulclosures5;
        document.getElementById("bountifulClosure6").innerHTML = bountifulclosures6;
        document.getElementById("bountifulClosure7").innerHTML = bountifulclosures7;
        document.getElementById("bountifulClosure8").innerHTML = bountifulclosures8;


        // Phili Data
        var philiclosures1 = templeData['temples'][3]['closures'][0];
        var philiclosures2 = templeData['temples'][3]['closures'][1];
        var philiclosures3 = templeData['temples'][3]['closures'][2];
        var philiclosures4 = templeData['temples'][3]['closures'][3];
        var philiclosures5 = templeData['temples'][3]['closures'][4];
        var philiclosures6 = templeData['temples'][3]['closures'][5];
        var philiclosures7 = templeData['temples'][3]['closures'][6];
        var philiclosures8 = templeData['temples'][3]['closures'][7];


        document.getElementById("philiClosure1").innerHTML = philiclosures1;
        document.getElementById("philiClosure2").innerHTML = philiclosures2;
        document.getElementById("philiClosure3").innerHTML = philiclosures3;
        document.getElementById("philiClosure4").innerHTML = philiclosures4;
        document.getElementById("philiClosure5").innerHTML = philiclosures5;
        document.getElementById("philiClosure6").innerHTML = philiclosures6;
        document.getElementById("philiClosure7").innerHTML = philiclosures7;
        document.getElementById("philiClosure8").innerHTML = philiclosures8;

}
    