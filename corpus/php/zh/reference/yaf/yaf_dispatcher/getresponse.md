---
id: "zh-php-function-yaf-dispatcher-getresponse"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::getResponse"
title: "获取响应对象"
signature: "public Yaf_Response_Abstract|null Yaf_Dispatcher::getResponse()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.getresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取响应对象

## 说明

```php
public Yaf_Response_Abstract|null Yaf_Dispatcher::getResponse()
```

获取 dispatcher 使用的 `Yaf_Response_Abstract` 实例。

## 参数

此函数没有参数。

## 返回值

返回 `Yaf_Response_Abstract` 实例， 如果应用尚未初始化则返回 `null`。

## 示例

**`Yaf_Dispatcher::getResponse()` 示例**

```php


<?php
class CharsetPlugin extends Yaf_Plugin_Abstract
{
    public function preDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        // 与 dispatcher 持有的是同一个响应对象
        Yaf_Dispatcher::getInstance()->getResponse()->setHeader(
            "Content-Type", "text/html; charset=utf-8"
        );
    }
}
?>

   
```

## 参见

`Yaf_Dispatcher::setResponse()` `Yaf_Response_Abstract`
