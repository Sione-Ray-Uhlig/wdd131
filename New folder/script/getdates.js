const year = document.querySelector("#yearjs");
        const today = new Date();
        year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

        const lastModified = document.lastModified;
        document.getElementById('lastModified').textContent += lastModified;

        // Hamburger control 
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navigation = document.querySelector('.navigation');

            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navigation.classList.toggle('active');
            });

            document.addEventListener('click', function(event) {
                if (!hamburger.contains(event.target) && !navigation.contains(event.target)) {
                    hamburger.classList.remove('active');
                    navigation.classList.remove('active');
                }
            });
        });
        document.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
            
            // Increment review count
            let reviewCount = localStorage.getItem('reviewCount');
            reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
            localStorage.setItem('reviewCount', reviewCount);

            // Redirect to the review page
            window.location.href = 'review.html';
        });