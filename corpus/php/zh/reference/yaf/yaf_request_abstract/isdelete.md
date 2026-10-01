---
id: "zh-php-function-yaf-request-abstract-isdelete"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isDelete"
title: "判断请求是否为 DELETE 请求"
signature: "public bool Yaf_Request_Abstract::isDelete()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.isdelete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否为 DELETE 请求

## 说明

```php
public bool Yaf_Request_Abstract::isDelete()
```

检查请求是否以 DELETE 方法发送。

## 参数

此函数没有参数。

## 返回值

如果请求方法是 DELETE 则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isDelete()` 示例**

```php


<?php
class CommentController extends Yaf_Controller_Abstract
{
    public function removeAction()
    {
        // 假定请求以 DELETE /comment/remove/id/12 发送
        var_dump($this->getRequest()->isDelete());
    }
}
?>
   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `Yaf_Request_Abstract::isGet()` `Yaf_Request_Abstract::isPost()` `Yaf_Request_Abstract::isPut()` `Yaf_Request_Abstract::isHead()` `Yaf_Request_Abstract::isOptions()` `Yaf_Request_Abstract::isPatch()` `Yaf_Request_Abstract::isCli()` `Yaf_Request_Abstract::isXmlHttpRequest()`
