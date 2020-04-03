;
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const options = {
    threshold: 0.75
}

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            left: coords.left,
            top: coords.top
        }
        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
        }
    });
}

const observer = new IntersectionObserver(navCheck, options);
sections.forEach(section => observer.observe(section));

(function translateToBulgarian() {
    $('#bulgarian-flag').on('click', () => {
        window.location.reload();
    })
}());

(function translateToEnglish() {
    $('#uk-flag').on('click', () => {
        // Menu
        $('body div.w3-top a').text('KOSIKO');
        $('#menu-projects').text('Projects');
        $('#menu-about').text('Information');
        $('#menu-contact').text('Contact');
        $('#home div > h1 > span > b').text('KOSIKO');
        $('body > div > div.w3-container.w3-padding-32 > h3').text('Projects');
        // Hotels
        $('#projects > div:nth-child(1) > div:nth-child(1) > div > div').text('Hotel - Privilege');
        $('#projects > div:nth-child(1) > div:nth-child(2) > div > div').text('Hotel - Grand Resort');
        $('#projects > div:nth-child(1) > div:nth-child(3) > div > div').text('Hotel - Grand Resort Marina');
        $('#projects > div:nth-child(1) > div:nth-child(4) > div > div').text('Hotel - Messambria');
        $('#projects > div:nth-child(2) > div:nth-child(1) > div > div').text('Hotel - Fort Club');
        $('#projects > div:nth-child(2) > div:nth-child(2) > div > div').text('Hotel - Prestige Fort');
        $('#projects > div:nth-child(2) > div:nth-child(3) > div > div').text('Hotel - Green Fort');
        $('#projects > div:nth-child(2) > div:nth-child(4) > div > div').text('Hotel - Riviera Fort');
        $('#projects > div:nth-child(3) > div:nth-child(1) > div > div').text('Hotel - Seahorse');
        $('#projects > div:nth-child(3) > div:nth-child(2) > div > div').text('Hotel - Sun City');

        //Other bldgs
        $('#projects > div:nth-child(3) > div:nth-child(3) > div > div').text('Family building - Adriel');
        $('#projects > div:nth-child(3) > div:nth-child(4) > div > div').text('House in Boyana');
        $('#projects > div:nth-child(4) > div:nth-child(1) > div > div').text('Hospital - Sacred Ekaterina');
        $('#projects > div:nth-child(4) > div:nth-child(2) > div > div').text('Skoda service');
        $('#projects > div:nth-child(4) > div:nth-child(3) > div > div').text('Pedestrian overpass - Sunny Beach');
        $('#projects > div:nth-child(4) > div:nth-child(4) > div > div').text('Rhenus logistics');

        //Info
        $('#about > div.w3-container.w3-padding-32 > h3').text('Information');
        $('#about > div.text-center > h3').text('Kaloyan Raykov');
        $('#about > div.text-center > p.w3-opacity').text('Engineer');
        $('#about > div.text-center > p:nth-child(3)').text('Professional engineer with more than 27 years of experience and 600 projects done.');

        //About
        $('#contact h3').text('Contact');
        $('#contact p:nth-child(2)').text(`Let's discuss your next project`);
        $('#contact p:nth-child(3) span').text('Phone number');
        $('#contact p:nth-child(4) span').text('Email');
        //Footer
        $('body footer > span').text('Kaloyan Raykov');
    })
}());