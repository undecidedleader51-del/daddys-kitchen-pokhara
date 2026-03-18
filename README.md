<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daddy's Kitchen Pokhara - Authentic Nepali Cuisine</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Preloader -->
    <div class="preloader">
        <div class="loader">
            <i class="fas fa-utensils"></i>
        </div>
    </div>
    <a href="https://wa.me/9779800000000?text=Hello%20Daddy's%20Kitchen!%20I'd%20like%20to%20make%20a%20reservation." class="whatsapp-btn" target="_blank">
        <i class="fab fa-whatsapp"></i>
        <span>Order Now</span>
    </a>
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <h2><i class="fas fa-fire"></i> Daddy's Kitchen</h2>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#menu" class="nav-link">Menu</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#reservation" class="nav-link">Reserve</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    <section id="home" class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="hero-pattern"></div>
            <h1 class="hero-title">Daddy's Kitchen</h1>
            <p class="hero-subtitle">Authentic Nepali Flavors</p>
            <div class="hero-tagline">
                कायापलट ल्याउन्छौ स्वदेशमै, युवा उद्यमशीलताको सम्मान गरौ
            </div>
            <div class="hero-buttons">
                <a href="#reservation" class="btn btn-primary">Book Table</a>
                <a href="#menu" class="btn btn-secondary">View Menu</a>
            </div>
        </div>
    </section>
    <section id="menu" class="menu-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Menu</h2>
                <div class="section-line"></div>
            </div>
            <div class="menu-tabs">
                <button class="tab-btn active" data-tab="appetizers">Appetizers</button>
                <button class="tab-btn" data-tab="khaja">Khaja Set</button>
                <button class="tab-btn" data-tab="indian">Indian Main Course</button>
                <button class="tab-btn" data-tab="tandoor">Tandoor</button>
            </div>
            <div class="menu-content active" id="appetizers">
                <div class="food-grid">
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop" alt="Aloo Stick">
                            <div class="food-overlay">
                                <span class="price">Rs 60</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Aloo Stick</h3>
                            <p>Crispy potato sticks with authentic spices</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1598517374006-764c8f6a702a?w=400&h=300&fit=crop" alt="French Fries">
                            <div class="food-overlay">
                                <span class="price">Rs 185</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>French Fries</h3>
                            <p>Golden crispy fries with special seasoning</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1603048297194-8f7d9e7f8a0f?w=400&h=300&fit=crop" alt="Crispy Golden Corn">
                            <div class="food-overlay">
                                <span class="price">Rs 220</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Crispy Golden Corn</h3>
                            <p>Sweet corn fritters with peri peri masala</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1579586140626-0a95ee3b0b1e?w=400&h=300&fit=crop" alt="Chicken Chilly">
                            <div class="food-overlay">
                                <span class="price">Rs 400</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Chicken Chilly</h3>
                            <p>Spicy chicken with bell peppers and onions</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1579586140626-0a95ee3b0b1e?w=400&h=300&fit=crop" alt="Buffalo Wings">
                            <div class="food-overlay">
                                <span class="price">Rs 460</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Buffalo Wings</h3>
                            <p>Spicy buffalo wings with blue cheese dip</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu-content" id="khaja">
                <div class="food-grid">
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1632393886846-b31d6ab672f1?w=400&h=300&fit=crop" alt="Veg Set">
                            <div class="food-overlay">
                                <span class="price">Rs 320</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Veg Khaja Set</h3>
                            <p>Complete vegetarian platter with 5 items</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" alt="Chicken Set">
                            <div class="food-overlay">
                                <span class="price">Rs 400</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Chicken Khaja Set</h3>
                            <p>Chicken platter with traditional sides</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1603048297194-8f7d9e7f8a0f?w=400&h=300&fit=crop" alt="Mutton Set">
                            <div class="food-overlay">
                                <span class="price">Rs 480</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Mutton Khaja Set</h3>
                            <p>Premium mutton platter with 6 items</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu-content" id="indian">
                <div class="food-grid">
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1615484478152-b548dd3ff0e0?w=400&h=300&fit=crop" alt="Paneer Butter Masala">
                            <div class="food-overlay">
                                <span class="price">Rs 420</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Paneer Butter Masala</h3>
                            <p>Cottage cheese in rich tomato gravy</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1599811548108-ebc8847d0479?w=400&h=300&fit=crop" alt="Butter Chicken">
                            <div class="food-overlay">
                                <span class="price">Rs 450</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Butter Chicken</h3>
                            <p>Signature creamy butter chicken</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" alt="Chicken Curry">
                            <div class="food-overlay">
                                <span class="price">Rs 360</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Chicken Curry</h3>
                            <p>Traditional home-style chicken curry</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1603048297194-8f7d9e7f8a0f?w=400&h=300&fit=crop" alt="Mutton Curry">
                            <div class="food-overlay">
                                <span class="price">Rs 550</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Mutton Curry</h3>
                            <p>Slow-cooked mutton in aromatic spices</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu-content" id="tandoor">
                <div class="food-grid">
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop" alt="Chicken Tandoori">
                            <div class="food-overlay">
                                <span class="price">Rs 500/950</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Chicken Tandoori</h3>
                            <p>Full/Half clay oven roasted chicken</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1579586140626-0a95ee3b0b1e?w=400&h=300&fit=crop" alt="Chicken Tikka">
                            <div class="food-overlay">
                                <span class="price">Rs 520</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Chicken Tikka</h3>
                            <p>Juicy chicken skewers with yogurt marinade</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1615484478152-b548dd3ff0e0?w=400&h=300&fit=crop" alt="Paneer Tikka">
                            <div class="food-overlay">
                                <span class="price">Rs 500</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Paneer Tikka</h3>
                            <p>Smoked cottage cheese skewers</p>
                        </div>
                    </div>
                    <div class="food-card">
                        <div class="food-image">
                            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop" alt="Fish Tikka">
                            <div class="food-overlay">
                                <span class="price">Rs 700</span>
                            </div>
                        </div>
                        <div class="food-info">
                            <h3>Fish Tikka</h3>
                            <p>Premium fish marinated in tandoori spices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="about" class="about-section">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>Authentic Nepali Experience</h2>
                    <p>Discover the rich flavors of Nepal at Daddy's Kitchen Pokhara. Our young entrepreneurs bring you an authentic culinary journey with traditional recipes and modern presentation. Every dish tells a story of our heritage and passion for excellence.</p>
                    <div class="about-stats">
                        <div class="stat">
                            <h3>500+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div class="stat">
                            <h3>50+</h3>
                            <p>Menu Items</p>
                        </div>
                        <div class="stat">
                            <h3>5★</h3>
                            <p>Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="reservation" class="reservation-section">
        <div class="container">
            <div class="section-header">
                <h2>Book Your Table</h2>
                <div class="section-line"></div>
            </div>
            <form class="reservation-form">
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" placeholder="Full Name" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" placeholder="Phone Number" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="email" placeholder="Email (Optional)">
                    </div>
                    <div class="form-group">
                        <input type="number" placeholder="Number of People" min="1" max="20" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="date" required>
                    </div>
                    <div class="form-group">
                        <select required>
                            <option value="">Select Time</option>
                            <option>12:00 PM</option>
                            <option>1:00 PM</option>
                            <option>2:00 PM</option>
                            <option>7:00 PM</option>
                            <option>8:00 PM</option>
                            <option>9:00 PM</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <textarea placeholder="Special Requests (Optional)"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-large">Reserve Table</button>
            </form>
        </div>
    </section>
    <section id="contact" class="maps-section">
        <div class="container">
            <div class="section-header">
                <h2>Visit Us</h2>
                <div class="section-line"></div>
            </div>
            <div class="maps-container">
                <div id="map" class="map"></div>
                <div class="contact-info">
                    <h3>Daddy's Kitchen Pokhara</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Lakeside, Pokhara-6, Kaski</p>
                    <p><i class="fas fa-phone"></i> +977 9800 000 000</p>
                    <p><i class="fas fa-clock"></i> 11AM - 10PM (Daily)</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Daddy's Kitchen</h3>
                    <p>Authentic Nepali cuisine with modern twist. Experience the true flavors of Nepal in Pokhara.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                          <li><a href="#reservation">Book Table</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Daddy's Kitchen Pokhara. All rights reserved. | Made with ❤️ in Nepal</p>
            </div>
        </div>
    </footer>
<script src="script.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
</body>
</html>
