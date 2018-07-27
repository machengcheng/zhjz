<template>
    <section class="oa-office-section">
        <user-detail-dialog :userDetailDialogVisible="userDetailDialogVisible" @userDetailDialogVisibleEvent="updateDialogStatus"></user-detail-dialog>
        <div class="treeChartBlock">
            <!--<div id="treeChart" ref="treeChart" class="treeChart mb20"></div>-->
            <div id="myDiagramDiv" style="text-align: center;background-color: white; border: solid 1px black; width: 100%; min-height: 400px;"></div>
            <p><button id="zoomToFit">Zoom to Fit</button> <button id="centerRoot">Center on root</button></p>
        </div>
    </section>
</template>

<script>
    import echarts from 'echarts';
    import UserDetailDialog from "./UserDetailDialog";
	export default {
		name: "oa-office",
		components: {
            UserDetailDialog
        },
		data() {
			return {
                userDetailDialogVisible: false,
                treeChartData: null,
                myDiagram: null,
                treeData: [
                    // {
                    //     "name": "中国",
                    //     "status": 2,
                    //     "value": 0,
                    //     "children": [
                    //         {
                    //             "name": "北京",
                    //             "status": 1,
                    //             "value": 11
                    //         },
                    //         {
                    //             "name": "天津",
                    //             "status": 2,
                    //             "value": 12
                    //         },
                    //         {
                    //             "name": "上海",
                    //             "status": 1,
                    //             "value": 13
                    //         },
                    //         {
                    //             "name": "重庆",
                    //             "status": 1,
                    //             "value": 14
                    //         },
                    //         {
                    //             "name": "新疆",
                    //             "status": 0,
                    //             "value": 15
                    //         },
                    //         {
                    //             "name": "内蒙古",
                    //             "status": 2,
                    //             "value": 16
                    //         },
                    //         {
                    //             "name": "陕西",
                    //             "status": 1,
                    //             "value": 17,
                    //             "children": [
                    //                 {
                    //                     "name": "西安",
                    //                     "status": 2,
                    //                     "value": 171
                    //                 },
                    //                 {
                    //                     "name": "榆林",
                    //                     "status": 0,
                    //                     "value": 172
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             "name": "西藏",
                    //             "status": 2,
                    //             "value": 18
                    //         },
                    //         {
                    //             "name": "青海",
                    //             "status": 0,
                    //             "value": 19
                    //         },
                    //         {
                    //             "name": "辽宁",
                    //             "status": 1,
                    //             "value": 20
                    //         }
                    //     ]
                    // }
                    {
                        "name": "魏平胜（在办）",
                        "status": 1,
                        "children": [
                            {
                                "name": "李文胜（在办）",
                                "status": 1,
                                "value": 11
                            },
                            {
                                "name": "罗定超（待办）",
                                "status": 2,
                                "value": 12
                            },
                            {
                                "name": "王相宾（待办）",
                                "status": 2,
                                "value": 13
                            },
                            {
                                "name": "袁金富（完成）",
                                "status": 4,
                                "value": 14
                            },
                            {
                                "name": "刘刚（待验）",
                                "status": 5,
                                "value": 15
                            },
                            {
                                "name": "班庭源（在办）",
                                "status": 1,
                                "value": 17,
                                "children": [
                                    {
                                        "name": "王大文（预警）",
                                        "status": 3,
                                        "value": 171
                                    },
                                    {
                                        "name": "张利中（在办）",
                                        "status": 1,
                                        "value": 172
                                    }
                                ]
                            },
                            {
                                "name": "王丽琼（待办）",
                                "status": 2,
                                "value": 18
                            }
                        ]
                    }
                ]
            }
		},
        watch: {
            '$route': function (route) {
                let query = route.query;
                console.info('OA办公vue数据');
                console.info(route);

            }
        },
		methods: {
            treeChart: function () {
                let that = this;
                that.treeChartData = echarts.init(that.$refs.treeChart);
                that.treeChartData.setOption({
                    tooltip: {
                        trigger: 'item',
                        triggerOn: 'mousemove',
                        formatter: function (data) {
                            // return data.name + '(' + (data.data.status === 1 ? '进行中' : data.data.status === 2 ? '已完成' : data.data.status === 0 ? '未完成' : '') + ')';
                            return data.name;
                        },
                        backgroundColor: '#409EFF',
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    },
                    series:[
                        {
                            type: 'tree',
                            data: that.treeData,
                            left: '2%',
                            right: '2%',
                            top: '10%',
                            bottom: '20%',
                            symbol: 'emptyCircle',
                            symbolSize: 10,
                            orient: 'vertical',
                            initialTreeDepth: -1,
                            expandAndCollapse: true,

                            label: {
                                normal: {
                                    position: 'top',
                                    rotate: -360,
                                    verticalAlign: 'middle',
                                    align: 'center',
                                    fontSize: 12
                                }
                            },

                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    borderColor: '#409EFF',  //节点边框颜色
                                    label: {
                                        show: true,
                                        position: 'inside',
                                        textStyle: {
                                            color: '#409EFF',   //节点字体颜色
                                            fontSize: 12,
                                            fontWeight:  'bolder'
                                        }
                                    },
                                    lineStyle: {
                                        color: '#409EFF',  //节点之间连线的颜色
                                        width: 1,
                                        curveness: 0.5, //树图边的曲度,  默认0.5
                                        type: 'solid' //'curve'|'broken'|'solid'|'dotted'|'dashed'
                                    }
                                },
                                emphasis: {
                                    label: {
                                        show: true
                                    }
                                }
                            },

                            leaves: {
                                label: {
                                    normal: {
                                        position: 'bottom',
                                        rotate: -90,
                                        verticalAlign: 'middle',
                                        align: 'left'
                                    }
                                }
                            },

                            animationDurationUpdate: 750
                        }
                    ]
                });

                that.treeChartData.on('click', function (params) {
                    console.info(params);
                    // that.userDetailDialogVisible = true;
                    if(params.value){
                        // alert("单击了"+params.name+"柱状图");
                    }else{
                        // alert("单击了"+params.name+"x轴标签");
                    }
                });

            },
            drawCharts: function () {
                let that = this;
                // that.treeChart();
            },
            updateDialogStatus: function () {
                this.userDetailDialogVisible = false;
            },
            createGraph: function () {
                let that = this;
                let $ = go.GraphObject.make;
                that.myDiagram =
                    $(go.Diagram, "myDiagramDiv",  // must be the ID or reference to div
                        {
                            initialContentAlignment: go.Spot.Center, // 居中显示Diagram内容
                            "toolManager.hoverDelay": 100,  // 100 milliseconds instead of the default 850
                            "toolManager.mouseWheelBehavior":go.ToolManager.WheelNone,//鼠标滚轮事件禁止
                            allowHorizontalScroll: false, //禁止水平拖动画布, 禁止水平滚动条
                            allowVerticalScroll: false, //禁止垂直拖动画布, 禁止垂直滚动条
                            allowMove: false, //禁止移动节点
                            allowCopy: false,
                            layout:  //create a TreeLayout for the family tree
                                $(go.TreeLayout,
                                    { angle: 90, nodeSpacing: 10, layerSpacing: 40, layerStyle: go.TreeLayout.LayerUniform })
                        });

                //1在办(#fff);2代办(#F57C00);3预警(#f00);4完成(#0f0);5待验(#FBC02D)
                let underwayColor = '#fff'; //1在办
                let agentColor = '#F57C00'; //2代办
                let earlyWarningColor = '#f00'; //3预警
                let finishedColor = '#0f0'; //4完成
                let inspectionColor = '#FBC02D';  //5待验
                let bluegrad = '#90CAF9';
                let pinkgrad = '#F48FB1';

                // Set up a Part as a legend, and place it directly on the diagram
                // myDiagram.add(
                //     $(go.Part, "Table",
                //         { position: new go.Point(300, 10), selectable: false },
                //         $(go.TextBlock, "Key",
                //             { row: 0, font: "700 14px Droid Serif, sans-serif" }),  // end row 0
                //         $(go.Panel, "Horizontal",
                //             { row: 1, alignment: go.Spot.Left },
                //             $(go.Shape, "Rectangle",
                //                 { desiredSize: new go.Size(30, 30), fill: bluegrad, margin: 5 }),
                //             $(go.TextBlock, "Males",
                //                 { font: "700 13px Droid Serif, sans-serif" })
                //         ),  // end row 1
                //         $(go.Panel, "Horizontal",
                //             { row: 2, alignment: go.Spot.Left },
                //             $(go.Shape, "Rectangle",
                //                 { desiredSize: new go.Size(30, 30), fill: pinkgrad, margin: 5 }),
                //             $(go.TextBlock, "Females",
                //                 { font: "700 13px Droid Serif, sans-serif" })
                //         )  // end row 2
                //     ));

                // get tooltip text from the object's data
                function tooltipTextConverter(person) {
                    var str = "";
                    str += "Born: " + person.birthYear;
                    if (person.deathYear !== undefined) str += "\nDied: " + person.deathYear;
                    if (person.reign !== undefined) str += "\nReign: " + person.reign;
                    return str;
                }

                // define tooltips for nodes
                let tooltiptemplate =
                    $(go.Adornment, "Auto",
                        $(go.Shape, "Rectangle",
                            { fill: "whitesmoke", stroke: "#000", strokeWidth: 1}),  //fill: 提示框背景色, stroke: 提示框边框颜色， strokeWidth: 提示框边框宽度
                        $(go.TextBlock,
                            { font: "bold 8pt Helvetica, bold Arial, sans-serif",
                                wrap: go.TextBlock.WrapFit,
                                margin: 5 },
                            new go.Binding("text", "", tooltipTextConverter))
                    );

                // let underwayColor = '#fff'; //1在办
                // let agentColor = '#F57C00'; //2代办
                // let earlyWarningColor = '#f00'; //3预警
                // let finishedColor = '#0f0'; //4完成
                // let inspectionColor = '#FBC02D';  //5待验
                // define Converters to be used for Bindings
                function genderBrushConverter(status) {
                    // if (gender === "M") return bluegrad;
                    // if (gender === "F") return pinkgrad;
                    switch (status) {
                        case 1:
                            return underwayColor;
                            break;
                        case 2:
                            return agentColor;
                            break;
                        case 3:
                            return earlyWarningColor;
                            break;
                        case 4:
                            return finishedColor;
                            break;
                        case 5:
                            return inspectionColor;
                            break;
                    }
                    // return "#f00";
                }

                // replace the default Node template in the nodeTemplateMap
                that.myDiagram.nodeTemplate =
                    $(go.Node, "Auto",
                        { deletable: false, toolTip: tooltiptemplate },
                        new go.Binding("text", "name"),
                        $(go.Shape, "RoundedRectangle",    //RoundedRectangle(圆角);Rectangle(矩形)
                            { fill: "lightgray",
                                stroke: '#e4e7ed', strokeWidth: 1, cursor: "pointer",
                                stretch: go.GraphObject.Fill,
                                alignment: go.Spot.Center },
                            // new go.Binding("fill", "gender", genderBrushConverter)),
                            new go.Binding("fill", "status", genderBrushConverter)),
                        $(go.TextBlock,
                            { font: "700 12px Droid Serif, sans-serif",
                                textAlign: "center",
                                margin: 10, maxSize: new go.Size(80, NaN) },
                            new go.Binding("text", "name"))
                    );


                // define the Link template
                that.myDiagram.linkTemplate =
                    $(go.Link,
                        { routing: go.Link.Orthogonal, corner: 5, selectable: false, toShortLength: 3, relinkableFrom: true, relinkableTo: true },  // allow the user to relink existing links
                        $(go.Shape,
                            { strokeWidth: 1, stroke: '#424242' },
                            new go.Binding("stroke", "color")),
                        $(go.Shape,
                            { toArrow: "Standard", stroke: null },
                            new go.Binding("fill", "color"))
                    );



                //1在办(#fff);2代办(#F57C00);3预警(#f00);4完成(#0f0);5待验(#FBC02D)
                // here's the family data
                let nodeDataArray = [
                    { key: -1, name: "督查督办", gender: "F", status: 1, birthYear: "1000", deathYear: "1900", reign: "1910" },
                    { key: 0, parent: -1, name: "魏平胜", gender: "M", status: 2, birthYear: "1865", deathYear: "1936", reign: "1909" },
                    { key: 1, parent: 0, name: "李文胜", gender: "M", status: 3, birthYear: "1894", deathYear: "1972" },
                    // { key: 2, parent: 0, name: "天津", gender: "M", birthYear: "1895", deathYear: "1952" },
                    // { key: 3, parent: 0, name: "上海", gender: "F", birthYear: "1897", deathYear: "1965" },
                    // { key: 4, parent: 0, name: "重庆", gender: "M", birthYear: "1900", deathYear: "1974" },
                    { key: 5, parent: 0, name: "罗定超", gender: "M", status: 4, birthYear: "1902", deathYear: "1942" },
                    { key: 6, parent: 0, name: "王相宾", gender: "M", status: 5, birthYear: "1905", deathYear: "1919" },

                    { key: 7, parent: 5, name: "袁金富", gender: "F", status: 3, birthYear: "1926", reign: "1952" },
                    { key: 8, parent: 5, name: "刘刚", gender: "M", status: 2, birthYear: "1927", reign: "1953" },

                    // { key: 9, parent: 6, name: "成都", gender: "F", birthYear: "1928", reign: "1954" },
                    // { key: 10, parent: 6, name: "广元", gender: "M", birthYear: "1929", reign: "1955" },
                ];

                // create the model for the family tree
                that.myDiagram.model = new go.TreeModel(nodeDataArray);
                that.myDiagram.zoomToFit();


                //节点点击事件
                that.myDiagram.addDiagramListener("ObjectSingleClicked", function(e) {
                    //Select_Port = e.subject.part.data.key;    e.subject.part.data即获取到的data
                    that.userDetailDialogVisible = true;
                });

                //画布空白即背景点击事件
                that.myDiagram.addDiagramListener("BackgroundSingleClicked", function(e) {

                });

                document.getElementById('zoomToFit').addEventListener('click', function() {
                    that.myDiagram.zoomToFit();
                });

                document.getElementById('centerRoot').addEventListener('click', function() {
                    that.myDiagram.scale = 1;
                    that.myDiagram.scrollToRect(that.myDiagram.findNodeForKey(0).actualBounds);
                });

            }
        },
        mounted: function () {
            let that = this;
            // that.drawCharts();
            that.createGraph();
            window.onresize = function temp() {
                //that.treeChartData.resize();
            };
        },
        updated: function () {
            let that = this;
            that.drawCharts();
        }
	}
</script>

<style lang="scss" scoped>
    .oa-office-section {
        padding: 70px 22px 26px;
        background-color: #fff;
        .box-operate {
            padding: 0 0 10px 15px;
        }
        .box-content {
            padding: 0 0 20px 15px;
        }
        .treeChartBlock {
            width: 100%;
            background: #fff;
            .treeChart {
                width: 100%;
                min-height: 500px;
                margin: 0 auto;
            }
        }
    }
</style>
