---
id: "zh-php-function-yaf-view-simple-assignref"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_View_Simple::assignRef"
title: "Yaf_View_Simple::assign 的别名"
signature: "public bool Yaf_View_Simple::assignRef(string $name, mixed $value)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-view-simple.assignref.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_View_Simple::assign 的别名

## 说明

```php
public bool Yaf_View_Simple::assignRef(string $name, mixed $value)
```

以引用方式为视图分配变量。与 `Yaf_View_Simple::assign()` 不同，该值以引用方式传递，因此调用方之后对该变量的修改在模板中也可见。

## 参数

- **`$name`** — 变量在模板中可用的名称。
- **`$value`** — 要分配的值。

## 返回值

返回 `true`。

## 示例

**`Yaf_View_Simple::assignRef()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $value = "bar";
        $this->getView()->assignRef("foo", $value);

        /* 由于变量以引用方式分配，
         * 之后对 $value 的修改在模板中也可见 */
        $value = "changed";

        // 阻止自动渲染
        Yaf_Dispatcher::getInstance()->autoRender(false);
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
 </body>
</html>

   
```

以上示例的输出类似于：

```text


/* 访问 index 控制器将输出: */
changed

   
```

## 参见

 `Yaf_View_Simple::assign()` `Yaf_View_Simple::clear()` `Yaf_View_Simple::get()`
