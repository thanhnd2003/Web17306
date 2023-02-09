import Navigation from "../components/navigation";
import data from '../../db.json' assert {type: "json"};
import Footer from"../components/footer";

var HomePage = function() {
    return /*html*/`
    ${Navigation()}
    <div class="flex px-20 pt-8">
    
        <div class="w-[20%]">
            <h1 class="text-[13px]">Danh Mục Sản Phẩm</h1>
            <ul class="text-[12px] pt-2">
                <li><a href="#">English Boook</a></li>
                <li><a href="#">Sách Tiếng Việt</a></li>
                <li><a href="#">Quà Lưu Niệm</a></li>
                <li><a href="#">Văn Phòng Phẩm</a></li>


            
            </ul>
        
        </div>


        <div>
        <h2 class="text-[23px] pl-4 font-bold py-2">Nhà Sách Tiki</h2>  
        <img src="/banner.png" class="w-full py-4">
        <ul class="flex space-x-20 pl-8 py-2">
            <li>Phổ Biến</li>
            <li>Bán Chạy</li>
            <li>Hàng Mới</li>
            <li>Giá Thấp</li>
            <li>Giá Cao</li>
        </ul>

        <div class="flex py-2">
            <div class="px-4 rounded-full bg-gray-200">
                <img src="/Tikinow.png">
            </div>

            <div class="px-2 ml-4 bg-gray-200 rounded-full">
                <img src="/Freeship.png">
            </div>
        </div>


            <div class="grid grid-cols-4 gap-8">
                ${data.map(function(book, index) {
                    return /*html*/`
                    <div>
                        <a href="/products/${book.id}">
                        <img src="${book.images[0].base_url}" class="w-[200px] h-[200px]">
                        <img src="/Tikinow.png">
                        <h3>${book.name}</h3>
                        <div class="flex"><div class="flex mr-2"><img src="/s.png"><img src="/s.png"><img src="/s.png"><img src="/s.png"></div> | <p class="pl-2 text-[#787878] text-[11px]">Đã bán 100+</p></div>
                        
                        <p class="text-[#FF424E]">${book.list_price} <span style="text-decoration: underline;">đ</span></p>
                        </a>
                    </div>
                    `
                }).join('')}
            </div>
        </div>
    
    </div>
    ${Footer()}
    `
}

export default HomePage