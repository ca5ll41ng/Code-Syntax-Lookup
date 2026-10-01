---
id: "zh-php-function-yaf-view-simple-get"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::get"
title: "获取已分配的变量"
signature: "public mixed Yaf_View_Simple::get(string $name = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取已分配的变量

## 说明

```php
public mixed Yaf_View_Simple::get(string $name = NULL)
```

获取先前分配给视图的变量。 不带参数调用时，返回所有已分配的变量。

## 参数

- **`$name`** — 要获取的变量名；省略或传入 `null` 时，获取所有已分配的变量。

## 返回值

返回 `$name` 所对应的值；如果不存在该名称的变量，则返回 `null`。不带参数调用时，返回包含所有已分配变量的数组。

## 示例

**`Yaf_View_Simple::get()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $view = $this->getView();
        $view->assign("foo", "bar");

        var_dump($view->get("foo"));
        var_dump($view->get()); // 所有已分配的变量
    }
}
?>

   
```

以上示例的输出类似于：

```text


string(3) "bar"
array(1) {
  ["foo"]=>
  string(3) "bar"
}
   
```

## 参见

 `Yaf_View_Simple::assign()` `Yaf_View_Simple::clear()`
