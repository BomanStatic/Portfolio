<script>
    export let lang;
    export let icon;
</script>

<li class="mr-1.5 mt-2">
    <div class="gap-1 capitalize flex flex-row-reverse items-center text-sm bg-white text-black rounded-xl px-2 py-1 lg:px-5 ">
        {lang}
        <iconify-icon width="20" height="20" icon="{icon}"/>
    </div>
</li>