<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daddy's Kitchen Pokhara - Best Food in Pokhara</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <h2><i class="fas fa-utensils"></i> Daddy's Kitchen</h2>
                </div>
                <ul class="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Welcome to <span>Daddy's Kitchen</span></h1>
            <p>Authentic Nepali & Continental Flavors from Pokhara</p>
            <div class="hero-buttons">
                <a href="#menu" class="btn btn-primary">View Menu</a>
                <a href="#contact" class="btn btn-secondary">Book Table</a>
            </div>
        </div>
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Daddy's Kitchen">
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2>About Us</h2>
                <p>Discover the heart of Pokhara's culinary scene</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h3>Family Recipes with Love</h3>
                    <p>Daddy's Kitchen brings you the authentic taste of Nepal combined with international flavors. Established in the beautiful city of Pokhara, we serve fresh, homemade food prepared with love and traditional recipes passed down through generations.</p>
                    <div class="features">
                        <div class="feature">
                            <i class="fas fa-leaf"></i>
                            <span>Fresh Ingredients</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-fire"></i>
                            <span>Live Cooking</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-clock"></i>
                            <span>24/7 Service</span>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1579586140626-3efb9c394a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kitchen">
                </div>
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="menu">
        <div class="container">
            <div class="section-header">
                <h2>Our Menu</h2>
                <p>Delicious dishes made with love</p>
            </div>
            <div class="menu-tabs">
                <button class="tab-btn active" data-tab="nepali">Nepali</button>
                <button class="tab-btn" data-tab="continental">Continental</button>
                <button class="tab-btn" data-tab="desserts">Desserts</button>
            </div>
            <div class="menu-content">
                <div class="menu-grid active" data-tab="nepali">
                    <div class="menu-item">
                        <img src="https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Momo">
                        <h4>Chicken Momo</h4>
                        <p>Juicy steamed dumplings with spicy chutney</p>
                        <span class="price">NPR 350</span>
                    </div>
                    <div class="menu-item">
                        <img src="https://images.unsplash.com/photo-1632849735925-7653b9ab8f96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Thakali">
                        <h4>Thakali Set</h4>
                        <p>Complete traditional meal with dal bhat</p>
                        <span class="price">NPR 450</span>
                    </div>
                    <div class="menu-item">
                        <img src="https://images.unsplash.com/photo-1579586140626-3efb9c394a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sekuwa">
                        <h4>Chicken Sekuwa</h4>
                        <p>Grilled chicken skewers with spices</p>
                        <span class="price">NPR 400</span>
                    </div>
                </div>
                <div class="menu-grid" data-tab="continental">
                    <div class="menu-item">
                        <img src="https://images.unsplash.com/photo-1529699211951-766dc982dbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Pizza">
                        <h4>Margherita Pizza</h4>
                        <p>Fresh mozzarella and basil pizza</p>
                        <span class="price">NPR 650</span>
                    </div>
                    <div class="menu-item">
                        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Pasta">
                        <h4>Penne Arrabbiata</h4>
                        <p>Spicy tomato pasta with garlic</p>
                        <span class="price">NPR 550</span>
                    </div>
                    <div class="menu-item">
                        <img src="https://images.unsplash.com/photo-1541599468178-a16d83a6efcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Burger">
                        <h4>Classic Burger</h4>
                        <p>Juicy beef patty with fresh toppings</p>
                        <span class="price">NPR 500</span>
                    </div>
                </div>
                <div class="menu-grid" data-tab="desserts">
                    <div class="menu-item">
                        <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Gulab Jamun">
                        <h4>Gulab Jamun</h4>
                        <p>Sweet syrupy dough balls</p>
                        <span class="price">NPR 150</span>
                    </div>
                    <div class="menu-item">
                        <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Ice Cream">
                        <h4>Sel Roti</h4>
                        <p>Traditional Nepali rice doughnut</p>
                        <span class="price">NPR 120</span>
                    </div>
                    <div class="menu-item">
                        <img src="https://images.unsplash.com/photo-1562440499-64e1949af8ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Lassi">
                        <h4>Mango Lassi</h4>
                        <p>Creamy yogurt drink with mango</p>
                        <span class="price">NPR 180</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery">
        <div class="container">
            <div class="section-header">
                <h2>Gallery</h2>
                <p>Moments from Daddy's Kitchen</p>
            </div>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Food 1">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1579586140626-3efb9c394a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Food 2">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Food 3">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1529699211951-766dc982dbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Food 4">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Food 5">
                </div>
                <div class="gallery-item">
                    <img src="https://images.unsplash.com/photo-1541599468178-a16d83a6efcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Food 6">
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2>Contact Us</h2>
                <p>Visit us in beautiful Pokhara</p>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Location</h4>
                            <p>Lakeside, Pokhara, Nepal</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h4>Phone</h4>
                            <p>+977 980-1234567</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <p>daddyskitchen@email.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <h4>Hours</h4>
                            <p>10AM - 11PM Daily</p>
                        </div>
                    </div>
                </div>
                <form class="contact-form">
                    <h3>Send us a message</h3>
                    <div class="form-group">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" placeholder="Phone Number">
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><i class="fas fa-utensils"></i> Daddy's Kitchen</h3>
                    <p>Your favorite food destination in Pokhara. Taste the tradition!</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Daddy's Kitchen Pokhara. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Menu tabs functionality
        const tabBtns = document.querySelectorAll('.tab-btn');
        const menuGrids = document.querySelectorAll('.menu-grid');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                menuGrids.forEach(g => g.classList.remove('active'));
                
                btn.classList.add('active');
                document.querySelector(`[data-tab="${btn.dataset.tab}"]`).classList.add('active');
            });
        });

        // Smooth scrolling for navigation links
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
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });

        // Active nav link on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-menu a');

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    </script>
</body>
</html>
