---
id: "zh-php-function-function-number-format"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "number_format"
title: "以千位分隔符方式格式化一个数字"
signature: "string number_format(float $num, int $decimals = 0, string|null $decimal_separator = \".\", string|null $thousands_separator = \",\")"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.number-format.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以千位分隔符方式格式化一个数字

## 说明

```php
string number_format(float $num, int $decimals = 0, string|null $decimal_separator = ".", string|null $thousands_separator = ",")
```

使用四舍五入的规则，将数字格式化为千位分组和小数位（可选）。

## 参数

- **`$num`** — 要格式化的数字。
- **`$decimals`** — 设置小数位数。如果为 `0`，则从返回值中忽略 `$decimal_separator`。自 PHP 8.3.0 起，当值为负数时，`$num` 将四舍五入为小数点前的有效数字 `$decimals`。在 PHP 8.3.0 之前，负值将被忽略并与 `0` 一样处理。
- **`$decimal_separator`** — 指定小数点的分隔符。
- **`$thousands_separator`** — 设置千位分隔符。

## 返回值

`$num` 的格式化版本。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 新增对 `$decimals` 负值的处理。 |
| 8.0.0 | 在此版本之前，`number_format()` 接受一个、两个或四个参数（不会是三个）。 |
| 7.2.0 | `number_format()` 现在再也不会返回 `-0`，之前 `$num` 为 `-0.01` 的情况下可以返回 `-0`。 |

## 示例

**`number_format()` 示例**

例如，法语计数通常使用两位小数，逗号（“,”）作为小数分隔符，空格（“ ”）作为千位分隔符。以下示例展示了格式化数字的各种方法：

```php


<?php

$number = 1234.56;

// 英文计数（默认）
echo number_format($number), PHP_EOL;
// 1,235

// 法语计数
echo number_format($number, 2, ',', ' '), PHP_EOL;
// 1 234,56

$number = 1234.5678;

// 没有千位分隔符的英文计数
echo number_format($number, 2, '.', ''), PHP_EOL;
// 1234.57

?>

    
```

**`$decimals` 为负值**

自 PHP 8.3.0 起，使用 `$decimals` 的负值来对小数点前的有效数字的位数进行四舍五入。

```php


<?php
$number = "1234.5678";
var_dump(number_format($number, -1));
var_dump(number_format($number, -2));
var_dump(number_format($number, -3));
?>

   
```

以上示例会输出：

```text


string(5) "1,230"
string(5) "1,200"
string(5) "1,000"

   
```

## 参见

`money_format()` `sprintf()` `printf()` `sscanf()`
