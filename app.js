async function update() {
    // Fetch all releases and update the <ul> label  
    var requestOptions = {
        method: 'GET'
    };
    fetch("http://127.0.0.1:9000/getReleases", requestOptions)
    .then(res => res.json().then(
        data => {
            console.log(data);
            var list = data[0].assets;
            // var publish_time = new Date(data[0].published_at).toString();

            // document.getElementById("update-time").innerText = publish_time;
            for (var i = 0; i < list.length - 1; i++) {
                var ul = document.getElementById("list");
                var li = document.createElement("li");
                var icon = document.createElement("div");
                icon.className = "icon";
                var aLabel = document.createElement('a');
                aLabel.innerText = `${list[i].name}`;
                aLabel.target = "_blank";
                aLabel.href = `./pdf-viewer/web/viewer.html?file=${list[i].name}`;
                li.appendChild(icon);
                li.appendChild(aLabel)
                ul.appendChild(li);
             }
        }
    ))
}