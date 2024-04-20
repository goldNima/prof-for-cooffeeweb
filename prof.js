// user profile


const nameInfo = localStorage.getItem("username")

document.querySelector("#name").innerHTML = nameInfo ;

const lastNameInfo = localStorage.getItem("lastname")

document.querySelector("#last-name").innerHTML = lastNameInfo ;

const passwordInfo = localStorage.getItem("password")

document.querySelector("#password").innerHTML = passwordInfo ;

document.querySelector(".log-out-btn").addEventListener("click" , (e)=>{
    localStorage.removeItem("username");
    localStorage.removeItem("lastname");
    localStorage.removeItem("password");

    document.querySelector("#name").innerHTML = "" ;
    document.querySelector("#last-name").innerHTML = "" ;
    document.querySelector("#password").innerHTML = "" ;
})

// reserve table 

const dateInfo = localStorage.getItem("date of reserve")

document.querySelector("#date").innerHTML = dateInfo;

const timeInfo = localStorage.getItem("time of reserve")

document.querySelector("#time").innerHTML = timeInfo;

const NameInfo = localStorage.getItem("name of reserve")

document.querySelector("#Name").innerHTML = NameInfo;

const phoneInfo = localStorage.getItem("phone of reserve")

document.querySelector("#phone").innerHTML = phoneInfo;

const emailInfo = localStorage.getItem("email of reserve")

document.querySelector("#email").innerHTML = emailInfo;

document.querySelector(".delete-table").addEventListener("click" , (e)=>{
    localStorage.removeItem("date of reserve");

    document.querySelector("#date").innerHTML = ""

    localStorage.removeItem("time of reserve");

    document.querySelector("#time").innerHTML = ""

    localStorage.removeItem("name of reserve");

    document.querySelector("#Name").innerHTML = ""

    localStorage.removeItem("phone of reserve");

    document.querySelector("#phone").innerHTML = ""

    localStorage.removeItem("emeil of reserve");

    document.querySelector("#email").innerHTML = ""
});

// shop 




const itemShop1 = localStorage.getItem("item1")

document.querySelector("#item1").innerHTML = itemShop1;

const priceItemshop1 = localStorage.getItem("item1P")

document.querySelector(".price-shop").innerHTML = priceItemshop1;

const itemShop2 = localStorage.getItem("item2")

document.querySelector("#item2").innerHTML = itemShop2;

const priceItemshop2 = localStorage.getItem("item2P")

document.querySelector(".price-shop2").innerHTML = priceItemshop2;

const itemShop3 = localStorage.getItem("item3")

document.querySelector("#item3").innerHTML = itemShop3;

const priceItemshop3 = localStorage.getItem("item3P")

document.querySelector(".price-shop3").innerHTML = priceItemshop3;


document.querySelector(".dlt-items").addEventListener("click" , (e)=>{
    localStorage.removeItem("item1");
    localStorage.removeItem("item2");
    localStorage.removeItem("item3");
    localStorage.removeItem("item1P");
    localStorage.removeItem("item2P");
    localStorage.removeItem("item3P");
})
