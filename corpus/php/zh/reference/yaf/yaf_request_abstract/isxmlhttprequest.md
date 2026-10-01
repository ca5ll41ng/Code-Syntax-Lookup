---
id: "zh-php-function-yaf-request-abstract-isxmlhttprequest"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isXmlHttpRequest"
title: "判断请求是否是 AJAX 请求"
signature: "public bool Yaf_Request_Abstract::isXmlHttpRequest()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.isxmlhttprequest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否是 AJAX 请求

## 说明

```php
public bool Yaf_Request_Abstract::isXmlHttpRequest()
```

通过检查 HTTP_X_REQUESTED_WITH 请求头来判断请求是否是 Ajax 请求。

> `Yaf_Request_Simple` 重写了该方法并始终返回 `false`，因为命令行请求不可能是 Ajax 请求。

## 参数

此函数没有参数。

## 返回值

如果请求是 Ajax 请求（`X-Requested-With` 头等于 `XMLHttpRequest`）则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isXmlHttpRequest()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function viewAction()
    {
        // 假设请求携带了 "X-Requested-With: XMLHttpRequest"
        if ($this->getRequest()->isXmlHttpRequest()) {
            $this->getResponse()
                 ->setHeader("Content-Type", "application/json")
                 ->setBody(json_encode(["id" => 17, "name" => "Yaf in Action"]));
            return false;
        }
    }
}
?>
   
```

以上示例的输出类似于：

```text


{"id":17,"name":"Yaf in Action"}

   
```

## 参见

 `Yaf_Request_Abstract::isGet()` `Yaf_Request_Abstract::isPost()` `Yaf_Request_Abstract::isPut()` `Yaf_Request_Abstract::isHead()` `Yaf_Request_Abstract::isOptions()` `Yaf_Request_Abstract::isDelete()` `Yaf_Request_Abstract::isPatch()` `Yaf_Request_Abstract::isCli()`
