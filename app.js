const search = document.getElementById('search-box');
document.addEventListener('DOMContentLoaded', getData);
search.addEventListener('keyup', searchBox);

async function getData() {

    const api = await fetch('http://starlord.hackerearth.com/TopRamen');

    const data = await api.json();

    // console.log(data);

    const topRes = data.filter(entry =>
        Number(entry["Top Ten"].split("#")[1]
        ) === 1)

    // console.log(topRes);
    showData(topRes);

}


function showData(topRes) {
    // console.log(topRes);

    let tab = '';


    topRes.forEach((name) => {


        tab += `<tr>
        <td>${name.Brand}</td>
        <td>${name.Variety}</td>
        <td>${name.Country}</td>
        <td>${name.Stars}</td>
      </tr>`
    })


    document.getElementById('list').innerHTML = tab;

}

function searchBox(e) {

    const text = e.target.value.toLowerCase();
    document.querySelectorAll('#list').forEach(function (task) {
        const item = task.firstChild.textContent;
        // console.log(item);
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })


}
