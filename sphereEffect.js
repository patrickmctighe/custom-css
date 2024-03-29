window.onload = function() {
    var sphereContainer = document.querySelector('.headerEffect');
    var sphereContainerWidth = sphereContainer.offsetWidth;
    var minSphereSize = 15;
    var maxSphereSize = 50;
    var numberOfSpheres = Math.ceil(sphereContainerWidth / minSphereSize); // Use minSphereSize to ensure enough spheres are created

    var sphereTemplate = document.querySelector('.sphere');
    animateSphere(sphereTemplate, minSphereSize, maxSphereSize); // Animate the first sphere

    for (var i = 1; i < numberOfSpheres; i++) { // Start from 1 because the first sphere is already in the HTML
        var sphere = sphereTemplate.cloneNode(true);
        animateSphere(sphere, minSphereSize, maxSphereSize);
        sphereContainer.appendChild(sphere);
    }
}

function animateSphere(sphere, minSize, maxSize) {
    var randomSize = Math.random() * (maxSize - minSize) + minSize; // Generate a random number between minSize and maxSize
    var randomDelay = Math.random() * 5; // Generate a random number between 0 and 2
    sphere.style.width = randomSize + 'px'; // Apply the random size to the width of the sphere
    sphere.style.height = randomSize + 'px'; // Apply the random size to the height of the sphere
    sphere.style.position = 'relative';
    sphere.style.animation = `moveUpDown 3s ease-in-out ${randomDelay}s infinite alternate`; // Add CSS animation with random delay
}

// CSS for the animation
var style = document.createElement('style');
style.innerHTML = `
@keyframes moveUpDown {
    0% { transform: translateY(0); }
    100% { transform: translateY(50%); }
}`;
document.head.appendChild(style);