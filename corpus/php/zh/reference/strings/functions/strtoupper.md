---
id: "zh-php-function-function-strtoupper"
language: "php"
lang: "zh"
category: "function"
name: "strtoupper"
title: "将字符串转化为大写"
signature: "string strtoupper(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strtoupper.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串转化为大写

## 说明

```php
string strtoupper(string $string)
```

将 `$string` 中所有 ASCII 字母字符转换为大写并返回。

`"a"`（0x61）到 `"z"`（0x7a）范围内的字节会通过将每个字节值减 32 转为相应的大写字母。

这可用于转换用 UTF-8 编码的字符串中的 ASCII 字符，但会忽略多字节 UTF-8 字符。要转换多字节非 ASCII 字符，请使用 `mb_strtoupper()`。

## 参数

- **`$string`** — 输入字符串。

## 返回值

返回转换后的大写字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 大小写转换不在依赖于使用 `setlocale()` 设置的区域。只会转换 ASCII 字符。 |

## 示例

**`strtoupper()` 示例**

```php


<?php
$str = "Mary Had A Little Lamb and She LOVED It So";
$str = strtoupper($str);
echo $str; // 打印 MARY HAD A LITTLE LAMB AND SHE LOVED IT SO
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

## 参见

`strtolower()` `ucfirst()` `ucwords()` `mb_strtoupper()`
