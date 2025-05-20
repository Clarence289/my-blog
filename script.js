// Sample blog posts data
const posts = [
    {
      title: "Exploring the Mountains",
      content: "Join me as I explore the breathtaking mountain ranges and share my experiences.",
      image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
    },
    {
      title: "The Beauty of the Ocean",
      content: "A deep dive into the mesmerizing world beneath the ocean's surface.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      title: "City Lights at Night",
      content: "Capturing the vibrant energy of city life after the sun sets.",
      image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
    }
  ];
  
  
  // Function to display blog posts
  function displayPosts() {
    const postsContainer = document.getElementById("blog-posts");
    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      postDiv.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="post-content">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        </div>
      `;
      postsContainer.appendChild(postDiv);
    });
  }
  
  // Handle contact form submission
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Initialize the blog posts on page load
  document.addEventListener("DOMContentLoaded", displayPosts);
  