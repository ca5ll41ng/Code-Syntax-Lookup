---
id: "zh-php-function-function-natcasesort"
language: "php"
lang: "zh"
category: "function"
name: "natcasesort"
title: "用“自然排序”算法对数组进行不区分大小写字母的排序"
signature: "true natcasesort(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.natcasesort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用“自然排序”算法对数组进行不区分大小写字母的排序

## 说明

```php
true natcasesort(array $array)
```

`natcasesort()` 是 `natsort()` 函数的不区分大小写字母的版本。

本函数实现了一个和人们通常对字母数字字符串进行排序的方法一样的排序算法并保持原有键／值的关联，这被称为“自然排序”。

> 如果两个成员完全相同，那么它们将保持原来的顺序。 在 PHP 8.0.0 之前，它们在排序数组中的相对顺序是未定义的。

> 重置数组中的内部指针，指向第一个元素。

## 参数

- **`$array`** — 输入的数组。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在返回类型为 `true`；之前是 `bool`。 |

## 示例

**`natcasesort()` 示例**

```php


<?php
$array1 = $array2 = array('IMG0.png', 'img12.png', 'img10.png', 'img2.png', 'img1.png', 'IMG3.png');

sort($array1);
echo "Standard sorting\n";
print_r($array1);

natcasesort($array2);
echo "\nNatural order sorting (case-insensitive)\n";
print_r($array2);
?>

    
```

以上示例会输出：

```text


Standard sorting
Array
(
    [0] => IMG0.png
    [1] => IMG3.png
    [2] => img1.png
    [3] => img10.png
    [4] => img12.png
    [5] => img2.png
)

Natural order sorting (case-insensitive)
Array
(
    [0] => IMG0.png
    [4] => img1.png
    [3] => img2.png
    [5] => IMG3.png
    [2] => img10.png
    [1] => img12.png
)

    
```

更多信息见 Martin Pool 的 [Natural Order String Comparison]() 页面。

## 参见

`natsort()` 数组排序函数对比 `strnatcmp()` `strnatcasecmp()`
