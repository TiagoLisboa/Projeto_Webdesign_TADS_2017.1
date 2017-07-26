$(document).ready(function(){
    $('#inputData').mask('00/00/0000');
    $('#inputCPF').mask('000.000.000-00', {reverse: true});
    $('#inputCEP').mask('00000-000')
});