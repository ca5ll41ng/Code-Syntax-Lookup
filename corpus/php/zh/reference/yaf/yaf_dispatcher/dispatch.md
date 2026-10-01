---
id: "zh-php-function-yaf-dispatcher-dispatch"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::dispatch"
title: "分发请求"
signature: "public Yaf_Response_Abstract|null|false Yaf_Dispatcher::dispatch(Yaf_Request_Abstract $request)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.dispatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 分发请求

## 说明

```php
public Yaf_Response_Abstract|null|false Yaf_Dispatcher::dispatch(Yaf_Request_Abstract $request)
```

这个方法做的是 `Yaf_Dispatcher` 的繁重工作。它需要一个 请求对象。

分发过程有三个不同的事件： 路由 分发 响应 当调用 `Yaf_Dispatcher::dispatch()` 时，路由只发生一次， 使用请求对象中的值。分发发生在循环中；一个请求可能会指明要分发多个动作，或者 控制器、插件可以重置请求对象来强制分发其它动作（参见 `Yaf_Plugin_Abstract`）。当所有动作都执行完毕， `Yaf_Dispatcher` 返回响应。

## 参数

- **`$request`** — 要分发的 `Yaf_Request_Abstract` 实例。

## 返回值

成功时返回 `Yaf_Response_Abstract` 实例，失败时返回 `false`，应用未初始化时返回 `null`。

## 示例

**`Yaf_Dispatcher::dispatch()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");
$app->bootstrap();

// 构造一个指向 ProductController::detailAction 的请求，
// 并手动分发它。
$request = new Yaf_Request_Http("/product/detail/id/42");

$response = Yaf_Dispatcher::getInstance()->dispatch($request);

if ($response instanceof Yaf_Response_Abstract) {
    $response->response();
}
?>

   
```

## 参见

`Yaf_Application::run()` `Yaf_Plugin_Abstract`
