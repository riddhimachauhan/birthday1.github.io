document.addEventListener('DOMContentLoaded', () => {
    const candles = document.querySelectorAll('.candle');
    let blownOutCount = 0;

    candles.forEach(candle => {
        candle.addEventListener('click', () => {
            if (candle.getAttribute('data-lit') === 'true') {
                candle.setAttribute('data-lit', 'false');
                blownOutCount++;
                
                // Check if all candles are blown out
                if (blownOutCount === candles.length) {
                    // Remove all candles
                    candles.forEach(c => c.remove());
                    
                    // Display the GIF
                    document.querySelector('.gif-container').style.display = 'block';
                    
                    // Redirect to the new page
                    window.location.href = 'card.html';
                }
            }
        });
    });
});
