import React from 'react'

function Footerr() {
  return (
    <div>
      <footer className="mb-[50px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-5 items-center mb-[20px]">
          <div>
            <h3 className="font-semibold mb-3">Biz haqimizda</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#">Topshirish punktlari</a></li>
              <li><a href="#">Vakansiyalar</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Foydalanuvchilarga</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#">Biz bilan bog‘lanish</a></li>
              <li><a href="#">Savol-Javob</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Tadbirkorlarga</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#">Uzumda soting</a></li>
              <li><a href="#">Sotuvchi kabinetiga kirish</a></li>
              <li><a href="#">Topshirish punktini ochish</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-semibold mb-3">Ilovani yuklab olish</h3>
            <div className="flex gap-3 mb-4">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                  alt="App Store"
                  className="h-8"
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-8"
                />
              </a>
            </div>

            <h3 className="font-semibold mb-3">Uzum ijtimoiy tarmoqlarda</h3>
            <div className="flex gap-4">
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="h-6" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" className="h-6" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="h-6" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="h-6" /></a>
            </div>
          </div>
        </div>

        <div className="lg:border-t text-center text-sm text-gray-500 py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <a href="#" className="text-sm text-[#1F2026] font-bold">Maxfiylik kelishuvi</a>
              <a href="#" className="text-sm text-[#1F2026] font-bold">Foydalanuvchi kelishuvi</a>
            </div>
            <p className="text-[14px] text-[#7E818C]">
              «2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footerr