<script>
    import {ALERT_TYPE, alertType, alertMessage} from '../components/AlertStore';
    import { slide, fade } from 'svelte/transition';

    $: bg = () => {
        if($alertType === ALERT_TYPE.DANGER){
            return 'bg-red-200';
        }
        else{
            return 'bg-green-200';
        }
    }
</script>
{#if $alertMessage}
    <div transition:fade class="absolute left-1/2 -top-20 translate -translate-x-1/2">
        <div in:slide="{{ duration: 3000, axis: 'x'}}" class="w-full  rounded-t-md h-1.5 mb-2">
            <div class="bg-black transition duration-1000  h-2.5 rounded-full " style="width: 100%"></div>
        </div>
        <span class={`text-black text-center rounded-md p-4 ${bg()}`}>
            {$alertMessage}
        </span>
    </div>
{/if}
