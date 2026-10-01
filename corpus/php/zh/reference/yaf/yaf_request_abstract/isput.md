---
id: "zh-php-function-yaf-request-abstract-isput"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isPut"
title: "判断请求是否是 PUT 请求"
signature: "public bool Yaf_Request_Abstract::isPut()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.isput.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否是 PUT 请求

## 说明

```php
public bool Yaf_Request_Abstract::isPut()
```

检查请求是否以 PUT 方式发送。

## 参数

此函数没有参数。

## 返回值

如果请求方式是 PUT 则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isPut()` 示例**

```php


<?php
class DocumentController extends Yaf_Controller_Abstract
{
    public function saveAction()
    {
        // 假设请求是以 PUT /document/save/id/17 方式发送的
        if ($this->getRequest()->isPut()) {
            $payload = $this->getRequest()->getRaw();
        }

        var_dump($this->getRequest()->isPut());
    }
}
?>
   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `Yaf_Request_Abstract::isGet()` `Yaf_Request_Abstract::isPost()` `Yaf_Request_Abstract::isHead()` `Yaf_Request_Abstract::isOptions()` `Yaf_Request_Abstract::isDelete()` `Yaf_Request_Abstract::isPatch()` `Yaf_Request_Abstract::isCli()` `Yaf_Request_Abstract::isXmlHttpRequest()`
