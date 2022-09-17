const links = [
    {
        label: "Week 1 Notes",
        url: "week1/index.html"
    }
]

links.forEach(element => {
    let linkList = document.getElementById("link-list")
    let newLink = document.createElement('li')
    let newHREF = document.createElement('a')
    newHREF.textContent = element['label']
    newHREF.href = element['url']
    newLink.appendChild(newHREF)

    linkList.appendChild(newLink)
});