let last = 'First';
let recent_page = 1;
let front_active = false;
let last_gobrand = 0;

let scp1_width = [57, 53, 99.5, 70, 55];
let scp1_translateX = [227, 358, 484, 656, 800];
let mood_title = ['Minimal', 'Unique', 'Scandinavian', 'Industrial', 'Nature'];
let mood_context = ['미니멀 인테리어는 깔끔하고 단순한 디자인으로,<br>불필요한 장식이나 소품을 배제하여 기본적이면서도 세련된 분위기를 연출합니다.', '유니크 인테리어는 개성적이고 독창적인 디자인을 추구하는 스타일로,<br>색다른 소재와 패턴, 독특한 가구나 조명 디자인 등을 활용하여 참신하면서도 멋진 공간을 만들어냅니다.', '스칸디나비아 인테리어는 간결하고 기능적이며 밝은 색조와 자연 소재,<br>그리고 현대적이고 세련된 디자인으로 특징 지닌 북유럽의 인테리어 스타일입니다.', '인더스트리얼 인테리어는 공장이나 창고 등 산업시설의 원형적인 느낌과 건축물의 기능성을 강조한 스타일로,<br>콘크리트나 철강 등의 노출된 소재와 러프한 질감, 그리고 단순하고 간결한 디자인을 특징으로 합니다.', '자연 소재와 색감을 활용해 자연스러운 분위기를 연출하는 인테리어 디자인으로,<br>나무, 돌, 껍질 등의 소재와 식물, 조명 등을 활용하여 조화로운 공간을 만들어냅니다.'];
let mood_brand = [['artek', 'BERNHARDT'], ['driade', 'sonya'], ['HAY', 'MUUTO'], ['EP', 'Fritz-Hansen'], ['OTWO', 'Sika-Design']];
let artek_link = ['https://leweekend.co.kr/goods/goods_view.php?goodsNo=87111', 'https://www.finnishdesignshop.com/en-us/product/aalto-day-bed-710', 'https://leweekend.co.kr/goods/goods_view.php?goodsNo=65326', 'https://leweekend.co.kr/goods/goods_view.php?goodsNo=87105', 'https://www.artek.fi/en/products/aslak-chair', 'https://leweekend.co.kr/goods/goods_view.php?goodsNo=87010'];
let artek_title = ['Artek', 'Artek', 'Artek', 'Artek', 'Artek', 'Artek'];
let artek_context = ['KiKi Sofa 3-Seater', 'Day bed 710 dagbädd', 'Stool 60 coloring edition', 'Chair 69', 'Alaska Chair', 'Stool E60'];

let BERNHARDT_link = ['https://bernhardtdesign.com/furniture/avant/', 'https://bernhardtdesign.com/furniture/becca-sofa/', 'https://bernhardtdesign.com/furniture/alta/', 'https://bernhardtdesign.com/furniture/catia/', 'https://bernhardtdesign.com/furniture/cp-1-2/?r-index=ottomans', 'https://bernhardtdesign.com/furniture/cp-3/'];
let BERNHARDT_title = ['Jang Won Yoon', 'Terry Crews', 'Cory Grosser', 'Noé Duchaufour-Lawrance', 'Charles Pollock', 'Charles Pollock'];
let BERNHARDT_context = ['Avant', 'Becca', 'Alta', 'Catia', 'CP.1', 'CP.3'];

let driade_link = ['https://www.driade.com/it_it/toy-poltroncina-grigio-chiaro-d29864a379045.html?___store=driade_it', 'https://www.driade.com/it_it/sissi-poltroncina-rosso-d51634a379039.html?___store=driade_it', 'https://www.driade.com/it_it/roly-poly-poltrona-cemento-d28478a278089.html?___store=driade_it', 'https://www.driade.com/it_it/roly-poly-poltrona-rosa-carne-d28478a278026.html?___store=driade_it', 'https://www.driade.com/it_it/ercole-e-afrodite-comp-1-contenitore-bianco-sbiancato-d10005j371b39.html?___store=driade_it', 'https://www.driade.com/it_it/tottori-armchair-da5648a.html?___store=driade_it'];
let driade_title = ['driade', 'driade', 'driade', 'driade', 'driade', 'driade'];
let driade_context = ['Toy', 'SiSSI', 'Ercole e Afrodite', 'Roly Poly', 'Roly Poly', 'Tottori'];

let sonya_link = ['https://sonyawinner.com/collection/modern-colourful-rugs/after-matisse-colourful-area-rug/', 'https://sonyawinner.com/collection/modern-colourful-rugs/bubbles-multicoloured-area-rug/', 'https://sonyawinner.com/collection/modern-colourful-rugs/the-scribble-rug/', 'https://sonyawinner.com/collection/modern-colourful-rugs/capsule-sunset-runner/', 'https://sonyawinner.com/collection/modern-colourful-rugs/colour-canyon-runner-2/', 'https://sonyawinner.com/collection/modern-colourful-rugs/teal-reflections-runner/'];
let sonya_title = ['sonya', 'sonya', 'sonya', 'sonya', 'sonya', 'sonya'];
let sonya_context = ['After Marisse Rug', 'Bubbles Rug', 'The Scribble Rug', 'Capsule Sunset Runner', 'Colour Canyon Runner', 'Teal Refelctions Runner'];

let HAY_link = ['https://hayshop.no/products/122-chairs/1178-bernard/', 'https://www.collectionb.cc/goods/goods_view.php?goodsNo=1000024527', 'https://www.collectionb.cc/goods/goods_view.php?goodsNo=1000027594', 'https://www.collectionb.cc/goods/goods_view.php?goodsNo=1000000885', 'https://www.collectionb.cc/goods/goods_view.php?goodsNo=1000024385', 'https://www.hay.nl/en/pastis-coffee-table'];
let HAY_title = ['HAY', 'HAY', 'HAY', 'HAY', 'HAY', 'HAY'];
let HAY_context = ['Bernard Lounge Chair', 'Crate Side Table', 'Revolver Bar Stool', 'DLM Side Table (38cm)', 'Colour Cabinet Floor S- multi', 'Pastis Coffee Table'];

let MUUTO_link = ['https://professionals.muuto.com/product2/Loft-Counter-Stool-65-cm-25.6--p4355/p4355/', 'https://professionals.muuto.com/product2/Workshop-Chair--p13653/p13653/', 'https://professionals.muuto.com/product2/Flow-Trolley--p33311/p33311/', 'https://professionals.muuto.com/product2/Piton-Portable-Lamp--p77340/p77340/', 'https://professionals.muuto.com/product2/Ease-Portable-Lamp--p95267/p95267/', 'https://professionals.muuto.com/product2/Silent-Vase--p2304/p2304/'];
let MUUTO_title = ['MUUTO', 'MUUTO', 'MUUTO', 'MUUTO', 'MUUTO', 'MUUTO'];
let MUUTO_context = ['Loft counter stool', 'Works hop chair', 'Flow Trolley', 'Piton portable lamp', 'Ease portable lamp', 'Silent vase'];

let EP_link = ['https://www.monologuelondon.com/products/ruban-chair', 'https://www.estudiopersona.com/products/o-stool', 'https://mattermatters.com/products/una-chair', 'https://www.estudiopersona.com/products/bow-floor-lamp', 'https://rosecrosby.com/products/bow-pendant-lamp?variant=41786309214388', 'https://www.estudiopersona.com/instock/luzdiningtable-cbx37'];
let EP_title = ['Estudio Persona', 'Estudio Persona', 'Estudio Persona', 'Estudio Persona', 'Estudio Persona', 'Estudio Persona'];
let EP_context = ['Ruban collection for pierre frey', 'O STOOL', 'UNA Chair', 'Bow Floor Lamp', 'Bow pendant light', 'Luz dining table'];

let FritzHansen_link = ['https://www.danishdesignstore.com/products/jacobsen-egg-chair-fritz-hansen-egg-leather-featured', 'https://www.fritzhansen.com/ko/categories/by-series/Fri/JH14MU?sku=JH14MU-ATO124-ATO124-SPAL', 'https://www.fritzhansen.com/ko/categories/by-series/PK0A/PK0A?sku=PK0A-CA195', 'https://www.fritzhansen.com/ko/categories/by-series/KAISER%20idell/6631-P?sku=64700608', 'https://www.fritzhansen.com/ko/categories/by-series/Night%20Owl/Night%20Owl?sku=52698003', 'https://www.fritzhansen.com/ko/categories/by-series/Calabash/Calabash%20P2?sku=84720608'];
let FritzHansen_title = ['Fritz Hansen', 'Fritz Hansen', 'Fritz Hansen', 'Fritz Hansen', 'Fritz Hansen', 'Fritz Hansen'];
let FritzHansen_context = ['3316, Anniversary', 'JH14', 'PK0 A', '6631-P, Ø 285 mm', 'Table lamp', 'P2, Ø 224 mm'];

let OTWO_link = ['https://leweekend.co.kr/goods/goods_view.php?goodsNo=87267&ttm_media_type=google&ttm_product=662623&gad=1&gclid=CjwKCAjw3ueiBhBmEiwA4BhspHz-dm-hq8-GdsiX4D5fT8G_IMrN_1ftXdIu_LGDSf1_ez3zZlTGUhoC4JAQAvD_BwE', 'https://leweekend.co.kr/goods/goods_view.php?goodsNo=87253&ttm_media_type=google&ttm_product=662626&gad=1&gclid=CjwKCAjw3ueiBhBmEiwA4BhspArHf36DZtiwnpwtUpGEsNAnUD7zFn1A5quCiebGAsiDQMPaffTjtBoCmJgQAvD_BwE', 'https://leweekend.co.kr/goods/goods_view.php?goodsNo=87257', 'https://leweekend.co.kr/goods/goods_view.php?goodsNo=69369', 'https://leweekend.co.kr/goods/goods_view.php?goodsNo=71800', 'https://leweekend.co.kr/goods/goods_view.php?goodsNo=78455'];
let OTWO_title = ['OTWO', 'OTWO', 'OTWO', 'OTWO', 'OTWO', 'OTWO'];
let OTWO_context = ['덴 피카 컬렉션 수납장 세트 S (A)', '덴 피카 컬렉션 수납장 C', '덴 피카 체어', '피카 선반 스툴', '케인 플랜트 박스', '보에트 테이블'];

let SikaDesign_link = ['https://sika-design.com/collections/lounge-furniture/products/ottoman-exterior-large', 'https://sika-design.com/collections/lounge-furniture/products/dawn-exterior-foot-stool?variant=39479755505716', 'https://sika-design.com/collections/dining-tables/products/tony-cafe-table?variant=39268077731892', 'https://sika-design.com/collections/lounge-chairs/products/nanny-rocking-chair', 'https://sika-design.com/collections/lounge-chairs/products/hanging-egg-chair-4?variant=39350951018548', 'https://sika-design.com/collections/lounge-chairs/products/chill-lounge-chair'];
let SikaDesign_title = ['Sika·Design', 'Sika·Design', 'Sika·Design', 'Sika·Design', 'Sika·Design', 'Sika·Design'];
let SikaDesign_context = ['Ottoman Exterior Large', 'Dawn Exterior Foot Stool', 'Tony Café Table', 'Nanny Rocking Chair', 'Hanging Egg Chair', 'Chill Lounge Chair'];

let brand_link = [artek_link, BERNHARDT_link, driade_link, sonya_link, HAY_link, MUUTO_link, EP_link, FritzHansen_link, OTWO_link, SikaDesign_link];
let brand_title = [artek_title, BERNHARDT_title, driade_title, sonya_title, HAY_title, MUUTO_title, EP_title, FritzHansen_title, OTWO_title, SikaDesign_title];
let brand_context = [artek_context, BERNHARDT_context, driade_context, sonya_context, HAY_context, MUUTO_context, EP_context, FritzHansen_context, OTWO_context, SikaDesign_context];


function changeMood(mood){
    if(last=='First'){
        recent_page = 2;

        document.getElementById('mood_page').style.opacity = '0%';
        document.getElementById('mood_intro').style.opacity = '0%';
        
        document.getElementById('scp1').style.transition = 'all 0.25s';
        document.getElementById('scp1').style.width = scp1_width[mood_title.indexOf(mood)]+'px';
        document.getElementById('scp1').style.transform = 'translateX('+scp1_translateX[mood_title.indexOf(mood)]+'px)';

        document.getElementById(mood).style.color = 'black';
        document.getElementById('bra1').src = 'img/logo/'+mood_brand[mood_title.indexOf(mood)][0]+'.png';
        document.getElementById('bra2').src = 'img/logo/'+mood_brand[mood_title.indexOf(mood)][1]+'.png';

        last = mood;
        setTimeout(() => {
            document.getElementById('mood_page').style.height = '0px';
            document.getElementById('mood_intro').style.height = 'auto';
            document.getElementById('mood_intro').style.opacity = '100%';

            document.getElementById('scp1').style.transition = 'all 0.5s';

            document.getElementById('title').innerHTML = mood+'.';
            document.getElementById('context').innerHTML = mood_context[mood_title.indexOf(mood)];
            document.getElementById('mood_img').src = 'img/mood_img/'+mood+' (1).png';
            document.getElementsByTagName('title')[0].innerHTML = 'What is '+mood+'?';
        }, 250);
    }
    else if(last!=mood){
        document.getElementById('contents').style.opacity = '0%';
        
        document.getElementById('scp1').style.width = scp1_width[mood_title.indexOf(mood)]+'px';
        document.getElementById('scp1').style.transform = 'translateX('+scp1_translateX[mood_title.indexOf(mood)]+'px)';

        document.getElementById(last).style.color = 'lightgray';
        document.getElementById(mood).style.color = 'black';

        last = mood;
        setTimeout(() => {
            document.getElementById('contents').style.opacity = '100%';
            document.getElementById('title').innerHTML = mood+'.';
            document.getElementById('context').innerHTML = mood_context[mood_title.indexOf(mood)];
            document.getElementById('mood_img').src = 'img/mood_img/'+mood+' (1).png';
            document.getElementsByTagName('title')[0].innerHTML = 'What is '+mood+'?';
            document.getElementById('bra1').src = 'img/logo/'+mood_brand[mood_title.indexOf(mood)][0]+'.png';
            document.getElementById('bra2').src = 'img/logo/'+mood_brand[mood_title.indexOf(mood)][1]+'.png';
        }, 250);
    }
}

function goBrand(or){
    recent_page = 3;
    last_gobrand = mood_title.indexOf(last)*2+or;

    document.getElementById('mood_intro').style.opacity = '0%';
    document.getElementById('brand_page').style.opacity = '0%';

    document.getElementById('brand_img').src = 'img/brand_'+mood_brand[mood_title.indexOf(last)][or]+'/'+mood_brand[mood_title.indexOf(last)][or]+'.png'
    for(let i = 1; i <= 6; i = i+1){
        document.getElementById('brand_link'+i).href = brand_link[mood_title.indexOf(last)*2+or][i-1];
        document.getElementById('brand_img'+i).src = 'img/brand_'+mood_brand[mood_title.indexOf(last)][or]+'/'+mood_brand[mood_title.indexOf(last)][or]+' ('+i+').png';
        document.getElementById('brand_title'+i).innerHTML = brand_title[mood_title.indexOf(last)*2+or][i-1];
        document.getElementById('brand_context'+i).innerHTML = brand_context[mood_title.indexOf(last)*2+or][i-1];

    }
    setTimeout(() => {
        document.getElementById('mood_intro').style.height = '0px';
        document.getElementById('brand_page').style.height = 'auto';
        document.getElementById('brand_page').style.opacity = '100%';
        document.getElementsByTagName('title')[0].innerHTML = mood_brand[mood_title.indexOf(last)][or];
    }, 250);
}

function goBack(){
    if(recent_page == 2){
        recent_page = 1;
        document.getElementById('mood_intro').style.opacity = '0%';
        setTimeout(() => {
            document.getElementById('mood_intro').style.height = '0px';
            document.getElementById('mood_page').style.height = 'auto';
            document.getElementById('mood_page').style.opacity = '100%';
            document.getElementById(last).style.color = 'lightgray';
            last = 'First';
            document.getElementsByTagName('title')[0].innerHTML = 'Mood'
            document.getElementById('scp1').style.width = '57px';
            document.getElementById('scp1').style.transform = 'translateX(0px)';
        }, 250);
    }
    else if(recent_page == 3){
        recent_page = 2;
        document.getElementsByClassName('front')[0].style.opacity = '100%';
        front_active = true;
        document.getElementById('brand_page').style.opacity = '0%';
        setTimeout(() => {
            document.getElementById('brand_page').style.height = '0px';
            document.getElementById('mood_intro').style.height = 'auto';
            document.getElementById('mood_intro').style.opacity = '100%';
            document.getElementsByTagName('title')[0].innerHTML = 'What is '+last+'?';
        }, 250);
    }
}

function goFront(){
    if(front_active){
        recent_page = 3;

        document.getElementById('mood_intro').style.opacity = '0%';
        document.getElementById('brand_page').style.opacity = '0%';

        document.getElementById('brand_img').src = 'img/brand_'+mood_brand[parseInt(last_gobrand/2)][last_gobrand%2]+'/'+mood_brand[parseInt(last_gobrand/2)][last_gobrand%2]+'.png'
        for(let i = 1; i <= 6; i = i+1){
            document.getElementById('brand_link'+i).href = brand_link[last_gobrand][i-1];
            document.getElementById('brand_img'+i).src = 'img/brand_'+mood_brand[parseInt(last_gobrand/2)][last_gobrand%2]+'/'+mood_brand[parseInt(last_gobrand/2)][last_gobrand%2]+' ('+i+').png';
            document.getElementById('brand_title'+i).innerHTML = brand_title[last_gobrand][i-1];
            document.getElementById('brand_context'+i).innerHTML = brand_context[last_gobrand][i-1];

        }
        setTimeout(() => {
            document.getElementById('mood_intro').style.height = '0px';
            document.getElementById('brand_page').style.height = 'auto';
            document.getElementById('brand_page').style.opacity = '100%';
            document.getElementsByTagName('title')[0].innerHTML = mood_brand[parseInt(last_gobrand/2)][last_gobrand%2];
        }, 250);
    }
}