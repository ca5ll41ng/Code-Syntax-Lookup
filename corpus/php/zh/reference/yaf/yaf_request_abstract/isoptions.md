---
id: "zh-php-function-yaf-request-abstract-isoptions"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isOptions"
title: "判断请求是否是 OPTIONS 请求"
signature: "public bool Yaf_Request_Abstract::isOptions()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.isoptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否是 OPTIONS 请求

## 说明

```php
public bool Yaf_Request_Abstract::isOptions()
```

检查请求是否以 OPTIONS 方式发送。

## 参数

此函数没有参数。

## 返回值

如果请求方式是 OPTIONS 则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isOptions()` 示例**

```php


<?php
class ApiController extends Yaf_Controller_Abstract
{
    public function corsAction()
    {
        // 假设浏览器发送了 CORS 预检请求
        if ($this->getRequest()->isOptions()) {
            $this->getResponse()
                 ->setHeader("Allow", "GET, POST, OPTIONS")
                 ->setBody("");
            return false;
        }
    }
}
?>
   
```

## 参见

 `Yaf_Request_Abstract::isGet()` `Yaf_Request_Abstract::isPost()` `Yaf_Request_Abstract::isPut()` `Yaf_Request_Abstract::isHead()` `Yaf_Request_Abstract::isDelete()` `Yaf_Request_Abstract::isPatch()` `Yaf_Request_Abstract::isCli()` `Yaf_Request_Abstract::isXmlHttpRequest()`
