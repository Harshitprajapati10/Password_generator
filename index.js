// Excercise 7 ->  WAP capable of generating a password which contains atleast one lowercase, one uppercase, and one special character . create a password class to acheive the same.

// class password:
//  generatestrongpassword, generateweakpassword, generatesuperstrongpassword, generatefunnypassword(incorrect)
// change this.password

class password {
    constructor(num_of_characters = 8) {
        this.alpha = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
        this.special = ['!', '@', '#', '$', '%', '&', '*', '-', '+', '<', '>', '/', '|']
        this.funny = ['incorrect', 'password', 'hacked', '123456', 'letmein', 'admin', 'qwerty', 'trustno1', 'monkey', 'hello123', 'iloveyou', 'abc123', 'password123', '123123', 'test123', 'changeme', 'login', 'welcome', 'admin123', 'pass1234']
        this.num_of_characters = num_of_characters
        this.password = ""
    }

    generateweakpassword() {
        this.password = ""
        for (let i = 0; i < this.num_of_characters; i++) {
            this.password += this.alpha[Math.floor(Math.random() * (this.alpha.length))]
        }
        return this.password
    }

    generatestrongpassword() {
        this.password = ""
        for (let i = 0; i < (this.num_of_characters) / 2; i++) {
            let random_strong_element = this.alpha[Math.floor(Math.random() * (this.alpha.length))]
            let random_strong_special_element = this.special[Math.floor(Math.random() * (this.special.length))]
            this.password = this.password.concat(random_strong_element, random_strong_special_element)
        }
        return this.password
    }


    generateverystrongpassword() {
        this.password = ""
        this.allelement = [].concat(this.alpha, this.special)
        for (let i = 0; i < this.num_of_characters; i++) {
            this.password += (this.allelement)[Math.floor(Math.random() * ((this.allelement).length))]
        }
        return this.password
    }

    generatefunnypassword() {
        this.password = ""
        this.password += this.funny[Math.floor(Math.random() * (this.funny.length))]
        return this.password
    }
}


let a = new password()

let weak = document.getElementById("weak")
let strong = document.getElementById("strong")
let funny = document.getElementById("funny")
let verystrong = document.getElementById("verystrong")
let password1;



let animation = document.getElementsByClassName("animation")[0]

let mainbutton = document.getElementsByClassName("mainsub")
Array.from(mainbutton).forEach((e)=>{
    e.addEventListener("click",()=>{
        animation.innerHTML = `<label for="number" style="font-size: 30px;color:white;">Length of password</label>
        <input type="number" name="number" id="enter_number">
        <button class="btn">Generate</button>`
        let number1 = document.getElementById("enter_number")
        let btn = document.getElementsByClassName("btn")[0]
        
        btn.addEventListener("click",()=>{
            if(number1.value ==""){
                password1 = new password()
            }
            else{
                password1 = new password(number1.value)
            }
            animation.innerHTML = `<div class="mainimg1"></div>`
            setTimeout(() => {
                if(e.id == "weak"){
                    animation.innerHTML = `<h1>Generated...</h1>
                    <div class="passworddone">${password1.generateweakpassword()}</div>`
                }
                else if(e.id == "strong"){
                    animation.innerHTML = `<h1>Generated...</h1>
                    <div class="passworddone">${password1.generatestrongpassword()}</div>`
                }
                else if(e.id == "funny"){
                    animation.innerHTML = `<h1>Generated...</h1>
                    <div class="passworddone">${password1.generatefunnypassword()}</div>`
                }
                else if(e.id == "verystrong"){
                    animation.innerHTML = `<h1>Generated...</h1>
                    <div class="passworddone">${password1.generateverystrongpassword()}</div>`
                }
            }, 6000);
        })
        
    })
})