document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.getElementById("arrow");
    
    if (arrow) {
        arrow.addEventListener("click", function () {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'arrowClick',
                'eventCategory': 'Button Click',
                'eventAction': 'Click',
                'eventLabel': 'arrow'
            });
        });
    }
});
