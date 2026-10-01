---
id: "zh-php-function-function-class-implements"
language: "php"
lang: "zh"
category: "function"
name: "class_implements"
title: "返回指定的类或接口实现的所有接口"
signature: "array|false class_implements(object|string $object_or_class, bool $autoload = true)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.class-implements.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定的类或接口实现的所有接口

## 说明

```php
array|false class_implements(object|string $object_or_class, bool $autoload = true)
```

本函数返回数组，包含指定 `$object_or_class` 及其父类所实现的所有接口的名称。

## 参数

- **`$object_or_class`** — 对象（类实例）或字符串（类名或接口名）。
- **`$autoload`** — 如果尚未加载，是否自动加载。

## 返回值

成功时为数组，当指定类不存在则为 `false`。

## 示例

**`class_implements()` 示例**

```php


<?php

interface foo { }
class bar implements foo {}

print_r(class_implements(new bar));

// 可以指定参数为字符串
print_r(class_implements('bar'));

spl_autoload_register();

// 使用自动加载去加载“not_loaded”类
print_r(class_implements('not_loaded', true));

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
    [interface_of_not_loaded] => interface_of_not_loaded
)

    
```

## 注释

> 检测对象是否 implements interface，应该使用  或 `is_a()` 函数。

## 参见

`class_parents()` `get_declared_interfaces()` `is_a()`
