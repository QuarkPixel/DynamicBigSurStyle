if (typeof BSSImageConfig == "undefined") {
    var BSSImageConfig = {}
    console.log("changed")
}
BSSRender(BSSImageConfig)

function BSSRender(BSSImageConfig) {
    //检测是否有配置，若无则添加
    let BSSImageConfig_Preset = {
        id: "BigSurStyleDisplay",
        color: ["#2780c2", "#FFFFFF"],
        blur_radius: 40,
        graphics_num: 40,
        graphics_size: 0.5,
        graphics_opacity: 0.3,
        graphics_speed: 0.3,
        fps: 6,
    }
    let BSSImageConfig_key = [
        "id",
        "color",
        "blur_radius",
        "graphics_num",
        "graphics_size",
        "graphics_opacity",
        "graphics_speed",
        "fps",
    ]
    for (let i = 0; i < BSSImageConfig_key.length; i++) {
        // console.log(BSSImageConfig["id"])
        if (!BSSImageConfig.hasOwnProperty(BSSImageConfig_key[i])) {
            BSSImageConfig[BSSImageConfig_key[i]] =
                BSSImageConfig_Preset[BSSImageConfig_key[i]]
        }
    }

    //设置父元素样式 & 激活函数

    let canvasDiv = document.getElementById(BSSImageConfig.id)

    let width = canvasDiv.clientWidth
    let height = canvasDiv.clientHeight

    canvasDiv.innerHTML =
        "<div><canvas width=" +
        width +
        " height=" +
        height +
        " style=''></canvas><div style='width:" +
        width +
        "px;height:" +
        height +
        "px;position:absolute;top:0;left:0;backdrop-filter:blur(" +
        BSSImageConfig.blur_radius +
        "px);-webkit-backdrop-filter:blur(" +
        BSSImageConfig.blur_radius +
        "px)'></div></div>"

    canvasDiv.childNodes[0].style["background-color"] = BSSImageConfig.color[0]
    canvasDiv.childNodes[0].style["font-size"] = 0
    canvasDiv.childNodes[0].style.overflow = "hidden"
    canvasDiv.childNodes[0].style.position = "relative"

    //获取元素
    let canvas = document.getElementById(BSSImageConfig.id).childNodes[0]
        .childNodes[0]

    ////数据处理
    let minimumLength
    width > height ? (minimumLength = height / 2) : (minimumLength = width / 2)
    MINgraphics_size = BSSImageConfig.graphics_size * 0.2 * minimumLength
    BSSImageConfig.graphics_opacity *= 0.5
    graphics_opacity_smaller = BSSImageConfig.graphics_opacity * 0.8
    BSSImageConfig.graphics_speed *= 5
    BSSImageConfig.fps = 1000 / BSSImageConfig.fps
    DOUBLEgraphics_speed = BSSImageConfig.graphics_speed * 2

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
        let circles = [],
            circle_radius

        //初始化若干个圆
        for (var i = 0; i < BSSImageConfig.graphics_num; i++) {
            //随机半径
            circle_radius =
                Math.floor(Math.random() * (4 * MINgraphics_size + 1)) +
                MINgraphics_size

            //随机不透明度
            ;(ctx_color =
                BSS_Ornament +
                BSSImageConfig.graphics_opacity /
                    (circle_radius / minimumLength + graphics_opacity_smaller) +
                ")"),
                (circles[i] = {
                    x:
                        Math.floor(
                            Math.random() * (width - 2 * circle_radius + 1)
                        ) + circle_radius,
                    y:
                        Math.floor(
                            Math.random() * (height - 2 * circle_radius + 1)
                        ) + circle_radius,
                    //速度向量
                    velocityX:
                        Math.random() * DOUBLEgraphics_speed -
                        BSSImageConfig.graphics_speed,
                    velocityY:
                        Math.random() * DOUBLEgraphics_speed -
                        BSSImageConfig.graphics_speed,
                    radius: circle_radius,
                    color: ctx_color,
                })
        }

        //定时器
        setInterval(function () {
            //清空画布
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            //绘制圆
            circles.forEach(function (circle) {
                ctx.beginPath()
                ctx.arc(
                    circle.x,
                    circle.y,
                    circle.radius,
                    0,
                    Math.PI * 2,
                    false
                )
                ctx.fillStyle = circle.color
                ctx.fill()
                adjustPosition(circle)
            })
        }, BSSImageConfig.fps)
    }
    //调整圆的位置坐标
    function adjustPosition(circle) {
        //判断圆的运动坐标是否越界，越界则反向运动
        if (
            circle.x + circle.velocityX + circle.radius > ctx.canvas.width ||
            circle.x + circle.velocityX - circle.radius < 0
        ) {
            circle.velocityX = -circle.velocityX
        }

        if (
            circle.y + circle.velocityY + circle.radius > ctx.canvas.height ||
            circle.y + circle.velocityY - circle.radius < 0
        ) {
            circle.velocityY = -circle.velocityY
        }

        circle.x += circle.velocityX
        circle.y += circle.velocityY

        //圆角矩形绘制
        function roundedRect(ctx, x, y, width, height, radius) {
            ctx.beginPath()
            ctx.moveTo(x, y + radius)
            ctx.lineTo(x, y + height - radius)
            ctx.quadraticCurveTo(x, y + height, x + radius, y + height)
            ctx.lineTo(x + width - radius, y + height)
            ctx.quadraticCurveTo(
                x + width,
                y + height,
                x + width,
                y + height - radius
            )
            ctx.lineTo(x + width, y + radius)
            ctx.quadraticCurveTo(x + width, y, x + width - radius, y)
            ctx.lineTo(x + radius, y)
            ctx.quadraticCurveTo(x, y, x, y + radius)
            ctx.stroke()
        }
    }
}
