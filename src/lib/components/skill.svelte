<script>
    import 'iconify-icon';

    export let icon;
    export let lang;
</script>
<div class="flex flex-col flex-wrap justify-center items-center min-w-[5em] rounded py-2 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg hover:bg-slate-500/50 transition-all">
    <iconify-icon width="50" height="50" icon="{icon}"/>
    <h5>{lang}</h5>
</div>