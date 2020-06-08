Folder:
+ Base: chứa những file chỉnh sửa lại mặc định của trình duyệt
+ Component: chứa những file phần tử nhỏ của trang web (button, dropdown, card …)
+ Helpers: chứa những file biến, mixin, extend, function … 
+ Layout: chứa những thành phần chung của trang web trong bộ website chúng ta xây dựng
+ Page: chứa những thành phần riêng của trang web khác nhau. Ví dụ: trang home thì có Introduction, trang liên hệ thì có phần contact …
+ Theme: chứa những theme chủ đạo khác nhau của trang web. Ví dụ như trang web đổi theo mùa (đông thì sẽ có màu trắng, tuyết bay …) 
+ Vendor: chứa những thư viện mà chúng ta sử dụng
File:
+ main.scss: 
	- Only @import,
	- import phải theo thứ tự nhất định:
		=> “Base” → “Vendors” → “Helpers” → “Layout” → “Component” → “Page” → “Theme”