# video-map
search engine of html5 video from popular sites.

###prepare
* 1.create prop.json file for mysql settings, and put it to `/data` directory (on windows eq: `D:\data`)
```json
{
  "user": "your_user_name",
  "password": "password",
  "host": "localhost",
  "database": "code_ripper"
}
```
* 2.execute sql/code_ripper.sql
* 3.use the cmd to start server
```shell
$ set DEBUG=video-map:* & npm start
```
* 4.Then load http://localhost:3000/ in your browser to access the app.