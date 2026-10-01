---
id: "zh-php-function-function-convert-uuencode"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "convert_uuencode"
title: "使用 uuencode 编码一个字符串"
signature: "string convert_uuencode(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.convert-uuencode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用 uuencode 编码一个字符串

## 说明

```php
string convert_uuencode(string $string)
```

`convert_uuencode()` 使用 uuencode 算法对一个字符串进行编码。

uuencode 算法会将所有（含二进制数据）字符串转化为可输出的字符，并且可以被安全的应用于网络传输。使用 uuencode 编码后的数据将会比源数据大 35% 左右。

> `convert_uuencode()` 既不生成 `begin` 行也不产生 `end`，它们是 uuencoded *files* 的一部分。

## 参数

- **`$string`** — 需要被编码的数据。

## 返回值

返回 uuencode 编码后的数据。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 在此版本之前，尝试转换空字符串将返回 `false`，没有任何特殊原因。 |

## 示例

**`convert_uuencode()` 例子**

```php


<?php
$some_string = "test\ntext text\r\n";

echo convert_uuencode($some_string);
?>

    
```

以上示例会输出：

```text


0=&5S=`IT97AT('1E>'0-"@``
`

    
```

## 参见

`convert_uudecode()` `base64_encode()`
