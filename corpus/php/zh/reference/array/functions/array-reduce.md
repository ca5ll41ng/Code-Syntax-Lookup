---
id: "zh-php-function-function-array-reduce"
language: "php"
lang: "zh"
category: "function"
name: "array_reduce"
title: "用回调函数迭代地将数组简化为单一的值"
signature: "mixed array_reduce(array $array, callable $callback, mixed $initial = null)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-reduce.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用回调函数迭代地将数组简化为单一的值

## 说明

```php
mixed array_reduce(array $array, callable $callback, mixed $initial = null)
```

`array_reduce()` 将回调函数 `$callback` 迭代地作用到 `$array` 数组中的每一个单元中，从而将数组简化为单一的值。

## 参数

- **`$array`** — 输入的 array。
- **`$callback`**
  ```php
  mixed {callback}(mixed $carry, mixed $item)
  ```


  - **`$carry`** — 携带上次迭代的返回值； 如果本次迭代是第一次，那么这个值是 `$initial`。
  - **`$item`** — 携带了本次迭代的值。


- **`$initial`** — 如果指定了可选参数 `$initial`，该参数将用作处理开始时的初始值，如果数组为空，则会作为最终结果返回。

## 返回值

返回结果值。

如果数组为空，并且没有指定 `$initial` 参数，`array_reduce()` 返回 `null`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `$callback` 接受引用传递参数，该方法将会抛出 `E_WARNING`。 |

## 示例

**`array_reduce()` 例子**

```php


<?php
function sum($carry, $item)
{
    $carry += $item;
    return $carry;
}

function product($carry, $item)
{
    $carry *= $item;
    return $carry;
}

$a = array(1, 2, 3, 4, 5);
$x = array();

var_dump(array_reduce($a, "sum")); // int(15)
var_dump(array_reduce($a, "product", 10)); // int(1200), 因为：10*1*2*3*4*5
var_dump(array_reduce($x, "sum", "No data to reduce")); // string(17) "No data to reduce"
?>

    
```

## 参见

`array_filter()` `array_map()` `array_unique()` `array_count_values()`
