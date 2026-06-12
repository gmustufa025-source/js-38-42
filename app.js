// ==========================================
// Dashboard Navigation Controller
// ==========================================
function switchTab(tabId, button) {
    var contents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active-content");
    }
    var buttons = document.getElementsByClassName("tab-btn");
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active-content");
    button.classList.add("active");
}

// ==========================================
// MODULE 1: DATE METHODS
// ==========================================
function dm_q1() {
    var out = document.getElementById("dm-q1-out");
    out.style.display = "inline-block";
    out.innerHTML = new Date().toString();
}
function dm_q2() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    alert("Current month: " + months[new Date().getMonth()]);
}
function dm_q3() {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    alert("Today is " + days[new Date().getDay()]);
}
function dm_q4() {
    var day = new Date().getDay();
    alert((day === 0 || day === 6) ? "It's Fun day" : "It's a working day");
}
function dm_q5() {
    alert(new Date().getDate() < 16 ? "First fifteen days of the month" : "Last days of the month");
}
function dm_q6() {
    var d = new Date();
    var ms = d.getTime();
    var mins = ms / (1000 * 60);
    var out = document.getElementById("dm-q6-out");
    out.style.display = "inline-block";
    out.innerHTML = "Current Date: " + d + "<br>Elapsed milliseconds since Jan 1, 1970: " + ms + "<br>Elapsed minutes since Jan 1, 1970: " + mins;
}
function dm_q7() {
    alert(new Date().getHours() < 12 ? "Its AM" : "its PM");
}
function dm_q8() {
    var laterDate = new Date(2020, 11, 31);
    var out = document.getElementById("dm-q8-out");
    out.style.display = "inline-block";
    out.innerHTML = "Later date: " + laterDate;
}
function dm_q9() {
    var diff = new Date().getTime() - new Date(2015, 5, 18).getTime();
    alert(Math.floor(diff / (1000 * 60 * 60 * 24)) + " days have passed since 1st Ramadan, 2015");
}
function dm_q10() {
    var diffSec = Math.floor((new Date().getTime() - new Date(2015, 0, 1).getTime()) / 1000);
    var out = document.getElementById("dm-q10-out");
    out.style.display = "inline-block";
    out.innerHTML = "On reference date " + new Date() + ",<br>" + diffSec + " seconds had passed since beginning of 2015";
}
function dm_q11() {
    var cur = new Date();
    var prev = new Date();
    prev.setHours(cur.getHours() - 1);
    var out = document.getElementById("dm-q11-out");
    out.style.display = "inline-block";
    out.innerHTML = "current date: " + cur + "<br>1 hour ago, it was " + prev;
}
function dm_q12() {
    var cur = new Date();
    var past = new Date();
    past.setFullYear(cur.getFullYear() - 100);
    alert("current date: " + cur + "\n100 years back, it was " + past);
}
function dm_q13() {
    var age = prompt("Enter your age:");
    if(age) {
        var out = document.getElementById("dm-q13-out");
        out.style.display = "inline-block";
        out.innerHTML = "Your age is " + age + "<br>Your birth year is " + (new Date().getFullYear() - parseInt(age));
    }
}
function dm_q14() {
    var net = (410 * 16).toFixed(2);
    var gross = (parseFloat(net) + 350).toFixed(2);
    document.getElementById("dm-q14-out").innerHTML = `
        <div class="bill-card">
            <h2>K-Electric Bill</h2>
            <p>Customer Name: <span class="bill-bold">ABC Customer</span></p>
            <p>Month: <span class="bill-bold">February</span></p>
            <p>Number of units: <span class="bill-bold">410</span></p>
            <p>Charges per unit: <span class="bill-bold">16</span></p><br>
            <p>Net Amount Payable (within Due Date): <span class="bill-bold">${net}</span></p>
            <p>Late payment surcharge: <span class="bill-bold">350</span></p>
            <p>Gross Amount Payable (after Due Date): <span class="bill-bold">${gross}</span></p>
        </div>`;
}

// ==========================================
// MODULE 2: CUSTOM FUNCTIONS
// ==========================================
function fn_q1() {
    var out = document.getElementById("fn-q1-out");
    out.style.display = "inline-block";
    out.innerHTML = new Date().toString();
}
function fn_q2() {
    var f = prompt("First Name:"), l = prompt("Last Name:");
    if(f && l) alert("Welcome, " + f + " " + l);
}
function fn_q3() {
    var a = parseFloat(prompt("Num 1:")), b = parseFloat(prompt("Num 2:"));
    var out = document.getElementById("fn-q3-out");
    out.style.display = "inline-block";
    out.innerHTML = "Sum: " + (a + b);
}
function fn_q4() {
    var n1 = parseFloat(prompt("Num 1:")), n2 = parseFloat(prompt("Num 2:")), op = prompt("Op (+,-,*,/):");
    var res = (op==='+')?n1+n2:(op==='-')?n1-n2:(op==='*')?n1*n2:(op==='/')?n1/n2:"Invalid";
    var out = document.getElementById("fn-q4-out");
    out.style.display = "inline-block";
    out.innerHTML = "Result: " + res;
}
function fn_q5() {
    var n = parseFloat(prompt("Enter number:"));
    var out = document.getElementById("fn-q5-out");
    out.style.display = "inline-block";
    out.innerHTML = "Square: " + (n * n);
}
function fn_q6() {
    var n = parseInt(prompt("Enter integer:")), f = 1;
    for (var i = n; i > 1; i--) f *= i;
    var out = document.getElementById("fn-q6-out");
    out.style.display = "inline-block";
    out.innerHTML = "Factorial: " + f;
}
function fn_q7() {
    var s = parseInt(prompt("Start:")), e = parseInt(prompt("End:")), str = "";
    for(var i=s; s<=e ? i<=e : i>=e; s<=e ? i++ : i--) str += i + " ";
    var out = document.getElementById("fn-q7-out");
    out.style.display = "inline-block";
    out.innerHTML = str;
}
function fn_q8() {
    var b = parseFloat(prompt("Base:")), p = parseFloat(prompt("Perpendicular:"));
    var hyp = Math.sqrt((b*b) + (p*p));
    var out = document.getElementById("fn-q8-out");
    out.style.display = "inline-block";
    out.innerHTML = "Hypotenuse: " + hyp.toFixed(2);
}
function fn_q9() {
    var w = parseFloat(prompt("Width:")), h = parseFloat(prompt("Height:"));
    var out = document.getElementById("fn-q9-out");
    out.style.display = "inline-block";
    out.innerHTML = "Value rule (5,10): " + (5*10) + "<br>Variable rule chosen: " + (w*h);
}
function fn_q10() {
    var s = prompt("Word:").toLowerCase().replace(/[^a-z0-9]/g,"");
    alert(s === s.split("").reverse().join("") ? "Palindrome" : "Not Palindrome");
}
function fn_q11() {
    var s = prompt("Enter text:", "the quick brown fox");
    var arr = s.split(" ");
    for(var i=0; i<arr.length; i++) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    var out = document.getElementById("fn-q11-out");
    out.style.display = "inline-block";
    out.innerHTML = arr.join(" ");
}
function fn_q12() {
    var s = prompt("Enter text:", "Web Development Tutorial").split(" ");
    var max = "";
    for(var i=0; i<s.length; i++) if(s[i].length > max.length) max = s[i];
    var out = document.getElementById("fn-q12-out");
    out.style.display = "inline-block";
    out.innerHTML = "Longest Word: " + max;
}
function fn_q13() {
    var s = prompt("String:", "JSResourceS.com").toLowerCase();
    var l = prompt("Letter to search:", "o").toLowerCase();
    var count = 0;
    for(var i=0; i<s.length; i++) if(s.charAt(i) === l) count++;
    var out = document.getElementById("fn-q13-out");
    out.style.display = "inline-block";
    out.innerHTML = "Occurrences: " + count;
}
function fn_q14() {
    var r = parseFloat(prompt("Radius:"));
    var out = document.getElementById("fn-q14-out");
    out.style.display = "inline-block";
    out.innerHTML = "Circumference: " + (2 * Math.PI * r).toFixed(2) + "<br>Area: " + (Math.PI * r * r).toFixed(2);
}

// ==========================================
// MODULE 3: LOOPS, SWITCH & FUNCTIONS
// ==========================================
function lp_q1() {
    var a = parseInt(prompt("Base (a):")), b = parseInt(prompt("Power (b):"));
    var out = document.getElementById("lp-q1-out");
    out.style.display = "inline-block";
    out.innerHTML = a + "^" + b + " = " + Math.pow(a, b);
}
function lp_q2() {
    var y = parseInt(prompt("Year:"));
    alert((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0) ? "Leap Year" : "Not a Leap Year");
}
function lp_q3() {
    var a = parseFloat(prompt("Side A:")), b = parseFloat(prompt("Side B:")), c = parseFloat(prompt("Side C:"));
    var S = (a + b + c) / 2;
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    var out = document.getElementById("lp-q3-out");
    out.style.display = "inline-block";
    out.innerHTML = "Area of Triangle: " + area.toFixed(2);
}
function lp_q4() {
    var m1 = parseFloat(prompt("Subject 1 Marks:")), m2 = parseFloat(prompt("Subject 2 Marks:")), m3 = parseFloat(prompt("Subject 3 Marks:"));
    var avg = (m1+m2+m3)/3;
    var perc = ( (m1+m2+m3) / 300 ) * 100;
    var out = document.getElementById("lp-q4-out");
    out.style.display = "inline-block";
    out.innerHTML = "Average Marks: " + avg.toFixed(2) + "<br>Percentage: " + perc.toFixed(2) + "%";
}
function lp_q5() {
    var str = prompt("Enter text string:"), chr = prompt("Char to find index of:");
    var idx = -1;
    for(var i=0; i<str.length; i++) {
        if(str.charAt(i) === chr) { idx = i; break; }
    }
    var out = document.getElementById("lp-q5-out");
    out.style.display = "inline-block";
    out.innerHTML = "Custom IndexOf structural match: " + idx;
}
function lp_q6() {
    var sent = prompt("Enter sentence (max 25 chars):");
    var noVowels = sent.replace(/[aeiouAEIOU]/g, "");
    var out = document.getElementById("lp-q6-out");
    out.style.display = "inline-block";
    out.innerHTML = "Output: " + noVowels;
}
function lp_q7() {
    var line = prompt("Enter line:", "Please read this application and give me gratuity").toLowerCase();
    var count = 0, pairs = [];
    for(var i=0; i<line.length-1; i++) {
        var ch1 = line.charAt(i), ch2 = line.charAt(i+1);
        switch(ch1) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                switch(ch2) {
                    case 'a': case 'e': case 'i': case 'o': case 'u':
                        count++;
                        pairs.push(ch1+ch2);
                        break;
                }
                break;
        }
    }
    var out = document.getElementById("lp-q7-out");
    out.style.display = "inline-block";
    out.innerHTML = "Vowel pairs found: " + count + " (" + pairs.join(", ") + ")";
}
function lp_q8() {
    var km = parseFloat(prompt("Enter distance in KM:"));
    var out = document.getElementById("lp-q8-out");
    out.style.display = "inline-block";
    out.innerHTML = (km*1000) + " Meters<br>" + (km*3280.84).toFixed(2) + " Feet<br>" + (km*39370.1).toFixed(2) + " Inches<br>" + (km*100000) + " Centimeters";
}
function lp_q9() {
    var hours = parseInt(prompt("Enter total hours worked:"));
    var otPay = 0;
    if(hours > 40) otPay = (hours - 40) * 12;
    var out = document.getElementById("lp-q9-out");
    out.style.display = "inline-block";
    out.innerHTML = "Overtime Compensation: Rs. " + otPay + ".00";
}
function lp_q10() {
    var amt = parseInt(prompt("Enter amount to withdraw:"));
    if(!isNaN(amt)) {
        var h = Math.floor(amt / 100);
        var rem = amt % 100;
        var f = Math.floor(rem / 50);
        var t = Math.floor((rem % 50) / 10);
        
        var out = document.getElementById("lp-q10-out");
        out.style.display = "inline-block";
        out.innerHTML = "You will have " + h + " hundred notes, " + f + " fifty notes, and " + t + " ten notes.";
    }
}