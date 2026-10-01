---
id: "zh-php-function-yaf-controller-abstract-render"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::render"
title: "渲染视图模板"
signature: "protected string|bool|null Yaf_Controller_Abstract::render(string $tpl, [array|null $parameters = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.render.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 渲染视图模板

## 说明

```php
protected string|bool|null Yaf_Controller_Abstract::render(string $tpl, [array|null $parameters = ...])
```

渲染视图脚本 `$tpl` 并返回其输出，这点与 `Yaf_Controller_Abstract::display()` 不同。

## 参数

- **`$tpl`** — 视图脚本名，相对于视图路径。
- **`$parameters`** — 本次渲染要导出到视图脚本的变量关联数组。

## 返回值

成功时返回渲染结果（`string`），失败时返回 `false`。

## 示例

**`Yaf_Controller_Abstract::render()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function indexAction() {
        // 不自动渲染默认模板
        Yaf_Dispatcher::getInstance()->disableView();

        // 渲染 product/index.phtml 并返回输出，
        // 而不是像 display() 那样直接发送
        $html = $this->render("product/index.phtml", array(
            "products" => array("yaf", "php"),
        ));

        // 后处理后设置为响应主体
        $this->getResponse()->setBody($html);
    }
}
?>

   
```

## 参见

`Yaf_Controller_Abstract::display()` `Yaf_Dispatcher::autoRender()`
