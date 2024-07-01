// JS code for the filtering system
    const liItem = document.querySelectorAll('ul li');
    const imgItem = document.querySelectorAll('.resp');

    liItem.forEach(li => {
       li.onclick = function() {

        // Active
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

        // Filter
        const value = li.textContent;
        imgItem.forEach(div => {
            div.style.display = 'none';
            if (div.getAttribute('data-filter') == value.toLowerCase() || value == "SHOW ALL") {
                div.style.display = 'block';
            }
        })
       }
    });
// JS code for the transition of "About Us" section
    const toggleBtn = document.getElementById('toggleBtn');
    const container = document.getElementById('container');

    toggleBtn.addEventListener('click', function() {
        container.classList.toggle('open');
    });
// JS code for the scroll transition of "Socials" and "Contacts" footer
    function footerScroll() {
        var footer = document.getElementById('footer');
        footer.scrollIntoView({
            behavior: "smooth"
        });
    }
// JS code for the changable year at the center of the footer
    let year = document.querySelector("#year");
    $(document).ready(function () {
        year.innerText = new Date().getFullYear();
    });