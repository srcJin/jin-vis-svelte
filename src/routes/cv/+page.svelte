<svelte:head>
<title>About me</title>
</svelte:head>

<section>
    <header>
        <h1>John Doe</h1>
        <p>Software Developer | Web Designer</p>
    </header>
    <img src="../images/tim.jpg" alt="John Doe" style="width:100px;height:100px;">
    <p>Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
</section>

<section>
    <header>
        <h2>Education</h2>
    </header>
    <article>
        <h3>Master of Computer Science</h3>
        <p>University of Example, 2020 - 2022</p>
        <time datetime="2020-09">September 2020</time> - <time datetime="2022-06">June 2022</time>
    </article>
    <article>
        <h3>Bachelor of Science in Information Technology</h3>
        <p>College of Example, 2016 - 2020</p>
        <time datetime="2016-09">September 2016</time> - <time datetime="2020-06">June 2020</time>
    </article>
</section>

<section>
    <header>
        <h2>Professional Experience</h2>
    </header>
    <article>
        <h3>Senior Software Developer</h3>
        <p>ExampleCorp, 2022 - Present</p>
        <time datetime="2022-07">July 2022</time> - Present
        <ul>
            <li>Lead the development of a key module in a major project.</li>
            <li>Improved system performance by 20% through various optimizations.</li>
        </ul>
    </article>
    <article>
        <h3>Junior Web Developer</h3>
        <p>WebSolutions Inc, 2020 - 2022</p>
        <time datetime="2020-07">July 2020</time> - <time datetime="2022-06">June 2022</time>
        <ul>
            <li>Developed and maintained client websites using HTML, CSS, and JavaScript.</li>
            <li>Collaborated with designers to implement user-friendly designs.</li>
        </ul>
    </article>
</section>

<footer>
    <p>&copy; 2024 John Doe. All rights reserved.</p>
</footer>