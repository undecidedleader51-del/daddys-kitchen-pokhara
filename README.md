 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daddy's Kitchen Pokhara - Best Food in Pokhara</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
        }

        /* Header */
        header {
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .logo {
            font-size: 2rem;
            font-weight: bold;
            color: white;
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #ffd700;
        }

        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .hamburger span {
            width: 25px;
            height: 3px;
            background: white;
            margin: 3px 0;
            transition: 0.3s;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23ff6b35" width="1200" height="800"/><circle fill="%23f7931e" cx="300" cy="200" r="150"/><circle fill="%23ffd700" cx="900" cy="300" r="100"/><rect fill="%23333" x="200" y="500" width="200" height="200" rx="20"/></svg>');
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            margin-top: 70px;
        }

        .hero-content h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero-content p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }

        .cta-button {
            display: inline-block;
            background: #ffd700;
            color: #333;
            padding: 15px 40px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.2rem;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        /* Sections */
        .section {
            padding: 80px 0;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-padding {
            padding: 0 2rem;
        }

        h2 {
            text-align: center;
            font-size: 3rem;
            margin-bottom: 3rem;
            color: #ff6b35;
        }

        /* About Section */
        .about {
            background: #f8f9fa;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-text p {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            text-align: justify;
        }

        .about-image {
            text-align: center;
        }

        .about-image img {
            max-width: 100%;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        /* Menu Section */
        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .menu-item {
            background: white;
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s;
        }

        .menu-item:hover {
            transform: translateY(-10px);
        }

        .menu-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 15px;
            margin-bottom: 1rem;
        }

        .menu-item h3 {
            color: #ff6b35;
            margin-bottom: 1rem;
        }

        .price {
            font-size: 1.5rem;
            font-weight: bold;
            color: #f7931e;
            margin: 1rem 0;
        }

        /* Contact Section */
        .contact {
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }

        .contact-info h3 {
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .contact-item i {
            font-size: 1.5rem;
            margin-right: 1rem;
            width: 30px;
        }

        .contact-form {
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            background: rgba(255,255,255,0.9);
        }

        .form-group textarea {
            height: 120px;
            resize: vertical;
        }

        /* Footer */
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 2rem 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }

            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: #ff6b35;
                flex-direction: column;
                padding: 1rem;
            }

            .nav-links.active {
                display: flex;
            }

            .hero-content h1 {
                font-size: 2.5rem;
            }

            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .section-padding {
                padding: 0 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <nav>
            <a href="#" class="logo">🍽️ Daddy's Kitchen</a>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="hamburger" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Welcome to Daddy's Kitchen</h1>
            <p>Best Food Experience in Pokhara<br>Nepali & Continental Delights</p>
            <a href="#menu" class="cta-button">View Our Menu</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about">
        <div class="section-padding">
            <h2>About Us</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Daddy's Kitchen Pokhara brings you the authentic taste of Nepal combined with international flavors. Located in the heart of beautiful Pokhara, we serve fresh, delicious food made with love and traditional recipes.</p>
                    <p>From momos to momo burgers, thukpa to pizzas, we have something for everyone. Come enjoy our cozy ambiance with lake views and friendly service!</p>
                </div>
                <div class="about-image">
                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect fill='%23f8f9fa' width='400' height='300'/><rect fill='%23ff6b35' x='50' y='50' width='300' height='200' rx='20'/><circle fill='%23ffd700' cx='200' cy='150' r='80'/><rect fill='%23f7931e' x='100' y='220' width='200' height='30' rx='5'/></svg>" alt="Restaurant Interior">
                </div>
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="section">
        <div class="section-padding">
            <h2>Our Menu</h2>
            <div class="menu-grid">
                <div class="menu-item">
                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect fill='%23ff6b35' width='300' height='200' rx='15'/><circle fill='%23fff' cx='75' cy='75' r='30'/><circle fill='%23fff' cx='225' cy='75' r='30'/><rect fill='%23f7931e' x='100' y='120' width='100' height='40' rx='5'/></svg>" alt="Momo">
                    <h3>Chicken Momo</h3>
                    <p class="price">NPR 250</p>
                    <p>Juicy chicken dumplings served with spicy tomato chutney</p>
                </div>
                <div class="menu-item">
                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><circle fill='%23ffd700' cx='150' cy='100' r='90'/><rect fill='%23f7931e' x='120' y='140' width='60' height='30' rx='5'/><rect fill='%23ff6b35' x='80' y='60' width='140' height='20' rx='3'/></svg>" alt="Pizza">
                    <h3>Margherita Pizza</h3>
                    <p class="price">NPR 450</p>
                    <p>Fresh mozzarella, tomatoes & basil on thin crust</p>
                </div>
                <div class="menu-item">
                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect fill='%23333' x='50' y='50' width='200' height='100' rx='10'/><rect fill='%23ff6b35' x='70' y='70' width='160' height='20'/><rect fill='%23f7931e' x='70' y='100' width='160' height='20'/><circle fill='%23ffd700' cx='150' cy='170' r='15'/></svg>" alt="Thukpa">
                    <h3>Chicken Thukpa</h3>
                    <p class="price">NPR 320</p>
                    <p>Traditional Nepali noodle soup with chicken & vegetables</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
        <div class="section-padding">
            <h2 style="color: white;">Visit Us</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>📍 Lakeside, Pokhara</h3>
                    <div class="contact-item">
                        <span>📱</span>
                        <div>
                            <strong>+977 980-1234567</strong><br>
                            10AM - 10PM Daily
                        </div>
                    </div>
                    <div class="contact-item">
                        <span>📧</span>
                        <div>
                            <strong>daddyskitchenpokhara@gmail.com</strong>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span>📍</span>
                        <div>
                            <strong>Lakeside Road 6, Pokhara</strong><br>
                            Near Fewa Lake
                        </div>
                    </div>
                </div>
                <form class="contact-form">
                    <div class="form-group">
                        <input type="text" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" placeholder="Your Phone">
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="cta-button">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Daddy's Kitchen Pokhara. All rights reserved. | Made with ❤️ in Pokhara</p>
    </footer>

    <script>
        // Mobile menu toggle
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon. 🍽️');
            this.reset();
        });

        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 107, 53, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, #ff6b35, #f7931e)';
                header.style.backdropFilter = 'none';
            }
        });
    </script>
</body>
</html>
