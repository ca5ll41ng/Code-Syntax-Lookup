---
id: "zh-php-function-yaf-response-abstract-setheader"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::setHeader"
title: "设置 HTTP 响应头"
signature: "public bool Yaf_Response_Abstract::setHeader(string $name, string $value, bool $replace = false, int $response_code = 0)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.setheader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 HTTP 响应头

## 说明

```php
public bool Yaf_Response_Abstract::setHeader(string $name, string $value, bool $replace = false, int $response_code = 0)
```

设置 HTTP 响应头。

> 此方法仅在 `Yaf_Response_Http` 子类中有完整实现，在抽象类中只是一个桩方法。

## 参数

- **`$name`** — 响应头名称。
- **`$value`** — 响应头的值。
- **`$replace`** — 是否替换已存在的同名响应头。若为 `false`，新值会以逗号分隔追加到已有值之后。注意：虽然声明的默认值是 `false`，但当前实现在省略该参数时会替换已有响应头。
- **`$response_code`** — 若不为零，则设置为响应的 HTTP 响应码。

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

**`Yaf_Response_Abstract::setHeader()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $response = $this->getResponse();

        $response->setHeader("Content-Type", "application/json");

        /* 发送 401 并要求提供凭据 */
        $response->setHeader("WWW-Authenticate", 'Basic realm="Member Area"', true, 401);
    }
}
?>

   
```

## 参见

 `Yaf_Response_Abstract::getHeader()` `Yaf_Response_Abstract::clearHeaders()` `Yaf_Response_Abstract::setAllHeaders()`
