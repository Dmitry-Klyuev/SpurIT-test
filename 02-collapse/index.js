window.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.collapsible');

    const handleToggle = (event) => {
        const parent = event.target.closest(".collapsible");
        const collapsibleContent = parent.querySelector('.collapsible__content');
        const buttonHide = parent.querySelector('.collapsible__action--visible');
        const buttonShow = parent.querySelector('.collapsible__action--hidden');

        if (buttonHide.style.display === 'none') {

            buttonShow.style.display = 'none';
            buttonHide.style.display = 'block';
            collapsibleContent.animate([
                {
                    maxHeight: '1000px',
                    transform: 'scale(1, 1)',
                }], {
                duration: 100,
                fill: 'both',
            });
        } else {
            buttonShow.style.display = 'block';
            buttonHide.style.display = 'none';
            collapsibleContent.animate([
                {
                    maxHeight: 0,
                    transform: 'scale(1, 0)',
                }], {
                duration: 100,
                fill: 'both',
            });
        }
    };

    for (const collapsible of elements) {
        const buttonToggle = collapsible.querySelector('.collapsible__button');
        const buttonHide = buttonToggle.querySelector('.collapsible__action--visible');
        const content = collapsible.querySelector('.collapsible__content');
        buttonToggle.addEventListener('click', handleToggle);
        buttonHide.style.display = 'none';

        content.animate([
            {
                maxHeight: 0,
                transform: 'scale(1, 0)',
            }], {
            duration: 0,
            fill: 'both',
        });
    }
});