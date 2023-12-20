// First problem
function admissionResult() {
    var mathScore = document.getElementById("math-score").value * 1;
    var physicsScore = document.getElementById("physics-score").value * 1;
    var chemScore = document.getElementById("chem-score").value * 1;
    var studentArea = 0;
    var studentAreaQuery = document.querySelector('input[name="area-selector"]:checked');
    if (studentAreaQuery) {
        studentArea = document.querySelector('input[name="area-selector"]:checked').value * 1;
    }

    var studentType = 0;
    var studentTypeQuery = document.querySelector('input[name="student-type-selector"]:checked');
    if (studentTypeQuery) {
        studentType = document.querySelector('input[name="student-type-selector"]:checked').value * 1;
    }
    var benchmark = document.getElementById("benchmark").value * 1;

    document.getElementById("benchmark-print").innerText = `${benchmark}`;
    document.getElementById("test-scores").innerText = `Toán: ${mathScore} - Lý: ${physicsScore} - Hóa: ${chemScore}`

    if (studentArea > 0) {
        document.getElementById("student-area").innerText = `${document.querySelector(`label[for=${studentAreaQuery.id}]`).innerText}`
    }
    else {
        document.getElementById("student-area").innerText = "Không áp dụng"
    }

    if (studentType > 0) {
        document.getElementById("student-type").innerText = `${document.querySelector(`label[for=${studentTypeQuery.id}]`).innerText}`
    }
    else {
        document.getElementById("student-type").innerText = "Không áp dụng"
    }

    var totalScore = mathScore + physicsScore + chemScore + studentArea + studentType;
    document.getElementById("total-score").innerText = `${totalScore}`;

    if (benchmark === 0) {
        document.getElementById("admission-result").innerText = "Chưa đủ thông tin để xét kết quả tuyển sinh."
        document.getElementById("admission-result").style.color = "#c1121f";
        return
    }

    if (totalScore >= benchmark) {
        document.getElementById("admission-result").innerText = "Xin chúc mừng bạn đã đạt đủ điều kiện trúng tuyển!";
        document.getElementById("admission-result").style.color = "#386641";
        document.getElementById("total-score").style.color = "#386641";
    }
    else {
        document.getElementById("admission-result").innerText = "Rất tiếc nhưng bạn không đạt đủ điều kiện trúng tuyển.";
        document.getElementById("admission-result").style.color = "#c1121f";
        document.getElementById("total-score").style.color = "#c1121f";
    }
}

// Second problem
function finalPrice(usage) {
    if (usage <= 50) {
        return 500;
    }
    else if (usage <= 100) {
        return 650;
    }
    else if (usage <= 200) {
        return 850;
    }
    else if (usage <= 350) {
        return 1100;
    }
    else {
        return 1300;
    }
}

function electricityBill() {
    var customerName = document.getElementById("customer-name").value;
    var usage = document.getElementById("usage").value * 1;
    var totalBill = 0;

    if (usage <= 0) {
        document.getElementById("electricity-result").innerText = "Mức tiêu thụ không hợp lệ.";
        document.getElementById("electricity-result").style.color = "#c1121f";
        return
    }
    else if (usage <= 50) {
        totalBill = finalPrice(usage) * usage;
    }
    else if (usage <= 100) {
        totalBill = 25000 + finalPrice(usage) * (usage - 50);
    }
    else if (usage <= 200) {
        totalBill = 57500 + finalPrice(usage) * (usage - 100);
    }
    else if (usage <= 350) {
        totalBill = 142500 + finalPrice(usage) * (usage - 200);
    }
    else {
        totalBill = 307500 + finalPrice(usage) * (usage - 350);
    }

    document.getElementById("customer-name-print").innerText = customerName;
    document.getElementById("usage-print").innerText = `${Intl.NumberFormat("en").format(usage)} kW`;
    document.getElementById("electricity-result").innerText = `${Intl.NumberFormat("en").format(totalBill)} VND`;
    document.getElementById("electricity-result").style.color = "#386641";
}

// Third problem

function taxRate(taxableIncome) {
    if (taxableIncome <= 60) {
        return 0.05;
    }
    else if (taxableIncome <= 120) {
        return 0.1;
    }
    else if (taxableIncome <= 210) {
        return 0.15;
    }
    else if (taxableIncome <= 384) {
        return 0.2;
    }
    else if (taxableIncome <= 624) {
        return 0.25;
    }
    else if (taxableIncome <= 960) {
        return 0.3; 
    }
    else {
        return 0.35;
    }
}

function taxAmount() {
    var customerName = document.getElementById("taxpayer-name").value;
    var income = document.getElementById("income").value * 1;
    var dependency = document.getElementById("dependency").value * 1;
    var taxableIncome = income - 4000000 - (dependency * 1600000);

    document.getElementById("taxpayer-name-print").innerText = customerName;
    document.getElementById("income-print").innerText = `${Intl.NumberFormat("en", {minimumFractionDigits: 2}).format(income)} VND`;
    document.getElementById("dependency-print").innerText = dependency;
    if (taxableIncome <= 0) {
        document.getElementById("tax-total").innerText = "Thu nhập không chịu thuế."
        document.getElementById("tax-total").style.color = "#c1121f";
        return
    }
    else {
        var taxTotal = taxableIncome * taxRate(taxableIncome / 1000000);
        document.getElementById("tax-total").innerText = `${Intl.NumberFormat("en", {minimumFractionDigits: 2}).format(taxTotal)} VND`;
        document.getElementById("tax-total").style.color = "#386641";
        document.getElementById("taxable-income").innerText = `${Intl.NumberFormat("en", {minimumFractionDigits: 2}).format(taxableIncome)} VND`;
        document.getElementById("taxable-income").style.color = "#386641";
        document.getElementById("tax-rate").innerText = `${taxRate(taxableIncome / 1000000) * 100}%`;
        document.getElementById("tax-rate").style.color = "#386641";
    }
}

// Fourth problem

document.getElementById("household").addEventListener("click", function (e) {
    document.getElementById("connections").setAttribute("disabled", "");
})

document.getElementById("business").addEventListener("click", function (e) {
    document.getElementById("connections").removeAttribute("disabled");
})

function processFee(clientType) {
    if (clientType === "household") {
        return 4.5;
    }
    else {
        return 15
    }
}

function serviceFee(clientType, connections) {
    if (clientType === "household") {
        return 20.5
    }
    else {
        if (connections <= 10) {
            return 75;
        }
        else {
            return 75 + 5 * (connections - 10);
        }
    }
}

function channelsFee(clientType, channels) {
    if (clientType === "household") {
        return 7.5 * channels;
    }
    else {
        return 50 * channels;
    }
}

function cableFee() {
    var clientName = document.getElementById("client-name").value;
    var clientType = document.querySelector('input[name="client-selector"]:checked').value;
    var clientTypeId = document.querySelector('input[name="client-selector"]:checked').id;
    var connections = document.getElementById("connections").value * 1;
    var channels = document.getElementById("channels").value * 1;
    var totalFee = processFee(clientType) + serviceFee(clientType, connections) + channelsFee(clientType, channels);


    document.getElementById("client-print").innerText = clientName;
    document.getElementById("client-type-print").innerText = `${document.querySelector(`label[for=${clientTypeId}]`).innerText}`;
    
    document.getElementById("connections-print").innerText = `${connections}`;
    document.getElementById("channels-print").innerText = `${channels}`;

    document.getElementById("cable-fee").innerText = `${Intl.NumberFormat("en", {minimumFractionDigits: 2}).format(totalFee)}$`;
    document.getElementById("cable-fee").style.color = "#386641";
}