
    function statesUF(){
        const UFselect = document.querySelector('select[name=state]')

            fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
            .then( res  => res.json() )
            .then(states => {

                for(const state of states){
                    UFselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
                }
            })
        }

        statesUF()

        function getCity(event){
            const citySelect = document.querySelector('select[name=city]')
            const stateHiddenSelect = document.querySelector('input[name=states]')
            
            const UFvalue = event.target.value

            const indexOfSelectedState =  event.target.selectedIndex
            stateHiddenSelect.value = event.target.options[indexOfSelectedState].text

            const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UFvalue}/municipios`

            citySelect.innerHTML = '<option value>Selecione uma cidade</option>'
            citySelect.disabled = true

            fetch(url)
            .then( res  => res.json() )
            .then( citys => {

                for(const city of citys){
                    citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
                }
                citySelect.disabled = false
            })
        }

        document.querySelector('select[name=state]')
        .addEventListener('change', getCity)

        // // Items Collect
         const itemsToCollect = document.querySelectorAll('.itemsCollect li')
        

        for (const item of itemsToCollect){
            item.addEventListener("click", takeItem)
        }

        const collectedItems = document.querySelector('input[name=items]')

        
        let selectedItems = []


        function takeItem(event){
            const itemLi = event.target


             itemLi.classList.toggle('selected')

             const itemId = itemLi.dataset.id

        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item == itemId
            return itemFound
        })
            
        // 

        if( alreadySelected >=0){
            const filteredItems = selectedItems.filter( item =>{
                const itemIsDifferent = item != itemId
                return itemIsDifferent
            })
            selectedItems = filteredItems
        }else{
            selectedItems.push(itemId)
        }
        collectedItems.value = selectedItems

}

        
        