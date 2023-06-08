<script>
    import gsap from 'gsap';
    import { onMount } from 'svelte';
    import 'iconify-icon';
    import ProjectCard from '../lib/components/projectCard.svelte';
    import Buildwith from '../lib/components/Buildwith.svelte';
    import Skill from '../lib/components/skill.svelte';
    // import TitleAnimation from '../lib/components/TitleAnimation.svelte';
    import { slide } from 'svelte/transition'
    import { backOut } from 'svelte/easing'
    import Form from '../lib/components/Form.svelte';

    const lines = [
    'Hi,',
    '',
    "I'm",
    '',
    'Pontus'
    ]
    let animate = false;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(".ball", {xPercent: -50, yPercent: -50});

        const ball = document.querySelector(".ball");
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.2;

        const xSet = gsap.quickSetter(ball, "x", "px");
        const ySet = gsap.quickSetter(ball, "y", "px");

        window.addEventListener("mousemove", e => {    
        mouse.x = e.x;
        mouse.y = e.y;  
        });

        gsap.ticker.add(() => {
        
            const dt = 1 - Math.pow(1.0- speed, gsap.ticker.deltaRatio()); 
            
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });
        animate = true;
    });
</script>
<style>
    .icon:hover{
        animation: colorChange 1s infinite;
    }
    @keyframes colorChange {
        0% { color: #000000; } /* Replace with your initial color */
        50% { color: #ff0000; } /* Replace with your first desired color */
        100% { color: #0000ff; } /* Replace with your second desired color */
    }
</style>
<div class="ball hidden md:block"></div>
<div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-10 lg:px-10 lg:py-0">
    <div class="lg:flex lg:justify-between lg:gap-4">
        <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div class="flex flex-col gap-3 text-white lg:h-screen lg:justify-between">
                    <div class="">
                        <div class="text-4xl lg:text-5xl">
                            {#if animate}
                                {#each lines as line, i}
                                    <div class="overflow-hidden align-bottom inline-flex mr-2">
                                        <span in:slide={{ delay: 200 * i, easing: backOut, axis: 'x' }}>
                                            {line}
                                        </span>
                                    </div>
                                {/each}
                            {/if}
                        </div>
                        <p class="text-xl">Frontend Developer</p>
                        <p class="text-gray-400">I build responsive and user-friendly websites</p>
                    </div>
                    <div class="flex gap-3 mt-2">
                        <a target="_blank" href="https://github.com/BomanStatic">
                            <iconify-icon width="30" height="30" class="icon" style="color: white;" icon="line-md:github"></iconify-icon>
                        </a>
                        <a href="/">
                            <iconify-icon width="30" height="30" class="icon" style="color: white;" icon="line-md:linkedin"></iconify-icon>
                        </a>
                    </div>
                    
                </div>
        </header>   
        <main class="pt-24 lg:w-1/2 lg:py-24">
            <section id="about">
                <div class="flex flex-col gap-5">
                    <h2 class="about-me font-black tracking-widest text-xl">About</h2>
                    <div class="px-2 text-gray-400">I'm a passionate front-end developer with a focus on building responsive and user-friendly websites. Despite limited professional experience, I am committed to continuous self-improvement and actively participate in web development communities. With a solid educational foundation in IT, I initially approached HTML and CSS with skepticism but soon became captivated by their intricacies and possibilities. I possess tenacity when confronted with challenges and regularly undertake personal projects to refine my skills and explore innovative techniques.</div>
                    <!-- <p class=" about-me-text px-2 text-gray-400">Hello, I'm Pontus, a passionate front-end developer with a strong focus on building responsive and user-friendly websites. While I haven't had professional experience in the IT industry yet, my dedication to web development and continuous self-improvement has fueled my obsession with front-end work. In fact, even when I'm away from the computer, I find myself immersed in web development communities on Reddit and constantly reading articles related to the field.</p>
                    <p class=" about-me-text px-2 text-gray-400">I have a solid educational foundation, having completed two years of a three-year program in IT security and software testing, with coursework covering HTML, CSS, and JavaScript. Although I initially viewed HTML and CSS with skepticism, about six months ago, I fell head over heels for them. Their intricacies and possibilities have captivated me, and I'm now determined to harness their power to create stunning websites.</p>
                    <p class=" about-me-text px-2 text-gray-400">One of my key strengths is my tenacity when faced with challenges. I'm not one to shy away from solving problems; rather, I become even more determined to find effective solutions. While I haven't had the opportunity to work on professional projects yet, I've been actively engaged in personal projects, honing my skills and exploring new techniques.</p>
                     -->
                </div>
            </section>
            <section class="my-10" id="skills">
                <h2 class="font-black tracking-widest text-xl">Skills</h2>
                <div class="flex flex-wrap my-2 pl-2 items-center gap-y-6">
                    <div class="flex w-full justify-between mt-5 items-center">
                        <Skill icon="skill-icons:html" lang="HTML"/>
                        <Skill icon="skill-icons:css" lang="CSS"/>
                        <Skill icon="vscode-icons:file-type-js-official" lang="JS"/>
                    </div>
                    <div class="flex w-full justify-between items-center">
                        <Skill icon="vscode-icons:file-type-svelte" lang="Sveltekit"/>
                        <Skill icon="file-icons:tailwind" lang="Tailwind"/>
                        <Skill icon="vscode-icons:file-type-python" lang="Python"/>
                    </div>
                    <div class="flex w-full justify-between items-center">
                        <Skill icon="vscode-icons:file-type-csharp2" lang="C#"/>
                        <Skill icon="vscode-icons:file-type-git" lang="Git"/>
                        <Skill icon="vscode-icons:file-type-mysql" lang="MySql"/>
                    </div>
                </div>
            </section>
            <section class="my-20" id="projects">
                <h2 class="projects font-black tracking-widest mb-10 text-xl">Projects</h2>
                <ul>
                    <li class="f1-dash mb-20">
                        <ProjectCard title="F1 Dashboard" hoverColor="#ff4122" imageSrc="desktop\f1-dash.jpeg" linkSrc="https://f1-dashboard-two.vercel.app/" githubLink="https://github.com/BomanStatic/f1-dashboard">
                            <p class="text-gray-400" slot="info">The F1 dashboard webpage, powered by SvelteKit and Tailwind CSS, delivers race dates, upcoming races, driver and constructor standings for easy access and exploration by F1 enthusiasts.</p>
                            <svelte:fragment slot="built-with">
                                <Buildwith lang="html" icon="skill-icons:html"/>
                                <Buildwith lang="tailwind" icon="file-icons:tailwind"/>
                                <Buildwith lang="sveltekit" icon="vscode-icons:file-type-svelte"/>
                            </svelte:fragment>
                        </ProjectCard>
                    </li>
                    <li class="slice mb-20">
                        <ProjectCard title="Slice Of Heaven" hoverColor="#FEB32D" imageSrc="desktop\SliceOfheaven.png" linkSrc="https://bomanstatic.github.io/dist/" githubLink="https://github.com/BomanStatic/BomanStatic.github.io">
                            <p class="text-gray-400" slot="info">Slice of Heaven: A mouthwatering, static website for a fictional pizza place. Built with HTML and Tailwind CSS, it offers a seamless user experience, showcasing the enticing menu and capturing the essence of the pizzeria..</p>
                            <svelte:fragment slot="built-with">
                                <Buildwith lang="html" icon="skill-icons:html"/>
                                <Buildwith lang="tailwind" icon="file-icons:tailwind"/>
                            </svelte:fragment>
                        </ProjectCard>
                    </li>
                    <li class="slice mb-20">
                        <ProjectCard title="This site" hoverColor="#FEB32D" imageSrc="desktop\SliceOfheaven.png" linkSrc="/" githubLink="https://github.com/BomanStatic/BomanStatic.github.io">
                            <p class="text-gray-400" slot="info">My frontend development portfolio demonstrates my skills in creating user-friendly interfaces for websites and web applications. It showcases my expertise in web design and highlights my commitment to delivering exceptional user experiences.</p>
                            <svelte:fragment slot="built-with">
                                <Buildwith lang="html" icon="skill-icons:html"/>
                                <Buildwith lang="tailwind" icon="file-icons:tailwind"/>
                                <Buildwith lang="sveltekit" icon="vscode-icons:file-type-svelte"/>
                            </svelte:fragment>
                        </ProjectCard>
                    </li>
                </ul>
            </section>
            <Form/>
        </main>
    </div>
</div>
