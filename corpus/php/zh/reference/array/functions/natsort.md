---
id: "zh-php-function-function-natsort"
language: "php"
lang: "zh"
category: "function"
name: "natsort"
title: "用“自然排序”算法对数组排序"
signature: "true natsort(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.natsort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用“自然排序”算法对数组排序

## 说明

```php
true natsort(array $array)
```

本函数实现了一个和人们通常对字母数字字符串进行排序的方法一样的排序算法并保持原有键／值的关联，这被称为“自然排序”。本算法和通常的计算机字符串排序算法（用于 `sort()`）的区别见下面示例。

> 如果两个成员完全相同，那么它们将保持原来的顺序。 在 PHP 8.0.0 之前，它们在排序数组中的相对顺序是未定义的。

> 重置数组中的内部指针，指向第一个元素。

## 参数

- **`$array`** — 输入的 array。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在返回类型为 `true`；之前是 `bool`。 |

## 示例

**`natsort()` 基本用法的操作示例**

```php


<?php
$array1 = $array2 = array("img12.png", "img10.png", "img2.png", "img1.png");

asort($array1);
echo "Standard sorting\n";
print_r($array1);

natsort($array2);
echo "\nNatural order sorting\n";
print_r($array2);
?>

    
```

以上示例会输出：

```text


Standard sorting
Array
(
    [3] => img1.png
    [1] => img10.png
    [0] => img12.png
    [2] => img2.png
)

Natural order sorting
Array
(
    [3] => img1.png
    [2] => img2.png
    [1] => img10.png
    [0] => img12.png
)

    
```

更多信息见 Martin Pool 的 [Natural Order String Comparison]() 页面。

**`natsort()` 示例，解释了潜在的陷阱**

```php


<?php
echo "Negative numbers\n";
$negative = array('-5','3','-2','0','-1000','9','1');
print_r($negative);
natsort($negative);
print_r($negative);

echo "Zero padding\n";
$zeros = array('09', '8', '10', '009', '011', '0'); 
print_r($zeros);
natsort($zeros);
print_r($zeros);
?>

    
```

以上示例会输出：

```text


Negative numbers
Array
(
    [0] => -5
    [1] => 3
    [2] => -2
    [3] => 0
    [4] => -1000
    [5] => 9
    [6] => 1
)
Array
(
    [2] => -2
    [0] => -5
    [4] => -1000
    [3] => 0
    [6] => 1
    [1] => 3
    [5] => 9
)

Zero padding
Array
(
    [0] => 09
    [1] => 8
    [2] => 10
    [3] => 009
    [4] => 011
    [5] => 0
)
Array
(
    [5] => 0
    [1] => 8
    [3] => 009
    [0] => 09
    [2] => 10
    [4] => 011
)

    
```

## 参见

`natcasesort()` 数组排序函数对比 `strnatcmp()` `strnatcasecmp()`
