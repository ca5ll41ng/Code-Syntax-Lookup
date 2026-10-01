---
id: "zh-php-function-yaf-controller-abstract-getview"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::getView"
title: "获取视图引擎"
signature: "public Yaf_View_Interface|null Yaf_Controller_Abstract::getView()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.getview.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取视图引擎

## 说明

```php
public Yaf_View_Interface|null Yaf_Controller_Abstract::getView()
```

返回绑定到该控制器的视图引擎。

## 参数

此函数没有参数。

## 返回值

`Yaf_View_Interface` 实例，如果没有可用的视图引擎则返回 `null`。

## 示例

**`Yaf_Controller_Abstract::getView()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function indexAction() {
        $view = $this->getView();

        // 把 $products 导出到模板 product/index.phtml
        $view->assign("products", array("yaf", "php"));
    }
}
?>

   
```

## 参见

`Yaf_Controller_Abstract::initView()` `Yaf_View_Interface`
