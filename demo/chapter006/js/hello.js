// Model 模型
let model = {
    message: "Hello, vue.js!"
}

// ViewModel 视图模型
let vue = new Vue({
    // 挂载元素/值为选择器
    el: "#app",
    // Model/数据层/Object
    data: model
});
