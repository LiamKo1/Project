'use strict'
let data = ''
fetch('json/info.json')
.then(function (response) {
    return response.json();
})
.then(function (initialData) {
    data = initialData
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
var mainContainer = document.getElementById("myData");
let myselect = document.getElementById("myselect")
console.log(myselect)
myselect.onchange = function() {
    mainContainer.innerText = ""
    appendData(data)};
function appendData(data) {
    let option = myselect.options[myselect.selectedIndex]
    console.log(option)
    let x = option.value
    for (var i = 0; i < x; i++) {
        var div = document.createElement("div");
        div.innerHTML =  data[i].Rank + ' Title: ' + data[i].Title + ' Lifetime Gross: ' + data[i].Lifetime_Gross + ' Year: ' + data[i].Year;
        mainContainer.appendChild(div);
    }
}
