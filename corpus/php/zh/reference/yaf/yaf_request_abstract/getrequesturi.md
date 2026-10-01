---
id: "zh-php-function-yaf-request-abstract-getrequesturi"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getRequestUri"
title: "获取请求 URI"
signature: "public string|null Yaf_Request_Abstract::getRequestUri()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getrequesturi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取请求 URI

## 说明

```php
public string|null Yaf_Request_Abstract::getRequestUri()
```

获取请求 URI

## 参数

此函数没有参数。

## 返回值

请求 URI；如果未设置，则返回空字符串。

## 示例

**`Yaf_Request_Abstract::getRequestUri()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        // 假设请求是 /product/view/id/17
        var_dump($this->getRequest()->getRequestUri());
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(19) "/product/view/id/17"

   
```

## 参见

 `Yaf_Request_Abstract::setRequestUri()` `Yaf_Request_Abstract::getBaseUri()` `Yaf_Request_Abstract::setBaseUri()`
