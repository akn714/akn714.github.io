document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'index.html' || currentPage === '') {
        loadBlogsList();
    } else if (currentPage === 'blog.html') {
        loadBlogDetail();
    }
});

// Load Blogs List
function loadBlogsList() {
    const blogList = document.getElementById('blog-list');
    if (!blogList) return;

    try {
        const data = BLOGS_DATA;
        blogList.innerHTML = '';

        if (data.blogs && data.blogs.length > 0) {
            data.blogs.forEach(blog => {
                const article = document.createElement('article');
                article.className = 'blog-card';
                article.innerHTML = `
                    <div class="blog-header">
                        <span class="blog-date">${blog.date}</span>
                        <span class="blog-read-time">${blog.readTime}</span>
                    </div>
                    <h2>${blog.title}</h2>
                    <p>${blog.excerpt}</p>
                    <a href="./blog.html?id=${blog.id}" class="read-more">Read more →</a>
                `;
                blogList.appendChild(article);
            });
        } else {
            blogList.innerHTML = '<p>No blogs found.</p>';
        }
    } catch (error) {
        console.error('Error loading blogs:', error);
        blogList.innerHTML = '<p>Error loading blogs. Please try again later.</p>';
    }
}

// Load Blog Detail
function loadBlogDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

    if (!blogId) {
        window.location.href = './index.html';
        return;
    }

    const content = document.getElementById('blog-content');
    if (!content) return;

    try {
        const blogsData = BLOGS_DATA;
        const blog = blogsData.blogs.find(b => b.id === blogId);

        if (!blog) {
            content.innerHTML = '<p>Blog not found.</p>';
            return;
        }

        // Update page title
        document.title = `${blog.title} - Adarsh Kumar`;

        // Get markdown content from embedded data
        const markdown = MARKDOWN_CONTENT[blog.file];
        if (!markdown) {
            content.innerHTML = '<p>Blog content not found.</p>';
            return;
        }

        // Configure marked with highlight.js for syntax highlighting
        marked.setOptions({
            highlight: function(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
                }
                return hljs.highlightAuto(code).value;
            },
            langPrefix: 'hljs language-',
            breaks: true
        });

        const htmlContent = marked.parse(markdown);

        // Render blog
        content.innerHTML = `
            <div class="blog-header-detail">
                <a href="./index.html" class="back-link">← Back to Blogs</a>
                <h1>${blog.title}</h1>
                <div class="blog-meta">
                    <span class="blog-date">${blog.date}</span>
                    <span class="separator">•</span>
                    <span class="blog-read-time">${blog.readTime}</span>
                </div>
            </div>
            <div class="blog-body">
                ${htmlContent}
            </div>
        `;

        // Highlight code blocks
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    } catch (error) {
        console.error('Error loading blog detail:', error);
        content.innerHTML = `<p>Error loading blog. ${error.message}</p>`;
    }
}
