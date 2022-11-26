
// メインデータを保存するときの処理
// 始まった年と終了の年
const start = 2016;
const end = 2094;

let year = "";

for (let i = start; i <= end; i++) {
    year += "<option>" + i + "年" + "</option>";
};


// 該当数字をyearに入れる
$("#year").html(year)

// メインデータを保存するときの処理
// 始まった月と終了の月
const startmonth = 1;
const endmonth = 12;

let month = "";

for (let i = startmonth; i <= endmonth; i++) {
    month += "<option>" + i + "月" + "</option>";
};


// 該当数字をmonthに入れる
$("#month").html(month)


// 始まった月と終了の月
const startdate = 1;
const enddate = 31;

let date = "";

for (let i = startdate; i <= enddate; i++) {
    date += "<option>" + i + "日" + "</option>";
};

// 該当数字をdateに入れる
$("#date").html(date)

//---------------------------------メインの関数---------------------------------//

// 空の配列を作成
const allData = [];

// ---------------------------------ずっとpush処理---------------------------------//
if (localStorage.getItem("mountaindata")) {
    const jsonData = localStorage.getItem("mountaindata")
    const maindata = JSON.parse(jsonData);//parse=解析する

    for (var i = 0; i < maindata.length; i++) {

        const year = maindata[i].year; //ここは増える変数なので、下にあるallDataは保存するたび、増やし、履歴として残ります。
        const month = maindata[i].month;
        const date = maindata[i].date;
        const mountain = maindata[i].mountain;
        const spring = maindata[i].spring;
        const food = maindata[i].food;
        const photo = maindata[i].photo;
        const text = maindata[i].text;

        allData.push(maindata[i])
    }
};


//saveをクリックしたら、idから値を取れる
$("#save").on("click", function () {
    const year = $("#year").val();
    const month = $("#month").val();
    const date = $("#date").val();
    const mountain = $("#mountain").val();
    const spring = $("#spring").val();
    const food = $("#food").val();
    const photo = $("#photo").val();
    const text = $("#text_area").val();


    // //maindata変数が以下のものをまとめて、objectにする
    const maindata = {
        year: year,
        month: month,
        date: date,
        mountain: mountain,
        spring: spring,
        food: food,
        photo: photo,
        text: text,
        // pic: pic,
    };

    //maindataというobjectをallDataの中に入れる
    allData.push(maindata);

    //JSON データを変換する処理
    const jsonData = JSON.stringify(allData); //stringify 文字列
    localStorage.setItem("mountaindata", jsonData);//maindataにデータを取得していく
    console.log(jsonData);

    console.log(allData);
});



// ---------------------------------save処理---------------------------------//

$("#save").on("click", function () {

    const jsonData = localStorage.getItem("mountaindata")
    const maindata = JSON.parse(jsonData);//parse=解析する


    console.log(maindata);

    const htmlElm = []; //空のHTML配列
    for (var i = 0; i < maindata.length; i++) { //繰り返し処理

        const year = maindata[i].year; //ここは増える変数なので、下にあるcreatHTMLは保存するたび、増やし、履歴として残ります。
        const month = maindata[i].month;
        const date = maindata[i].date;
        const mountain = maindata[i].mountain;
        const spring = maindata[i].spring;
        const food = maindata[i].food;
        const photo = maindata[i].photo;
        const text = maindata[i].text;

        const createHtml = `<div class="createHtml"><div class="date"><p>${year}</p>` + `<p>${month}</p>` + `<p>${date}</p></div>` + `<p>${mountain}を登って</p>` + `<p>${spring}に行って</p>` + `<p>${food}を食べた</p>` + `<div class="photo"><img src="img/${photo}"></div>` + `<p>${text}</p></div></div>`; //Pタグとして入れる
        htmlElm.push(createHtml); //createHTMLを空の配列に入れる

        const last = htmlElm[htmlElm.length - 1];

        $("#showlist").html(last); //HTMLの配列を反映する > 繰り返して反映していく
        $(".box").show();
        $(".show").show();

        console.log('last'.last);
    }
});



// ---------------------------------storage処理---------------------------------//


$("#storage").on("click", function () {

    let jsonData = localStorage.getItem("mountaindata")
    let maindata = JSON.parse(jsonData);//parse=解析する

    console.log(maindata);

    const htmlElm = []; //からのHTML配列
    for (var i = 0; i < maindata.length; i++) { //繰り返し処理

        const year = maindata[i].year; //ここは増える変数なので、下にあるcreatHTMLは保存するたび、増やし、履歴として残ります。
        const month = maindata[i].month;
        const date = maindata[i].date;
        const mountain = maindata[i].mountain;
        const spring = maindata[i].spring;
        const food = maindata[i].food;
        const photo = maindata[i].photo;
        const text = maindata[i].text;
        // const pic = maindata[i].pic;

        const createHtml = `<div class="createHtml"><div class="date"><p>${year}</p>` + `<p>${month}</p>` + `<p>${date}</p></div>` + `<p>${mountain}を登って</p>` + `<p>${spring}に行って</p>` + `<p>${food}を食べた</p>` + `<a href="img/${photo}" data-lightbox="group"><div class="photo"><img src="img/${photo}"></div></a>` + `<p>${text}</p></div></div>`;//Pタグとして入れる
        htmlElm.push(createHtml); //createHTMLを空の配列に入れる

        $(".box_stock").show();
        $("#memo").hide();
        $("#stock").html(htmlElm);
        $(".show").hide();//HTMLの配列を反映する > 繰り返して反映していく
    };


    console.log(htmlElm);

    //JSON データを変換する処理
    const stockdata = JSON.stringify(htmlElm); //stringify 文字列
    localStorage.setItem("mountaindata", jsonData);//maindataにデータを取得していく
    console.log(jsonData);

});

// ---------------------------------並び替え---------------------------------//

$("#array").on("click", function () {

    //     if (localStorage.getItem("mountaindata")) {
    //         const jsonData = localStorage.getItem("mountaindata")
    //         const maindata = JSON.parse(jsonData);//parse=解析する
    //         const array = [maindata.year, maindata.month]



    //         const year = maindata[i].year;
    //         const month = maindata[i].month;
    //         const date = maindata[i].date;//ここは増える変数なので、下にあるallDataは保存するたび、増やし、履歴として残ります。

    //     }

    //     array.sort(function (first, second) {
    //         return first - second;
    //     })
    // });
    let object = {};

    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);
        object[key] = localStorage.getItem(key);

    }
    const collection = Object.keys(localStorage).sort().map(key => {

        return {
            year: key,
            month: localStorage.getItem(year)
        }
        console.log(collection)
    });
});

// ---------------------------------入力画面再表示処理---------------------------------//

$(function () {
    $("#input").click(function () {

        $(".box_stock").toggle();
        $("#memo").toggle();

    })
});


// ---------------------------------全削除処理---------------------------------//


$("#clear").on("click", function () {
    localStorage.clear("mountaindata");
    $("#year").val("");
});

// // ---------------------------------最新削除処理---------------------------------//



// $("delete").on("click", function () {
//     localStorage.removeItem("mountaindata");
//     $("#year").val([1]);


// });



