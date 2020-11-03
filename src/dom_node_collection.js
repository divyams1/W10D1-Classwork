class DOMNodeCollection {
    constructor(array) {
        this.array = array;
    }    

    html(arg) {
        if (arg) {
            this.array.forEach( (ele) => {
                ele.innerHTML = arg;
            })
        } else {
            return this.array[0];
        }
    }

    empty() {
        this.html(' ');
    }
    
    append(ele) {
        debugger
        if(typeof ele === "string"){
            this.array.forEach((el) => {
                el.innerHTML += ele; 
            })
        }
        if(ele instanceof HTMLElement){
            this.array.forEach((el) => {
                el.innerHTML += ele.outerHTML;
            })
        }
    }

    attr(arg1, arg2) {
        if (arg2) {
            this.array.forEach( (ele)=> {
                ele.setAttribute( arg1, arg2)
            })
        } else {
           return this.array[0].getAttribute(arg1);
        }
    }

    addClass(str){
        this.array.forEach((ele) => {
            ele.classList.add(str);
        })
    }
    removeClass(str){
        this.array.forEach((ele) => {
            ele.classList.remove(str);
        })
    }
} 



module.exports = DOMNodeCollection;
 