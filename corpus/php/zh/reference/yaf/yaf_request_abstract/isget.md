---
id: "zh-php-function-yaf-request-abstract-isget"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isGet"
title: "判断请求是否是 GET 请求"
signature: "public bool Yaf_Request_Abstract::isGet()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.isget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否是 GET 请求

## 说明

```php
public bool Yaf_Request_Abstract::isGet()
```

检查请求是否以 GET 方式发送。

## 参数

此函数没有参数。

## 返回值

如果请求方式是 GET 则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isGet()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $request = $this->getRequest();

        // 假设请求是以 GET /index 方式发送的
        var_dump($request->isGet(), $request->isPost());
    }
}
?>
   
```

以上示例的输出类似于：

```text


bool(true)
bool(false)

   
```

## 参见

 `Yaf_Request_Abstract::isPost()` `Yaf_Request_Abstract::isPut()` `Yaf_Request_Abstract::isHead()` `Yaf_Request_Abstract::isOptions()` `Yaf_Request_Abstract::isDelete()` `Yaf_Request_Abstract::isPatch()` `Yaf_Request_Abstract::isCli()` `Yaf_Request_Abstract::isXmlHttpRequest()`
