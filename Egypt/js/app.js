
if (String.prototype.replaceAll == undefined) {
    RegExp.escape = function(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }

    String.prototype.replaceAll = function(search, replace) {
        return this.replace(new RegExp(RegExp.escape(search),'g'), replace);
    };
}

// Images Customization
$$("[data-imgAlt]").forEach(a => {
    a.outerHTML = `<div class="imgBox" style="${a.getAttribute("data-css")}">${a.outerHTML}<p>${a.getAttribute("data-imgAlt")}</p></div>`;
});


// Table Sorting
let table = $(".table table"), tableBody = table.querySelector("tbody"), rows = [...table.rows];
let headerRow = rows[0], footerRow = rows[rows.length - 1];
let headRow = [...headerRow.children];

arrowSVG = type => {
    let arrowSVGup = document.createElement("svg");
    if (type == "up") {
        arrowSVGup.innerHTML = '<svg width="15" height="9" viewBox="0 0 8 4" fill="none" style="position: absolute; top: 50%; transform: translateY(-50%) scaleY(-1); margin-right: 7.5px;" xmlns="http://www.w3.org/2000/svg"><path d="M6.72868 0H1.27132C0.970613 0 0.809901 0.354172 1.00792 0.580476L3.7366 3.69897C3.87604 3.85833 4.12396 3.85833 4.2634 3.69897L6.99208 0.580477C7.1901 0.354173 7.02939 0 6.72868 0Z" fill="#eee"></path></svg>';
    } else if (type == "down") {
        arrowSVGup.innerHTML = '<svg width="15" height="9" viewBox="0 0 8 4" fill="none" style="position: absolute; top: 50%; transform: translateY(-50%); margin-right: 7.5px;" xmlns="http://www.w3.org/2000/svg"><path d="M6.72868 0H1.27132C0.970613 0 0.809901 0.354172 1.00792 0.580476L3.7366 3.69897C3.87604 3.85833 4.12396 3.85833 4.2634 3.69897L6.99208 0.580477C7.1901 0.354173 7.02939 0 6.72868 0Z" fill="#eee"></path></svg>';
    }
    return arrowSVGup.firstChild;
}

rows.pop();
rows.shift();

headRow.forEach(btn => {
    if (btn.hasAttribute("nosorting")) return;
    btn.addEventListener("click", function () {
        let sortedRow;
        this.parentNode.querySelectorAll("svg").forEach(svg => { svg.parentNode.removeChild(svg); });

        if (this.className == "" || this.className == "desc") {
            this.className = "asc";
            sortedRow = rows.sort((a, b) => Number(a.children[headRow.indexOf(this)].innerText.replaceAll(",", "")) - Number(b.children[headRow.indexOf(this)].innerText.replaceAll(",", "")));
            this.append(arrowSVG("up"));
        } else {
            this.className = "desc";
            sortedRow = rows.sort((a, b) => Number(b.children[headRow.indexOf(this)].innerText.replaceAll(",", "")) - Number(a.children[headRow.indexOf(this)].innerText.replaceAll(",", "")));
            this.append(arrowSVG("down"));
        };

        headRow.forEach(a => { if (a != this) a.removeAttribute("class"); });

        tableBody.innerHTML = "";

        tableBody.append(headerRow);
        sortedRow.forEach(row => { tableBody.append(row) })
        tableBody.append(footerRow);
    });
});





// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;

//         // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }

//     return array;
// }

// newRows = shuffle(rows);
// table.innerHTML = "<tbody></tbody>"
// newRows.forEach(a => { table.querySelector("tbody").append(a) })
