// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html
/*
 if (localStorage.hits) {
  localStorage.hits = Number(localStorage)
} else {
  localStorage = 1
}
document.getElementById("result").innerHTML = localStorage.hits
 */

"use strict"

let clickCount = 0
clickCount = localStorage.getItem(clickCount) || 0

function updateCookieCount() {
  clickCount++
  localStorage.setItem("clickCount", clickCount)
  document.getElementById("result").innerHTML = "Counter : " + clickCount
}

