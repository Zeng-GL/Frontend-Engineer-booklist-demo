# Frontend-Engineer-booklist
1.專案流程與邏輯: 
由 BookList 和 BookDetail組成的Vue 單頁式網頁，進入首頁BookList，點擊任一書目，會呼叫該書目的API，進入該數目的路由，由 BookDetail 呈現其資料在下方。如欲修改價格和數量，可以在下方選取後，按下修改送出patch API修改數字，成功的話，會顯示Alert；失敗的話，則會在console顯示錯誤訊息。最後，再按下關閉按鈕，回到首頁。



2.使用library:
- BootStrap-Vue: 使用其元件，以便我能集中時間設計功能。
- Axios: API功能使用，獲取和修改遠端資料
- vue-router: 串聯前端路由，以達到不刷新換頁的目的



3.困難與解決方法:

問題1: 路由串接: 要從Book1 跳到 Book2 時，上方的網址有隨著選取對象不同而改變，但是頁面卻沒有跟著刷新。因為本次專案較小，因此我沒有選擇用Vuex去管理路由。
解法1: 另外做一個"關閉"的按鈕，讓頁面回到首頁，然後再去按另一本書，顯示另一本書的資料。

問題2: 原本先用BootStrap-Vue處理排版的問題，但是因為要做出橫向卷軸與RWD，因此發現排版不適合。
解法2: 改用自己做的RWD去調整版面。

問題3: 針對選到的書目做CSS變化
解法3: 在v-for綁定的物件上，綁定class，以添加css屬性



4.該如何執行我完成的專案: 已用github.io 將Vue專案架起來，以供測試評估。
  網址如下: https://zeng-gl.github.io/Vue-booklist-publish/?fbclid=IwAR0dut8SGPBI5dnrjThGWl5Gy_MbauhuyoaBP8-xltXULjuys7Iy6tHKzGc#/
