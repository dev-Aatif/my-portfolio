// Blog post data structure
const blogPosts = [
    {
        title: "Example Blog Post",
        slug: "example-blog-post",
        excerpt: "This is a preview of the blog post content...",
        date: "2025-05-22",
        tags: ["writing", "creativity"],
        content: `
            <p>Full blog post content goes here...</p>
            <h2>Section Title</h2>
            <p>More content...</p>
        `
    }
    // Add more posts here
];

// Create HTML for a blog post card
function createPostCard(post) {
    return `
        <article class="post-card">
            <div class="post-card-content">
                <h2>${post.title}</h2>
                <div class="post-meta">
                    <time datetime="${post.date}">${formatDate(post.date)}</time>
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p>${post.excerpt}</p>
                <a href="/blog/posts/${post.slug}.html" class="btn text">Read More →</a>
            </div>
        </article>
    `;
}

// Format date for display
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Display blog posts on the blog index page
function displayBlogPosts() {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;

    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    // Create HTML for all posts
    const postsHTML = sortedPosts.map(post => createPostCard(post)).join('');
    postsContainer.innerHTML = postsHTML;
}

// Initialize blog functionality
document.addEventListener('DOMContentLoaded', () => {
    displayBlogPosts();
});
