let elem_projects = document.querySelector('.projects');

let data = await(await fetch("./projects.json")).json()

function project(proj) {
    let element = document.createElement('div');

    element.id = "project";
    
    let header = document.createElement('h2');
    header.innerText = proj.header;

    let a = document.createElement('a');
    a.href = proj.url;
    a.target

    let img = document.createElement('img');
    img.src = proj.img;
    img.width = 256;
    img.height = 256;
    img.style.imageRendering = "auto"
    img.alt = proj.desc;
    
    a.appendChild(img);
    let desc = document.createElement('p');

    desc.innerText = proj.desc;

    element.appendChild(header);
    element.appendChild(a);
    element.appendChild(document.createElement('br'))
    element.appendChild(desc);
    
    return element;
}

for (let proj in data) {
    console.log(data[proj]);
    elem_projects.appendChild(project(data[proj]))
}