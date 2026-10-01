---
id: "zh-php-function-yaf-view-simple-display"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::display"
title: "渲染模板并将结果存入响应"
signature: "public bool Yaf_View_Simple::display(string $tpl, array $vars = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.display.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 渲染模板并将结果存入响应

## 说明

```php
public bool Yaf_View_Simple::display(string $tpl, array $vars = NULL)
```

渲染模板，并将结果追加到 `Yaf_Response_Abstract` 的主体中。

> 与 `Yaf_View_Simple::render()` 不同，结果不会返回，而是存入响应对象，由 `Yaf_Application` 在输出响应时发送。

## 参数

- **`$tpl`** — 模板的路径，相对于 `Yaf_View_Simple::setScriptPath()` 或 `application.view.directory` 所设置的模板目录。
- **`$vars`** — 仅供该模板使用的可选变量；它们会覆盖同名的已分配变量。

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

**`Yaf_View_Simple::display()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $this->getView()->assign("title", "My Homepage");

        /* 渲染 index/index.phtml 并将结果
         * 存入响应主体 */
        $this->getView()->display("index/index.phtml");

        return false; // 已自行渲染，跳过自动渲染
    }
}
?>

   
```

**模板示例**

```php


<html>
 <head>
  <title><?php echo $title; ?></title>
 </head>
</html>

   
```

## 参见

 `Yaf_View_Simple::render()` `Yaf_View_Simple::assign()`
