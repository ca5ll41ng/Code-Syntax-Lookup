---
id: "zh-php-function-yaf-view-simple-eval"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::eval"
title: "渲染模板字符串"
signature: "public string Yaf_View_Simple::eval(string $tpl_content, array $vars = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.eval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 渲染模板字符串

## 说明

```php
public string Yaf_View_Simple::eval(string $tpl_content, array $vars = NULL)
```

渲染以字符串形式给出的模板，并返回结果。

> 由于不涉及模板文件，因此不会查找模板目录。

## 参数

- **`$tpl_content`** — 以字符串形式给出的模板内容。
- **`$vars`** — 仅供本次渲染使用的可选变量；它们会覆盖同名的已分配变量。

## 返回值

以字符串形式返回渲染结果，失败时返回 `false`。

## 示例

**`Yaf_View_Simple::eval()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $template = "<h1><?php echo htmlspecialchars($title); ?></h1>";

        /* 渲染模板字符串，不触碰文件系统 */
        $html = $this->getView()->eval($template, array("title" => "Breaking News"));

        $this->getResponse()->setBody($html);
        return false; // 跳过自动渲染
    }
}
?>

   
```

以上示例的输出类似于：

```text


<h1>Breaking News</h1>
   
```

## 参见

 `Yaf_View_Simple::render()` `Yaf_View_Simple::display()`
