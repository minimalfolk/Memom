document.getElementById('addWebsiteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const websiteName = document.getElementById('websiteName').value;
    const websiteURL = document.getElementById('websiteURL').value;

    const websites = JSON.parse(localStorage.getItem('websites')) || [];
    websites.push({ name: websiteName, url: websiteURL });
    localStorage.setItem('websites', JSON.stringify(websites));
    displayWebsites();
});

function displayWebsites() {
    const websites = JSON.parse(localStorage.getItem('websites')) || [];
    const websiteList = document.getElementById('websites');
    websiteList.innerHTML = '';
    websites.forEach((website, index) => {
        const li = document.createElement('li');
        li.textContent = `${website.name} - ${website.url}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            websites.splice(index, 1);
            localStorage.setItem('websites', JSON.stringify(websites));
            displayWebsites();
        };
        li.appendChild(deleteButton);
        websiteList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayWebsites();
});
