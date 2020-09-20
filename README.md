# Todo App
Todo App build using blockchain, solidity, web3.js and metamask.

# Dependencies
Install these prerequisites to follow along.

* NPM:  (https://nodejs.org)
* Truffle:  (https://github.com/trufflesuite/truffle)
* Ganache: (http://truffleframework.com/ganache/)
* Metamask: (https://metamask.io/)

## Step 1. Clone the project.
```
git clone https://github.com/bhosalepranil16/blockchain-to-do-app
```

## Step 2. Install dependencies
```
$ cd blockchain-to-do-app
$ npm install
```

## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance.

## Step 4. Compile & Deploy TodoList Smart Contract
```
$ truffle migrate --reset
```

## Step 5. Configure Metamask
* Unlock Metamask.
* Connect metamask to your local Etherum blockchain provided by Ganache.
* Import an account provided by ganache.

## Run the Front End Application.
```
$ npm run dev
```
Visit this URL in your browser: (http://localhost:3000)
