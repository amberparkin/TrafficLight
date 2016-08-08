// Red light on

function turnRed() {
  $('#red').css("background-color", "#f00");
  setTimeout(turnRedOff, 3000);
}

function turnRedOff() {
  $('#red').css("background-color", "#600");
  setTimeout(flashRed1, 500)
}

// Red light flash x3

function flashRed1() {
  $('#red').css("background-color", "#f00");
  setTimeout(flashRedOff1, 500);
}

function flashRedOff1() {
  $('#red').css("background-color", "#600");
  setTimeout(flashRed2, 500)
}

function flashRed2() {
  $('#red').css("background-color", "#f00");
  setTimeout(flashRedOff2, 500);
}

function flashRedOff2() {
  $('#red').css("background-color", "#600");
  setTimeout(flashRed3, 500)
}

function flashRed3() {
  $('#red').css("background-color", "#f00");
  setTimeout(flashRedOff3, 500);
  setTimeout(turnOrange, 500);
}

function flashRedOff3() {
  $('#red').css("background-color", "#600");
}

// Orange light on

function turnOrange() {
  $('#orange').css("background-color", "#f90");
  setTimeout(turnOrangeOff, 1500);
}

function turnOrangeOff() {
  $('#orange').css("background-color", "#630");
  setTimeout(flashOrange1, 500)
}

// Orange light flash x3

function flashOrange1() {
  $('#orange').css("background-color", "#f90");
  setTimeout(flashOrangeOff1, 500);
}

function flashOrangeOff1() {
  $('#orange').css("background-color", "#630");
  setTimeout(flashOrange2, 500)
}

function flashOrange2() {
  $('#orange').css("background-color", "#f90");
  setTimeout(flashOrangeOff2, 500);
}

function flashOrangeOff2() {
  $('#orange').css("background-color", "#630");
  setTimeout(flashOrange3, 500)
}

function flashOrange3() {
  $('#orange').css("background-color", "#f90");
  setTimeout(flashOrangeOff3, 500);
  setTimeout(turnGreen, 500);
}

function flashOrangeOff3() {
  $('#orange').css("background-color", "#630");
}

// Green light on

function turnGreen() {
  $('#green').css("background-color", "#0c0");
  setTimeout(turnGreenOff, 3000);
}

function turnGreenOff() {
  $('#green').css("background-color", "#030");
  setTimeout(flashGreen1, 500)
}

// Green light flash x3

function flashGreen1() {
  $('#green').css("background-color", "#0c0");
  setTimeout(flashGreenOff1, 500);
}

function flashGreenOff1() {
  $('#green').css("background-color", "#030");
  setTimeout(flashGreen2, 500)
}

function flashGreen2() {
  $('#green').css("background-color", "#0c0");
  setTimeout(flashGreenOff2, 500);
}

function flashGreenOff2() {
  $('#green').css("background-color", "#030");
  setTimeout(flashGreen3, 500)
}

function flashGreen3() {
  $('#green').css("background-color", "#0c0");
  setTimeout(flashGreenOff3, 500);
  setTimeout(turnOrange2, 500);
}

function flashGreenOff3() {
  $('#green').css("background-color", "#030");
}

// Orange light on

function turnOrange2() {
  $('#orange').css("background-color", "#f90");
  setTimeout(turnOrangeOff2, 1500);
}

function turnOrangeOff2() {
  $('#orange').css("background-color", "#630");
  setTimeout(flashOrange4, 500)
}

// Orange light flash x3

function flashOrange4() {
  $('#orange').css("background-color", "#f90");
  setTimeout(flashOrangeOff4, 500);
}

function flashOrangeOff4() {
  $('#orange').css("background-color", "#630");
  setTimeout(flashOrange5, 500)
}

function flashOrange5() {
  $('#orange').css("background-color", "#f90");
  setTimeout(flashOrangeOff5, 500);
}

function flashOrangeOff5() {
  $('#orange').css("background-color", "#630");
  setTimeout(flashOrange6, 500)
}

function flashOrange6() {
  $('#orange').css("background-color", "#f90");
  setTimeout(flashOrangeOff6, 500);
  setTimeout(turnRed, 500);
}

function flashOrangeOff6() {
  $('#orange').css("background-color", "#630");
}

// --> Red light on
