---
id: "zh-php-function-function-is-object"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "is_object"
title: "检测变量是否是对象"
signature: "bool is_object(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-object.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测变量是否是对象

## 说明

```php
bool is_object(mixed $value)
```

检测变量是否是对象。

## 参数

- **`$value`** — 需要检测的变量。

## 返回值

如果 `$value` 是 `object`，返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 没有定义类（`__PHP_Incomplete_Class` 类）的未序列化对象，`is_object()` 现在返回 `true`，之前返回 `false`。 |

## 示例

**`is_object()` 示例**

```php


<?php
// 声明简单的函数，从对象中返回数组
function get_students($obj)
{
    if (!is_object($obj)) {
        return false;
    }

    return $obj->students;
}

// 声明新的类实例并填充值
$obj = new stdClass();
$obj->students = array('Kalle', 'Ross', 'Felipe');

var_dump(get_students(null));
var_dump(get_students($obj));
?>

    
```

## 参见

`is_bool()` `is_int()` `is_float()` `is_string()` `is_array()`
