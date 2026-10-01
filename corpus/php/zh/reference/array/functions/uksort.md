---
id: "zh-php-function-function-uksort"
language: "php"
lang: "zh"
category: "function"
name: "uksort"
title: "使用用户自定义的比较函数对数组中的键名进行排序"
signature: "true uksort(array $array, callable $callback)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.uksort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用用户自定义的比较函数对数组中的键名进行排序

## 说明

```php
true uksort(array $array, callable $callback)
```

使用用户自定义的比较函数对 `$array` 本身进行按键（key）排序以确定顺序。

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

**`uksort()` 示例**

```php


<?php
function cmp($a, $b)
{
    $a = preg_replace('@^(a|an|the) @', '', $a);
    $b = preg_replace('@^(a|an|the) @', '', $b);
    return strcasecmp($a, $b);
}

$a = array("John" => 1, "the Earth" => 2, "an apple" => 3, "a banana" => 4);

uksort($a, "cmp");

foreach ($a as $key => $value) {
    echo "$key: $value\n";
}
?>

    
```

以上示例会输出：

```text


an apple: 3
a banana: 4
the Earth: 2
John: 1

    
```

## 参见

 `usort()` `uasort()` 数组排序函数对比
