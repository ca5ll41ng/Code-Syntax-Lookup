---
id: "zh-php-function-function-is-countable"
language: "php"
lang: "zh"
category: "function"
name: "is_countable"
title: "验证变量内容是否为可数值"
signature: "bool is_countable(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-countable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 验证变量内容是否为可数值

## 说明

```php
bool is_countable(mixed $value)
```

验证变量的内容是数组还是实现了 `Countable` 接口的对象

## 参数

- **`$value`** — 需要检查的值

## 返回值

如果 `$value` 是可数值，返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | `is_countable()` 被添加。 |

## 示例

**`is_countable()` 示例**

```php


<?php
var_dump(is_countable([1, 2, 3])); // bool(true)
var_dump(is_countable(new ArrayIterator(['foo', 'bar', 'baz']))); // bool(true)
var_dump(is_countable(new ArrayIterator())); // bool(true)
var_dump(is_countable(new stdClass())); // bool(false)
?>

    
```

## 参见

`is_array()` `is_object()` `is_iterable()` `is_bool()`
