// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(event.target) && 
            !mobileMenuToggle.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });
    
    // Populate featured manga
    const featuredMangaGrid = document.getElementById('featured-manga-grid');
    if (featuredMangaGrid) {
        const featuredManga = getFeaturedManga();
        featuredManga.forEach(manga => {
            const card = createMangaCard(manga, true);
            featuredMangaGrid.appendChild(card);
        });
    }
    
    // Populate popular manga
    const popularMangaList = document.getElementById('popular-manga-list');
    if (popularMangaList) {
        const popularManga = getPopularManga();
        popularManga.forEach(manga => {
            const card = createMangaCard(manga, false);
            popularMangaList.appendChild(card);
        });
    }
    
    // Get manga detail if on manga page
    const mangaDetailContainer = document.getElementById('manga-detail-container');
    if (mangaDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const mangaId = urlParams.get('id');
        
        if (mangaId) {
            const manga = getMangaById(mangaId);
            if (manga) {
                populateMangaDetail(manga);
            } else {
                window.location.href = 'index.html';
            }
        } else {
            window.location.href = 'index.html';
        }
    }
    
    // Get chapter data if on reader page
    const readerContainer = document.getElementById('reader-container');
    if (readerContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const mangaId = urlParams.get('mangaId');
        const chapterId = urlParams.get('chapterId');
        
        if (mangaId && chapterId) {
            const chapter = getMangaChapter(mangaId, chapterId);
            if (chapter) {
                const manga = getMangaById(mangaId);
                initializeReader(manga, chapter);
            } else {
                window.location.href = 'index.html';
            }
        } else {
            window.location.href = 'index.html';
        }
    }
    
    // Browse page manga list
    const browseMangaList = document.getElementById('browse-manga-list');
    if (browseMangaList) {
        const allManga = getAllManga();
        allManga.forEach(manga => {
            const card = createMangaCard(manga, false);
            browseMangaList.appendChild(card);
        });
    }
});

// Create manga card element
function createMangaCard(manga, isFeatured) {
    const card = document.createElement('div');
    card.className = 'manga-card';
    
    const cardContent = `
        <a href="manga.html?id=${manga.id}">
            <div class="manga-cover">
                <img src="${manga.cover}" alt="${manga.title}">
                ${isFeatured ? '' : `
                <div class="manga-rating">
                    <span>★ ${manga.rating}</span>
                </div>`}
            </div>
            <div class="manga-info">
                <h3>${manga.title}</h3>
                ${isFeatured ? `
                <div class="manga-meta">
                    <span>${manga.chapters.length} Chapters</span>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${manga.rating}</span>
                    </div>
                </div>
                <div class="btn-container">
                    <button class="btn-primary btn-small">Read Now</button>
                </div>
                ` : `
                <div class="manga-info-small">
                    <span>Ch. ${manga.chapters[0].number}</span>
                </div>
                `}
            </div>
        </a>
    `;
    
    card.innerHTML = cardContent;
    return card;
}

// Populate manga detail page
function populateMangaDetail(manga) {
    document.title = `${manga.title} - MangaVerse`;
    
    // Update manga info
    document.getElementById('manga-cover').src = manga.cover;
    document.getElementById('manga-cover').alt = manga.title;
    document.getElementById('manga-title').textContent = manga.title;
    document.getElementById('manga-author').textContent = manga.author;
    document.getElementById('manga-status').textContent = manga.status;
    document.getElementById('manga-year').textContent = manga.releaseYear;
    document.getElementById('manga-rating').textContent = manga.rating;
    document.getElementById('manga-views').textContent = manga.views;
    document.getElementById('manga-followers').textContent = manga.followers;
    document.getElementById('manga-description').textContent = manga.description;
    
    // Update genres
    const genresContainer = document.getElementById('manga-genres');
    genresContainer.innerHTML = '';
    manga.genres.forEach(genre => {
        const badge = document.createElement('span');
        badge.className = 'genre-badge';
        badge.textContent = genre;
        genresContainer.appendChild(badge);
    });
    
    // Update chapters
    const chaptersContainer = document.getElementById('manga-chapters');
    chaptersContainer.innerHTML = '';
    manga.chapters.forEach(chapter => {
        const chapterItem = document.createElement('div');
        chapterItem.className = 'chapter-item';
        chapterItem.innerHTML = `
            <a href="reader.html?mangaId=${manga.id}&chapterId=${chapter.id}" class="chapter-link">
                <div class="chapter-info">
                    <span class="chapter-number">Chapter ${chapter.number}</span>
                    <span class="chapter-title">${chapter.title}</span>
                </div>
                <div class="chapter-meta">
                    <span class="chapter-date">${chapter.date}</span>
                    <span class="chapter-views"><i class="fas fa-eye"></i> ${chapter.views}</span>
                </div>
            </a>
        `;
        chaptersContainer.appendChild(chapterItem);
    });
    
    // Link to first chapter
    const readFirstButton = document.getElementById('read-first-chapter');
    if (manga.chapters.length > 0) {
        readFirstButton.href = `reader.html?mangaId=${manga.id}&chapterId=${manga.chapters[0].id}`;
    }
}