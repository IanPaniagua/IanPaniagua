document.addEventListener("DOMContentLoaded", (event) => {
    

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.3942132864163!2d9.982911212523442!3d53.58642737224466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b188c987b2738b%3A0xd496e2ede493d20f!2sBeim%20Andreasbrunnen%206%2C%2020249%20Hamburg!5e0!3m2!1ses!2sde!4v1710680895507!5m2!1ses!2sde" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    },1000);
 

});