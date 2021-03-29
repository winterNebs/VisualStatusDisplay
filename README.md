# VisualStatusDisplay
# Requirements:
- Node.js

# How to start the application:
1) go to the directory of the application in your terminal
2) type `npm i` and hit `enter`
3) type `tsc` and hit `enter`
4) type `node dist/index.js` and hit `enter`
5) The application should be running on `localhost:1337` or on `your ipv4 address with port 1337`

## How to find your ipv4 address?
### Windows users:
1) On your computer search bar, search `cmd` and type `ipconfig` and hit `enter`
2) Your `ipv4 address` should be located under `Wireless Lan adapter Wi-Fi:`
3) It should be a number like: 192.168.0.XXX, and the XXX replaced with a 3 digit number

### Mac users:
1) On your computer search bar, search `terminal` and type `ipconfig getifaddr en0` and hit `enter`
2) Your `ipv4 address` should be printed on the terminal
3) It should be a number like: 192.168.0.XXX, and the XXX replaced with a 3 digit number

## After starting the application: 
- the `display controller` should be hosted on 192.168.0.XXX:1337
- the display should be hosted on your ipv4 address `192.168.0.XXX:1337/phone`

# How to use the application:
- The user can edit the display by using the `display controller`
- The display is constantly checking to see if the user has updated their status
- If an update is detected, the display will be updated with the user's changes 

# Compiling to standalone
Install pkg
`npm i -g pkg`
Run pkg in the root folder:
`pkg .`
