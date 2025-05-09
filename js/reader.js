// js/reader.js
function initializeReader(manga, chapter) {
    document.title = `${manga.title} Chapter ${chapter.number} - MangaVerse`;
    
    // Set manga and chapter info
    document.getElementById('manga-title').textContent = manga.title;
    document.getElementById('chapter-title').textContent = `Chapter ${chapter.number}: ${chapter.title}`;
    
    // Set up navigation buttons
    const prevChapterBtn = document.getElementById('prev-chapter-btn');
    const nextChapterBtn = document.getElementById('next-chapter-btn');
    
    // Find current chapter index
    const chapterIndex = manga.chapters.findIndex(c => c.id === chapter.id);
    
    // Disable prev button if first chapter
    if (chapterIndex === manga.chapters.length - 1) {
        prevChapterBtn.classList.add('disabled');
        prevChapterBtn.disabled = true;
    } else {
        prevChapterBtn.href = `reader.html?mangaId=${manga.id}&chapterId=${manga.chapters[chapterIndex + 1].id}`;
    }
    
    // Disable next button if last chapter
    if (chapterIndex === 0) {
        nextChapterBtn.classList.add('disabled');
        nextChapterBtn.disabled = true;
    } else {
        nextChapterBtn.href = `reader.html?mangaId=${manga.id}&chapterId=${manga.chapters[chapterIndex - 1].id}`;
    }
    
    // Return to manga button
    document.getElementById('back-to-manga').href = `manga.html?id=${manga.id}`;
    
    // Set up reading mode
    const readerContent = document.getElementById('reader-content');
    const verticalModeBtn = document.getElementById('vertical-mode');
    const horizontalModeBtn = document.getElementById('horizontal-mode');
    
    // Load pages
    loadPages(chapter.pages, readerContent, 'vertical');
    
    // Reading mode toggle
    verticalModeBtn.addEventListener('click', function() {
        verticalModeBtn.classList.add('active');
        horizontalModeBtn.classList.remove('active');
        readerContent.className = 'vertical-mode';
        loadPages(chapter.pages, readerContent, 'vertical');
    });
    
    horizontalModeBtn.addEventListener('click', function() {
        horizontalModeBtn.classList.add('active');
        verticalModeBtn.classList.remove('active');
        readerContent.className = 'horizontal-mode';
        loadPages(chapter.pages, readerContent, 'horizontal');
    });
    
    // Show/hide controls
    const readerControls = document.querySelectorAll('.reader-controls');
    
    let timeout;
    function showControls() {
        readerControls.forEach(control => {
            control.classList.add('visible');
        });
        
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            readerControls.forEach(control => {
                control.classList.remove('visible');
            });
        }, 3000);
    }
    
    // Show controls on mouse move
    document.addEventListener('mousemove', showControls);
    document.addEventListener('click', showControls);
    
    // Show controls initially
    showControls();
}

function loadPages(pages, container, mode) {
    container.innerHTML = '';
    
    pages.forEach((page, index) => {
        const pageElement = document.createElement('div');
        pageElement.className = 'manga-page';
        pageElement.id = `page-${page.id}`;
        
        pageElement.innerHTML = `
            <img src="${page.url}" alt="Page ${page.id}">
            ${mode === 'horizontal' ? `
            <div class="page-number">
                ${page.id} / ${pages.length}
            </div>` : ''}
        `;
        
        container.appendChild(pageElement);
    });
}