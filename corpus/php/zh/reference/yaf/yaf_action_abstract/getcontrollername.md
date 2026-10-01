---
id: "zh-php-function-yaf-controller-abstract-getcontrollername"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Action_Abstract::getControllerName"
title: "获取控制器名称"
signature: "public string|null Yaf_Action_Abstract::getControllerName()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.getcontrollername.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取控制器名称

## 说明

```php
public string|null Yaf_Action_Abstract::getControllerName()
```

返回拥有此 action 的控制器名称。

## 参数

此函数没有参数。

## 返回值

返回 `string` 类型的控制器名称，如果未设置则返回 `null`。

## 示例

**`Yaf_Action_Abstract::getControllerName()` 示例**

```php


<?php
class ListAction extends Yaf_Action_Abstract
{
    public function execute() {
        // 拥有此 action 的控制器名称，
        // 例如 ProductController 对应 "Product"
        var_dump($this->getControllerName());
    }
}
?>

   
```

以上示例的输出类似于：

```text


string(7) "Product"

   
```

## 参见

`Yaf_Action_Abstract::getController()` `Yaf_Controller_Abstract::getName()`
