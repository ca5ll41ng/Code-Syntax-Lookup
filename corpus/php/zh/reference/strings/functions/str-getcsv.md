---
id: "zh-php-function-function-str-getcsv"
language: "php"
lang: "zh"
category: "function"
name: "str_getcsv"
title: "解析 CSV 字符串为一个数组"
signature: "array str_getcsv(string $string, string $separator = \",\", string $enclosure = \"\\\"\", string $escape = \"\\\\\")"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.str-getcsv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解析 CSV 字符串为一个数组

## 说明

```php
array str_getcsv(string $string, string $separator = ",", string $enclosure = "\"", string $escape = "\\")
```

以 CSV 字段格式解析字符串输入，并返回包含读取字段的数组。



## 参数

- **`$string`** — 待解析的字符串。

> 当 `$escape` 被设置为非空字符串（`""`）时， 可能导致生成的 CSV 不符合 [RFC 4180](4180) 的要求， 或者无法通过 PHP CSV 函数的往返处理。 `$escape` 的默认值是 `"\\"`，因此建议显式地将其设置为空字符串。 默认值将在未来的 PHP 版本中更改，不早于 PHP 9.0。

## 返回值

返回一个包含读取到的字段的索引数组。



## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 如果 `$separator`、`$enclosure` 或 `$escape` 无效，现在会抛出 ValueError。这模仿了 `fgetcsv()` 和 `fputcsv()` 的行为。 |
| 7.4.0 | `$escape` 现在将空字符串视为禁用专有转义机制的信号。以前视为默认参数值。 |

## 示例

**`str_getcsv()` 示例**

```php


<?php

$string = 'PHP,Java,Python,Kotlin,Swift';
$data = str_getcsv($string, escape: '\\');

var_dump($data);
?>

    
```

以上示例会输出：

```text


array(5) {
  [0]=>
  string(3) "PHP"
  [1]=>
  string(4) "Java"
  [2]=>
  string(6) "Python"
  [3]=>
  string(6) "Kotlin"
  [4]=>
  string(5) "Swift"
}

    
```

**处理空字符串的 `str_getcsv()` 示例**

> 对于空字符串，此函数返回值 [null] 从而代替空数组。

```php


<?php

$string = '';
$data = str_getcsv($string, escape: '\\');

var_dump($data);
?>

    
```

以上示例会输出：

```text


array(1) {
  [0]=>
  NULL
}

    
```

## 参见

 `fputcsv()` `fgetcsv()` `SplFileObject::fgetcsv()` `SplFileObject::fputcsv()` `SplFileObject::setCsvControl()` `SplFileObject::getCsvControl()`
