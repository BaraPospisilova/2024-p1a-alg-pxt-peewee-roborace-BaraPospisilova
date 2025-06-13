radio.setGroup(43)
radio.setTransmitPower(7)
radio.setFrequencyBand(81)
radio.setTransmitSerialNumber(true)

radio.onReceivedNumber(function(receivedNumber: number) {
   if(receivedNumber===0){
       basic.showString("X")
   } 

})

input.onButtonPressed(Button.A, function() {
     radio.sendNumber(1)
})

input.onButtonPressed(Button.B, function() {
    radio.sendNumber(2)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    radio.sendNumber(3)
})

