let transactionHistory = [];
let leadHistory = [];

function calculate(){
  const val = parseFloat(document.getElementById("transactionValue").value);
  const resultDiv = document.getElementById("result");
  if(isNaN(val) || val<=0){
    resultDiv.style.display="block";
    resultDiv.innerHTML="Enter a valid transaction value";
    return;
  }
  const earnings = val*0.1;
  resultDiv.style.display="block";
  resultDiv.innerHTML=`Transaction: ₦${val.toLocaleString()}<br>Agent Earnings (10%): ₦${earnings.toLocaleString()}`;
}

function addTransaction(){
  const val = parseFloat(document.getElementById("transactionValue").value);
  if(isNaN(val) || val<=0){ alert("Enter valid transaction"); return; }
  transactionHistory.push(val);
  updateSummary();
}

function updateSummary(){
  const totalDiv = document.getElementById("totalEarnings");
  let total = transactionHistory.reduce((a,b)=>a+b*0.1,0);
  totalDiv.style.display="block";
  totalDiv.innerHTML=`Total Transactions: ${transactionHistory.length}<br>Total Agent Earnings: ₦${total.toLocaleString()}`;
}

function resetTransactions(){
  transactionHistory=[];
  document.getElementById("totalEarnings").style.display="none";
}

function addLead(){
  const property = document.getElementById("propertyName").value.trim();
  const client = document.getElementById("clientName").value.trim();
  const value = parseFloat(document.getElementById("leadValue").value);
  if(!property || !client || isNaN(value) || value<=0){ alert("Fill all fields correctly"); return; }
  leadHistory.push({property, client, value});
  updateLeadList();
}

function updateLeadList(){
  const listDiv = document.getElementById("leadList");
  let html = "<table><tr><th>Property</th><th>Client</th><th>Transaction (₦)</th></tr>";
  leadHistory.forEach(l=>{ html+=`<tr><td>${l.property}</td><td>${l.client}</td><td>₦${l.value.toLocaleString()}</td></tr>` });
  html+="</table>";
  listDiv.style.display="block";
  listDiv.innerHTML = html;
}