---
id: "zh-php-function-yaf-controller-abstract-getresponse"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::getResponse"
title: "获取当前响应对象"
signature: "public Yaf_Response_Abstract|null Yaf_Controller_Abstract::getResponse()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.getresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前响应对象

## 说明

```php
public Yaf_Response_Abstract|null Yaf_Controller_Abstract::getResponse()
```

返回与该控制器关联的 `Yaf_Response_Abstract` 实例。

## 参数

此函数没有参数。

## 返回值

`Yaf_Response_Abstract` 实例，如果没有可用的响应则返回 `null`。

## 示例

**`Yaf_Controller_Abstract::getResponse()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function apiAction() {
        // 自己构建应答内容，不需要模板
        Yaf_Dispatcher::getInstance()->disableView();

        $response = $this->getResponse();
        $response->setHeader("Content-Type", "application/json");
        $response->setBody(json_encode(array("name" => "yaf")));
        // Yaf 会在分发循环结束后发送响应体
    }
}
?>

   
```

## 参见

`Yaf_Controller_Abstract::getRequest()` `Yaf_Response_Abstract`
