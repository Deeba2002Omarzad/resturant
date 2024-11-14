


window.onload = function() {
    let count = 0;
    const counter = document.getElementById('counter1');
    const target = 300; // Change this to your target number
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Start counting when 10% of the counter is visible
    };

    function startCounting() {
        const interval = setInterval(function() {
            counter.textContent = count;
            count++;
            if (count > target) {
                clearInterval(interval);
            }
        }, 0.001); // Count every 100 milliseconds
    }

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
                observer.disconnect(); // Stop observing once started
            }
        });
    }, options);

    observer.observe(counter);
};