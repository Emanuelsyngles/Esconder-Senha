function aparecer() {
    let inputPass = document.getElementById('senha')
    let btn = document.getElementById('btn-senha')

    if(inputPass.type === 'password') {
        inputPass.setAttribute('text')
    }
}