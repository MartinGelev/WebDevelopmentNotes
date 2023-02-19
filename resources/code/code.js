import data from './content.js';

let counterLink = 1
function createNav(parentElement, data, level) {
    let nav;
    if (level !== 0) {
        nav = document.createElement("ul");
    }
    else {
        nav = parentElement
    }
    data.forEach(item => {
        let listitem
        counterLink++
        if (level !== 0) {

            listitem = document.createElement("li")
            let linkItem = document.createElement("a")
            linkItem.innerHTML = createSpecialCharacters(item["title"])
            linkItem.setAttribute("href", "#" + counterLink);
            listitem.appendChild(linkItem)
        }
        else {
            listitem = document.createElement("h3")
            listitem.innerHTML = createSpecialCharacters(item["title"])
        }
        listitem.setAttribute("class", "level-" + level)


        nav.appendChild(listitem)
        if (item["content"]) {
            let nextLevel;
            let sendElement;
            switch (level) {
                case 0:
                    nextLevel = 1
                    sendElement = parentElement
                    break;
                case 1:
                    nextLevel = 2
                    sendElement = listitem
                    break;
            }
            createNav(sendElement, item["content"], nextLevel)
        }
    })

    if (level !== 0) {
        try {
            parentElement.appendChild(nav)
        }
        catch {
            console.log(level)
        }

    }

}

let counterContent = 1;

function createContent(parentElement, data, level) {
    let container = document.createElement("div")

    let levelLoc = level
    data.forEach(item => {
        let header = document.createElement("h" + level)
        header.innerHTML = createSpecialCharacters(item["title"])
        header.setAttribute("id", counterContent);
        counterContent++;
        container.appendChild(header)

        if (item["text"]) {
            let containerContent = document.createElement("div")
            containerContent.classList.add("containerContent");
            let containertext = document.createElement("div")
            containertext.classList.add("text");
            let textList = item["text"]
            for (let i = 0; i < textList.length; i++) {
                let text = textList[i]
                if (typeof text === 'string') {
                    let paragraph = document.createElement("p")
                    paragraph.innerHTML = createSpecialCharacters(text)
                    containertext.appendChild(paragraph)
                }
                else {
                    let list;
                    if (text[0][0] === "table") {
                        list = document.createElement("table")
                        for (let j = 1; j < text.length; j++) {
                            let row = document.createElement("tr")
                            let rowList = text[j]

                            for (let x = 0; x < rowList.length; x++) {
                                let data = document.createElement("td")
                                data.innerHTML = rowList[x]
                                row.appendChild(data)
                            }
                            list.appendChild(row)
                        }
                    }
                    else {
                        list = document.createElement("ul")
                        for (let i = 0; i < text.length; i++) {
                            let listItem = document.createElement("li")
                            listItem.innerHTML = createSpecialCharacters(text[i])
                            list.appendChild(listItem)
                        }
                    }
                    containertext.appendChild(list)
                }
            }
            containerContent.appendChild(containertext)


            if (item["code"]) {
                let containerCode = document.createElement("pre")
                containerCode.classList.add("code");
                let line = item["code"]
                for (let i = 0; i < line.length; i++) {
                    let lineCode = ""
                    if (line[i] !== "tab") {
                        lineCode += line[i]
                    }

                    let lineDom = document.createElement("p")
                    lineDom.innerHTML = createSpecialCharacters(lineCode)
                    containerCode.appendChild(lineDom)
                }
                containerContent.appendChild(containerCode)
            }
            container.appendChild(containerContent)
        }

        if (item["content"]) {
            createContent(container, item["content"], levelLoc + 1)
        }
    })
    parentElement.appendChild(container)
}

function createSpecialCharacters(string) {
    let stringMod = ""
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "<":
                stringMod += "&lt"
                break;
            case ">":
                stringMod += "&gt"
                break;
            case "&":
                stringMod += "&amp"
                break;
            default:
                stringMod += string[i]
        }
    }
    return stringMod
}

createNav(document.getElementById("navigation"), data, 0)
createContent(document.getElementById("content"), data, 2)
