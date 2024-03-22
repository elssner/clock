function radians (degrees: number) {
    return degrees * (matrix.pi() / 180)
}
function Linie_Fehler (x0: number, y0: number, x1: number, y1: number, i: number) {
    if (!(matrix.between(x0, 0, 127))) {
        basic.showString("" + i + "+x0=" + x0 + "-")
        basic.pause(2000)
    }
    if (!(matrix.between(y0, 0, 127))) {
        basic.showString("" + i + "+y0=" + y0 + "-")
        basic.pause(2000)
    }
    if (!(matrix.between(x1, 0, 127))) {
        basic.showString("" + i + "+x1=" + x1 + "-")
        basic.pause(2000)
    }
    if (!(matrix.between(y1, 0, 127))) {
        basic.showString("" + i + "+y1=" + y1 + "-")
        basic.pause(2000)
    }
    matrix.line(x0, y0, x1, y1, true)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    hour_marks()
    matrix.writeDisplay()
    led.plot(0, 0)
})
function hour_marks () {
    for (let Index = 0; Index <= 0; Index++) {
        Linie_Fehler(64 + Math.cos(radians(Index * 30)) * 50, (64 + Math.sin(radians(Index * 30))) * 50, (64 + Math.cos(radians(Index * 30)) * 50) * 60, (64 + Math.sin(radians(Index * 30))) * 60, Index)
    }
    matrix.setPixel(0, 0, true)
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(64 + Math.cos(radians(0 * 30)) * 50)
})
function clock_pointers (hour: number, min: number) {
	
}
matrix.init(matrix.ePages.y128)
matrix.rasterCircle(64, 64, 60, true)
