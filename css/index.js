// let v = "             hello";
// var x = v.trim() + v.toUpperCase();
// console.log(x);

// var product = " mango";
// var price = 50;
// var qty = "5";

// var total = `i bought ${product} which is about ${qty} and the total price is ${
//   price * qty
// }`;
// console.log(total);

// let password = prompt("enter a number");

// if (password.length <= 6) {
//   console.log("not valid password");
// } else {
//   console.log("valid password");
// }

// let guess = parseInt(prompt("enter your guess"));
// let target = parseInt(Math.floor(Math.random() * 10));
// // console.log(target);
// // if (guess > target) {
// //   console.log("gg guess is high");
// // } else if (guess < target) {
// //   console.log("target is high");
// // }

// while (parseInt(guess) != target) {
//   if (guess > target) {
//     guess = prompt("gg guess is high");
//   } else if (guess < target) {
//     guess = prompt("gg guess is low");
//   }
// }

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess:");
//   } else {
//     guess = prompt("Too low! Enter a new guess:");
//   }
// }

// if (guess === "q") {
//   console.log("OK, YOU QUIT!");
// } else {
//   console.log("CONGRATS YOU WIN!");
//   console.log(`You got it! It took you ${attempts} guesses`);
// }

// let guess = prompt("guess your number");
// const list = ["hello", "hi"];
// while (guess !== "q") {
//   guess = prompt("start your guessing");
//   if (guess == "list") {
//     console.log("*****");
//     for (i = 0; i < list.length; i++) {
//       console.log(` ${i} :${list[i]}`);
//     }
//     console.log("******");
//   }
//   if (guess == "new") {
//     var newtodo = prompt("what is your new todo");
//     list.push(newtodo);
//     console.log(`${newtodo} : need to be finished`);
//   }

//   if (guess == "delete") {
//     var deleteTodo = prompt("enter your deleted todos index number");
//     var finalDeleted = list.slice(deleteTodo, 1);
//     console.log(`${finalDeleted} will be deleted`);
//   }
// }
// console.log("you quit");

// var day = [1, 2, 3, 4, 5, 6, 7];
// var week = function calcweek(day) {
//   if (day == 1) {
//     console.log(monday);
//   }
// };

// let hen = {
//   name: "helen",
//   eggcount: 0,
//   layegg() {
//     this.eggcount += 1;
//     return "egg";
//   },
// };

// let result = hen.name;

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function (e) {
//   console.log(`multifly by 2 : ${e * 2}`);
// });

// let newfnc = () => {
//   console.log("hello");
// };
// newfnc();

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((e) => {
//   console.log(`multifly by 2 : ${e * 2}`);
// });

// let arr = [1, 2, 3, 4, 5];
// arr.map((e) => {
//   console.log(`multifly by 2 : ${e * 2}`);
// });

// let strex = ["  hello", "    done"];
// strex.map((e) => {
//   console.log(`${e.trim()}`);
// });

// let greed = (msg) => {
//   console.log(`hey ${msg}`);
// };

// greed("rohed");

// // setInterval(() => {
// //   console.log("loading");
// // }, 3000);

// setTimeout(() => {
//   console.log("incoming settimeout");
// }, 3000);

// let validUserNames = [
//   "mark",
//   "staceysmom1978",
//   "q29832128238983",
//   "carrie98",
//   "MoanaFan",
// ];

// function checkage(arr) {
//   console.log(`${arr.length < 10}`);
// }
// validUserNames.filter(checkage);

// let checkeven = (arr) => {
//   console.log(arr.every((n) => n % 2 === 0));
// };

// checkeven([2, 4, 6]);

// let ddd = [1, 2, 4];
// // let result = ddd.reduce((a, b) => {
// //   if (a < b) {
// //     return a;
// //   } else {
// //     return b;
// //   }
// // });
// let total = 0;
// for (let arr of ddd) {
//   total += arr;
// }
// console.log(total);

// let example = (person, msg = "hey") => {
//   console.log(`  ${msg} ${person}`);
// };
// example("rohed");

// let num = [1, 2, 3, 4, 5, 6, 7777];
// console.log(Math.max(...num));

// let str = ["fad", "dada", "ada"];
// console.log(...str);

// let str = ["ada", "fdsf", "fsaf"];

// let str2 = ["adadddd", "fdsdf", "fsddaf"];
// let total = [...str, ...str2];
// console.log(total);

// let exobj = {
//   name: "Rohed",
//   age: 24,
// };
// let exobj2 = {
//   name: "avd",
//   age: 30,
// };

// let total = { ...exobj, address: "airport" };
// console.log(total);

// let hello = (...num) => {
//   return num.reduce((a, b) => {
//     a + b;
//   });
// };

// let num = [12, 56, 34, 74];
// // let firstPlayer = num[0];
// // console.log(firstPlayer);

// let [first, second, third] = num;
// console.log(first, second, third);

// let example = {
//   name: "rohed",
//   age: 35,
//   address: "prembagan",
//   born: 1998,
// };

// let permanent = example.address;
// // console.log(permanent);

// let { born: birthyear } = example;
// console.log(birthyear);

// let fara = (num) => {
//   for (let i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   console.log(num);
// };

// fara(3);

// function check(str) {
//   let vowel = "aeiou";
//   let cons = "";
//   for (var i = 0; i < str.length; i++) {
//     if (vowel.includes(str[i])) {
//       console.log(str[i]);
//     } else {
//       console.log("ALL RIGHT");
//     }
//   }
// }

// check("hello");
// function vowelsAndConsonants(s) {
//   const vowels = "aeiou";
//   var consonants = "";

//   for (var i = 0; i < s.length; i++) {
//     if (vowels.includes(s[i])) {
//       console.log(s[i]);
//     } else {
//       consonants += s[i] + "\n";
//     }
//   }

//   // console.log(consonants.trim());
// }
// vowelsAndConsonants("hello");

// let todos = document.querySelector(".done");
// console.log(todos);

// let todo = document.querySelector('input[type="checkbox"]');

// console.log(todo);

// let pratice = document.querySelector("img");

// pratice.src = "https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg";
// console.log(pratice);

// let ex = document.getElementsByClassName("item");
// // ex.style.color = "red";

// for (const done of ex) {
//   done.style.color = "red";
// }
// console.log("hello");

// let ex = document.querySelector(".header");
// ex.textContent = "i am learning";
// console.log(ex);

// let ex = document.querySelectorAll(".item")[2];
// console.log(ex);

// let grandfather = document.querySelector(".todo-list");

// let parent = grandfather.children;
// // let child = parent.children;
// console.log(parent[1]);

// let child = document.querySelector(".item");
// let parents = child.closest(".todo-list");
// console.log(parents);

// let firstchild = document.querySelector(".item");
// let secondchild = document.querySelector(".item");
// let first = secondchild.previousElementSibling;
// console.log(first);

// let create = document.createElement("div");

// create.setAttribute("title", "hello");

// let element = document.querySelector(".todo-list");
// let a = element.append("hello");
// let b = element.appendChild(create);
// console.log(a);

// let target = document.querySelector("#container");
// let imgage = target.querySelector("img");
// imgage.style.width = "1500px";
// imgage.style.borderRadius = "50%";
// console.log(imgage);

// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

// //YOU CODE GOES HERE:

// let trying = document.querySelectorAll("span");

// for (let index = 0; index < trying.length; index++) {
//   trying[index].style.color = colors[index];
// }
// console.log(trying);

// let cat = document.querySelector("h2");
// console.log(cat);
// cat.setAttribute("class", "border");

// const container = document.querySelector("#container");

// for (let i = 0; i < 100; i++) {
//   const btn = document.createElement("BUTTON");
//   btn.innerText = "Click";
//   container.appendChild(btn);
// }

// const v2 = document.querySelector("#btn");
// v2.onclick = function () {
//   for (let index = 0; index < 10; index++) {
//     console.log("hey i am rohed");
//   }
// };

// function exa() {
//   console.log("first time huh?");
//   console.log("you are pro");
// }
// const b3 = document.querySelector("#rd");
// b3.addEventListener("click", exa);

// const third = document.querySelector("#rd");
// third.addEventListener("click", function () {
//   const newcolour = randomColour();
//   document.body.style.backgroundColor = newcolour;
// });

// const randomColour = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r},${g},${b})`;
// };

// const third = document.querySelectorAll('#btn')
// third.a

// const makeRandColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// };

// const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//   button.addEventListener("click", colorize);
// }

// const h1s = document.querySelectorAll("h1");
// for (let h1 of h1s) {
//   h1.addEventListener("click", colorize);
// }

// function colorize() {
//   this.style.backgroundColor = makeRandColor();
//   this.style.color = makeRandColor();
// }

// const makeRandColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// };
// const third = document.querySelectorAll("button");
// for (let buttons of third) {
//   buttons.addEventListener("click", function () {
//     buttons.style.backgroundColor = "red";
//   });
// }

// const text = document.querySelectorAll("h1");
// for (let texts of text) {
//   texts.addEventListener("click", colorize);
// }

// function colorize() {
//   this.style.backgroundColor = makeRandColor();
//   this.style.color = makeRandColor();
// }

// document.querySelector("#btn").addEventListener("click", function (evt) {
//   console.log(evt.key);
// });

// document.querySelector("input").addEventListener("keydown", function (evt) {
//   console.log(evt.key);
//   console.log(evt.code);
// });

// const formtext = document.querySelector("#era");
// formtext.addEventListener("click", function (evt) {
//   const firsttext = document.querySelector("#first").value;
//   // const lasttext = document.querySelector("#last").value;
//   const newelement = document.createElement("li");

//   // newelement.append(`${firstext.value} ${lasttext.value}`);
//   console.log(firsttext);
//   newelement.append(firstext);
//   evt.preventDefault();
// });
// const firstext = document.querySelector("#first");

// const tweetForm = document.querySelector("#tweetForm");
// const tweetsContainer = document.querySelector("#tweets");
// tweetForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   // const usernameInput = document.querySelectorAll('input')[0];
//   // const tweetInput = document.querySelectorAll('input')[1];
//   const usernameInput = tweetForm.elements.username;
//   const tweetInput = tweetForm.elements.tweet;
//   addTweet(usernameInput.value, tweetInput.value);
//   usernameInput.value = "";
//   tweetInput.value = "";
// });

// const addTweet = (username, tweet) => {
//   const newTweet = document.createElement("li");
//   const bTag = document.createElement("b");
//   bTag.append(username);
//   newTweet.append(bTag);
//   newTweet.append(`- ${tweet}`);
//   tweetsContainer.append(newTweet);
// };

// const formselector = document.querySelector("#nowhere");
// const ul = document.querySelector("#list");
// formselector.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const productName = formselector.elements.product.value;
//   const quantity = formselector.elements.qty.value;
//   const li = document.createElement("li");
//   li.innerText = `${productName}${quantity}`;
//   ul.appendChild(li);
//   console.log(productName, quantity);
// });

// const input = document.querySelector("input");

// const h1 = document.querySelector("h1");
// input.addEventListener("input", function () {
//   h1.innerText = ` welcome ${input.value} `;
// });

// const heading = document.querySelector("h1");
// const input = document.querySelector("input");
// input.addEventListener("input", function (e) {
//   if (!this.value) {
//     heading.innerText = `Enter Your Username`;
//   } else {
//     heading.innerText = `Welcome, ${this.value}`;
//   }
// });

// const firstButton = document.querySelector("#first");
// const h1 = document.querySelector("#one");

// let p1score = 0;
// let winScore = 5;
// firstButton.addEventListener("click", function () {
//   if (p1score != winScore) {
//     p1score += 1;
//     h1.textContent = p1score;
//   }
// });

// const first = () => {
//   console.log("i am text 1 ");
// };

// const interval = () => {
//   setTimeout(() => {
//     console.log("i am interval");
//   }, 3000);
// };

// const second = () => {
//   console.log("i am text 2 ");
// };

// first();
// interval();
// second();

// const multifly = (x, y) => {
//   return x * y;
// };

// const square = (x) => {
//   return multifly(x, x);
// };

// const isitture = (x, y, z) => {
//   return square(x) + square(y) == square(z);
// };

// isitture(3, 4, 5);

// document.body.style.backgroundColor = "";

// setTimeout(() => {
//   document.body.style.backgroundColor = "green";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "blue";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "yellow";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "black";
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 1000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "yellow";
// }, 3000);
// setTimeout(() => {
//   document.body.style.backgroundColor = "blue";
// }, 4000);

// const delayedcolorchange = (delayed, newcolour, donext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newcolour;
//     donext && donext();
//   }, delayed);
// };

// delayedcolorchange(1000, "red", () => {
//   delayedcolorchange(1000, "blue", () => {
//     delayedcolorchange(1000, "green", () => {
//       delayedcolorchange(1000, "sky", () => {});
//     });
//   });
// });

// const fakePromise = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("connection timed out");
//     } else {
//       success(`it worked from ${url}`);
//     }
//   }, delay);
// };

// fakePromise(
//   "book.com",
//   function (response) {
//     console.log("it worked");
//     console.log(response);
//   },
//   function (err) {
//     console.log("rejected");
//     console.log(err);
//   }
// );

// const fakePromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("request timed out");
//       } else {
//         resolve(`you are success here is your data ${url}`);
//       }
//     }, delay);
//   });
// };

// const request = fakePromise("book.com/api/page1");
// request
//   .then(() => {
//     console.log("it worked");
//     fakePromise("book.com/api/page2")
//       .then(() => {
//         console.log("it worked again ");
//         fakePromise("book.com/api/page3")
//           .then(() => {
//             console.log("also worked for page 3");
//           })
//           .catch(() => {
//             console.log("failed for page 3 ");
//           });
//       })
//       .catch(() => {
//         console.log("it reject for page 2 ");
//       });
//   })
//   .catch(() => {
//     console.log("rejected");
//   });

// fakePromise("book.com/api/page1")
//   .then(() => {
//     console.log("it worked for page 1 ");
//     return fakePromise("book.com/api/page2");
//   })
//   .then(() => {
//     console.log("it worked for page 2 ");
//     return fakePromise("book.com/api/page3");
//   })
//   .then(() => {
//     console.log("it also worked for page 3");
//   })
//   .catch(() => {
//     console.log("oh no you are shit ");
//   });

const fakePromiseColour = (newcolour, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newcolour;
      resolve();
    }, delay);
  });
};

const rainbow = async () => {
  await fakePromiseColour("red", 1000);
  await fakePromiseColour("blue", 1000);
  await fakePromiseColour("green", 1000);
  await fakePromiseColour("white", 1000);
  await fakePromiseColour("black", 1000);
};

const printRaibow = async () => {
  let data = await rainbow();
  console.log("done");
};
// fakePromiseColour("red", 1000)
//   .then(() => fakePromiseColour("blue", 1000))
//   .then(() => fakePromiseColour("green", 1000))

//   .then(() => fakePromiseColour("white", 1000))
//   .then(() => fakePromiseColour("brown", 1000))
//   .then(() => fakePromiseColour("black", 1000));

// const trying = async () => {
//   throw "oh no , error";
//   return "hey mama hey";
// };

// trying()
//   .then((data) => {
//     console.log("resolve ", data);
//   })
//   .catch((err) => {
//     console.log("oh no rejected", err);
//   });

// const login = async (userName, password) => {
//   if (!userName || !password) throw " missing something";
//   if (userName === "hey") return " success";
//   throw " invaild ";
// };
// login("he", "sda")
//   .then((data) => {
//     console.log("here is your data", data);
//   })
//   .catch((err) => {
//     console.log("something fishy", err);
//   });

// const fakePromise = (url) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("connection timed out");
//     } else {
//       success(`it worked from ${url}`);
//     }
//   }, delay);
// };

// fakePromise("book.com/page1");

// const fakePromiseColour = (url) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("reqiest timed out ");
//       } else {
//         resolve("connection established");
//       }
//     }, delay);
//   });
// };

// fakePromiseColour("book.com/page1");

// const fakePromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("request timed out");
//       } else {
//         resolve(`you are success here is your data ${url}`);
//       }
//     }, delay);
//   });
// };

// const printPromise = async () => {
//   try {
//     let data1 = await fakePromise("book.com/page1");
//     console.log(data1);
//     let data2 = await fakePromise("book.com/page2");
//     console.log(data2);
//   } catch (error) {
//     console.log("error is ", error);
//   }
// };

// async function maketwoRequest() {
//   let data1 = await fakePromise("book.com/page1");
//   console.log(data1);
// }

// const request = new XMLHttpRequest();
// request.onload = function () {
//   console.log("connection established");
//   const json = JSON.parse(this.response);
//   console.log(json.ticker.price);
// };
// request.onerror = function () {
//   console.log("error found");
// };
// request.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
// request.send();

// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then((res) => {
//     console.log("success", res);
//     res.json().then((data) => {
//       console.log(data.ticker.price);
//     });
//   })
//   .catch((err) => {
//     console.log("rejected");
//     console.log(err);
//   });

// const fetchPrice = async () => {
//   try {
//     const res = await fetch("https://api.crysptonator.com/api/ticker/btc-usd");
//     const data = await res.json();
//     console.log(res);
//     console.log(data.ticker.price);
//   } catch (error) {
//     console.log("something wrong", error);
//   }
// };
// try {
//   axios.get("https://api.crysptonator.com/api/ticker/btc-usd").then((res) => {
//     console.log(res.data.ticker.price);
//   });
// } catch (err) {
//   console.log("error found", err);
// }

// const tryAxios = async () => {
//   const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
//   console.log(res.data.ticker.price);
// };
// const jokes = document.querySelector("#joke");
// const button = document.querySelector("#first");

// const getJoke = async () => {
//   try {
//     const config = { headers: { Accept: "application/json" } };
//     const joke = await axios.get("https://icanhazdadjoke.com/", config);
//     // console.log(joke.data.joke);
//     const li = document.createElement("li");
//     li.append(joke.data.joke);
//     const printjoke = jokes.append(li);
//     return printjoke;
//   } catch (error) {
//     console.log("no joke available ", error);
//   }
// };

// button.addEventListener("click", getJoke);
// const form = document.querySelector("#form");

// const titleinput = document.querySelector("#titleinput");
// // console.log(titleinput.value);
// const button = document.querySelector("button");
// form.addEventListener('submit',async function (e) {
//     const getTvShows = async () => {
//         const res = await axios.get(
//           `https://api.tvmaze.com/search/shows?q=${titleinput.elments.query.value}`
//         );
//         console.log(res);
//       };

// })

// const form = document.querySelector("#form");
// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   const searchValue = form.elements.query.value;

//   const res = await axios.get(
//     `https://api.tvmaze.com/search/shows?q=${searchValue}`
//   );
//   printImage(res.data);
// });

// const printImage = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("img");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };

// function getGrade(score) {
//   return "FEDCBA"[Math.trunc(score - 1) / 5];
// }

// function getGrade(score) {
//   return "FEDCBA"[score / 5];
// }

// getGrade(20);
// function getGrade(score) {
//   let grade;
//   // Write your code here

//   if (score == 20) {
//     return a;
//   }
//   return grade;
// }
