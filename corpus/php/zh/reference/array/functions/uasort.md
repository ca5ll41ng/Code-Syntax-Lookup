---
id: "zh-php-function-function-uasort"
language: "php"
lang: "zh"
category: "function"
name: "uasort"
title: "使用用户定义的比较函数对数组进行排序并保持索引关联"
signature: "true uasort(array $array, callable $callback)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.uasort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用用户定义的比较函数对数组进行排序并保持索引关联

## 说明

```php
true uasort(array $array, callable $callback)
```

本函数对 `$array` 本身排序并保持索引和单元之间的关联。

主要用于对那些单元顺序很重要的结合数组进行排序。比较函数是用户自定义的。

> 如果两个成员完全相同，那么它们将保持原来的顺序。 在 PHP 8.0.0 之前，它们在排序数组中的相对顺序是未定义的。

> 重置数组中的内部指针，指向第一个元素。

## 参数

- **`$array`** — 输入的数组。
- **`$callback`** — 在第一个参数小于，等于或大于第二个参数时，该比较函数必须相应地返回一个小于，等于或大于 0 的整数。
  > 从比较函数中返回*非整数*值，例如 `float`，将导致内部强制转换为 callback 返回值为 `int`。因此，诸如 `0.99` 和 `0.1` 之类的值都将被转换为整数值 `0`，将这些值比较的话将会是相等。



## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在返回类型为 `true`；之前是 `bool`。 |
| 8.0.0 | 如果 `$callback` 接受引用传递参数，该方法将会抛出 `E_WARNING`。 |

## 示例

**`uasort()` 的基本示例**

```php


<?php
// 比较函数
function cmp($a, $b) {
    if ($a == $b) {
        return 0;
    }
    return ($a < $b) ? -1 : 1;
}

// 要排序的数组
$array = array('a' => 4, 'b' => 8, 'c' => -1, 'd' => -9, 'e' => 2, 'f' => 5, 'g' => 3, 'h' => -4);
print_r($array);

// 排序并打印排序后的数组
uasort($array, 'cmp');
print_r($array);
?>

    
```

以上示例会输出：

```text


Array
(
    [a] => 4
    [b] => 8
    [c] => -1
    [d] => -9
    [e] => 2
    [f] => 5
    [g] => 3
    [h] => -4
)
Array
(
    [d] => -9
    [h] => -4
    [c] => -1
    [e] => 2
    [g] => 3
    [a] => 4
    [f] => 5
    [b] => 8
)

    
```

## 参见

 `usort()` `uksort()` 数组排序函数对比
