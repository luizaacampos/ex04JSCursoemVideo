function calcular() {
    var num = document.getElementById('numero')
    var res = document.getElementById('res')

    res.innerHTML = ''
    for (c = 1; c <= 10; c++){
        let n = Number(num.value)
        var item = document.createElement('option')
        item.text = `${c} x ${n} = ${c*n}`
        item.value = `tab${c}` 
        res.appendChild(item)
    }

}