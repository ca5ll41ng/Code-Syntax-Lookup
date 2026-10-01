---
id: "zh-php-function-yaf-request-abstract-getmodulename"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getModuleName"
title: "获取模块名称"
signature: "public string|null Yaf_Request_Abstract::getModuleName()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getmodulename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取模块名称

## 说明

```php
public string|null Yaf_Request_Abstract::getModuleName()
```

获取模块名称

## 参数

此函数没有参数。

## 返回值

模块名称；如果未设置，则返回 `null`。

## 示例

**`Yaf_Request_Abstract::getModuleName()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function viewAction()
    {
        // 假设请求是 /admin/product/view/id/17
        var_dump($this->getRequest()->getModuleName());
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(5) "Admin"

   
```

## 参见

 `Yaf_Request_Abstract::getModuleName()` `Yaf_Request_Abstract::getControllerName()` `Yaf_Request_Abstract::getActionName()` `Yaf_Request_Abstract::setModuleName()` `Yaf_Request_Abstract::setControllerName()` `Yaf_Request_Abstract::setActionName()`
