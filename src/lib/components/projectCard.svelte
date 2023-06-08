<script>
    import 'iconify-icon';

    export let title;
    export let hoverColor;
    export let imageSrc;
    export let linkSrc;
    export let githubLink;
</script>
<style>
    .text-hover:hover{
        color: var(--color);
    }
    .icon:hover{
        animation: colorChange 0.7s infinite;
    }
    @keyframes colorChange {
        0% { color: #000000; } /* Replace with your initial color */
        50% { color: #ff0000; } /* Replace with your first desired color */
        100% { color: #0000ff; } /* Replace with your second desired color */
    }
</style>
<a href="{linkSrc}" class="group transition-all">
    <div class="px-2 py-2  flex-col lg:group-hover:bg-slate-500/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg rounded">
        <div class="flex flex-col gap-6 sm:flex-row">
            <img loading="lazy" class="rounded-lg sm:w-48 sm:h-24" src="{imageSrc}" alt="imageSrc">
            <div class="flex flex-col gap-2 ">
                <div class="flex justify-between">
                    <h3>
                        <a target="_blank" rel="noopener noreferrer" class="font-black transition-all capitalize tracking-wider text-hover group-hover:scale-110 inline-flex items-center gap-1" style="--color:{hoverColor}" href="{linkSrc}">{title}
                            <iconify-icon class="transition-all group-hover:rotate-6" icon="uil:link-alt" width="20" height="20"/>
                        </a>
                    </h3>
                    <a target="_blank" href="{githubLink}">
                        <iconify-icon class="icon transition-all hover:scale-110 hover:rotate-12 hover:from-slate-100" icon="mdi:github" width="25" height="25"/>
                    </a>
                    
                </div>
                
                <slot name="info">
                    <p>Missing info{imageSrc}</p>
                </slot>
            </div>
            
        </div>  
        <ul class="flex flex-wrap sm:mt-2 sm:justify-end w-full">
            <slot name="built-with"/>
        </ul> 
    </div>
</a>
