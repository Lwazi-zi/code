makerbit.connectLcd(39)
makerbit.showStringOnLcd1602("HI LWAZI", makerbit.position1602(LcdPosition1602.Pos1), 16)
makerbit.clearLcd1602()
basic.pause(100)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("HI MY NAME IS LWAZI")
    basic.clearScreen()
    basic.showString("THIS IS THE D-DEVICE")
})
