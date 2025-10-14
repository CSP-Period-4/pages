(function() {
    const STORAGE_KEY = 'p4-fundamentals-homework-submissions';
    const toggleButton = document.querySelector('[data-submissions-toggle]');
    const panel = document.querySelector('[data-submissions-panel]');

    if (!toggleButton || !panel) {
        return;
    }

    const searchInput = panel.querySelector('[data-submissions-search]');
    const clearButton = panel.querySelector('[data-submissions-clear]');
    const refreshButton = panel.querySelector('[data-submissions-refresh]');
    const list = panel.querySelector('[data-submissions-list]');
    const emptyState = panel.querySelector('[data-submissions-empty]');

    function readSubmissions() {
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                return [];
            }
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            console.warn('Unable to read saved homework submissions.', error);
            return [];
        }
    }

    function formatDate(timestamp) {
        if (!timestamp) {
            return 'Unknown time';
        }
        try {
            const date = new Date(timestamp);
            return date.toLocaleString();
        } catch (error) {
            return 'Unknown time';
        }
    }

    function renderList() {
        if (!list || !emptyState) {
            return;
        }

        const term = (searchInput && searchInput.value ? searchInput.value : '').trim().toLowerCase();
        const submissions = readSubmissions()
            .filter((entry) => {
                if (!term) {
                    return true;
                }
                const name = (entry.name || '').toLowerCase();
                return name.includes(term);
            })
            .sort((a, b) => {
                return (b.submittedAt || 0) - (a.submittedAt || 0);
            });

        list.innerHTML = '';

        if (!submissions.length) {
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';

        submissions.forEach((entry) => {
            const item = document.createElement('li');
            item.className = 'p4-submissions__item';

            const title = document.createElement('strong');
            const displayName = entry.name || 'Anonymous';
            const displayLesson = entry.lessonLabel || entry.lesson || 'Lesson';
            title.textContent = displayName + ' · ' + displayLesson;

            const meta = document.createElement('span');
            meta.textContent = 'Submitted ' + formatDate(entry.submittedAt);

            const body = document.createElement('p');
            body.textContent = entry.homework || '';

            item.appendChild(title);
            item.appendChild(meta);
            item.appendChild(body);

            list.appendChild(item);
        });
    }

    function showPanel() {
        if (!panel.classList.contains('is-visible')) {
            panel.classList.add('is-visible');
        }
        renderList();
        if (searchInput) {
            searchInput.focus();
        }
    }

    function hidePanel() {
        panel.classList.remove('is-visible');
    }

    toggleButton.addEventListener('click', () => {
        if (panel.classList.contains('is-visible')) {
            hidePanel();
        } else {
            showPanel();
        }
    });

    if (searchInput) {
        searchInput.addEventListener('input', renderList);
    }
    if (refreshButton) {
        refreshButton.addEventListener('click', renderList);
    }
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
            }
            renderList();
            if (searchInput) {
                searchInput.focus();
            }
        });
    }

    document.addEventListener('p4-homework-submitted', renderList);
})();

(function() {
    const STORAGE_KEY = 'p4-fundamentals-homework-submissions';
    const form = document.querySelector('[data-homework-form]');
    if (!form) {
        return;
    }

    const nameInput = form.querySelector('[data-homework-name]');
    const lessonSelect = form.querySelector('[data-homework-lesson]');
    const homeworkInput = form.querySelector('[data-homework-body]');
    const statusEl = form.querySelector('[data-submit-status]');
    const historyList = form.querySelector('[data-history-list]');
    const historyEmpty = form.querySelector('[data-history-empty]');

    const LESSON_GROUPS = [
        {
            label: 'Module 1 · Variables',
            lessons: [
                { slug: '3-1-1', title: '3.1.1 · Python Variables' },
                { slug: '3-1-2', title: '3.1.2 · Python Data Types' },
                { slug: '3-1-3', title: '3.1.3 · JavaScript Variables' },
                { slug: '3-1-4', title: '3.1.4 · JavaScript Data Types' }
            ]
        },
        {
            label: 'Module 2 · Data Abstraction',
            lessons: [
                { slug: '3-2-1', title: '3.2.1 · Integers' },
                { slug: '3-2-2', title: '3.2.2 · Float' },
                { slug: '3-2-3', title: '3.2.3 · Strings' },
                { slug: '3-2-4', title: '3.2.4 · Lists' },
                { slug: '3-2-5', title: '3.2.5 · Tuple' },
                { slug: '3-2-6', title: '3.2.6 · Dictionaries' },
                { slug: '3-2-7', title: '3.2.7 · Sets' },
                { slug: '3-2-8', title: '3.2.8 · Booleans' },
                { slug: '3-2-9', title: '3.2.9 · None and Null' }
            ]
        },
        {
            label: 'Module 3 · Mathematical Expressions',
            lessons: [
                { slug: '3-3-1', title: '3.3.1 · Mathematical Expressions (Python)' },
                { slug: '3-3-2', title: '3.3.2 · Mathematical Expressions (JavaScript)' },
                { slug: '3-3-3', title: '3.3.3 · Python Hacks' },
                { slug: '3-3-4', title: '3.3.4 · JavaScript Hacks' }
            ]
        },
        {
            label: 'Module 4 · Strings',
            lessons: [
                { slug: '3-4-1', title: '3.4.1 · Strings' },
                { slug: '3-4-2', title: '3.4.2 · Strings and Functions' },
                { slug: '3-4-3', title: '3.4.3 · JavaScript Strings' },
                { slug: '3-4-4', title: '3.4.4 · Strings Hacks' }
            ]
        },
        {
            label: 'Module 5 · Booleans',
            lessons: [
                { slug: '3-5-1', title: '3.5.1 · Booleans Python' },
                { slug: '3-5-2', title: '3.5.2 · Booleans JavaScript' },
                { slug: '3-5-3', title: '3.5.3 · Python Booleans Hacks' },
                { slug: '3-5-4', title: '3.5.4 · JavaScript Booleans Hacks' }
            ]
        },
        {
            label: 'Module 6 · Conditionals',
            lessons: [
                { slug: '3-6-1', title: '3.6.1 · Conditionals Python Lesson' },
                { slug: '3-6-2', title: '3.6.2 · Conditionals JavaScript Lesson' },
                { slug: '3-6-3', title: '3.6.3 · Conditionals Python Hacks' },
                { slug: '3-6-4', title: '3.6.4 · Conditionals JavaScript Hacks' }
            ]
        },
        {
            label: 'Module 7 · Nested Conditionals',
            lessons: [
                { slug: '3-7-1', title: '3.7.1 · Nested Conditionals Python Lesson' },
                { slug: '3-7-2', title: '3.7.2 · Nested Conditionals JavaScript Lesson' },
                { slug: '3-7-3', title: '3.7.3 · Nested Conditionals Python Hacks' },
                { slug: '3-7-4', title: '3.7.4 · Nested Conditionals JavaScript Hacks' }
            ]
        },
        {
            label: 'Module 8 · Iteration',
            lessons: [
                { slug: '3-8-1', title: '3.8.1 · Iteration Basics' },
                { slug: '3-8-2', title: '3.8.2 · Advanced Iteration' },
                { slug: '3-8-3', title: '3.8.3 · Iteration Patterns' },
                { slug: '3-8-4', title: '3.8.4 · Iteration Hacks' },
                { slug: '3-8-5', title: '3.8.5 · Iteration Mastery' }
            ]
        },
        {
            label: 'Module 10 · Lists',
            lessons: [
                { slug: '3-10A-1', title: '3.10.1 · Lists Introduction' },
                { slug: '3-10A-2', title: '3.10.2 · List Operations' },
                { slug: '3-10A-3', title: '3.10.3 · List Methods' },
                { slug: '3-10A-4', title: '3.10.4 · List Mastery' }
            ]
        }
    ];

    function buildLessonOptions() {
        if (!lessonSelect) {
            return;
        }
        LESSON_GROUPS.forEach((group) => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = group.label;
            group.lessons.forEach((lesson) => {
                const option = document.createElement('option');
                option.value = lesson.slug;
                option.textContent = lesson.title;
                option.dataset.lessonLabel = lesson.title;
                optgroup.appendChild(option);
            });
            lessonSelect.appendChild(optgroup);
        });
    }

    function readSubmissions() {
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                return [];
            }
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            reportStatus('Unable to read homework from local storage. Your browser may be blocking storage.', 'error');
            return [];
        }
    }

    function writeSubmissions(entries) {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
            return true;
        } catch (error) {
            reportStatus('Could not save homework. Please check browser storage settings.', 'error');
            return false;
        }
    }

    function formatDate(timestamp) {
        try {
            return new Date(timestamp).toLocaleString();
        } catch (error) {
            return 'Unknown time';
        }
    }

    function renderHistory() {
        if (!historyList) {
            return;
        }
        const submissions = readSubmissions().sort((a, b) => (b.submittedAt || 0) - (a.submittedAt || 0));
        historyList.innerHTML = '';

        if (!submissions.length) {
            if (historyEmpty) {
                historyEmpty.style.display = 'block';
            }
            return;
        }

        if (historyEmpty) {
            historyEmpty.style.display = 'none';
        }

        submissions.forEach((entry) => {
            const item = document.createElement('li');
            item.className = 'p4-history__item';

            const title = document.createElement('strong');
            const displayName = entry.name || 'Anonymous';
            const displayLesson = entry.lessonLabel || entry.lesson || 'Lesson';
            title.textContent = displayName + ' · ' + displayLesson;

            const meta = document.createElement('span');
            meta.textContent = 'Saved ' + formatDate(entry.submittedAt);

            const body = document.createElement('p');
            body.textContent = entry.homework || '';

            item.appendChild(title);
            item.appendChild(meta);
            item.appendChild(body);

            historyList.appendChild(item);
        });
    }

    function reportStatus(message, variant) {
        if (!statusEl) {
            return;
        }
        statusEl.textContent = message;
        statusEl.classList.remove('is-success', 'is-error');
        if (variant === 'success') {
            statusEl.classList.add('is-success');
        } else if (variant === 'error') {
            statusEl.classList.add('is-error');
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const lessonSlug = lessonSelect.value;
        const homework = homeworkInput.value.trim();

        if (!lessonSlug) {
            reportStatus('Select a lesson before submitting homework.', 'error');
            lessonSelect.focus();
            return;
        }

        if (!name) {
            reportStatus('Add your name so we can find your submission.', 'error');
            nameInput.focus();
            return;
        }

        if (!homework) {
            reportStatus('Add homework details before saving.', 'error');
            homeworkInput.focus();
            return;
        }

        const selectedOption = lessonSelect.querySelector('option[value="' + lessonSlug + '"]');
        const lessonLabel = selectedOption ? (selectedOption.dataset.lessonLabel || selectedOption.textContent) : lessonSlug;

        const submissions = readSubmissions();
        const entry = {
            id: Date.now().toString(36),
            name,
            lesson: lessonSlug,
            lessonLabel,
            homework,
            submittedAt: Date.now()
        };

        submissions.push(entry);

        if (!writeSubmissions(submissions)) {
            return;
        }

        reportStatus('Homework saved for ' + name + ' (' + lessonLabel + ').', 'success');
        form.reset();
        lessonSelect.value = '';
        renderHistory();
        document.dispatchEvent(new CustomEvent('p4-homework-submitted', { detail: entry }));
    });

    form.addEventListener('reset', () => {
        reportStatus('Form cleared.', 'success');
    });

    buildLessonOptions();
    renderHistory();
})();
