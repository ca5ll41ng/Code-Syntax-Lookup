---
id: "zh-php-function-yaf-view-simple-assign"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::assign"
title: "为视图分配变量"
signature: "public bool Yaf_View_Simple::assign(mixed $name, mixed $value = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.assign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为视图分配变量

## 说明

```php
public bool Yaf_View_Simple::assign(mixed $name, mixed $value = NULL)
```

为视图分配变量。被分配的变量在模板中可以通过其名称访问。 当只传入一个数组参数时，数组中的每个键值对都会被分配，键名成为变量名。

## 参数

- **`$name`** — 变量在模板中可用的名称，或者是要分配的变量数组。
- **`$value`** — 要分配的值。

## 返回值

返回 `true`。

## 示例

**`Yaf_View_Simple::assign()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $this->getView()->assign("foo", "bar");
        $this->_view->assign(array("key" => "value", "name" => "value"));
    }
}
?>

   
```

**模板示例**

```php


<html>
 <head>
  <title><?php echo $foo; ?></title>
 </head>
 <body>
  <?php
    foreach ($this->_tpl_vars as $name => $value) {
        echo $$name; // or echo $this->_tpl_vars[$name];
    }
  ?>
 </body>
</html>

   
```

## 参见

 `Yaf_View_Simple::assignRef()` `Yaf_View_Simple::clear()` `Yaf_View_Simple::get()`
