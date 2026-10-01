---
id: "zh-php-function-yaf-request-abstract-ispost"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isPost"
title: "判断请求是否是 POST 请求"
signature: "public bool Yaf_Request_Abstract::isPost()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.ispost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否是 POST 请求

## 说明

```php
public bool Yaf_Request_Abstract::isPost()
```

检查请求是否以 POST 方式发送。

## 参数

此函数没有参数。

## 返回值

如果请求方式是 POST 则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isPost()` 示例**

```php


<?php
class LoginController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        // 假设表单是以 POST /login 方式提交的
        var_dump($this->getRequest()->isPost());
    }
}
?>
   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `Yaf_Request_Abstract::isGet()` `Yaf_Request_Abstract::isPut()` `Yaf_Request_Abstract::isHead()` `Yaf_Request_Abstract::isOptions()` `Yaf_Request_Abstract::isDelete()` `Yaf_Request_Abstract::isPatch()` `Yaf_Request_Abstract::isCli()` `Yaf_Request_Abstract::isXmlHttpRequest()`
