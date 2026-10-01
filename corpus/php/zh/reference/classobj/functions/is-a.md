---
id: "zh-php-function-function-is-a"
language: "php"
lang: "zh"
category: "function"
name: "is_a"
title: "检查对象是否属于一个给定的类型或子类型。"
signature: "bool is_a(mixed $object_or_class, string $class, bool $allow_string = false)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.is-a.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查对象是否属于一个给定的类型或子类型。

## 说明

```php
bool is_a(mixed $object_or_class, string $class, bool $allow_string = false)
```

确定指定 `$object_or_class` 是否是 `$class` 对象类型，或者是否将 `$class` 作为其中一个超类（父类）。

## 参数

- **`$object_or_class`** — 类名或者实例对象。
- **`$class`** — 类名或接口名。
- **`$allow_string`** — 如果本参数设置为 `false`，`$object_or_class` 就不允许传入字符串类名。 这也会在类不存在时，阻止调用自动加载器（autoloader）。

## 返回值

如果 `$object_or_class` 是 `$class` 对象类型，或者 `$class` 是其中一个超类（父类），则返回 `true`，否则返回 `false`。

## 示例

**`is_a()` 示例**

```php


<?php
// 定义类
class WidgetFactory
{
  var $oink = 'moo';
}

// 创建新对象
$WF = new WidgetFactory();

if (is_a($WF, 'WidgetFactory')) {
  echo "yes, \$WF is still a WidgetFactory\n";
}
?>

      
```

**使用 *instanceof* 运算符**

```php


<?php
// define a class
class WidgetFactory
{
  var $oink = 'moo';
}

// create a new object
$WF = new WidgetFactory();

if ($WF instanceof WidgetFactory) {
    echo 'Yes, $WF is a WidgetFactory';
}
?>

    
```

## 参见

`get_class()` `get_parent_class()` `is_subclass_of()`
