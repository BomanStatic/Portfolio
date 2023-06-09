<script>
    import {ALERT_TYPE, alertType, alertMessage} from '../components/AlertStore';
    import { fade } from 'svelte/transition';

    $: bg = () => {
        if($alertType === ALERT_TYPE.DANGER){
            return 'bg-red-100';
        }
        else{
            return 'bg-green-100';
        }
    }
</script>
{#if $alertMessage}
    <div transition:fade class="absolute left-1/2 -top-20 translate -translate-x-1/2">
        <span class={`text-black text-center rounded-md p-4 ${bg()}`}>
            {$alertMessage}
        </span>
    </div>
{/if}
