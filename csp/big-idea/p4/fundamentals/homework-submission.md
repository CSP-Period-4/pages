---
layout: post
title: Submit Homework · Programming Fundamentals (P4)
description: Turn in Programming Fundamentals homework by lesson and keep everything organised by student name.
permalink: /csp/big-idea/p4/fundamentals/homework-submission
---

<link rel="stylesheet" href="{{ '/assets/css/p4-fundamentals-homework.css' | relative_url }}">

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

<script src="{{ '/assets/js/p4-fundamentals-homework.js' | relative_url }}"></script>
