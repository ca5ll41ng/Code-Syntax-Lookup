---
id: "zh-php-function-function-ord"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "ord"
title: "转换字符串第一个字节为 0-255 之间的值"
signature: "int ord(string $character)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.ord.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 转换字符串第一个字节为 0-255 之间的值

## 说明

```php
int ord(string $character)
```

解析 `$character` 二进制值第一个字节为 0 到 255 范围的无符号整型类型。

如果字符串是 ASCII、 ISO-8859、Windows 1252之类单字节编码，就等于返回该字符在字符集编码表中的位置。 但请注意，本函数不会去检测字符串的编码，尤其是不会识别类似 UTF-8 或 UTF-16 这种多字节字符的 Unicode 代码点（code point）。

该函数是 `chr()` 的互补函数。

## 参数

- **`$character`** — 一个字符。

## 返回值

返回 0 - 255 的整型值。

## 示例

**`ord()` 示例**

```php


<?php
$str = "\n";
if (ord($str) == 10) {
    echo "The first character of \$str is a line feed.\n";
}
?>

    
```

**检查 UTF-8 字符串的每一个字节**

```php


<?php
$str = "🐘";
for ( $pos=0; $pos < strlen($str); $pos ++ ) {
 $byte = substr($str, $pos);
 echo 'Byte ' . $pos . ' of $str has value ' . ord($byte) . PHP_EOL;
}
?>

    
```

以上示例会输出：

```text

Byte 0 of $str has value 240
Byte 1 of $str has value 159
Byte 2 of $str has value 144
Byte 3 of $str has value 152
    
```

## 参见

`chr()` [ASCII 码表]() `mb_ord()` `IntlChar::ord()`
