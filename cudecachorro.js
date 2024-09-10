function teste(){

    var button = document.getElementById('start');
    button.classList.remove('pulse');
    void button.offsetWidth;
    button.classList.add('pulse');

    setTimeout(function() {
        window.location.href = 'amostradinho.html'; 
    }, 300);

    
}

