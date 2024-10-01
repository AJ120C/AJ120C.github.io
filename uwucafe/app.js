
Categories = {
    1: "Combos",
    2: "Mains",
    3: "Sides",
    4: "Deserts",
    5: "Drinks",
    6: "Business Deals"
}

Menus = [
    {
        "name": "Lucky Bento Box Combo",
        "cost": 500,
        "category": 1,
        "image": "LuckyBentoBoxCombo.png"
    },
    {
        "name": "9 Lives Combo",
        "cost": 300,
        "category": 1,
        "image": "9LivesCombo.png"
    },
    {
        "name": "Kitty Cat Meal",
        "cost": 275,
        "category": 1,
        "image": "KittyCatMeal.png"
    },
    {
        "name": "Cat Burglar Combo",
        "cost": 260,
        "category": 1,
        "image": "CatBurglarCombo.png"
    },
    {
        "name": "Pawcakes Combo",
        "cost": 185,
        "category": 1,
        "image": "PawcakesCombo.png"
    },
    {
        "name": "Screamers",
        "cost": 1350,
        "category": 1,
        "image": ""
    },
    {
        "name": "Death Coffin",
        "cost": 1350,
        "category": 1,
        "image": ""
    },
    {
        "name": "CaspersGo2",
        "cost": 1350,
        "category": 1,
        "image": ""
    },
    {
        "name": "Horrori-Boo",
        "cost": 1350,
        "category": 1,
        "image": ""
    },
    {
        "name": "Boogeyman",
        "cost": 1350,
        "category": 1,
        "image": ""
    },
    {
        "name": "California Sushi Roll Platter",
        "cost": 300,
        "category": 2,
        "image": "CaliforniaSushiRollPlatter.png"
    },
    {
        "name": "Tempura Dragon Sushi Roll Platter",
        "cost": 300,
        "category": 2,
        "image": "TempuraDragonSushiRollPlatter.png"
    },
    {
        "name": "Spicy Girl Sushi Roll Platter",
        "cost": 300,
        "category": 2,
        "image": "SpicyGirlSushiRollPlatter.png"
    },
    {
        "name": "Boo Pot Pie",
        "cost": 400,
        "category": 2,
        "image": "uwuBooPotpie.png"
    },
    {
        "name": "Mixed Roll Coffin",
        "cost": 400,
        "category": 2,
        "image": "uwumixedtollbox.png"
    },
    {
        "name": "Ghostly Bacon Mac & Cheese",
        "cost": 400,
        "category": 2,
        "image": "spookymacandcheese.png"
    },
    {
        "name": "Jack-O-Lanter Quesadillas",
        "cost": 400,
        "category": 2,
        "image": "pumpkinqeso.png"
    },
    {
        "name": "Ghostly Dumplings",
        "cost": 400,
        "category": 2,
        "image": "ghostlydumplings.png"
    },
    {
        "name": "Korean Corn Dogs",
        "cost": 250,
        "category": 3,
        "image": "KoreanCornDogs.png"
    },
    {
        "name": "Spooky Spicy Ramen",
        "cost": 250,
        "category": 3,
        "image": "spicyramen.png"
    },
    {
        "name": "Spooky Miso Soup",
        "cost": 250,
        "category": 3,
        "image": "uwumisosoup.png"
    },
    {
        "name": "Spiders Web Hot Spinach Dip",
        "cost": 250,
        "category": 3,
        "image": "spiderswebdip.png"
    },
    {
        "name": "Chorizo Mini Pie",
        "cost": 250,
        "category": 3,
        "image": "chorizopie.png"
    },
    {
        "name": "Munckin bat Bucket",
        "cost": 250,
        "category": 4,
        "image": "wholebucket.png"
    },
    {
        "name": "Pumpkin Sugar Cookies",
        "cost": 250,
        "category": 4,
        "image": "uwucookieplate.png"
    },
    {
        "name": "Spider Doughnut",
        "cost": 250,
        "category": 4,
        "image": "spiderdoughnut.png"
    },
    {
        "name": "Mummified Concha",
        "cost": 250,
        "category": 4,
        "image": "mummyconcha.png"
    },
    {
        "name": "Graveyard 3 Leches Cake",
        "cost": 250,
        "category": 4,
        "image": "uwuflan.png"
    },
    {
        "name": "Bubble Teas",
        "cost": 350,
        "category": 5,
        "image": "BubbleTea.png"
    },
    {
        "name": "Pumpkin Spice Frapp",
        "cost": 400,
        "category": 5,
        "image": "uwuspookyfrap.png"
    },
    {
        "name": "Pumpkin Cream Cold Brew",
        "cost": 400,
        "category": 5,
        "image": "pumpkinccb.png"
    },
    {
        "name": "Witches Iced Potion Latte",
        "cost": 400,
        "category": 5,
        "image": "potionlatte.png"
    },
    {
        "name": "Apple Crisp Macchiato",
        "cost": 400,
        "category": 5,
        "image": "applecrispm.png"
    },
    {
        "name": "Skully Almond Oatmilk Espresso",
        "cost": 400,
        "category": 5,
        "image": "almondoatespresso.png"
    },
    {
        "name": "Meowcaroons 1X2",
        "cost": 2,
        "category": 6,
        "image": "meowcaroons.png"
    },
    {
        "name": "Meowcaroons 4x6",
        "cost": 6,
        "category": 6,
        "image": "meowcaroons.png"
    },
    {
        "name": "Meowcaroons 8x12",
        "cost": 12,
        "category": 6,
        "image": "meowcaroons.png"
    },
    {
        "name": "Meowcaroons 12X20",
        "cost": 20,
        "category": 6,
        "image": "meowcaroons.png"
    }
]




var discount = 30;
var mainContent = $(".main-content");
var orderContent = $(".order-content");
var contentHTML = '';
function createMenu() {
    for (key in Categories) {
        var contentCategory = `<div class="content-category">
                                <h1>${Categories[key]}</h1>
                                <div class="content-category-items">
                                
                            `;
        for (menu of Menus) {
            if (menu.category == key) {
                var encodedName = menu.name.replace(/\s+/g, '-');
                var categoryItem = `
                    <div class="category-item" data-name = ${encodedName} data-cost = ${menu.cost} data-image = ${menu.image}>
                        <img src=assets/${menu.image} alt="">
                        <div class="info-text">
                            <h2>${menu.name}</h2>
                            <h2><strong>${menu.cost}$</strong></h2>
                        </div>
                        <div class="add-to-basket-btn">
                            <p>Add To Basket</p>
                        </div>
                    </div>
            `;
                contentCategory += categoryItem; // Öğeyi kategoriye ekler
                //console.log(menu.name, menu.category);
            }
        }

        contentCategory += '</div>'; // Kategoriyi kapatır
        contentCategory += '</div>'; // Kategoriyi kapatır
        //console.log(contentCategory);
        //contentHTML += contentCategory; // Kategori içeriğini dizeye ekler
        mainContent.append(contentCategory);
    }
}

$(document).ready(function () {
    createMenu();
    //console.log(contentHTML);
    //mainContent.append(contentHTML);
});

$(document).on('click', '.add-to-basket-btn', function () {
    var name = $(this).parent().data('name');
    var cost = $(this).parent().data('cost');
    var image = $(this).parent().data('image');
    //console.log(name, cost, image);
    if ( orderContent.find(`#${name}`).length > 0) {
        
        orderContent.find(`#${name} > .add-container > .count`).text(parseInt(orderContent.find(`#${name} > .add-container > .count`).text()) + 1);
        orderContent.find(`#${name} > .item-info > h2 > strong`).text(parseInt(orderContent.find(`#${name} > .item-info > h2 > strong`).text()) + 1 + 'x');
        $(".total-count").text(parseInt($(".total-count").text()) + cost + " $");
        return;
    }
    var orderItem = `
        <div class="order-item" id = ${name} data-cost = ${cost}>
            <img src=assets/${image} alt="">
            <div class="item-info">
                <h2>${name}</h2>
                <h2><strong>1x</strong></h2>
            </div>
            <div class="add-container">
                <div class="decrese">-</div>
                <div class="count">1</div>
                <div class="add">+</div>
            </div>
            <div class="delete">
                <img src="assets/deletebtn.png" alt="">
            </div>
        </div>
    `;
    $(".total-count").text(parseInt($(".total-count").text()) + cost + " $");
    orderContent.append(orderItem);
});

$(document).on('click', '.decrese', function () {
    var count = parseInt($(this).parent().find('.count').text());
    if (count == 1) {
        $(this).parent().parent().remove();
        $(".total-count").text(parseInt($(".total-count").text()) - parseInt($(this).parent().parent().data('cost')) + " $");
    } else {
        $(this).parent().find('.count').text(count - 1);
        $(this).parent().parent().find('.item-info > h2 > strong').text(count - 1 + 'x');
        $(".total-count").text(parseInt($(".total-count").text()) - parseInt($(this).parent().parent().data('cost')) + " $");
    }
});

$(document).on('click', '.add', function () {
    var count = parseInt($(this).parent().find('.count').text());
    $(this).parent().find('.count').text(count + 1);
    $(this).parent().parent().find('.item-info > h2 > strong').text(count + 1 + 'x');
    $(".total-count").text(parseInt($(".total-count").text()) + parseInt($(this).parent().parent().data('cost')) + " $");
});

$(document).on('click', '.delete', function () {
    var count = parseInt($(this).parent().find('.count').text());
    var cost = parseInt($(this).parent().data('cost'));
    $(".total-count").text(parseInt($(".total-count").text()) - (count * cost) + " $");
    $(this).parent().remove();
});

$(document).on('click', '.clear-btn', function () {
    orderContent.empty();
    $(".total-count").text("0 $");
});

$(document).on('click', '.apply-discount', function () {
    //var discount = parseInt($(".discount-input").val());
    var total = parseInt($(".total-count").text());
    $(".total-count").text((total - ((discount / 100) * total)).toFixed(0) + " $");
});

$(document).on('click', '.coppy-order-btn', function () {    
    var order = [];
    orderContent.children().each(function () {
        var name = $(this).attr('id')
        var cost = $(this).data('cost');
        var count = $(this).find('.count').text();

        //order.push(count + 'x ' + name + ' ' + cost + '$');
        order.push(count + 'x ' + name);
    });
    // console.log(order);
    // var orderString = JSON.stringify(order);
    // console.log(orderString);
    // navigator.clipboard.writeText(orderString);
    var orderString = order.join(', ');
    console.log(orderString);
    
    // Clipboard'a yaz
    navigator.clipboard.writeText(orderString).then(function() {
        console.log('Order copied to clipboard');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
});

$(document).on('click', '.dark-mode', function () {
    $(".mainbody").toggleClass('dark');
    $(".basket-container").toggleClass('dark');
    $(".header").toggleClass('dark');
    $(".category-item").toggleClass('dark-item');
    $(".basket-cantainer").toggleClass('dark-order');
    $(".content-category").toggleClass('dark-content-category');
    $(".text").toggleClass('dark-text');
    //$(".item-info").toggleClass('dark-text');
    console.log('Dark mode activated');
});
