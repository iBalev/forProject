let person={
    name:"Ivan",
    lastName:"Balev",
    married:true,
    phones: ["091","092","911"]
};

let ulTag=document.getElementById("listaTel");

console.log("Name="+person.name);


for(let i=0; i<person.phones.length; i++){
    let phoneItem=document.createElement("li");
    ulTag.appendChild(phoneItem);
    phoneItem.innerHTML=person.phones[i];
}
