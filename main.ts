input.onButtonPressed(Button.A, function () {
    music.playMelody("A F E F D G E F ", 120)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(494, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        . # # # .
        . # # # .
        `)
})
