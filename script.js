let table = document.querySelector("#tableBody");

let isciler = [];
function elaveEt() {

    let ad = document.querySelector("#ad").value;
    let soyad = document.querySelector("#soyad").value;
    let maas = document.querySelector("#maas").value;

    if (ad == "" || soyad == "" || maas == "") {
        alert("Bütün xanaları doldurun!");
        return;
    }

    let isci = {
        ad: ad,
        soyad: soyad,
        maas: maas
    };

    isciler.push(isci);

    cedveliGoster();
}
function cedveliGoster() {

    table.innerHTML = "";

    isciler.forEach(function(isci, index) {

        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${isci.ad}</td>
                <td>${isci.soyad}</td>
                <td>${isci.maas}</td>

                <td>
                    <button class="delete-btn" onclick="sil(${index})">
                        Sil
                    </button>

                    <button class="edit-btn" onclick="duzelt(${index})">
                        Düzəliş et
                    </button>
                </td>
            </tr>
        `;
    });
}
function sil(index) {

    let cavab = confirm("Silmək istəyirsinizmi?");

    if (cavab) {
        isciler.splice(index, 1);
        cedveliGoster();
    }
}
function duzelt(index) {

    let isci = isciler[index];

    table.innerHTML = "";

    isciler.forEach(function(item, i) {

        if (i == index) {

            table.innerHTML += `
                <tr>
                    <td>${i + 1}</td>

                    <td>
                        <input id="yeniAd" value="${isci.ad}">
                    </td>

                    <td>
                        <input id="yeniSoyad" value="${isci.soyad}">
                    </td>

                    <td>
                        <input id="yeniMaas" value="${isci.maas}">
                    </td>

                    <td>
                        <button class="cancel-btn" onclick="cedveliGoster()">
                            İmtina et
                        </button>

                        <button class="save-btn" onclick="yaddaSaxla(${i})">
                            Yadda saxla
                        </button>
                    </td>
                </tr>
            `;

        } else {

            table.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${item.ad}</td>
                    <td>${item.soyad}</td>
                    <td>${item.maas}</td>

                    <td>
                        <button class="delete-btn" onclick="sil(${i})">
                            Sil
                        </button>

                        <button class="edit-btn" onclick="duzelt(${i})">
                            Düzəliş et
                        </button>
                    </td>
                </tr>
            `;
        }
    });
}
function yaddaSaxla(index) {

    let ad = document.querySelector("#yeniAd").value;
    let soyad = document.querySelector("#yeniSoyad").value;
    let maas = document.querySelector("#yeniMaas").value;

    if (ad == "" || soyad == "" || maas == "") {
        alert("Bütün xanaları doldurun!");
        return;
    }
    isciler[index].ad = ad;
    isciler[index].soyad = soyad;
    isciler[index].maas = maas;

    cedveliGoster();
}
function yeniIsci() {

    table.innerHTML += `
        <tr>
            <td>${isciler.length + 1}</td>

            <td>
                <input id="ad" placeholder="adınız">
            </td>

            <td>
                <input id="soyad" placeholder="soyadınız">
            </td>

            <td>
                <input id="maas" placeholder="maaşınız">
            </td>

            <td>
                <button class="cancel-btn">
                    İmtina et
                </button>

                <button class="save-btn" onclick="elaveEt()">
                    Yadda saxla
                </button>
            </td>
        </tr>
    `;
}
function imtinaEt() {
    document.querySelector("#yeni").remove();
}