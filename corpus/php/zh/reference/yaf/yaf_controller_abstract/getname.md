---
id: "zh-php-function-yaf-controller-abstract-getname"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::getName"
title: "获取控制器名称"
signature: "public string|null Yaf_Controller_Abstract::getName()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.getname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取控制器名称

## 说明

```php
public string|null Yaf_Controller_Abstract::getName()
```

返回控制器名称。

## 参数

此函数没有参数。

## 返回值

返回 `string` 类型的控制器名称，如果未设置则返回 `null`。

## 示例

**`Yaf_Controller_Abstract::getName()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function indexAction() {
        // 控制器名称，不带 "Controller" 后缀
        var_dump($this->getName());
    }
}
?>

   
```

以上示例的输出类似于：

```text


string(7) "Product"

   
```

## 参见

`Yaf_Controller_Abstract::getModuleName()` `Yaf_Request_Abstract::getControllerName()`
