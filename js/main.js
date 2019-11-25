// HTML 讀取後執行
$(function(){
    //-------------
    // 變數宣告
    //-------------
    let random = $('#random');
    let select = random.find('.selection');
    let random_btn = random.find('#random-btn');

    // 準備菜單品項
    let menus_array = [];
    for(let serie of menu_objects.series){
        for(let menu_item of serie.menus){
            menus_array.push(menu_item.name_ch);
        }
    }

    // 設定亂數區間
    let min = 0;
    let max = menus_array.length - 1;

    //-------------
    // 事件綁定
    //-------------
    random_btn.on('click', function(){
        // 製作亂數
        let ran = Math.floor(Math.random() * (max - min + 1)) + min;

        // 顯示在畫面上
        select.text(menus_array[ran]);
    });
});