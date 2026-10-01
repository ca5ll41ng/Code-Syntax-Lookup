---
id: "zh-php-function-yaf-request-abstract-getcontrollername"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getControllerName"
title: "获取控制器名称"
signature: "public string|null Yaf_Request_Abstract::getControllerName()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getcontrollername.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取控制器名称

## 说明

```php
public string|null Yaf_Request_Abstract::getControllerName()
```

获取控制器名称

## 参数

此函数没有参数。

## 返回值

控制器名称；如果未设置，则返回 `null`。

## 示例

**`Yaf_Request_Abstract::getControllerName()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function viewAction()
    {
        // 假设请求是 /product/view/id/17
        var_dump($this->getRequest()->getControllerName());
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(7) "Product"

   
```

## 参见

 `Yaf_Request_Abstract::getModuleName()` `Yaf_Request_Abstract::getControllerName()` `Yaf_Request_Abstract::getActionName()` `Yaf_Request_Abstract::setModuleName()` `Yaf_Request_Abstract::setControllerName()` `Yaf_Request_Abstract::setActionName()`
