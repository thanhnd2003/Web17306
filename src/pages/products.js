import Navigation from "../components/navigation";
import data from '../..//db.json' assert {type: 'json'}
import Footer from"../components/footer";
import footer from "../components/footer";



const ProductPage = function(id) {
    const book = data.find(function(item){
        return item.id == id
    });
    if(!book) return `Khong co san pham`
    return/*html*/ `
    ${Navigation()}
    <div class="flex justify-center mt-8 ">
            <div class=" ml-20">
                <img src="${book.images[0].base_url}" class="w-[800px] h-[800px] pb-8">
            <div class="flex">
                <img src="${book.images[0].small_url}" class="w-[200px] h-[200px]">
                <img src="${book.images[0].small_url}" class="w-[200px] h-[200px] px-2">
                <img src="${book.images[0].small_url}" class="w-[200px] h-[200px]">
                <img src="${book.images[0].small_url}" class="w-[200px] h-[200px] px-2">
                <img src="${book.images[0].small_url}" class="w-[200px] h-[200px]">
                    
            </div>
    
            </div>
            <div class="w-[40%]">
                
                <div class="flex mt-16">
                    <p>Tác Giả:<span class="pr-8 text-[#0D5CB6]">Nguyễn Duy Thành</span></p>
                    <p>Đứng thứ 13 trong <span class="text-[#0D5CB6]">Top 1000 sách tư duy - Kỹ năng sống bán chạy hàng tháng</span> </p>
                </div>

                <h1 class="py-4 text-[23px] font-bold">${book.name}</h1>
                <div class="flex"><div class="flex mr-2"><img src="/s.png"><img src="/s.png"><img src="/s.png"><img src="/s.png"></div><span class="text-[15px] px-2">(Xem 2942 đánh giá) | Đã bán 1000+</span></div>
                <div class="border w-[600px] mt-4 flex bg-[#FAFAFA] my-4 h-[100px]">
                    <h1 class="text-[32px] text-[#FF424E] flex pl-4 pt-2">${book.current_seller.price}<p class="pl-4 " style="text-decoration: underline;">đ</p></h1>
                    <div>
                        <div>
                                 
                        </div>                                    
                    </div>
                </div>

                <div class="border w-[600px]">                                        
                </div>

                <button class="border mt-8 bg-[#FF3945] px-32 py-4 rounded">Chọn Mua</button>

            </div>

            
    
    
    </div>
   <h1 class="py-8 pl-[18%] text-[30px]">Sản Phẩm Tương Tự</h1>

   <div class="grid grid-cols-6 gap-2 flex px-80">
        <div class="sach1">
            <img src="/sach1.png" class="w-[90%]">
        </div>

        <div class="sach1">
            <img src="/sach2.png" class="w-[90%]" >
        </div>

        <div class="sach1">
            <img src="/sach3.png" class="w-[90%]">
        </div>

        <div class="sach1">
            <img src="/sach4.png" class="w-[90%]">
        </div>

        <div class="sach1">
            <img src="/sach5.png" class="w-[90%]">
        </div>

        <div class="sach1">
            <img src="/sach6.png" class="w-[90%]">
        </div>

    
    </div>

    <h2 class="py-8 pl-[18%] text-[30px]">Thông tin chi tiết</h2>

    <table border="1" class="ml-[19%]"> 

        <tr>
            <td class="pl-2 pr-32 bg-[#EFEFEF]">${book.specifications[0].attributes[0].name}</td>
            <td class="pl-4 w-[800px]">${book.specifications[0].attributes[0].value}</td>

        </tr>
        <tr>
            <td class="pl-2 pr-32 bg-[#EFEFEF]">${book.specifications[0].attributes[1].name}</td>
            <td class="pl-4 w-[800px] bg-[#EFEFEF] ">${book.specifications[0].attributes[1].value}</td>

        </tr>
        <tr>
            <td class="pl-2 pr-32 bg-[#EFEFEF]">${book.specifications[0].attributes[2].name}</td>
            <td class="pl-4 w-[800px]">${book.specifications[0].attributes[2].value}</td>

        </tr>
        <tr>
            <td class="pl-2 pr-32 bg-[#EFEFEF]">Dịch Giả</td>
            <td class="pl-4 w-[800px] bg-[#EFEFEF]">
                ${book.specifications[0]?.attributes[3]?.value}
             </td>

        </tr>
        <tr>
            <td class="pl-2 pr-32 bg-[#EFEFEF]">Loại bìa</td>
            <td class="pl-4 w-[800px]">Bìa mềm</td>

        </tr>
        <tr>
            <td class="pl-2 pr-32 bg-[#EFEFEF]">Số trang</td>
            <td class="pl-4 w-[800px] bg-[#EFEFEF]">288</td>

        </tr>
        <tr>
            <td class="pl-2 pr-32 bg-[#EFEFEF]">Nhà xuất bản</td>
            <td class="pl-4 w-[800px]">Nhà Xuất Bản Thế Giới</td>

        </tr>
  </table>
    <div class="ml-[18%]">
        <h3 class="py-8 text-[30px]">Mô Tả Sản Phẩm</h3> 
        <div class="">
            <p>${book.description}</p>
            <br>
            <p>${book.short_description}</p>
        </div>

       
    </div>
    <div class="text-center mt-8 mb-40 text-[#189EFF]"><button class="border rounded px-20 py-4 border-[#189EFF]">Xem Thêm Nội Dung</button></div>



    ${footer()}
    `
}

export default ProductPage;