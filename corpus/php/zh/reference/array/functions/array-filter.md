---
id: "zh-php-function-function-array-filter"
language: "php"
lang: "zh"
category: "function"
name: "array_filter"
title: "使用回调函数过滤数组的元素"
signature: "array array_filter(array $array, callable|null $callback = null, int $mode = 0)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-filter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用回调函数过滤数组的元素

## 说明

```php
array array_filter(array $array, callable|null $callback = null, int $mode = 0)
```

遍历 `$array` 数组中的每个值，并将每个值传递给 `$callback` 回调函数。 如果 `$callback` 回调函数返回 `true`，则将 `$array` 数组中的当前值返回到结果 `array` 数组中。

返回结果 `array` 数组的键名（下标）会维持不变，如果 `$array` 参数是索引数组，返回的结果 `array` 数组键名（下标）可能会不连续。 可以使用 `array_values()` 函数对数组重新索引。

## 参数

- **`$array`** — 要遍历的数组
- **`$callback`** — 使用的回调函数 — 如果没有提供 `$callback` 回调函数，将删除数组中 `$array` 的所有“空”元素。 有关 PHP 如何判定“空”元素，请参阅 `empty()` 。
- **`$mode`** — 决定哪些参数发送到 `$callback` 回调的标志： - `ARRAY_FILTER_USE_KEY` - 将键名作为 `$callback` 回调的唯一参数，而不是值 - `ARRAY_FILTER_USE_BOTH` - 将值和键都作为参数传递给 `$callback` 回调，而不是仅传递值 默认值为 `0` ，只传递值作为 `$callback` 回调的唯一参数。

## 返回值

返回过滤后的数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$callback` 现在可为空（nullable）。 |
| 8.0.0 | 如果 `$callback` 接受引用传递参数，该方法将会抛出 `E_WARNING`。 |

 <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title>  </refsect1> 

## 示例

**`array_filter()` 示例**

```php


<?php
function odd($var)
{
    // 返回输入整数是否为奇数（单数）
    return $var & 1;
}
function even($var)
{
    // 返回输入整数是否为偶数
    return !($var & 1);
}
$array1 = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5];
$array2 = [6, 7, 8, 9, 10, 11, 12];
echo "Odd :\n";
print_r(array_filter($array1, "odd"));
echo "Even:\n";
print_r(array_filter($array2, "even"));
?>

    
```

以上示例会输出：

```php


Odd :
Array
(
    [a] => 1
    [c] => 3
    [e] => 5
)
Even:
Array
(
    [0] => 6
    [2] => 8
    [4] => 10
    [6] => 12
)

    
```

**`array_filter()` 不使用 `$callback` 时**

```php


<?php
$entry = [
    0 => 'foo',
    1 => false,
    2 => -1,
    3 => null,
    4 => '',
    5 => '0',
    6 => 0,
];
print_r(array_filter($entry));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => foo
    [2] => -1
)

    
```

**`array_filter()` 使用 `$mode` 时**

```php


<?php
$arr = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4];
var_dump(array_filter($arr, function($k) {
    return $k == 'b';
}, ARRAY_FILTER_USE_KEY));
var_dump(array_filter($arr, function($v, $k) {
    return $k == 'b' || $v == 4;
}, ARRAY_FILTER_USE_BOTH));
?>

    
```

以上示例会输出：

```text


array(1) {
  ["b"]=>
  int(2)
}
array(2) {
  ["b"]=>
  int(2)
  ["d"]=>
  int(4)
}

    
```

## 注释

> 不应该在回调函数中改变数组（如：添加或销毁“unset”当前数组和里面的元素），否则此函数的行为将不可预测。

## 参见

`array_intersect()` `array_find()` `array_any()` `array_map()` `array_reduce()`
