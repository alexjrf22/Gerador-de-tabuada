function Gerar()
{
    let numero = document.querySelector('#num')
    let tabuada = document.querySelector('#tabuada')

    if(num.value.length == 0){
        window.alert('Digite um número')
    }else{
        let num = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)

            c++
        }
    }

}

