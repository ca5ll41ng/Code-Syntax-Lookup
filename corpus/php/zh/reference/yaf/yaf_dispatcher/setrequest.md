---
id: "zh-php-function-yaf-dispatcher-setrequest"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::setRequest"
title: "设置请求对象"
signature: "public Yaf_Dispatcher|null Yaf_Dispatcher::setRequest(Yaf_Request_Abstract $request)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.setrequest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置请求对象

## 说明

```php
public Yaf_Dispatcher|null Yaf_Dispatcher::setRequest(Yaf_Request_Abstract $request)
```

设置调度器使用的请求对象。这样就可以使用自定义的请求实现， 而不是内置的 `Yaf_Request_Http` 或 `Yaf_Request_Simple`。

## 参数

- **`$request`** — `Yaf_Request_Abstract` 实例。

## 返回值

成功时返回 `Yaf_Dispatcher` 对象本身， 应用未初始化时返回 `null`。

## 示例

**`Yaf_Dispatcher::setRequest()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

// 从 cron 任务运行应用：
// $ php cron.php index/index/cleanup
$request = new Yaf_Request_Simple("CLI");

Yaf_Dispatcher::getInstance()->setRequest($request);

$app->run();
?>

   
```

## 参见

`Yaf_Dispatcher::getRequest()` `Yaf_Request_Abstract`
