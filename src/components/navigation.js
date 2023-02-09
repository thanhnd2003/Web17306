const Navigation = function() {
    return /*html*/`
        <div class="bg-[#1A94FF] flex py-8 px-8 justify-around">
            <div class="">
                <img src="/Group-1.png" class="w-[100px]">
            </div>

            <div class="flex">
                <input type="text" class="w-[626px] h-[40px]">
                <button class="flex border-2 p-2 bg-[#0D5CB6] h-[40px]"><img src="/search.png">Tìm Kiếm<button>
            </div>

            <div class="columns">
                <div class="flex space-x-3">   
                    <div>
                        <img src="/img1.png"> 
                    </div>
                    <div class="text-white">
                        Đăng nhập / Đăng ký
                        <div>
                            Tài khoản
                        </div>
                    </div>
                </div>
            
            </div>

            <div class="columns flex space-x-3">
                <div>
                    <img src="/Rectangle.png">
                </div>

                <div>
                    <div class="pt-4">
                        Giỏ Hàng

                    </div>
                </div>
            
            </div>

        
        </div>
    `
}

export default Navigation;