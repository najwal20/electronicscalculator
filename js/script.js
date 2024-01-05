function showCalculator() {
    var operation = document.getElementById("operation").value;
    var calculatorContainer = document.getElementById("calculatorContainer");

    // Hapus kalkulator sebelumnya
    calculatorContainer.innerHTML = "";

    // Tambahkan kalkulator sesuai pilihan
    switch (operation) {
        case "ohm":
            calculatorContainer.innerHTML = "<label for='voltage'>Voltage (V):</label><input type='number' id='voltage'><br>" +
                                            "<label for='current'>Current (I):</label><input type='number' id='current'><br>" +
                                            "<button onclick='calculateOhm()'>Calculate</button><br>" +
                                            "<p>Result: <span id='ohmResult'></span></p>";
            break;
        case "kirchoff":
            calculatorContainer.innerHTML = "<label for='current1'>Current 1 (I1):</label><input type='number' id='current1'><br>" +
                                            "<label for='current2'>Current 2 (I2):</label><input type='number' id='current2'><br>" +
                                            "<label for='current3'>Current 3 (I3):</label><input type='number' id='current3'><br>" +
                                            "<button onclick='calculateKirchoff()'>Calculate</button><br>" +
                                            "<p>Result: <span id='kirchoffResult'></span></p>";
            break;
        case "power":
            calculatorContainer.innerHTML = "<label for='voltagePower'>Voltage (V):</label><input type='number' id='voltagePower'><br>" +
                                            "<label for='currentPower'>Current (I):</label><input type='number' id='currentPower'><br>" +
                                            "<button onclick='calculatePower()'>Calculate</button><br>" +
                                            "<p>Result: <span id='powerResult'></span></p>";
            break;
        case "resistorSeries":
            calculatorContainer.innerHTML = "<label for='resistor1'>Resistor 1 (R1):</label><input type='number' id='resistor1'><br>" +
                                            "<label for='resistor2'>Resistor 2 (R2):</label><input type='number' id='resistor2'><br>" +
                                            "<button onclick='calculateResistorSeries()'>Calculate</button><br>" +
                                            "<p>Result: <span id='resistorSeriesResult'></span></p>";
            break;
        case "resistorParallel":
            calculatorContainer.innerHTML = "<label for='resistor3'>Resistor 1 (R1):</label><input type='number' id='resistor3'><br>" +
                                            "<label for='resistor4'>Resistor 2 (R2):</label><input type='number' id='resistor4'><br>" +
                                            "<button onclick='calculateResistorParallel()'>Calculate</button><br>" +
                                            "<p>Result: <span id='resistorParallelResult'></span></p>";
            break;
        case "capacitor":
            calculatorContainer.innerHTML = "<label for='capacitance'>Capacitance (C):</label><input type='number' id='capacitance'><br>" +
                                            "<label for='voltageCapacitor'>Voltage (V):</label><input type='number' id='voltageCapacitor'><br>" +
                                            "<button onclick='calculateCapacitor()'>Calculate</button><br>" +
                                            "<p>Result: <span id='capacitorResult'></span></p>";
            break;
        case "inductor":
            calculatorContainer.innerHTML = "<label for='inductance'>Inductance (L):</label><input type='number' id='inductance'><br>" +
                                            "<label for='currentInductor'>Current (I):</label><input type='number' id='currentInductor'><br>" +
                                            "<button onclick='calculateInductor()'>Calculate</button><br>" +
                                            "<p>Result: <span id='inductorResult'></span></p>";
            break;
        case "capacitorParallel":
            calculatorContainer.innerHTML = "<label for='capacitorParallel1'>Capacitor 1 (C1):</label><input type='number' id='capacitorParallel1'><br>" +
                                            "<label for='capacitorParallel2'>Capacitor 2 (C2):</label><input type='number' id='capacitorParallel2'><br>" +
                                            "<button onclick='calculateCapacitorParallel()'>Calculate</button><br>" +
                                            "<p>Result: <span id='capacitorParallelResult'></span></p>";
            break;
        case "inductorParallel":
            calculatorContainer.innerHTML = "<label for='inductorParallel1'>Inductor 1 (L1):</label><input type='number' id='inductorParallel1'><br>" +
                                            "<label for='inductorParallel2'>Inductor 2 (L2):</label><input type='number' id='inductorParallel2'><br>" +
                                            "<button onclick='calculateInductorParallel()'>Calculate</button><br>" +
                                            "<p>Result: <span id='inductorParallelResult'></span></p>";
            break;
        case "wheatstone":
            calculatorContainer.innerHTML = "<label for='resistorWheatstone1'>Resistor 1 (R1):</label><input type='number' id='resistorWheatstone1'><br>" +
                                            "<label for='resistorWheatstone2'>Resistor 2 (R2):</label><input type='number' id='resistorWheatstone2'><br>" +
                                            "<label for='resistorWheatstone3'>Resistor 3 (R3):</label><input type='number' id='resistorWheatstone3'><br>" +
                                            "<label for='resistorWheatstone4'>Resistor 4 (R4):</label><input type='number' id='resistorWheatstone4'><br>" +
                                            "<button onclick='calculateWheatstone()'>Calculate</button><br>" +
                                            "<p>Result: <span id='wheatstoneResult'></span></p>";
            break;
    }
}


function calculateOhm() {
    var voltage = document.getElementById("voltage").value;
    var current = document.getElementById("current").value;

    // Hitung menggunakan rumus Ohm: V = I * R
    var result = voltage / current;

    document.getElementById("ohmResult").innerText = result.toFixed(2) + " Ohm";
}

function calculateKirchoff() {
    var current1 = document.getElementById("current1").value;
    var current2 = document.getElementById("current2").value;
    var current3 = document.getElementById("current3").value;

    // Hitung menggunakan Hukum Kirchoff: ΣI_{masuk} = ΣI_{keluar}
    var result = parseFloat(current1) + parseFloat(current2) + parseFloat(current3);

    document.getElementById("kirchoffResult").innerText = result.toFixed(2) + " A";
}

function calculatePower() {
    var voltagePower = document.getElementById("voltagePower").value;
    var currentPower = document.getElementById("currentPower").value;

    // Hitung menggunakan Rumus Daya: P = V * I
    var result = voltagePower * currentPower;

    document.getElementById("powerResult").innerText = result.toFixed(2) + " Watt";
}

function calculateResistorSeries() {
    var resistor1 = document.getElementById("resistor1").value;
    var resistor2 = document.getElementById("resistor2").value;

    // Hitung resistansi total dalam rangkaian seri: R_total = R1 + R2
    var result = parseFloat(resistor1) + parseFloat(resistor2);

    document.getElementById("resistorSeriesResult").innerText = result.toFixed(2) + " Ohm";
}

function calculateResistorParallel() {
    var resistor3 = document.getElementById("resistor3").value;
    var resistor4 = document.getElementById("resistor4").value;

    // Hitung resistansi total dalam rangkaian paralel: 1/R_total = 1/R1 + 1/R2
    var result = 1 / (1 / parseFloat(resistor3) + 1 / parseFloat(resistor4));

    document.getElementById("resistorParallelResult").innerText = result.toFixed(2) + " Ohm";
}

function calculateCapacitor() {
    var capacitance = document.getElementById("capacitance").value;
    var voltageCapacitor = document.getElementById("voltageCapacitor").value;

    // Hitung menggunakan rumus kapasitor: Q = C * V
    var result = capacitance * voltageCapacitor;

    document.getElementById("capacitorResult").innerText = result.toFixed(2) + " Coulombs";
}

function calculateInductor() {
    var inductance = document.getElementById("inductance").value;
    var currentInductor = document.getElementById("currentInductor").value;

    // Hitung menggunakan rumus induktor: Φ = L * I
    var result = inductance * currentInductor;

    document.getElementById("inductorResult").innerText = result.toFixed(2) + " Weber";
}

function calculateCapacitorParallel() {
    var capacitorParallel1 = document.getElementById("capacitorParallel1").value;
    var capacitorParallel2 = document.getElementById("capacitorParallel2").value;

    // Hitung kapasitansi total dalam rangkaian paralel: C_total = C1 + C2
    var result = parseFloat(capacitorParallel1) + parseFloat(capacitorParallel2);

    document.getElementById("capacitorParallelResult").innerText = result.toFixed(2) + " Farads";
}

function calculateInductorParallel() {
    var inductorParallel1 = document.getElementById("inductorParallel1").value;
    var inductorParallel2 = document.getElementById("inductorParallel2").value;

    // Hitung induktansi total dalam rangkaian paralel: 1/L_total = 1/L1 + 1/L2
    var result = 1 / (1 / parseFloat(inductorParallel1) + 1 / parseFloat(inductorParallel2));

    document.getElementById("inductorParallelResult").innerText = result.toFixed(2) + " Henrys";
}

function calculateWheatstone() {
    var resistorWheatstone1 = document.getElementById("resistorWheatstone1").value;
    var resistorWheatstone2 = document.getElementById("resistorWheatstone2").value;
    var resistorWheatstone3 = document.getElementById("resistorWheatstone3").value;
    var resistorWheatstone4 = document.getElementById("resistorWheatstone4").value;

    // Hitung menggunakan jembatan Wheatstone: R_x = (R1/R2) * R3 - R4
    var result = (resistorWheatstone1 / resistorWheatstone2) * resistorWheatstone3 - resistorWheatstone4;

    document.getElementById("wheatstoneResult").innerText = result.toFixed(2) + " Ohms";
}

function resetForm() {
    document.getElementById('conversionForm').reset();
    document.getElementById('result').innerHTML = ''; // Menghapus hasil konversi saat mereset
    document.getElementById("resetButton").addEventListener("click", resetCalculator);

  }

  function resetCalculator() {
    // Reset nilai-nilai input atau elemen-elemen kalkulator yang perlu direset
    var calculatorContainer = document.getElementById("calculatorContainer");
    calculatorContainer.innerHTML = ""; // Bersihkan isi container
}
  