document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const demoMerchantBtn = document.getElementById('demoMerchantBtn');

    // Handle normal login form submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Attempting login with:', { email });

        // Connect to backend Spring Boot API endpoint when available
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: email, password: password })
            });

            if (response.ok) {
                window.location.href = '/dashboard.html';
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            // Fallback alert during offline design testing
            alert(`Login submitted for: ${email}`);
        }
    });

    // Quick fill for Demo Merchant button
    demoMerchantBtn.addEventListener('click', () => {
        document.getElementById('email').value = 'demo@annapurnapay.com';
        document.getElementById('password').value = 'Demo123456';
    });
});