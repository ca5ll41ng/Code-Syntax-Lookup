---
id: "zh-php-function-yaf-response-abstract-clearheaders"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::clearHeaders"
title: "丢弃所有已设置的响应头"
signature: "public Yaf_Response_Abstract|false|null Yaf_Response_Abstract::clearHeaders()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.clearheaders.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 丢弃所有已设置的响应头

## 说明

```php
public Yaf_Response_Abstract|false|null Yaf_Response_Abstract::clearHeaders()
```

移除所有已设置的 HTTP 响应头。

> 此方法仅在 `Yaf_Response_Http` 子类中有完整实现，在抽象类中只是一个桩方法。

## 参数

此函数没有参数。

## 返回值

成功时返回响应对象自身，失败时返回 `false`。

## 示例

**`Yaf_Response_Abstract::clearHeaders()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $response = $this->getResponse();

        $response->setHeader("Content-Type", "application/json");
        $response->clearHeaders();

        var_dump($response->getHeader()); // array(0) { }
    }
}
?>

   
```

## 参见

 `Yaf_Response_Abstract::setHeader()` `Yaf_Response_Abstract::getHeader()` `Yaf_Response_Abstract::setAllHeaders()`
