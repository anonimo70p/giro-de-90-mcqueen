function gIrAr90ºdErEcHa () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(260)
    maqueen.motorStop(maqueen.Motors.All)
}
function gIrAr90ºiZqUi () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    basic.pause(260)
    maqueen.motorStop(maqueen.Motors.All)
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        gIrAr90ºiZqUi()
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 155)
        basic.pause(1000)
        gIrAr90ºdErEcHa()
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 155)
    }
})
