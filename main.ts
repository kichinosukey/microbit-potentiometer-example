let meter = 0
let level = 0
basic.forever(function () {
    // アナログ値を読み取る（0〜1023）
    meter = pins.analogReadPin(AnalogPin.P0)
    // 0〜1023を0〜4の範囲にマッピング（整数に切り捨て）
    level = Math.floor(meter / 205)
    // LED画面をクリア
    basic.clearScreen()
    // レベルに応じてLEDを上に向かって点灯
    for (let y = 0; y <= level; y++) {
        // 中央列（x=2）、下から上へ
        led.plot(4, 6 - y)
        // 中央列（x=2）、下から上へ
        led.plot(3, 5 - y)
        // 中央列（x=2）、下から上へ
        led.plot(2, 4 - y)
        // 中央列（x=2）、下から上へ
        led.plot(1, 5 - y)
        // 中央列（x=2）、下から上へ
        led.plot(0, 6 - y)
    }
    // デバッグ用にシリアル出力
    serial.writeValue("meter", meter)
})
