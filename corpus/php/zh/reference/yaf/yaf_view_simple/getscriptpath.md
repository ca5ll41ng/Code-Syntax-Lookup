---
id: "zh-php-function-yaf-view-simple-getscriptpath"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::getScriptPath"
title: "获取模板目录"
signature: "public string Yaf_View_Simple::getScriptPath()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.getscriptpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取模板目录

## 说明

```php
public string Yaf_View_Simple::getScriptPath()
```

获取查找模板时使用的目录。

## 参数

此函数没有参数。

## 返回值

以字符串形式返回模板目录；如果尚未设置，则返回 `null`。

## 示例

**`Yaf_View_Simple::getScriptPath()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        /* 查找模板时使用的目录，
         * 通常是 application.view.directory */
        echo $this->getView()->getScriptPath();
    }
}
?>

   
```

以上示例的输出类似于：

```text


/var/www/html/application/views
   
```

## 参见

 `Yaf_View_Simple::setScriptPath()`
