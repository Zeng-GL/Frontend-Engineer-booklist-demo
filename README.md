# Frontend-Engineer-
專案流程與邏輯: 
由 BookList 和 BookDetail組成的Vue 單頁式網頁，進入首頁BookList，點擊任一書目，會呼叫該書目的API，進入該數目的路由，由 BookDetail 呈現其資料在下方。如欲修改價格和數量，可以在下方選取後，按下修改送出patch API修改數字，成功的話，會顯示Alert；失敗的話，則會在console顯示錯誤訊息。最後，再按下關閉按鈕，回到首頁。

使用library:
- BootStrap-Vue: 使用其元件，以便我能集中時間設計功能。
- Axios: API功能使用，獲取和修改遠端資料
- vue-router: 串聯前端路由，以達到不刷新換頁的目的

困難與解決方法:
1. 路由串接: 因為本次專案較小，因此我沒有使用Vuex去管理路由。


該如何執行我完成的專案: 稍後我會用github.io 將Vue專案架起來，以供您使用
