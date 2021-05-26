## WebChat_Demo

Demo cho Xây dựng trang web chat trực tuyến bằng cách sử dụng giao thức Web Socket. Trang web 
cho phép người dùng gửi tin nhắn và gửi tập tin theo thời gian thực. Bản demo này chỉ demo cách thức hoạt động của SocketIO trong Express.
Cụ thể, bản demo có chức năng quản lý danh sách các cuộc trò chuyện. 
Sau khi đăng nhập vào trang web, người dùng được chuyển hướng đến trang chủ,
nơi mà danh sách những người dùng đang trực tuyến được hiển thị với giao diện như sau:

Danh sách này sẽ được cập nhật theo thời gian thực, khi vừa mới đăng nhập hoặc khi 
thoát khỏi cuộc trò chuyện thì người dùng có trạng thái ‘đang rảnh’. Nếu một người 
dùng bắt đầu vào một cuộc trò chuyện thì trạng thái của họ sẽ chuyển thành ‘đang 
bận’. Nếu người dùng đăng xuất hoặc đóng trình duyệt thì họ sẽ được xóa ra khỏi 
danh sách của các người dùng khác ngay lập tức
