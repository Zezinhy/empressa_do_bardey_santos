/* Reset e Variáveis */
:root {
    --primary: #6C63FF;
    --primary-dark: #5A52D5;
    --secondary: #FF6584;
    --accent: #36D1DC;
    --dark: #2D2B55;
    --light: #F8F9FA;
    --gray: #6C757D;
    --success: #28a745;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

section {
    padding: 5rem 0;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2.5rem;
    color: var(--dark);
    margin-bottom: 1rem;
}

.section-header p {
    font-size: 1.1rem;
    color: var(--gray);
    max-width: 600px;
    margin: 0 auto;
}

.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-block;
    text-align: center;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(108, 99, 255, 0.3);
}

.btn-secondary {
    background: linear-gradient(135deg, var(--secondary), #ff4d6d);
    color: white;
}

.btn-secondary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 101, 132, 0.3);
}

.btn-outline {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-outline:hover {
    background: var(--primary);
    color: white;
}

.btn-large {
    padding: 1rem 2rem;
    font-size: 1.1rem;
}

.btn-block {
    display: block;
    width: 100%;
}

/* Header */
header {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.logo h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark);
}

nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    color: var(--dark);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

nav a:hover {
    color: var(--primary);
}

nav a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--primary);
    transition: width 0.3s;
}

nav a:hover::after {
    width: 100%;
}

.auth-buttons {
    display: flex;
    gap: 1rem;
}

.mobile-menu-btn {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--dark);
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #6C63FF 0%, #5A52D5 100%);
    color: white;
    padding: 6rem 0;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M0,0 V100 Q500,50 1000,100 V0 Z" fill="rgba(255,255,255,0.1)"/></svg>');
    background-size: cover;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-text h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero-text p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
}

.hero-image {
    position: relative;
    height: 400px;
}

.floating-card {
    position: absolute;
    background: white;
    color: var(--dark);
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    width: 200px;
    text-align: center;
    transition: transform 0.3s;
}

.floating-card:hover {
    transform: translateY(-10px);
}

.floating-card i {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 1rem;
}

.floating-card h4 {
    margin-bottom: 0.5rem;
}

.floating-card p {
    font-size: 0.9rem;
    color: var(--gray);
}

.card-1 {
    top: 20px;
    left: 0;
    animation: float 3s ease-in-out infinite;
}

.card-2 {
    top: 120px;
    right: 0;
    animation: float 3s ease-in-out infinite 1s;
}

.card-3 {
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    animation: float 3s ease-in-out infinite 2s;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Services Section */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.service-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.8rem;
}

.service-card h3 {
    margin-bottom: 1rem;
    color: var(--dark);
}

/* Features Section */
.features {
    background: var(--light);
}

.features-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.feature-image {
    display: flex;
    justify-content: center;
}

.phone-mockup {
    width: 300px;
    height: 600px;
    background: var(--dark);
    border-radius: 40px;
    padding: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    position: relative;
}

.phone-mockup::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 20px;
    background: var(--dark);
    border-radius: 0 0 10px 10px;
}

.phone-screen {
    background: white;
    height: 100%;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.app-header {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.app-content {
    flex: 1;
    padding: 1.5rem;
}

.destination-card {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    margin-bottom: 1.5rem;
}

.destination-card img {
    width: 100%;
    height: 120px;
    object-fit: cover;
}

.destination-info {
    padding: 1rem;
}

.destination-info h5 {
    margin-bottom: 0.5rem;
}

.destination-info p {
    color: var(--primary);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.rating {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--gray);
    font-size: 0.9rem;
}

.rating i {
    color: #FFD700;
}

.recommendation h5 {
    margin-bottom: 1rem;
    color: var(--dark);
}

.rec-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
}

.rec-item i {
    color: var(--primary);
}

.feature-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.feature-item {
    display: flex;
    gap: 1.5rem;
}

.feature-number {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    flex-shrink: 0;
}

.feature-details h3 {
    margin-bottom: 0.5rem;
    color: var(--dark);
}

/* Community Section */
.community-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.stat {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.stat h3 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.testimonial-content {
    margin-bottom: 1.5rem;
    font-style: italic;
    color: var(--gray);
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.testimonial-author img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.testimonial-author h4 {
    margin-bottom: 0.25rem;
    color: var(--dark);
}

.testimonial-author span {
    color: var(--gray);
    font-size: 0.9rem;
}

/* Premium Section */
.premium {
    background: linear-gradient(135deg, #2D2B55 0%, #1a1a2e 100%);
    color: white;
}

.premium .section-header h2,
.premium .section-header p {
    color: white;
}

.premium-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.premium-card {
    background: white;
    color: var(--dark);
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    position: relative;
}

.premium-badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, var(--secondary), #ff4d6d);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
}

.premium-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
}

.premium-header h3 {
    margin-bottom: 1rem;
    color: var(--dark);
}

.price {
    display: flex;
    align-items: baseline;
    justify-content: center;
}

.currency {
    font-size: 1.2rem;
    color: var(--gray);
}

.amount {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--primary);
    margin: 0 0.25rem;
}

.period {
    color: var(--gray);
}

.premium-features {
    list-style: none;
    margin-bottom: 2rem;
}

.premium-features li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
    padding: 0.5rem 0;
}

.premium-features i {
    color: var(--success);
}

.premium-benefits {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.benefit-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
}

.benefit-icon {
    width: 60px;
    height: 60px;
    background: rgba(255,255,255,0.1);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    font-size: 1.5rem;
    flex-shrink: 0;
}

.benefit-details h4 {
    margin-bottom: 0.5rem;
    color: white;
}

.benefit-details p {
    color: rgba(255,255,255,0.7);
}

/* CTA Section */
.cta {
    background: linear-gradient(135deg, var(--secondary), #ff4d6d);
    color: white;
    text-align: center;
}

.cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.cta-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.cta-buttons .btn-outline {
    border-color: white;
    color: white;
}

.cta-buttons .btn-outline:hover {
    background: white;
    color: var(--secondary);
}

/* Footer */
footer {
    background: var(--dark);
    color: white;
    padding: 4rem 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    margin-bottom: 1.5rem;
    color: white;
}

.footer-section ul {
    list-style: none;
}

.footer-section li {
    margin-bottom: 0.75rem;
}

.footer-section a {
    color: rgba(255,255,255,0.7);
