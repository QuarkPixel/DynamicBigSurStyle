BSSImageConfig = {
    id: "BigSurStyleDisplay",
    color: ["#2780c2", "#FFFFFF"], //[#2780c2][#FFFFFF] {#HEX}
    blur_radius: 30, //[30] {Px}
    graphics_shape: "triangle", //triangle|square|circle
    graphics_num: 20, //[20]
    graphics_size: 0.5, //[0.5] (<1)
    graphics_opacity: 0.3, //[0.3]
    graphics_speed: 1, //[1]
    fps: 12, //[12]
}

//设置父元素样式 & 激活函数
if (document.getElementById(BSSImageConfig.id)) {
    let canvasDiv = document.getElementById(BSSImageConfig.id)

    canvasDiv.style["background-color"] = BSSImageConfig.color[0]
    canvasDiv.style.overflow = "hidden"
    canvasDiv.style.position = "relative"

    let width = canvasDiv.clientWidth
    let height = canvasDiv.clientHeight

    canvasDiv.innerHTML =
        "<canvas width=" +
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
        "px)'></div>"

    BSSRender(width, height)
}

function BSSRender(width, height) {
    //获取元素
    let canvas = document.getElementById(BSSImageConfig.id).childNodes[0]

    ////数据处理
    let minimumLength
    width > height ? (minimumLength = height / 2) : (minimumLength = width / 2)
    MINgraphics_size = BSSImageConfig.graphics_size * 0.2 * minimumLength
    BSSImageConfig.graphics_opacity *= 0.5
    graphics_opacity_smaller = BSSImageConfig.graphics_opacity * 0.8
    console.log(graphics_opacity_smaller)
    //5m|m|||4m+1,m
    DOUBLEgraphics_speed = BSSImageConfig.graphics_speed * 2
    // BSSImageConfig.graphics_speed *= 2
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

    //不透明度处理
    // BSSImageConfig.graphics_opacity *= 255

    //获取最小半径

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d")

        // //填充背景

        // let sizeRange = [width * 20, width * 40, height * 20, height * 40]

        // console.log(minimumLength)
        // Math.sqrt(width * height) * BSSImageConfig.graphics_size

        //生成图形
        // for (let i = 0; i < BSSImageConfig.graphics_num; i++) {
        //

        //     switch (BSSImageConfig.graphics_shape) {
        //         case "triangle": //三角形
        //             //确定第一个点（大体位置）
        //             let firstPoint = [
        //                 Math.floor(Math.random() * width),
        //                 Math.floor(Math.random() * height),
        //             ]

        //             //绘制
        //             ctx.beginPath()
        //             ctx.moveTo(firstPoint[0], firstPoint[1])
        //             ctx.lineTo(randomPosion(width, 0), randomPosion(height, 1))
        //             ctx.lineTo(randomPosion(width, 0), randomPosion(height, 1))
        //             ctx.fill()
        //             function randomPosion(direction, num) {
        //                 return (
        //                     Math.floor(Math.random() * (direction * 0.8 + 1)) +
        //                     firstPoint[num] -
        //                     width * 0.4
        //                 )
        //             }
        //             break
        //         case "square": //正方形
        //             //随机大小&位置
        //             graphicsWidth =
        //                 (Math.floor(Math.random() * sizeRange[1]) +
        //                     sizeRange[0]) /
        //                 100
        //             graphicsHeight =
        //                 (Math.floor(Math.random() * sizeRange[3]) +
        //                     sizeRange[2]) /
        //                 100
        //             graphicsTop = Math.floor(
        //                 Math.random() * (width + graphicsWidth + 1) -
        //                     graphicsWidth
        //             )
        //             graphicsLeft = Math.floor(
        //                 Math.random() * (height + graphicsHeight + 1) -
        //                     graphicsHeight
        //             )
        //             ctx.fillRect(
        //                 graphicsTop,
        //                 graphicsLeft,
        //                 graphicsWidth,
        //                 graphicsHeight
        //             )
        //             break
        //         case "circle": //圆形
        //             // ctx.beginPath()
        //             // ctx.arc(
        //             //     Math.floor(Math.random() * width),
        //             //     Math.floor(Math.random() * height),
        //             //     Math.floor(Math.random() * averageSize),
        //             //     0,
        //             //     2 * Math.PI
        //             // )
        //             // // ctx.fillStyle = "#ff0" //设置填充颜色
        //             // ctx.fill() //开始填充

        //             break
        //     }
        // }

        let circles = [],
            circle_radius

        //初始化若干个圆
        for (var i = 0; i < BSSImageConfig.graphics_num; i++) {
            //随机半径
            circle_radius =
                Math.floor(Math.random() * (4 * MINgraphics_size + 1)) +
                MINgraphics_size

            //随机颜色
            ;(ctx_color =
                BSS_Ornament +
                BSSImageConfig.graphics_opacity /
                    (circle_radius / minimumLength + graphics_opacity_smaller) +
                // Math.floor(
                //     Math.random() * (BSSImageConfig.graphics_opacity * 100 + 1)
                // ) /
                //     100 +
                ")"),
                // console.log(ctx.fillStyle)
                // console.log(
                //     circle_radius / minimumLength +
                //         "," +
                //         width +
                //         "," +
                //         0.1 / (circle_radius / minimumLength + 0.1)
                // )

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
                    // radius: 50 * Math.random(),
                    radius: circle_radius,
                    //toFixed() 方法可把 Number 四舍五入为指定小数位数的数字
                    color: ctx_color,

                    // color: 'rgba(255,0,255,' + (Math.floor(Math.random() * 10) + 1) / 100 + ")"
                })
            // console.log(BSSImageConfig.graphics_opacity * 100 + 1)
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
        }, 1000 / BSSImageConfig.fps)

        //调整圆的位置坐标
        function adjustPosition(circle) {
            //判断圆的运动坐标是否越界，越界则反向运动
            if (
                circle.x + circle.velocityX + circle.radius >
                    ctx.canvas.width ||
                circle.x + circle.velocityX - circle.radius < 0
            ) {
                circle.velocityX = -circle.velocityX
            }

            if (
                circle.y + circle.velocityY + circle.radius >
                    ctx.canvas.height ||
                circle.y + circle.velocityY - circle.radius < 0
            ) {
                circle.velocityY = -circle.velocityY
            }

            circle.x += circle.velocityX
            circle.y += circle.velocityY
        }

        // canvas.setAttribute(
        //     "style",
        //     "filter: blur(" + BSSImageConfig.blur_radius + "px)"
        // )
        // console.log("aaa")
    }
}
