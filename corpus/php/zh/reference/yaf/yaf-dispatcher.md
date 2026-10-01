---
id: "zh-php-guide-class-yaf-dispatcher"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-dispatcher"
title: "Yaf_Dispatcher 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-dispatcher.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Dispatcher 类

Yaf_Dispatcher

   简介  `Yaf_Dispatcher` 的职责是初始化请求环境， 对到来的请求进行路由，然后分发发现的任何动作； 它汇集所有的响应，并在整个过程完成后将其返回。    `Yaf_Dispatcher` 还实现了单例模式， 也就是说在任何时刻只允许存在一个实例。这使得它同时可以充当 一个注册表，供分发过程中的其他对象使用。      类摘要   `Yaf_Dispatcher`    `final` `Yaf_Dispatcher`    属性  `protected` `_router`   `protected` `_view`   `protected` `_request`   `protected` `_plugins`   `protected` `static` `_instance`   `protected` `_auto_render`   `protected` `_return_response`   `protected` `_instantly_flush`   `protected` `_default_module`   `protected` `_default_controller`   `protected` `_default_action`  方法        属性 
- **`_router`** — 分发器用于对请求进行路由的 `Yaf_Router` 实例。
- **`_view`** — 用于渲染视图的 `Yaf_View_Interface` 实现，在第一次分发时延迟初始化。
- **`_request`** — 正在被分发的请求对象。
- **`_plugins`** — 通过 `Yaf_Dispatcher::registerPlugin()` 注册的插件列表。
- **`_instance`** — 指向唯一的分发器实例的静态引用。
- **`_auto_render`** — 分发器是否在分发之后自动渲染视图。 默认为 `true`。
- **`_return_response`** — `Yaf_Application::run()` 是否返回 响应对象而不是直接发送它。默认为 `false`。
- **`_instantly_flush`** — 响应体在被设置时是否立即输出。 默认为 `true`。
- **`_default_module`** — 默认模块名，来自 application.dispatcher.defaultModule 配置项。
- **`_default_controller`** — 默认控制器名，来自 application.dispatcher.defaultController 配置项。
- **`_default_action`** — 默认动作名，来自 application.dispatcher.defaultAction 配置项。
