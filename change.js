        const themeToggle = document.getElementById('theme-toggle');
        const lightIcon = document.getElementById('light-icon');
        const darkIcon = document.getElementById('dark-icon');

        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                lightIcon.style.display = 'block';
                darkIcon.style.display = 'none';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'block';
            }
        }

        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'block';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            lightIcon.style.display = 'block';
            darkIcon.style.display = 'none';
        }

        // Add event listener to button
        themeToggle.addEventListener('click', toggleTheme);