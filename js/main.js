const links = [
    {
        label: "Week 1 Notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 Team Activity",
        url: "week2/index.html"
    },
    {
        label: "Week 3 Notes",
        url: "week3/index.html"
    },
    {
        label: "Week 3 Group Work",
        url: "week3/group-work.html"
    },
    {
        label: "Week 4 Notes",
        url: "week4/index.html"
    },
    {
        label: "Week 4 Group Work",
        url: "week4/index.html"
    },
    {
        label: "Week 5 Notes",
        url: "week5/index.html"
    },
    {
        label: "Midterm Challenge: ToDo List",
        url: "challenge1/index.html"
    },
    {
        label: "Week 7 Notes",
        url: "week7/index.html"
    },
    {
        label:  "Week 8 Notes",
        url: "week8/index.html"
    },
    {
        label: "Week 8 Team Activity",
        url: "week8/week8-team/index.html"
    },
    {
        label: "Week 9 Notes",
        url: "week9/index.html"
    },
    {
        label: "Week 10 Notes",
        url: "week10/index.html"
    },
    {
        label: "Challenge 2: Final Project",
        url: "challenge2/index.html"
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