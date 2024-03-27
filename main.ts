basic.forever(function () {
    motors.dualMotorPower(Motor.M0, 100)
    motors.dualMotorPower(Motor.M1, 100)
    basic.pause(2000)
    motors.dualMotorPower(Motor.M0_M1, 0)
})
