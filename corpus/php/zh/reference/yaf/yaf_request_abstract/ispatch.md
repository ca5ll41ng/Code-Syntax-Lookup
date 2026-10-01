---
id: "zh-php-function-yaf-request-abstract-ispatch"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isPatch"
title: "判断请求是否为 PATCH 请求"
signature: "public bool Yaf_Request_Abstract::isPatch()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.ispatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否为 PATCH 请求

## 说明

```php
public bool Yaf_Request_Abstract::isPatch()
```

检查请求是否以 PATCH 方法发送。

## 参数

此函数没有参数。

## 返回值

如果请求方法是 PATCH 则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isPatch()` 示例**

```php


<?php
class ProfileController extends Yaf_Controller_Abstract
{
    public function updateAction()
    {
        // 假定请求以 PATCH /profile/update 发送
        var_dump($this->getRequest()->isPatch());
    }
}
?>
   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `Yaf_Request_Abstract::isGet()` `Yaf_Request_Abstract::isPost()` `Yaf_Request_Abstract::isPut()` `Yaf_Request_Abstract::isHead()` `Yaf_Request_Abstract::isOptions()` `Yaf_Request_Abstract::isDelete()` `Yaf_Request_Abstract::isCli()` `Yaf_Request_Abstract::isXmlHttpRequest()`
