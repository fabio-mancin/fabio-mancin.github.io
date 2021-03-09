$(document).ready(function () {
    //typewriter effect for the motto
    const typewriteMotto = () => {
        const motto = $(".motto")[0];
        const typewriter = new Typewriter(motto, {
            deleteSpeed: 100,
            wrapperClassName: 'typewriter-wrapper',
            cursorClassName: 'typewriter-cursor'
        });

        typewriter
            .typeString("Minimal and")
            .pauseFor(50)
            .deleteChars(3)
            .typeString(" <strong>IS</strong> effective.")
            .start();
    }

    typewriteMotto();
})