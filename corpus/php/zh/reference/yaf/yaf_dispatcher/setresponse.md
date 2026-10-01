---
id: "zh-php-function-yaf-dispatcher-setresponse"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::setResponse"
title: "设置响应对象"
signature: "public Yaf_Dispatcher|null Yaf_Dispatcher::setResponse(Yaf_Response_Abstract $response)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.setresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置响应对象

## 说明

```php
public Yaf_Dispatcher|null Yaf_Dispatcher::setResponse(Yaf_Response_Abstract $response)
```

设置调度器使用的响应对象。这允许使用自定义的响应实现来替代内置实现。

## 参数

- **`$response`** — 一个 `Yaf_Response_Abstract` 实例。

## 返回值

成功时返回 `Yaf_Dispatcher` 对象自身，如果应用未初始化则返回 `null`。

## 示例

**`Yaf_Dispatcher::setResponse()` 示例**

```php


<?php
class ApiResponse extends Yaf_Response_Http
{
    public function response()
    {
        header("Content-Type: application/json");
        parent::response();
    }
}

$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

Yaf_Dispatcher::getInstance()->setResponse(new ApiResponse());

$app->run();
?>

   
```

## 参见

`Yaf_Dispatcher::getResponse()` `Yaf_Dispatcher::setRequest()`
