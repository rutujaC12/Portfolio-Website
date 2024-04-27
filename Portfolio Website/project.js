// Sample projects data (replace with your actual projects data)
const projectsData = [
    { name: 'Cancer Prediction', category: 'machine-learning', image: 'imgProjects/CancerPrediction.jpg' },
    { name: 'Green Trust Rentals', category: 'web',  image: 'imgProjects/miniProject1.jpeg' },
    { name: 'Movie Recommendation System', category: 'machine-learning', image: 'imgProjects/MovieRecommendation.png' },
    { name: 'Traffic Sign Recognization', category: 'machine-learning', image: 'imgProjects/Traffic Sign.png' },
    { name: 'E-Commerce Sales Dashboard', category: 'other' /*, description: 'ANALYZED ECOMMERCE SALES DATA CREATED AN INTRACTIVE DASHBOARD USING POWERBI'*/, image: 'imgProjects/ecommerceSalesPowerBI.png' },    
    { name: 'Daily Expense Tracer', category: 'web' /*,description: 'Description of Project 6'*/, image: 'imgProjects/DailyExpenseTracker.jpg' },
    { name: 'Landing Page', category: 'web', /*description: 'Description of Project 3',*/ image: 'imgProjects/Landing Page.jpg' },
    { name: 'Travel Booking Website', category: 'web',/* description: 'Description',*/ image: 'imgProjects/TravelBookingWebsite.jpg' },
];

// Function to filter projects based on category
function filterProjects(category) {
    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML = ''; // Clear existing projects

    // Filter projects based on category
    const filteredProjects = category === 'all' ? projectsData : projectsData.filter(project => project.category === category);

    // Display filtered projects
    filteredProjects.forEach(project => {
        const projectElement = `
            <div class="project">
                <h2>${project.name}</h2>
                <img src="${project.image}" alt="${project.name}">
            </div>
        `;
        projectsSection.insertAdjacentHTML('beforeend', projectElement);
    });
}
