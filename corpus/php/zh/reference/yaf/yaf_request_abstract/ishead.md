---
id: "zh-php-function-yaf-request-abstract-ishead"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isHead"
title: "判断请求是否是 HEAD 请求"
signature: "public bool Yaf_Request_Abstract::isHead()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.ishead.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否是 HEAD 请求

## 说明

```php
public bool Yaf_Request_Abstract::isHead()
```

检查请求是否以 HEAD 方式发送。

## 参数

此函数没有参数。

## 返回值

如果请求方式是 HEAD 则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isHead()` 示例**

```php


<?php
class FeedController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        // 假设请求是以 HEAD /feed 方式发送的
        if ($this->getRequest()->isHead()) {
            // 只需要响应头，跳过响应主体的渲染
            return false;
        }
    }
}
?>
   
```

## 参见

 `Yaf_Request_Abstract::isGet()` `Yaf_Request_Abstract::isPost()` `Yaf_Request_Abstract::isPut()` `Yaf_Request_Abstract::isOptions()` `Yaf_Request_Abstract::isDelete()` `Yaf_Request_Abstract::isPatch()` `Yaf_Request_Abstract::isCli()` `Yaf_Request_Abstract::isXmlHttpRequest()`
