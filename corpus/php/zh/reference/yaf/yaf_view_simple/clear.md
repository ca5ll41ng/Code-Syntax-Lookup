---
id: "zh-php-function-yaf-view-simple-clear"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::clear"
title: "移除已分配的变量"
signature: "public bool Yaf_View_Simple::clear(string $name = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 移除已分配的变量

## 说明

```php
public bool Yaf_View_Simple::clear(string $name = NULL)
```

移除视图中已分配的变量。 不带参数调用时，会移除所有已分配的变量。

## 参数

- **`$name`** — 要移除的变量名；省略或传入 `null` 时，移除所有已分配的变量。

## 返回值

返回 `true`。

## 示例

**`Yaf_View_Simple::clear()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $this->getView()->clear("foo")->clear("bar"); // 清除 "foo" 和 "bar"
        $this->_view->clear(); // 清除所有已分配的变量
    }
}
?>

   
```

## 参见

 `Yaf_View_Simple::assign()` `Yaf_View_Simple::get()`
