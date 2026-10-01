---
id: "zh-php-function-yaf-response-abstract-setallheaders"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::setAllHeaders"
title: "批量设置 HTTP 响应头"
signature: "public bool Yaf_Response_Abstract::setAllHeaders(array $headers)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.setallheaders.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 批量设置 HTTP 响应头

## 说明

```php
public bool Yaf_Response_Abstract::setAllHeaders(array $headers)
```

一次性设置所有 HTTP 响应头。

> 此方法仅在 `Yaf_Response_Http` 子类中有完整实现，在抽象类中只是一个桩方法。

## 参数

- **`$headers`** — 响应头名称/值对的数组。已存在的同名响应头会被替换。

## 返回值

返回 `true`。

## 示例

**`Yaf_Response_Abstract::setAllHeaders()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $this->getResponse()->setAllHeaders(array(
            "Content-Type"  => "application/json; charset=utf-8",
            "Cache-Control" => "no-cache",
            "X-Request-Id"  => "7f3c2d91",
        ));
    }
}
?>

   
```

## 参见

 `Yaf_Response_Abstract::setHeader()` `Yaf_Response_Abstract::getHeader()` `Yaf_Response_Abstract::clearHeaders()`
