---
id: "zh-php-function-yaf-dispatcher-seterrorhandler"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::setErrorHandler"
title: "设置错误处理器"
signature: "public Yaf_Dispatcher|null|false Yaf_Dispatcher::setErrorHandler(mixed $callback, int $error_types = 0)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.seterrorhandler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置错误处理器

## 说明

```php
public Yaf_Dispatcher|null|false Yaf_Dispatcher::setErrorHandler(mixed $callback, int $error_types = 0)
```

为 Yaf 设置错误处理器。当 application.dispatcher.throwException 关闭时，Yaf 将在发生意外错误时触发可捕获的错误。

此方法是 `set_error_handler()` 的包装；每当引发此类错误时， 都会调用该错误处理器。

## 参数

- **`$callback`** — 可调用的回调，语义与传给 `set_error_handler()` 的回调相同。
- **`$error_types`** — 要处理的错误类型，即 `$error_levels` 参数， 与 `set_error_handler()` 的同名参数语义相同。默认处理所有错误类型。

## 返回值

成功时返回 `Yaf_Dispatcher` 对象本身； 调用 `set_error_handler()` 失败时返回 `false`； 应用未初始化时返回 `null`。

## 示例

**`Yaf_Dispatcher::setErrorHandler()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

Yaf_Dispatcher::getInstance()->setErrorHandler(function ($errno, $errstr) {
    // 将错误路由到 ErrorController::errorAction
    $request = Yaf_Dispatcher::getInstance()->getRequest();
    $request->setControllerName("Error");
    $request->setActionName("error");
});

$app->run();
?>

   
```

## 参见

`Yaf_Dispatcher::throwException()` `Yaf_Application::getLastErrorNo()` `Yaf_Application::getLastErrorMsg()`
