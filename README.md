# levelupnodeexpress


## Getting Started

Clone the app by running "git clone https://github.com/oyewoas/levelupnodeexpress.git"

### Prerequisites


### Setting up the backend server on your pc

From your command prompt change directory into levelupnodeexpress with "cd levelupnodeexpress".

**Then install dependencies:**
```
run 'npm install' 
```

**Then start the backend server:**
```
run 'npm run server' 
```

You should get this message on your command prompt:
```
Server is listening on port 4000
```

### Setting up the front end app

From levelupnodeexpress folder change directory into clients directory with "cd client".

**Then install dependencies:**
```
run 'npm install' 
```

**Then build the front end react app:**
```
run 'npm build' 
```

A build folder will be created in the clients directory it contains static files that the server can send.

**Then Start the Front end app server:**
```
run 'npm start' 
```

You should get this message on your command prompt as your browser opens the front end app:

```
Starting the development server...
```

**Then on your browser run http://localhost:4000/ which is the backend server port you started above, this will serve the front-end app.**

### Alternatively

Once you have installed all dependencies and built the front end app, from your clients folder change directory back into the levelupnodeexpress folder with "cd ..".

**Then:**

```
run 'npm run dev' 
```

*This which will start both the backend server and front end app concurrently.*