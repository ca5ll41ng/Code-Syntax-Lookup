---
id: "zh-php-function-function-array-merge-recursive"
language: "php"
lang: "zh"
category: "function"
name: "array_merge_recursive"
title: "递归地合并一个或多个数组"
signature: "array array_merge_recursive(array $arrays)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-merge-recursive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 递归地合并一个或多个数组

## 说明

```php
array array_merge_recursive(array $arrays)
```

`array_merge_recursive()` 将一个或多个数组的单元合并起来，一个数组中的值附加在前一个数组的后面。返回作为结果的数组。

如果输入的数组中有相同的字符串键名，则这些值会被合并到一个数组中去，这将递归下去，因此如果一个值本身是一个数组，本函数将按照相应的条目把它合并为另一个数组。需要注意的是，如果数组具有相同的数值键名，后一个值将不会覆盖原来的值，而是附加到后面。

## 参数

- **`$arrays`** — 数组变量列表，进行递归合并。

## 返回值

一个结果数组，其中的值合并自附加的参数。如果未传递参数调用，则会返回一个空 `array`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 允许不传递参数调用，之前的版本中至少需要一个参数。 |

## 示例

**`array_merge_recursive()` 例子**

```php


<?php
$ar1 = array("color" => array("favorite" => "red"), 5);
$ar2 = array(10, "color" => array("favorite" => "green", "blue"));
$result = array_merge_recursive($ar1, $ar2);
print_r($result);
?>

    
```

以上示例会输出：

```php


Array
(
    [color] => Array
        (
            [favorite] => Array
                (
                    [0] => red
                    [1] => green
                )

            [0] => blue
        )

    [0] => 5
    [1] => 10
)

    
```

## 参见

`array_merge()` `array_replace_recursive()`
