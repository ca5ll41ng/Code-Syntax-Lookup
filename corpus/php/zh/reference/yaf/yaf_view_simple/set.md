---
id: "zh-php-function-yaf-view-simple-set"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::__set"
title: "通过属性写入来分配变量"
signature: "public void Yaf_View_Simple::__set(string $name, mixed $value)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过属性写入来分配变量

## 说明

```php
public void Yaf_View_Simple::__set(string $name, mixed $value)
```

为视图分配一个变量。当对视图对象的属性赋值时会调用此方法，其行为与 `Yaf_View_Simple::assign()` 相同。

## 参数

- **`$name`** — 模板中可用的变量名。
- **`$value`** — 要赋的值。

## 返回值

没有返回值。

## 示例

**`Yaf_View_Simple::__set()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $this->getView()->foo = "bar"; // 与 assign("foo", "bar") 相同
    }
}
?>

   
```

## 参见

 `Yaf_View_Simple::assign()` `Yaf_View_Simple::get()`
