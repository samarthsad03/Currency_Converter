const panels = document.querySelectorAll('.panel') // query selector  can select anything whether its a paragraph or class or id  and querryselectorall puts all of the pannel into type of node list which is similar to array

panels.forEach((panel) =>{  //for each is a high order array method these type of method take function as an argument
    console.log("ADDING EVENT LISTENER")

    panel.addEventListener('click', () => {
        let active_panel = document.querySelector(".active")
        active_panel.classList.remove("active") 
        panel.classList.add('active')
    } )
})