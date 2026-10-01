---
id: "zh-php-function-yaf-view-simple-render"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::render"
title: "渲染模板"
signature: "public string Yaf_View_Simple::render(string $tpl, array $vars = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.render.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 渲染模板

## 说明

```php
public string Yaf_View_Simple::render(string $tpl, array $vars = NULL)
```

渲染模板并将结果作为字符串返回。模板被当作普通的 PHP 脚本来包含，因此其中的任何 PHP 代码都会执行，已赋值的变量也可以按各自的名称使用。

> 与 `Yaf_View_Simple::display()` 不同，渲染结果会被返回，而不是追加到 `Yaf_Response_Abstract` 的响应体中。

## 参数

- **`$tpl`** — 模板的路径，相对于 `Yaf_View_Simple::setScriptPath()` 或 `application.view.directory` 所设置的模板目录。
- **`$vars`** — 本次渲染可选赋值的变量，它们会覆盖同名的已赋值变量。

## 返回值

返回渲染结果的字符串，失败时返回 `false`。

## 示例

**`Yaf_View_Simple::render()` 示例**

```php


<?php
class ProductController extends Yaf_Controller_Abstract
{
    public function detailAction()
    {
        /* 渲染模板并对结果做后处理 */
        $html = $this->getView()->render("product/detail.phtml", array(
            "name"  => "Yaf in Action",
            "price" => "29.90",
        ));

        $this->getResponse()->setBody($html);
        return false; // 跳过自动渲染
    }
}
?>

   
```

**模板示例**

```php


<h1><?php echo $name; ?></h1>
<p>Price: <?php echo $price; ?> EUR</p>

   
```

以上示例的输出类似于：

```text


<h1>Yaf in Action</h1>
<p>Price: 29.90 EUR</p>
   
```

## 参见

 `Yaf_View_Simple::display()` `Yaf_View_Simple::eval()` `Yaf_View_Simple::assign()`
