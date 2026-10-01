---
id: "zh-php-function-yaf-response-abstract-getheader"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::getHeader"
title: "获取 HTTP 响应头"
signature: "public string|array|null Yaf_Response_Abstract::getHeader([string $name = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.getheader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 HTTP 响应头

## 说明

```php
public string|array|null Yaf_Response_Abstract::getHeader([string $name = ...])
```

获取 HTTP 响应头。

> 此方法仅在 `Yaf_Response_Http` 子类中有完整实现，在抽象类中只是一个桩方法。

## 参数

- **`$name`** — 响应头名称。若省略，则以数组形式返回所有响应头。

## 返回值

以字符串形式返回响应头的值；省略名称时返回包含所有响应头的数组。若未设置所请求的响应头，则返回 `null`。

## 示例

**`Yaf_Response_Abstract::getHeader()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $response = $this->getResponse();
        $response->setHeader("Content-Type", "application/json");

        var_dump($response->getHeader("Content-Type"));
        var_dump($response->getHeader()); // 所有响应头
        var_dump($response->getHeader("X-Missing"));
    }
}
?>

   
```

以上示例的输出类似于：

```text


string(16) "application/json"
array(1) {
  ["Content-Type"]=>
  string(16) "application/json"
}
NULL
   
```

## 参见

 `Yaf_Response_Abstract::setHeader()` `Yaf_Response_Abstract::clearHeaders()` `Yaf_Response_Abstract::setAllHeaders()`
