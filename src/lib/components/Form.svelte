<script>
    import emailjs from '@emailjs/browser';
    import Alert from './Alert.svelte';
    import { ALERT_TYPE, displayAlert } from './AlertStore';
  
    function sendEmail(e) {
      emailjs.sendForm('service_4051gnr', 'template_wd2ovf7', e.target, '3KOj322QMXsm8vUnP')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            displayAlert('Email sent!', 3000);
            document.emailForm.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
            displayAlert('Something went wrong...', 3000, ALERT_TYPE.DANGER)
        });
    }
  </script>

<section class="my-32 relative" id="form">
    <Alert/>
    <div class="lg:flex lg:flex-col lg:w-4/5 lg:mx-auto">
        <h2 class="font-black text-xl tracking-widest mb-10 text-center">Get in touch</h2>
        <form class="text-black" on:submit|preventDefault={sendEmail} name=emailForm>
            <input class="form-input w-full rounded mb-5" aria-label="Enter your name" placeholder="Name" type="text" name="name" required>
            <input class="form-input w-full rounded mb-5" aria-label="Enter your email" placeholder="Email" type="email" name="email" required>
            <textarea class="form-textarea w-full min-h-[10em] rounded mb-5" aria-label="Enter your message" placeholder="Message" name="message" required></textarea>
            <button type="submit" value="Send" class="w-full py-2 rounded-full text-2xl bg-white transition-all hover:text-white hover:bg-black">Send</button>
        </form>
    </div>
</section>