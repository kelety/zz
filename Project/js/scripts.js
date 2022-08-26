/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 




window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


function f_a(){
    document.getElementById("id_a").href="대인기피증 테스트.html";
}
function f_b(){
    document.getElementById("id_b").href="반응속도 테스트.html";
}

function f_c(){
    document.getElementById("id_c").href="싸이코패스 테스트.html";
}

function f_d(){
    document.getElementById("id_d").href="자뇌 우뇌 테스트.html";
}

function f_e(){
    document.getElementById("id_e").href="정신연령 테스트.html";
}

function f_f(){
    document.getElementById("id_f").href="성격유형 테스트.html";
}

function f_index(){
    document.getElementById("id_index").href="index.html";
}

function f_board(){
    document.getElementById("id_board").href="./게시판/write.html";
}
