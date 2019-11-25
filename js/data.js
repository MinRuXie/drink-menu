Vue.component('todo-item', {
    props: ['todo'],
    template: `<section class="menu">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="series-wrap">
                                    <span>{{todo.name_ch}}</span>
                                    <span>{{todo.name_en}}</span>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-12" v-for="menu in todo.menus">
                                <div class="item-wrap">
                                    <div class="item">
                                        <div class="item-img-wrap">
                                            <img v-bind:src="menu.img" draggable="false" />
                                        </div>
                                        <div class="item-text-wrap">
                                            <div class="item-title-wrap">
                                                <span>{{menu.name_ch}}</span>
                                                <span>{{menu.name_en}}</span>
                                            </div>
                                            <div class="item-ingredient-wrap">
                                                <span v-for="ingredient in menu.ingredients">{{ingredient}}</span>
                                            </div>
                                            <div class="item-temperature-wrap">
                                                <span v-for="temperature in menu.temperatures">{{temperature}}</span>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`
})

let menu_objects = {
    series: [
        {
            id: 0,
            name_en: 'Tea',
            name_ch: '卡式單品',
            menus: [
                {
                    name_en: 'Black Tea',
                    name_ch: '紅茶',
                    img: 'img/black_tea.jpg',
                    ingredients: ['紅茶包'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Green Tea',
                    name_ch: '綠茶',
                    img: 'img/green_tea.jpg',
                    ingredients: ['綠茶包'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Matcha Green Tea',
                    name_ch: '抹茶',
                    img: 'img/matcha_green_tea.jpg',
                    ingredients: ['抹茶粉'],
                    temperatures: ['冰', '熱']
                }
            ]
        },{
            id: 1,
            name_en: 'Milk Tea',
            name_ch: '卡式特調茶飲',
            menus: [
                {
                    name_en: 'Black Milk Tea',
                    name_ch: '紅奶茶',
                    img: 'img/black_milk_tea.jpg',
                    ingredients: ['紅茶包', '奶精/奶粉'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Green Milk Tea',
                    name_ch: '綠奶茶',
                    img: 'img/green_milk_tea.jpg',
                    ingredients: ['綠茶包', '奶精/奶粉'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Black Sugar Milk Tea',
                    name_ch: '黑糖奶茶',
                    img: 'img/black_sugar_milk_tea.jpg',
                    ingredients: ['黑糖', '紅茶包', '奶精/奶粉'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Black Sugar Milk',
                    name_ch: '黑糖牛奶',
                    img: 'img/black_sugar_milk.jpg',
                    ingredients: ['黑糖', '奶精/奶粉'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Matcha Green Tea Milk Tea',
                    name_ch: '抹茶奶茶',
                    img: 'img/matcha_green_tea_milk_tea.jpg',
                    ingredients: ['抹茶粉', '綠茶包', '奶精/奶粉'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Matcha Green Tea Milk',
                    name_ch: '抹茶牛奶',
                    img: 'img/matcha_green_tea_milk.jpg',
                    ingredients: ['抹茶粉', '奶精/奶粉'],
                    temperatures: ['冰', '熱']
                }
            ]
        },{
            id: 2,
            name_en: 'Fruit Tea',
            name_ch: '卡式清爽飲品',
            menus: [
                {
                    name_en: 'Plum Black Tea',
                    name_ch: '梅子紅茶',
                    img: 'img/plum_black_tea.jpg',
                    ingredients: ['梅汁', '紅茶包'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Plum Green Tea',
                    name_ch: '梅子綠茶',
                    img: 'img/plum_green_tea.jpg',
                    ingredients: ['梅汁', '綠茶包'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Rock Sugar Lemon Black Tea',
                    name_ch: '冰糖檸檬紅茶',
                    img: 'img/rock_sugar_lemon_black_tea.jpg',
                    ingredients: ['冰糖檸檬汁', '紅茶包'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Rock Sugar Lemon Green Tea',
                    name_ch: '冰糖檸檬綠茶',
                    img: 'img/rock_sugar_lemon_green_tea.jpg',
                    ingredients: ['冰糖檸檬汁', '綠茶包'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Black Sugar Lemon Tea',
                    name_ch: '黑糖檸檬茶',
                    img: 'img/black_sugar_lemon_green_tea.jpg',
                    ingredients: ['黑糖檸檬汁'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Rock Sugar Lemon Tea',
                    name_ch: '冰糖檸檬茶',
                    img: 'img/rock_sugar_lemon_tea.jpg',
                    ingredients: ['冰糖檸檬汁'],
                    temperatures: ['冰', '熱']
                }
            ]
        },{
            id: 3,
            name_en: 'Cocoa',
            name_ch: '卡式巧克嚕嚕',
            menus: [
                {
                    name_en: 'Chocolate Cocoa',
                    name_ch: '巧克力可可',
                    img: 'img/chocolate_cocoa.jpg',
                    ingredients: ['可可粉'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Cocoa Milk Tea',
                    name_ch: '可可奶茶',
                    img: 'img/cocoa_milk_tea.jpg',
                    ingredients: ['可可粉', '紅茶包', '奶精/奶粉'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Cocoa Matcha Green Tea Milk Tea',
                    name_ch: '可可抹茶奶茶',
                    img: 'img/cocoa_matcha_green_tea_milk_tea.jpg',
                    ingredients: ['可可粉', '抹茶粉', '綠茶包', '奶精/奶粉'],
                    temperatures: ['冰', '熱']
                }
            ]
        },{
            id: 4,
            name_en: 'Almond',
            name_ch: '卡式冬季杏仁飲品',
            menus: [
                {
                    name_en: 'Almond Tea',
                    name_ch: '杏仁茶',
                    img: 'img/almond_tea.jpg',
                    ingredients: ['杏仁粉'],
                    temperatures: ['熱']
                },{
                    name_en: 'Almond Milk Tea',
                    name_ch: '杏仁奶茶',
                    img: 'img/almond_milk_tea.jpg',
                    ingredients: ['杏仁粉', '紅茶包', '奶精/奶粉'],
                    temperatures: ['熱']
                },{
                    name_en: 'Almond Milk',
                    name_ch: '杏仁牛奶',
                    img: 'img/almond_milk.jpg',
                    ingredients: ['杏仁粉', '奶精/奶粉'],
                    temperatures: ['熱']
                }
            ]
        },{
            id: 5,
            name_en: 'Coffee',
            name_ch: '卡式醒腦咖啡精選',
            menus: [
                {
                    name_en: 'Latte',
                    name_ch: '拿鐵',
                    img: 'img/latte.jpg',
                    ingredients: ['咖啡粉', '奶精/奶粉'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Coffee Milk Tea',
                    name_ch: '咖啡奶茶',
                    img: 'img/coffee_milk_tea.jpg',
                    ingredients: ['咖啡粉', '紅茶包', '奶精/奶粉'],
                    temperatures: ['冰', '熱']
                },{
                    name_en: 'Almond Latte',
                    name_ch: '杏仁拿鐵',
                    img: 'img/almond_latte.jpg',
                    ingredients: ['杏仁粉','咖啡粉', '奶精/奶粉'],
                    temperatures: ['熱']
                },{
                    name_en: 'Almond Coffee',
                    name_ch: '杏仁咖啡',
                    img: 'img/almond_coffee.jpg',
                    ingredients: ['杏仁粉','咖啡粉'],
                    temperatures: ['熱']
                },{
                    name_en: 'Cocoa Coffee',
                    name_ch: '可可咖啡',
                    img: 'img/cocoa_coffee.jpg',
                    ingredients: ['可可粉','咖啡粉'],
                    temperatures: ['冰', '熱']
                }
            ]
        },{
            id: 6,
            name_en: 'Water',
            name_ch: '卡式水系列',
            menus: [
                {
                    name_en: 'Butterfly flower',
                    name_ch: '蝶豆花水',
                    img: 'img/butterfly_flower.jpg',
                    ingredients: ['蝶豆花花瓣'],
                    temperatures: ['熱']
                }
            ]
        }
    ]
};

var lists = new Vue({
    el: '#main',
    data: menu_objects
});