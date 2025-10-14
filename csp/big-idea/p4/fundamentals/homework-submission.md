---
layout: post
title: Submit Homework · Programming Fundamentals (P4)
description: Turn in Programming Fundamentals homework by lesson and keep everything organised by student name.
permalink: /csp/big-idea/p4/fundamentals/homework-submission
---

<style>
:root {
    --p4-space-xs: 8px;
    --p4-space-sm: 16px;
    --p4-space-md: 24px;
    --p4-space-lg: 32px;
    --p4-space-xl: 48px;
    --p4-radius-xs: 8px;
    --p4-radius-sm: 12px;
    --p4-radius-md: 16px;
    --p4-radius-lg: 24px;
    --p4-radius-xl: 32px;
    --p4-radius-full: 9999px;
    --p4-clr-primary: #6366f1;
    --p4-clr-primary-dark: #4f46e5;
    --p4-clr-secondary: #06b6d4;
    --p4-clr-accent: #f59e0b;
    --p4-clr-surface: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.98));
    --p4-clr-surface-elevated: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.98));
    --p4-clr-surface-glass: rgba(255, 255, 255, 0.08);
    --p4-clr-border: rgba(148, 163, 184, 0.2);
    --p4-clr-text-primary: #f8fafc;
    --p4-clr-text-secondary: #cbd5e1;
    --p4-clr-text-muted: #94a3b8;
    --p4-shadow-lg: 0 25px 50px -12px rgba(15, 23, 42, 0.45);
    --p4-shadow-md: 0 10px 20px rgba(15, 23, 42, 0.25);
    --p4-transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p4-submit-shell {
    position: relative;
    margin: 0 auto;
    padding: clamp(var(--p4-space-lg), 5vw, var(--p4-space-xl));
    border-radius: var(--p4-radius-xl);
    background: var(--p4-clr-surface);
    color: var(--p4-clr-text-primary);
    box-shadow: var(--p4-shadow-lg);
    border: 1px solid var(--p4-clr-border);
    max-width: 960px;
}

.p4-submit-header {
    display: grid;
    gap: var(--p4-space-sm);
    margin-bottom: var(--p4-space-xl);
}

.p4-submit-back {
    width: fit-content;
    padding: var(--p4-space-xs) var(--p4-space-sm);
    border-radius: var(--p4-radius-sm);
    border: 1px solid var(--p4-clr-border);
    background: rgba(255, 255, 255, 0.08);
    color: var(--p4-clr-text-secondary);
    text-decoration: none;
    transition: var(--p4-transition-normal);
}

.p4-submit-back:hover {
    color: var(--p4-clr-text-primary);
    border-color: var(--p4-clr-primary);
    box-shadow: var(--p4-shadow-md);
}

.p4-submit-title {
    margin: 0;
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
}

.p4-submit-lead {
    margin: 0;
    color: var(--p4-clr-text-secondary);
    font-size: 1.1rem;
    line-height: 1.6;
}

.p4-submit-form {
    display: grid;
    gap: var(--p4-space-md);
    padding: var(--p4-space-lg);
    border-radius: var(--p4-radius-lg);
    background: var(--p4-clr-surface-elevated);
    border: 1px solid var(--p4-clr-border);
}

.p4-form-field {
    display: grid;
    gap: var(--p4-space-xs);
}

.p4-form-field label {
    font-weight: 600;
    color: var(--p4-clr-text-secondary);
}

.p4-form-input,
.p4-form-select,
.p4-form-textarea {
    width: 100%;
    padding: var(--p4-space-sm);
    border-radius: var(--p4-radius-sm);
    border: 1px solid rgba(148, 163, 184, 0.25);
    background: rgba(15, 23, 42, 0.45);
    color: var(--p4-clr-text-primary);
    font-size: 1rem;
    transition: var(--p4-transition-normal);
}

.p4-form-input:focus,
.p4-form-select:focus,
.p4-form-textarea:focus {
    outline: none;
    border-color: var(--p4-clr-primary);
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.25);
}

.p4-form-select optgroup {
    color: #0f172a;
    background: #e2e8f0;
    font-weight: 700;
}

.p4-form-select option {
    color: #0f172a;
}

.p4-submit-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--p4-space-sm);
    justify-content: flex-end;
}

.p4-submit-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--p4-space-xs);
    padding: var(--p4-space-sm) var(--p4-space-lg);
    border-radius: var(--p4-radius-full);
    border: 1px solid var(--p4-clr-primary-dark);
    background: linear-gradient(135deg, var(--p4-clr-primary), var(--p4-clr-secondary));
    color: var(--p4-clr-text-primary);
    font-weight: 600;
    cursor: pointer;
    transition: var(--p4-transition-normal);
    text-decoration: none;
}

.p4-submit-button:hover {
    transform: translateY(-1px);
    box-shadow: var(--p4-shadow-md);
}

.p4-submit-button:active {
    transform: translateY(0);
}

.p4-submit-button--secondary {
    border-color: var(--p4-clr-border);
    background: rgba(255, 255, 255, 0.08);
    color: var(--p4-clr-text-secondary);
}

.p4-submit-status {
    margin-top: var(--p4-space-lg);
    padding: var(--p4-space-sm) var(--p4-space-md);
    border-radius: var(--p4-radius-md);
    border: 1px solid transparent;
    font-weight: 600;
    display: none;
}

.p4-submit-status.is-success {
    display: block;
    border-color: rgba(16, 185, 129, 0.4);
    background: rgba(16, 185, 129, 0.15);
    color: #bbf7d0;
}

.p4-submit-status.is-error {
    display: block;
    border-color: rgba(239, 68, 68, 0.4);
    background: rgba(239, 68, 68, 0.15);
    color: #fecaca;
}

.p4-history {
    margin-top: var(--p4-space-xl);
    padding: var(--p4-space-lg);
    border-radius: var(--p4-radius-lg);
    background: rgba(15, 23, 42, 0.55);
    border: 1px solid var(--p4-clr-border);
    display: grid;
    gap: var(--p4-space-md);
}

.p4-history h2 {
    margin: 0;
    font-size: 1.5rem;
}

.p4-history p {
    margin: 0;
    color: var(--p4-clr-text-muted);
}

.p4-history__empty {
    margin: 0;
    padding: var(--p4-space-sm) var(--p4-space-md);
    border-radius: var(--p4-radius-md);
    border: 1px dashed var(--p4-clr-border);
    color: var(--p4-clr-text-muted);
    text-align: center;
}

.p4-history__list {
    display: grid;
    gap: var(--p4-space-sm);
    list-style: none;
    padding: 0;
    margin: 0;
}

.p4-history__item {
    padding: var(--p4-space-sm) var(--p4-space-md);
    border-radius: var(--p4-radius-md);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(148, 163, 184, 0.3);
    display: grid;
    gap: var(--p4-space-xs);
}

.p4-history__item strong {
    font-size: 1rem;
}

.p4-history__item span {
    font-size: 0.9rem;
    color: var(--p4-clr-text-muted);
}

.p4-history__item p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--p4-clr-text-secondary);
    white-space: pre-wrap;
}

@media (max-width: 720px) {
    .p4-submit-shell {
        padding: var(--p4-space-lg);
    }

    .p4-submit-actions {
        flex-direction: column;
        align-items: stretch;
    }

    .p4-submit-button {
        width: 100%;
    }
}
</style>

<div class="p4-submit-shell">
    <header class="p4-submit-header">
        <a class="p4-submit-back" href="/csp/big-idea/p4/fundamentals">← Back to Programming Fundamentals</a>
        <h1 class="p4-submit-title">Programming Fundamentals Homework Submission</h1>
        <p class="p4-submit-lead">
            Choose the lesson, add your name, and paste your homework response. Your submission stays saved on this device
            so we can quickly review progress in class.
        </p>
    </header>

    <form class="p4-submit-form" data-homework-form novalidate>
        <div class="p4-form-field">
            <label for="student-name">Student name</label>
            <input class="p4-form-input" id="student-name" name="student-name" type="text" placeholder="Ada Lovelace" required data-homework-name>
        </div>
        <div class="p4-form-field">
            <label for="lesson-select">Lesson</label>
            <select class="p4-form-select" id="lesson-select" name="lesson-select" required data-homework-lesson>
                <option value="" selected>Select a lesson to attach your work</option>
            </select>
        </div>
        <div class="p4-form-field">
            <label for="homework-body">Homework details</label>
            <textarea class="p4-form-textarea" id="homework-body" name="homework-body" rows="8" placeholder="Paste links, describe your solution, or share code snippets…" required data-homework-body></textarea>
        </div>
        <div class="p4-submit-actions">
            <button class="p4-submit-button p4-submit-button--secondary" type="reset">Clear form</button>
            <button class="p4-submit-button" type="submit">Save Homework</button>
        </div>
    </form>

    <div class="p4-submit-status" role="status" aria-live="polite" data-submit-status></div>

    <section class="p4-history">
        <div>
            <h2>Recent Submissions on This Device</h2>
            <p>Entries stay local to the browser. Open the overview page and use “View Submissions” to search by name.</p>
        </div>
        <p class="p4-history__empty" data-history-empty>No homework saved yet. Submit your first assignment above.</p>
        <ul class="p4-history__list" data-history-list></ul>
    </section>
</div>

<script>
(function() {
    const STORAGE_KEY = 'p4-fundamentals-homework-submissions';
    const form = document.querySelector('[data-homework-form]');
    const nameInput = document.querySelector('[data-homework-name]');
    const lessonSelect = document.querySelector('[data-homework-lesson]');
    const homeworkInput = document.querySelector('[data-homework-body]');
    const statusEl = document.querySelector('[data-submit-status]');
    const historyList = document.querySelector('[data-history-list]');
    const historyEmpty = document.querySelector('[data-history-empty]');

    if (!form || !lessonSelect || !historyList) {
        return;
    }

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
</script>
