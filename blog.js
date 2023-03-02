

let postdialog = document.getElementById('postdialog');
let updatedialog = document.getElementById('updatedialog');
let deldialog = document.getElementById('deldialog');

const table = document.getElementById("posttable");
const postform = document.getElementById("form");

const titleinput = document.getElementById("title");
const dateinput = document.getElementById("date");
const suminput = document.getElementById("sum");
const titleinput2 = document.getElementById("title2");
const dateinput2 = document.getElementById("date2");
const suminput2 = document.getElementById("sum2");


var post = JSON.parse(localStorage.getItem("posts")) || [];
var curr = 0;



export function renderPosts() {
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
    table.innerHTML = "";
    for (let i = 0; i < post.length; i++) {
        const temp = post[i];
        const delbtn = document.createElement("button");
        const editbtn = document.createElement("button");
        delbtn.innerHTML = '<img src="1843344.png"/>';
        delbtn.addEventListener("click", () => {curr=i; showdel()});
        editbtn.innerHTML = '<img src="2541991.png"/>';
        editbtn.addEventListener("click", () => { curr=i; showpre(i);});
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        td1.textContent = temp.split("|")[0];
        td2.textContent = temp.split("|")[1];
        td3.textContent = temp.split("|")[2];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(editbtn);
        tr.appendChild(delbtn);
        table.appendChild(tr);
    }
}

function getcurr(){
    return curr;
}

export function save() {
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
    post.push(`${titleinput.value} | ${dateinput.value} | ${suminput.value}`);
    titleinput.value = ""; 
    dateinput.value = "";
    suminput.value = "";
    localStorage.setItem("posts", JSON.stringify(post));
    renderPosts();
    
}

function showdel(){
    updatedialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
    deldialog.style.visibility="visible";
}

export function delf(index) {
    updatedialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
    deldialog.style.visibility="hidden";
    post.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(post));
    renderPosts();
}

function showpre(index){
    updatedialog.style.visibility="visible";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
    const temp = post[index];
    titleinput2.value = temp.split("|")[0];
    dateinput2.value = temp.split("|")[1];
    suminput2.value = temp.split("|")[2];
}

export function editf(index) {
    post[index] = `${titleinput2.value} | ${dateinput2.value} | ${suminput2.value}`;
    localStorage.setItem("posts", JSON.stringify(post));
    renderPosts();
}

postform.addEventListener("submit", (event) => { 
    event.preventDefault();
    save();
});

document.getElementById('confirm').addEventListener("click", (event) => { 
    event.preventDefault();
    editf(getcurr());
});


document.getElementById('cancle').addEventListener("click", (event) => { 
    event.preventDefault();
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
});


document.getElementById('cancle1').addEventListener("click", (event) => { 
    event.preventDefault();
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
});

document.getElementById('Cancle2').addEventListener("click", (event) => { 
    event.preventDefault();
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "hidden";
});

document.getElementById('ok').addEventListener("click", (event) => { 
    event.preventDefault();
    delf(getcurr());
});

export function start(){
    updatedialog.style.visibility="hidden";
    deldialog.style.visibility="hidden";
    postdialog.style.visibility = "visible";
}


window.addEventListener("load", () => {
    post = JSON.parse(localStorage.getItem("posts")) || [];
    renderPosts();
});
