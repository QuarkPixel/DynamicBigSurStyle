BSSImageConfig = {
    id: "BigSurStyleDisplay",
    color: ["#2780c2", "#FFFFFF"], //"main","ornament" #ONLY HEX
    graphics_shape: "square", //triangle|square
    graphics_num: 40,
    discreteValues: 256,
    speed: 1,
}

function BSSRender() {
    //获取元素
    let canvas = document.getElementById(BSSImageConfig.id)

    let width = canvas.width
    let height = canvas.height

    //创建变量
    let BSS_Ornament = "rgba("

    // 转换为RGB色码
    for (let i = 0; i < 3; i++) {
        BSS_Ornament +=
            String(
                Number(
                    "0x" +
                        BSSImageConfig.color[1].substring(i * 2 + 1, i * 2 + 3)
                )
            ) + ","
    }

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d")

        //填充背景
        ctx.fillStyle = BSSImageConfig.color[0]
        ctx.fillRect(0, 0, width, height)

        //生成图形
        let sizeRange = [width * 20, width * 40, height * 20, height * 40]
        // let sizeBase = [width*.5, height*.5] 0|width
        for (let i = 0; i < BSSImageConfig.graphics_num; i++) {
            //随机颜色
            ctx.fillStyle =
                BSS_Ornament + (Math.floor(Math.random() * 41) + 1) / 100 + ")"
            switch (BSSImageConfig.graphics_shape) {
                case "triangle":
                    ctx.beginPath()
                    ctx.moveTo(
                        Math.floor(Math.random() * width),
                        Math.floor(Math.random() * height)
                    )
                    ctx.lineTo(
                        Math.floor(Math.random() * width),
                        Math.floor(Math.random() * height)
                    )
                    ctx.lineTo(
                        Math.floor(Math.random() * width),
                        Math.floor(Math.random() * height)
                    )
                    ctx.fill()
                    break
                case "square":
                    //随机大小&位置
                    graphicsWidth =
                        (Math.floor(Math.random() * sizeRange[1]) +
                            sizeRange[0]) /
                        100
                    graphicsHeight =
                        (Math.floor(Math.random() * sizeRange[3]) +
                            sizeRange[2]) /
                        100
                    graphicsTop = Math.floor(
                        Math.random() * (width + graphicsWidth + 1) -
                            graphicsWidth
                    )
                    graphicsLeft = Math.floor(
                        Math.random() * (height + graphicsHeight + 1) -
                            graphicsHeight
                    )
                    ctx.fillRect(
                        graphicsTop,
                        graphicsLeft,
                        graphicsWidth,
                        graphicsHeight
                    )
                    break
            }
        }
    }
}
