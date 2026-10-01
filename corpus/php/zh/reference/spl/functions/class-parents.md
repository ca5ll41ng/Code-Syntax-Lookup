---
id: "zh-php-function-function-class-parents"
language: "php"
lang: "zh"
category: "function"
name: "class_parents"
title: "返回指定类的父类"
signature: "array|false class_parents(object|string $object_or_class, bool $autoload = true)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.class-parents.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定类的父类

## 说明

```php
array|false class_parents(object|string $object_or_class, bool $autoload = true)
```

本函数返回包含了指定 `$object_or_class` 父类名的数组。

## 参数

- **`$object_or_class`** — 对象（类实例）或字符串（类名称）。
- **`$autoload`** — 如果尚未加载，是否自动加载。

## 返回值

成功时为数组，当指定类不存在则为 `false`。

## 示例

**`class_parents()` 示例**

```php


<?php

class foo { }
class bar extends foo {}

print_r(class_parents(new bar));

// 可以指定参数为字符串
print_r(class_parents('bar'));

spl_autoload_register();

// 使用自动加载去加载“not_loaded”类
print_r(class_parents('not_loaded', true));

?>

    
```

以上示例的输出类似于：

```text


Array
(
    [foo] => foo
)
Array
(
    [foo] => foo
)
Array
(
    [parent_of_not_loaded] => parent_of_not_loaded
)

    
```

## 注释

> 检测对象是否 implements interface，应该使用  或 `is_a()` 函数。

## 参见

`class_implements()` `is_a()`
