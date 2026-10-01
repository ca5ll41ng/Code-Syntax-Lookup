---
id: "zh-php-function-yaf-controller-abstract-init"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::init"
title: "控制器初始化钩子"
signature: "public void Yaf_Controller_Abstract::init()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 控制器初始化钩子

## 说明

```php
public void Yaf_Controller_Abstract::init()
```

`Yaf_Controller_Abstract::__construct()` 不适合 用自定义逻辑覆盖，因此提供了 `Yaf_Controller_Abstract::init()` 作为用户层的初始化钩子。如果在控制器中定义了它， 它会在控制器对象实例化之后立即被调用。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**`Yaf_Controller_Abstract::init()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    // init() 在控制器实例化之后、任何动作被分发之前调用
    public function init() {
        $this->getView()->assign("sitename", "Yaf Tutorial");
    }

    public function indexAction() {
        // ...
    }
}
?>

   
```

## 参见

 `Yaf_Controller_Abstract::__construct()`
