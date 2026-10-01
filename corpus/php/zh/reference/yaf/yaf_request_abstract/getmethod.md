---
id: "zh-php-function-yaf-request-abstract-getmethod"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getMethod"
title: "检索请求方法"
signature: "public string|null Yaf_Request_Abstract::getMethod()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索请求方法

## 说明

```php
public string|null Yaf_Request_Abstract::getMethod()
```

检索请求方法

## 参数

此函数没有参数。

## 返回值

请求方法，以字符串形式表示，例如 GET、POST、PUT、DELETE。

## 示例

**`Yaf_Request_Abstract::getMethod()` 示例**

```php


<?php
class OrderController extends Yaf_Controller_Abstract
{
    public function saveAction()
    {
        $request = $this->getRequest();

        // 假设请求是通过 POST /order/save 发送的
        var_dump($request->getMethod());
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(4) "POST"

   
```

## 参见

 `Yaf_Request_Abstract::isGet()` `Yaf_Request_Abstract::isPost()` `Yaf_Request_Abstract::isPut()` `Yaf_Request_Abstract::isHead()` `Yaf_Request_Abstract::isOptions()` `Yaf_Request_Abstract::isDelete()` `Yaf_Request_Abstract::isPatch()` `Yaf_Request_Abstract::isCli()` `Yaf_Request_Abstract::isXmlHttpRequest()`
