---
id: "zh-php-guide-class-yaf-controller-abstract"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-controller-abstract"
title: "Yaf_Controller_Abstract 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-controller-abstract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Controller_Abstract 类

Yaf_Controller_Abstract

   简介  `Yaf_Controller_Abstract` 是 Yaf 系统的核心部分。 MVC 是 Model-View-Controller（模型-视图-控制器）的缩写， 是一种旨在分离应用逻辑与显示逻辑的设计模式。    每个自定义控制器都应当继承 `Yaf_Controller_Abstract`。    由于 `Yaf_Controller_Abstract::__construct()` 是由 Yaf 不带参数调用的， `Yaf_Controller_Abstract` 提供了一个替代的 类构造函数钩子： `Yaf_Controller_Abstract::init()`。    如果你在自定义控制器中定义了 init() 方法， 那么当控制器被实例化时它将被调用。    动作（action）可以带参数。当请求到来时，如果经过路由之后 请求参数（参见 `Yaf_Request_Abstract::getParam()`）中 存在同名的变量，Yaf 将会把它们传递给动作方法 （参见 `Yaf_Action_Abstract::execute()`）。 
> 这些参数是直接获取的，没有经过过滤， 在使用之前应当仔细处理。

      类摘要   `Yaf_Controller_Abstract`    `abstract` `Yaf_Controller_Abstract`    属性  `protected` `actions`   `protected` `_module`   `protected` `_name`   `protected` `_request`   `protected` `_response`   `protected` `_invoke_args`   `protected` `_view`  方法        属性 
- **`actions`** — 你也可以通过使用此属性和 `Yaf_Action_Abstract` 在一个单独的 PHP 脚本中定义动作方法。 **在单独的文件中定义 action** ```php <?php class IndexController extends Yaf_Controller_Abstract { protected $actions = array( /** now dummyAction is defined in a separate file */ "dummy" => "actions/Dummy_action.php", ); /* action method may have arguments */ public function indexAction($name, $id) { /* $name and $id are unsafe raw data */ assert($name == $this->getRequest()->getParam("name")); assert($id == $this->_request->getParam("id")); } } ?> ``` **Dummy_action.php** ```php <?php class DummyAction extends Yaf_Action_Abstract { /* an action class shall define this method as the entry point */ public function execute() { } } ?> ```
- **`_module`** — 该控制器所属的模块名。
- **`_name`** — 控制器名。
- **`_request`** — 当前的 `Yaf_Request_Abstract` 对象。
- **`_response`** — 当前的 `Yaf_Response_Abstract` 对象。
- **`_invoke_args`** — 通过 `Yaf_Controller_Abstract::forward()` 传递给动作的调用参数，是一个以参数名为键的数组。
- **`_view`** — 用于渲染视图的 `Yaf_View_Interface` 对象。
