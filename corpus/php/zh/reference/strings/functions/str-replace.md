---
id: "zh-php-function-function-str-replace"
language: "php"
lang: "zh"
category: "function"
name: "str_replace"
title: "子字符串替换"
signature: "string|array str_replace(array|string $search, array|string $replace, string|array $subject, int $count = null)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.str-replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 子字符串替换

## 说明

```php
string|array str_replace(array|string $search, array|string $replace, string|array $subject, int $count = null)
```

该函数返回字符串或者数组。该字符串或数组是将 `$subject` 中全部的 `$search` 都被 `$replace` 替换之后的结果。

要根据模式而不是固定字符串替换文本，使用 `preg_replace()`。

## 参数

如果 `$search` 和 `$replace` 为数组，那么 `str_replace()` 将对 `$subject` 做二者的映射替换。如果 `$replace` 的值的个数少于 `$search` 的个数，多余的替换将使用空字符串来进行。如果 `$search` 是一个数组而 `$replace` 是一个字符串，那么 `$search` 中每个元素的替换将始终使用这个字符串。该转换不会改变大小写。

如果 `$search` 和 `$replace` 都是数组，它们的值将会被依次处理。

- **`$search`** — 查找的目标值，也就是 *needle*。一个数组可以指定多个目标。
- **`$replace`** — `$search` 的替换值。一个数组可以被用来指定多重替换。
- **`$subject`** — 执行替换的数组或者字符串。也就是 *haystack*。 — 如果 `$subject` 是一个数组，替换操作将遍历整个 `$subject`，返回值也将是一个数组。
- **`$count`** — 如果被指定，它的值将被设置为替换发生的次数。

## 返回值

该函数返回替换后的数组或者字符串。

## 示例

**`str_replace()` 基本示例**

```php


<?php
// 赋值: <body text='black'>
$bodytag = str_replace("%body%", "black", "<body text='%body%'>");
echo $bodytag, PHP_EOL;

// 赋值: Hll Wrld f PHP
$vowels = array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
$onlyconsonants = str_replace($vowels, "", "Hello World of PHP");
echo $onlyconsonants, PHP_EOL;

// 赋值: You should eat pizza, beer, and ice cream every day
$phrase  = "You should eat fruits, vegetables, and fiber every day.";
$healthy = array("fruits", "vegetables", "fiber");
$yummy   = array("pizza", "beer", "ice cream");

$newphrase = str_replace($healthy, $yummy, $phrase);
echo $newphrase, PHP_EOL;

// 赋值: 2
$str = str_replace("ll", "", "good golly miss molly!", $count);
echo $count, PHP_EOL;
?>

    
```

**可能的 `str_replace()` 替换示例**

```php


<?php
// 替换顺序
$str     = "Line 1\nLine 2\rLine 3\r\nLine 4\n";
$order   = array("\r\n", "\n", "\r");
$replace = '<br />';

// 首先替换 \r\n 字符，因此它们不会被两次转换
$newstr = str_replace($order, $replace, $str);
echo $newstr, PHP_EOL;

// 输出 F ，因为 A 被 B 替换，B 又被 C 替换，以此类推...
// 由于从左到右依次替换，最终 E 被 F 替换
$search  = array('A', 'B', 'C', 'D', 'E');
$replace = array('B', 'C', 'D', 'E', 'F');
$subject = 'A';
echo str_replace($search, $replace, $subject), PHP_EOL;

// 输出: apearpearle pear
// 由于上面提到的原因
$letters = array('a', 'p');
$fruit   = array('apple', 'pear');
$text    = 'a p';
$output  = str_replace($letters, $fruit, $text);
echo $output, PHP_EOL;
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

> 了解替换顺序
>
> 由于 `str_replace()` 的替换时从左到右依次进行的，进行多重替换的时候可能会替换掉之前插入的值。参见该文档的示例。

> 该函数区分大小写。使用 `str_ireplace()` 可以进行不区分大小写的替换。

## 参见

`str_ireplace()` `substr_replace()` `preg_replace()` `strtr()`
