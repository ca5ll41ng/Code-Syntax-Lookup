---
id: "zh-php-function-yaf-view-simple-setscriptpath"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::setScriptPath"
title: "设置模板目录"
signature: "public Yaf_View_Simple Yaf_View_Simple::setScriptPath(string $template_dir)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.setscriptpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置模板目录

## 说明

```php
public Yaf_View_Simple Yaf_View_Simple::setScriptPath(string $template_dir)
```

设置查找模板的目录。

## 参数

- **`$template_dir`** — 存放模板脚本的目录。

## 返回值

返回视图实例，如果 `$template_dir` 不是绝对路径则返回 `false`。

## 示例

**`Yaf_View_Simple::setScriptPath()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        /* 从另一个目录渲染模板 */
        $this->getView()->setScriptPath(APPLICATION_PATH . "/modules/admin/views");

        $this->getView()->display("dashboard/index.phtml");

        return false; // 已自行渲染，跳过自动渲染
    }
}
?>

   
```

## 参见

 `Yaf_View_Simple::getScriptPath()`
