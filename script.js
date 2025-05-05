document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const leafCount = 15; // Jumlah daun
    
    for (let i = 0; i < leafCount; i++) {
        createLeaf();
    }
    
    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        
        // Pilih random jenis daun (bisa diganti dengan gambar daun Anda)
        const leafTypes = ['🍂', '🍁', '🌰'];
        const randomLeaf = leafTypes[Math.floor(Math.random() * leafTypes.length)];
        
        leaf.innerHTML = randomLeaf;
        leaf.style.fontSize = `${Math.random() * 10 + 10}px`;
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.top = `${Math.random() * -20}px`;
        leaf.style.animationDuration = `${Math.random() * 5 + 5}s`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        
        header.appendChild(leaf);
    }
});

document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector('#bawah');
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});