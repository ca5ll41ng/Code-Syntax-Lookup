---
id: "zh-php-function-function-array-fill-keys"
language: "php"
lang: "zh"
category: "function"
name: "array_fill_keys"
title: "使用指定的键和值填充数组"
signature: "array array_fill_keys(array $keys, mixed $value)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-fill-keys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用指定的键和值填充数组

## 说明

```php
array array_fill_keys(array $keys, mixed $value)
```

使用 `$value` 参数的值作为值，使用 `$keys` 数组的值作为键来填充一个数组。

## 参数

- **`$keys`** — 使用该数组的值作为键。非法值将被转换为`字符串`。
- **`$value`** — 填充使用的值。

## 返回值

返回填充后的数组。

 <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title>  </refsect1> 

## 示例

**`array_fill_keys()` 示例**

```php


<?php
$keys = array('foo', 5, 10, 'bar');
$a = array_fill_keys($keys, 'banana');
print_r($a);
?>

    
```

以上示例会输出：

```text


Array
(
    [foo] => banana
    [5] => banana
    [10] => banana
    [bar] => banana
)

    
```

## 参见

`array_fill()` `array_combine()`
