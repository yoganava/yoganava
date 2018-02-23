function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var animation = 'pulse 40s infinite alternate';
var colors = shuffle(['#ffffff', '#e2e5dd', '#dae5f3', '#ffefdd']);

document.writeln('<style>');
document.writeln('    @-webkit-keyframes pulse { 25% {background-color: ' + colors[0] + ';} 50% {background-color: ' + colors[1] + ';} 75% {background-color: ' + colors[2] + ';} 100% {background-color: ' + colors[3] + ';} }');
document.writeln('            @keyframes pulse { 25% {background-color: ' + colors[0] + ';} 50% {background-color: ' + colors[1] + ';} 75% {background-color: ' + colors[2] + ';} 100% {background-color: ' + colors[3] + ';} }');
document.writeln('    body { -webkit-animation: ' + animation + '; animation: ' + animation + '; background-color: ' + colors[0] + '; }');
document.writeln('</style>');
