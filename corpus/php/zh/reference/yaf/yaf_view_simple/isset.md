---
id: "zh-php-function-yaf-view-simple-isset"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::__isset"
title: "检查变量是否已赋值"
signature: "public bool Yaf_View_Simple::__isset(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.isset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查变量是否已赋值

## 说明

```php
public bool Yaf_View_Simple::__isset(string $name)
```

检查一个变量是否已赋值给视图。当对视图对象使用 `isset()` 时会调用此方法。

## 参数

- **`$name`** — 要检查的变量名。

## 返回值

如果在 `$name` 下赋值了变量则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_View_Simple::__isset()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $view = $this->getView();
        $view->assign("title", "Welcome");

        var_dump(isset($view->title));
        var_dump(isset($view->unknown));
    }
}
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(false)
   
```

## 参见

 `Yaf_View_Simple::assign()` `Yaf_View_Simple::get()` `Yaf_View_Simple::clear()`
