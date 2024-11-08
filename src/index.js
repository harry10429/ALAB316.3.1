
let mainEL = document.querySelector("main");
let header = document.createElement("h1");
mainEL.style.backgroundColor = "var(--main-bg)";
header.textContent = "DOM Manipulation";
mainEL.append(header);
mainEL.classList.add("flex-ctr");

let topMenuEL = document.getElementById("top-menu");
topMenuEL.style.height = "100%";
topMenuEL.style.backgroundColor = "var(--top-menu-bg)";
topMenuEL.classList.add("flex-around");

var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];


for (let link of menuLinks) {
  let aTag = document.createElement("a");
  aTag.textContent = link.text;
  aTag.href = link.href;
  topMenuEL.appendChild(aTag);
}

let subMenuEL = document.getElementById("sub-menu");
subMenuEL.style.height = "100%";
subMenuEL.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEL.classList.add("flex-around");

subMenuEL.style.position = "absolute";
subMenuEL.style.top = "0";

for (let i = 0; i < topMenuEL.length; i++) {

}
let topMenuLinks = topMenuEL.querySelectorAll("a");



topMenuEL.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName != "A") {
    subMenuEL.style.top = "0";
    return;
  } else {
    for (let a of topMenuLinks) {
      a.classList.remove("active");
    }
    if (e.target.textContent == "about") {
      subMenuEL.style.top = "0";
      header.textContent = e.target.textContent;
    } else if( subMenuEL.style.top == "100%"){
      subMenuEL.style.top = "0";
    }
     else {
      subMenuEL.style.top = "100%";
      buildSubmenu(e.target);
    }


    e.target.classList.toggle("active");

    console.log(e.target.textContent);
  }
});


function buildSubmenu(target) {
  while(subMenuEL.firstChild){
    subMenuEL.removeChild(subMenuEL.lastChild);
  }
  for(let link of menuLinks){
  if(target.textContent ==link.text){
   for(let i of link.subLinks){
    let aTag1 = document.createElement("a");
    aTag1.textContent = i.text;
    aTag1.href = i.href;
    subMenuEL.appendChild(aTag1);
   }
   break;
  }
}
}

subMenuEL.addEventListener("click",(e)=> {
  e.preventDefault();
  if(e.target.nodeName!="A"){

    return;
  }
  subMenuEL.style.top ="0";
  for (let a of topMenuLinks) {
    a.classList.remove("active");
  }
  header.textContent=e.target.textContent;
  console.log(e.target.textContent)
}

)
