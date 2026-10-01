---
id: "zh-php-function-function-in-array"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1,2]}
name: "in_array"
title: "检查数组中是否存在某个值"
signature: "bool in_array(mixed $needle, array $haystack, bool $strict = false)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.in-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查数组中是否存在某个值

## 说明

```php
bool in_array(mixed $needle, array $haystack, bool $strict = false)
```

大海捞针，在大海（`$haystack`）中搜索针（`$needle`），如果没有设置 `$strict` 则使用宽松的比较。

## 参数

- **`$needle`** — 待搜索的值。
  > 如果 `$needle` 是字符串，则比较是区分大小写的。


- **`$haystack`** — 待搜索的数组。
- **`$strict`** — 如果第三个参数 `$strict` 的值为 `true` 则 `in_array()` 函数还会检查 `$needle` 的类型是否和 `$haystack` 中的相同。
  > 在 PHP 8.0.0 之前，`string` `$needle` 在非严格模式下将会匹配数组中的值 `0`，反之亦然。这可能会导致不希望的结果。其它类型也存在类似的边缘情况。如果不是绝对确定有关值的类型，请始终使用 `$strict` flag 以避免意外行为。



## 返回值

如果找到 `$needle` 则返回 `true`，否则返回 `false`。

## 示例

**`in_array()` 示例**

```php


<?php
$os = array("Mac", "NT", "Irix", "Linux");
if (in_array("Irix", $os)) {
    echo "Got Irix";
}
if (in_array("mac", $os)) {
    echo "Got mac";
}
?>

    
```

第二个条件失败，因为 `in_array()` 是区分大小写的，所以以上程序显示为：

```text


Got Irix

    
```

**`in_array()` 严格类型检查示例**

```php


<?php
$a = array('1.10', 12.4, 1.13);

if (in_array('12.4', $a, true)) {
    echo "'12.4' found with strict check\n";
}

if (in_array(1.13, $a, true)) {
    echo "1.13 found with strict check\n";
}
?>

    
```

以上示例会输出：

```text


1.13 found with strict check

    
```

**`in_array()` 中用数组作为 needle**

```php


<?php
$a = array(array('p', 'h'), array('p', 'r'), 'o');

if (in_array(array('p', 'h'), $a)) {
    echo "'ph' was found\n";
}

if (in_array(array('f', 'i'), $a)) {
    echo "'fi' was found\n";
}

if (in_array('o', $a)) {
    echo "'o' was found\n";
}
?>

    
```

以上示例会输出：

```text


'ph' was found
'o' was found

    
```

## 参见

`array_search()` `isset()` `array_key_exists()`
