---
id: "zh-php-function-yaf-controller-abstract-initview"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::initView"
title: "初始化视图并返回"
signature: "public Yaf_View_Interface|null Yaf_Controller_Abstract::initView([array|null $options = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.initview.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化视图并返回

## 说明

```php
public Yaf_View_Interface|null Yaf_Controller_Abstract::initView([array|null $options = ...])
```

返回绑定到该控制器的视图引擎。视图引擎由 `Yaf_Dispatcher` 在分发过程中初始化， 使用为当前控制器设置的模板路径。

## 参数

- **`$options`** — 传递给视图引擎的选项，参见 `Yaf_View_Simple::__construct()`。

## 返回值

成功时返回 `Yaf_View_Interface` 实例， 失败时返回 `null`。

## 示例

**`Yaf_Controller_Abstract::initView()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function indexAction() {
        // 获取绑定到该控制器、并以其模板路径初始化的视图引擎，
        // 例如 application/views/；
        // options 会被转发给视图引擎，参见
        // Yaf_View_Simple::__construct()
        $view = $this->initView();
        $view->assign("products", array("yaf", "php"));
    }
}
?>

   
```

## 参见

`Yaf_Controller_Abstract::getView()` `Yaf_View_Interface`
