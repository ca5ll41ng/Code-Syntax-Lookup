---
id: "zh-php-function-yaf-application-run"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::run"
title: "运行 Yaf_Application"
signature: "public Yaf_Response_Abstract|false Yaf_Application::run()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.run.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行 Yaf_Application

## 说明

```php
public Yaf_Response_Abstract|false Yaf_Application::run()
```

运行 `Yaf_Application`，让 `Yaf_Application` 接受一个请求，对该请求进行路由， 分发到相应的控制器/动作，并渲染响应。最终，将响应返回给客户端。

## 参数

此函数没有参数。

## 返回值

成功时返回 `Yaf_Response_Abstract` 对象， 失败时（例如应用已经在运行）返回 `false`。

## 错误／异常

如果应用已经启动过，则触发 `YAF_ERR_STARTUP_FAILED` 错误。

## 示例

**`Yaf_Application::run()` 示例**

```php


<?php
defined('APPLICATION_PATH')
    || define('APPLICATION_PATH', __DIR__);

$application = new Yaf_Application(APPLICATION_PATH.'/conf/application.ini');
$application->bootstrap()->run();
?>

   
```

## 参见

`Yaf_Application::bootstrap()` `Yaf_Dispatcher::dispatch()`
