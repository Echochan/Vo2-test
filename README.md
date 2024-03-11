VO2TestMiniprogram
===========

### About
This is a test program, see more details in https://git.mediasia.cn/mediasia-interactive/taro-test. 

The backend service of websocket is developed with sokcet.io(4.5.0), so i use weapp.socket.io to create connection. https://github.com/weapp-socketio/weapp.socket.io.git.

The socket.io.client need to be compatible with the the version of socket.io(^ 4.5.0), here is a version which can used in frontend. https://github.com/weapp-socketio/weapp.socket.io/files/11301335/weapp.socket.io.wx-4.4.3.zip

### Structure
    |-- src
    |   |-- app.config.ts
    |   |-- app.scss
    |   |-- app.ts
    |   |-- global.data.js
    |   |-- index.html
    |   |-- components
    |   |-- config
    |   |-- pages
    |   |-- services
    |   |-- static
    |   |   |-- css
    |   |   |-- fonts
    |   |   |-- img
    |   |      
    |   |-- utils
    |-- types

### Building
Clone git repository:

    $ git clone https://github.com/Echochan/vo2-test.git 

Install dependencies:

    $ npm insall

Build and you can see the project in wechat devtools

    $ npm run dev:weapp / npm run build:weapp


### Remark
I download the back-end code and run it locally and the socket can connect successfully.
But when i use the remote url, the connection is fail.
I am not sure if there's something wrong with my configure or the remote service.
You can change the connection url in the file.[/src/utils/config.ts]