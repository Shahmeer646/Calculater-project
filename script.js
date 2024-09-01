let array = [], sum = 0, sym, index, a1, a2 =0,result ;
let object = {
    "a": "%",
    "b": "/",
    "c": "*",
    "d": "-",
    "e;":"+"
}

const call = ()=>{
    console.log("called")
    a1 = array[0]
    a2 = array[index+1]
    for (let i = 1; i < index; i++) {
         a1 +=array[i] 
        }
    for (let j = index+2; j <array.length-1; j++) {
          a2 +=array[j] 
        }    
        console.log(a1,a2)
        array = [eval(`${a1} ${sym} ${a2}`)];
        document.querySelector("span").innerHTML=array;

}

function main() {

    if(array[array.length - 1] == "ACC"){
        array =[]
        document.querySelector("span").innerHTML= " "
    }
    else if (array[array.length - 1] == "DEL") {
        for (let i = 0; i < 2; i++) {
            array.pop()
        }
    }

    else if (array[array.length - 1] == "=") {
  
        for (let i = 0; i < array.length; i++) {
            for (const key in object) {
                if (array[i] == object[key]) {       
                     
                    sym =object[key];         
                    index = array.indexOf(sym)
                    console.log(index)
                    call()
                }
            }

        }
    }
    document.querySelector(".screen").innerHTML = `<span>${array.join("")}</span>`

    
}

document.querySelectorAll(".btn").forEach(e => {

    e.addEventListener("click", (element) => {
        // console.log(e.innerHTML)
        array.push(e.innerHTML);
        main()

    })
})

// for (const key in object) {
//     let color = document.quer
//     if (array[i] == object[key]) {       
         

//     }

// }