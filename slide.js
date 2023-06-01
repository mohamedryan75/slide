let slidcontener=document.getElementById("slidcontener");
      let pre=document.getElementById("pre");
      let next=document.getElementById("next");
      let arryimg=[`<img src="IMG_20220120_154944.jpg">`,
          `<img src="IMG_20220309_171207.jpg">`,
          `<img src="IMG_20220309_171332.jpg">`,
          `<img src="IMG_20220309_171428.jpg">`,
          `<img src="IMG_20220309_171535.jpg">`];
          pre.setAttribute("disabled","disabled");
          let i=0;
          slidcontener.innerHTML+=arryimg[i];
          slidcontener.innerHTML+=`<p>#${i+1} of ${arryimg.length}</p>`
        next.addEventListener("click",(e)=>{
          pre.removeAttribute("disabled")
          i++
          slidcontener.innerHTML+=arryimg[i];
          slidcontener.innerHTML+=`<p>#${i+1} of ${arryimg.length}</p>`
          if (i+1===arryimg.length) {
            next.setAttribute("disabled","disabled");
          }
        })
        pre.addEventListener("click",(e)=>{
          next.removeAttribute("disabled")
          i--
          slidcontener.innerHTML+=arryimg[i];
          slidcontener.innerHTML+=`<p>#${i+1} of ${arryimg.length}</p>`
          if (i===0) {
            pre.setAttribute("disabled","disabled");
          }
        });
        let upnumbers=document.getElementsByClassName("upnumbers")[0]
        let numbers=document.querySelectorAll(".numbers");
        numbers.forEach((items,index)=>items.addEventListener("click",e=>{
         upnumbers.getElementsByClassName("active-l")[0].classList.remove("active-l")
          items.classList.add("active-l");
          slidcontener.innerHTML+=arryimg[index];
          slidcontener.innerHTML+=`<p>#${index+1} of ${arryimg.length}</p>`
          i=index;
           if(index===arryimg.length-1){
            next.setAttribute("disabled","disabled");
            pre.removeAttribute("disabled");
           }else if(index===0){
            next.removeAttribute("disabled");
            pre.setAttribute("disabled","disabled");
           }else{
            pre.removeAttribute("disabled");
            next .removeAttribute("disabled");
           }
        }))
        