$(document).ready(function () {
  var account;
  const web3 = new Web3(window.ethereum);
  if (typeof window.ethereum !== "undefined") {
    console.log("Metamask is installed");
  } else {
    console.error("please install Metamask to use this app");
  }

  if (document.getElementById("connectWallet")) {
    document.getElementById("connectWallet").onclick = async () => {
      console.log("connecting to wallet");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      window.localStorage.setItem("accountId", account);
      window.location.href = "/products";
    };
  }

  const captureAccount = async () => {
    if (window.ethereum !== "undefined") {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      account = accounts[0];
    }
  };

  const displayBalance = async () => {
    const ABI = [
      {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "getAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address payable",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const contractAddress = "0x74193B0B0e97650D25bEd5b7F26d2497B7AAFa3C";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, contractAddress);

    // display the current balance in the smart contract
    const balance = await window.contract.methods.getBalance().call();

    $("#etherBalance")
      .empty()
      .append("(" + balance + " ETH)");
  };

  const connectWindowAndContract = async () => {
    const ABI = [
      {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "getAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address payable",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const contractAddress = "0x74193B0B0e97650D25bEd5b7F26d2497B7AAFa3C";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, contractAddress);
  };

  const depositEtherToContract = async (price) => {
    var price = String(price);
    //   connect the contract with window
    const ABI = [
      {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "getAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address payable",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const contractAddress = "0x74193B0B0e97650D25bEd5b7F26d2497B7AAFa3C";
    window.web3 = new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, contractAddress);

    // deposit the amount in to the contract
    await window.contract.methods
      .deposit()
      .send({ from: account, value: price });
    return true;
  };

  const withDrawAmount = async (amount, address) => {
    //   connect the contract with window
    const ABI = [
      {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "getAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address payable",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const contractAddress = "0x74193B0B0e97650D25bEd5b7F26d2497B7AAFa3C";
    window.web3 = new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, contractAddress);
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    account = accounts[0];

    // deposit the amount in to the contract
    await window.contract.methods
      .withdraw(address, amount)
      .send({ from: account });
    $("#accountAddress").val();
    $("#enteredEther").val();
    alert("Ether redeemed successfully");
  };

  if (document.getElementById("productPage")) {
    captureAccount();
  }

  $(".purchaseMedicine").on("click", function () {
    // get the price
    var price = $(this).attr("data");
    $("#preloader").show();
    if (depositEtherToContract(price)) {
      $("#preloader").hide();
      //   alert(
      //     "Thank you for purchasing the product! You are Eligible for free Ether Offer, click on Add Ether option"
      //   );
    }
  });

  if (document.getElementById("redeemEther")) {
    displayBalance();
  }

  $("#redeemNow").on("click", function (e) {
    e.preventDefault();
    const address = document.getElementById("accountAddress").value;
    const amount = document.getElementById("enteredEther").value;

    withDrawAmount(amount, address);
  });
});
