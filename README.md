# VisualStatusDisplay

# How to start the application:
Host the Json server on your local ipv4 address, replace the 181 below and 
in /phone.js and /user.js change `192.168.0.181` to your local ipv4 address
1) ### Run the Json Server by executing:<br> `json-server --host 192.168.0.181 --port 3000 db.json`
2) ### Run the application by executing:<br> `node dist/index.js`

## After starting the application: 
- the Json server should be running on your ipv4 address `192.168.0.XXX:3000` 
- the `display controller` should be hosted on `localhost:1337` or 192.168.
- the display should be hosted on your ipv4 address `192.168.0.XXX:1337/phone`

# How to use the application:
- The user can edit the display by using the `display controller`
- The display is constantly checking to see if the user has updated their status
- If an update is detected, the display will be updated with the user's changes 
