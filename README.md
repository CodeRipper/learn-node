# learn-node (deprecated)
simple example with node, use express and mysql

###prepare
create prop.json file for mysql settings, and put it to `/data` directory (on windows: `D:\data`)
```json
{
  "user": "your_user_name",
  "password": "password",
  "host": "localhost",
  "database": "code_ripper"
}
```
execute sql/code_ripper.sql
```shell
$ mysql -u [uname] -p code_ripper < code_ripper.sql
```
install dependencies
```shell
$ npm install
```
use the cmd to start server
```shell
$ set DEBUG=video-map:* & npm start
```
Then load http://localhost:3000/ in your browser to access the app.
