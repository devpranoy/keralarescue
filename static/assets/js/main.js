/*
 TODO: open a map url passing the latitude and longitude values
*/
function openMap(lat, long) {
    console.log(lat + ' ' + long)
}

/* 
TODO: return formatted date
*/
function getFormattedDate(millis) {
    console.log(typeof millis)
    return ''
}
function getapi(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://byw1s98hik.execute-api.ap-south-1.amazonaws.com/dev/androidapp/get";
    var myArr;
    xmlhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
            myArr = JSON.parse(this.responseText);
    
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    return myArr;
}

$(document).ready(function() {
    var myArr = getapi()
    var rescueDiv = $('#rescueList')
    rescueDiv.empty()
    var requestCount = $('#requestCount')
    get("get").then(function(res) {
        requestCount.html(res.Items.length + ' Request(s) so far');
        $.each(res.Items, function (index, value) {
            rescueDiv.append('<div class="card card-1 m-b-sm">' +
            '<div class="small-date-time">' +
                '<small class="font-bold">'+getFormattedDate(value.TimeIndex)+'</small>' +
            '</div>'+
            '<h4 style="margin: 5px 0"> Panamaram, Wayanad &nbsp; ' +
                '<a class="pure-button button-small" onclick="openMap(' +  +',' + value.longitude + ')">View on maps</a>'+
            '</h4>'+
            '<hr>'+
            '<div class="pure-g">'+
                '<div class="pure-u-1-2 primary-text">'+' People</div>'+
                '<div class="pure-u-1-2 text-right">'+
                    '<a class="pure-button button-small button-primary" href="#">Accept</a>'+
                    '<a class="pure-button button-small" href="#">'+
                            '<i class="fa fa-share-square-o"></i>'+
                        '</a>'+
                '</div>'+
            '</div>' +
        '</div>')
        });
      });
    
});