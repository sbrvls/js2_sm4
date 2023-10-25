const buttons = document.querySelectorAll('.tab_header_button')
const tabs = document.querySelectorAll('.tab_body')

for(let x = 0; x < buttons.length; x++){
    buttons[0].style.background ="#234338"
    buttons[0].style.borderRadius ="6px"
    buttons[0].style.color ="white"
    buttons[x].addEventListener('click', () => {
        for(let y = 0; y < tabs.length; y++){
            if (x == y){
                tabs[y].classList.add('tab_body_active')
                buttons[y].style.background ="#234338"
                buttons[y].style.borderRadius ="6px"
                buttons[y].style.color ="white"
            }else{
                tabs[y].classList.remove('tab_body_active')
                buttons[y].style.color = "#4C4C4C"
                buttons[y].style.background = "none"
            }
           
                
        }

        
    }) 
    
}