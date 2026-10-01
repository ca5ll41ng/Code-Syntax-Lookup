---
id: "zh-php-function-yaf-dispatcher-returnresponse"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::returnResponse"
title: "打开/关闭返回响应"
signature: "public Yaf_Dispatcher|bool Yaf_Dispatcher::returnResponse(bool $flag = false)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.returnresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开/关闭返回响应

## 说明

```php
public Yaf_Dispatcher|bool Yaf_Dispatcher::returnResponse(bool $flag = false)
```

切换 `Yaf_Application::run()` 是返回响应对象而不是直接 发送给客户端。开启后，`$response = $app->run()` 将给出 `Yaf_Response_Abstract` 实例，以便对其做进一步处理。 自 Yaf 3.2.2 起可用。

## 参数

- **`$flag`** — 是否返回响应而不是直接发送。
  > 如果未给出该参数，则会返回当前状态。



## 返回值

`Yaf_Dispatcher` 对象自身会在给出 `$flag` 时 返回；未给出该参数时则返回 `boolean`，指示当前状态。

## 示例

**`Yaf_Dispatcher::returnResponse()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

Yaf_Dispatcher::getInstance()->returnResponse(true);

// 现在 $app->run() 会返回响应而不是直接刷新输出
$response = $app->run();

$response->setHeader("X-Generator", "Yaf");
$response->response();
?>

   
```

## 参见

`Yaf_Application::run()` `Yaf_Response_Abstract`
