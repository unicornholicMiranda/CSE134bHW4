let main = {};

main.alertTest = function(){
    alert('danger');
}

window.addEventListener('DOMContentLoaded', function(){
    let button = this.document.getElementById('sss');
    button=this.addEventListener('click', main.alertTest, true);
});