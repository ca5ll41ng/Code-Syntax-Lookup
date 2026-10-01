---
id: "zh-php-function-yaf-controller-abstract-getviewpath"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::getViewpath"
title: "获取视图路径"
signature: "public string|null Yaf_Controller_Abstract::getViewpath()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.getviewpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取视图路径

## 说明

```php
public string|null Yaf_Controller_Abstract::getViewpath()
```

返回绑定到该控制器的视图引擎所使用的模板目录。

## 参数

此函数没有参数。

## 返回值

视图模板目录（`string` 类型）。

## 示例

**`Yaf_Controller_Abstract::getViewpath()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function indexAction() {
        // 视图引擎使用的模板目录，
        // 例如 "/var/www/html/application/views"
        var_dump($this->getViewpath());
    }
}
?>

   
```

以上示例的输出类似于：

```text


string(31) "/var/www/html/application/views"

   
```

## 参见

`Yaf_Controller_Abstract::setViewpath()` `Yaf_Controller_Abstract::initView()`
