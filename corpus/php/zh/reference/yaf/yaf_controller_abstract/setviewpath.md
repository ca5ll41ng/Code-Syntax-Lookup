---
id: "zh-php-function-yaf-controller-abstract-setviewpath"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::setViewpath"
title: "设置视图路径"
signature: "public bool|null Yaf_Controller_Abstract::setViewpath(string $view_directory)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.setviewpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置视图路径

## 说明

```php
public bool|null Yaf_Controller_Abstract::setViewpath(string $view_directory)
```

设置绑定到当前控制器的视图引擎的模板目录。

## 参数

- **`$view_directory`** — 存放视图模板的目录。

## 返回值

成功时返回 `true`，失败时返回 `false` / `null`。

## 示例

**`Yaf_Controller_Abstract::setViewpath()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function init() {
        // 此后该控制器的模板将在
        // application/themes/dark/views/ 下查找
        $this->setViewpath(APPLICATION_PATH . "/themes/dark/views");
    }

    public function indexAction() {
        // 渲染 application/themes/dark/views/product/index.phtml
        $this->display("product/index.phtml");
    }
}
?>

   
```

## 参见

`Yaf_Controller_Abstract::getViewpath()`
