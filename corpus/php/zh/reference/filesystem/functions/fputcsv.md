---
id: "zh-php-function-function-fputcsv"
language: "php"
lang: "zh"
category: "function"
name: "fputcsv"
title: "将行格式化为 CSV 并写入文件指针"
signature: "int|false fputcsv(resource $stream, array $fields, string $separator = \",\", string $enclosure = \"\\\"\", string $escape = \"\\\\\", string $eol = \"\\n\")"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fputcsv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将行格式化为 CSV 并写入文件指针

## 说明

```php
int|false fputcsv(resource $stream, array $fields, string $separator = ",", string $enclosure = "\"", string $escape = "\\", string $eol = "\n")
```

`fputcsv()` 将一行（传递 `$fields` 数组）格式化为 CSV，并将其写入（以 `$eol` 终止）到指定的 `$stream`。

## 参数

- **`$stream`** — 文件指针必须是有效的，必须指向由 `fopen()` 或 `fsockopen()` 成功打开的文件(并还未由 `fclose()` 关闭)。
- **`$fields`** — `string` 数组。
- **`$eol`** — 可选的 `$eol` 参数设置自定义行尾序列。

> 当 `$escape` 被设置为非空字符串（`""`）时， 可能导致生成的 CSV 不符合 [RFC 4180](4180) 的要求， 或者无法通过 PHP CSV 函数的往返处理。 `$escape` 的默认值是 `"\\"`，因此建议显式地将其设置为空字符串。 默认值将在未来的 PHP 版本中更改，不早于 PHP 9.0。

> 如果字段中包含 `$enclosure` 字符，则会通过将其双倍 `$enclosure` 来进行转义，除非该字符前面紧接着一个 `$escape`。

## 返回值

返回写入字符串的长度， 或者在失败时返回 `false`。



## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 新增可选的 `$eol` 参数。 |
| 7.4.0 | `$escape` 参数现在接受空字符串来禁用专有转义机制。 |

## 示例

**`fputcsv()` 示例**

```php


<?php

$list = [
    ['aaa', 'bbb', 'ccc', 'dddd'],
    ['123', '456', '789'],
    ['"aaa"', '"bbb"']
];

$fp = fopen('file.csv', 'w');

foreach ($list as $fields) {
    fputcsv($fp, $fields, ',', '"', '');
}

fclose($fp);
?>

    
```

以上示例会写入以下的 `file.csv`：

```text


aaa,bbb,ccc,dddd
123,456,789
"""aaa""","""bbb"""


    
```

## 参见

 `fgetcsv()` `str_getcsv()` `SplFileObject::fgetcsv()` `SplFileObject::fputcsv()` `SplFileObject::setCsvControl()` `SplFileObject::getCsvControl()`
