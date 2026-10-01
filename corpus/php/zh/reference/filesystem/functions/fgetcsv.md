---
id: "zh-php-function-function-fgetcsv"
language: "php"
lang: "zh"
category: "function"
name: "fgetcsv"
title: "从文件指针中读入一行并解析 CSV 字段"
signature: "array|false fgetcsv(resource $stream, int|null $length = null, string $separator = \",\", string $enclosure = \"\\\"\", string $escape = \"\\\\\")"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fgetcsv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从文件指针中读入一行并解析 CSV 字段

## 说明

```php
array|false fgetcsv(resource $stream, int|null $length = null, string $separator = ",", string $enclosure = "\"", string $escape = "\\")
```

和 `fgets()` 类似，只除了 `fgetcsv()` 解析读入的行并找出 CSV 格式的字段然后返回一个包含这些字段的数组。

> 此函数会考虑区域设置。例如，如果 `LC_CTYPE` 为 `en_US.UTF-8`，可能会错误的解析某些单字节编码的数据。

## 参数

- **`$stream`** — 一个由 `fopen()`、`popen()` 或 `fsockopen()` 产生的有效文件指针。
- **`$length`** — 必须大于在 CVS 文件（允许尾随行尾字符）中找到的最长行（以字符为单位）。否则，该行将拆分为 `$length` 字符的块，除非拆分发生在环绕字符内。 — 忽略此参数（或者设为 0 或者在 PHP 8.0.0 及以后的版本中设为 `null`）行的最大长度将不受限制，速度稍慢。
- **`$separator`** — 可选的 `$separator` 参数，设置字段分隔符。必须是单字节字符。
- **`$enclosure`** — 可选的 `$enclosure` 参数，设置字段环绕符。必须是单字节字符。
- **`$escape`** — 可选的 `$escape` 参数，设置转义字符。必须是单字节字符或者空字符串。空字符串（`""`）禁用所有的转义机制。
  > 在输入流中，`$enclosure` 字符在引号字符串内可通过重复自身进行转义，解析后结果中将只保留一个 `$enclosure` 字符。而 `$escape` 字符的行为有所不同：若输入中出现 `$escape` 字符与 `$enclosure` 字符的组合序列，这两个字符都会保留在解析结果中。因此，在默认参数下，类似 `"a""b","c\"d"` 的 CSV 行将被解析为两个字段，分别为 `a"b` 和 `c\"d`。


  > 从 PHP 8.4.0 开始，弃用依赖 `$escape` 的默认值。需要通过位置或使用命名参数明确提供。



> 当 `$escape` 被设置为非空字符串（`""`）时， 可能导致生成的 CSV 不符合 [RFC 4180](4180) 的要求， 或者无法通过 PHP CSV 函数的往返处理。 `$escape` 的默认值是 `"\\"`，因此建议显式地将其设置为空字符串。 默认值将在未来的 PHP 版本中更改，不早于 PHP 9.0。

## 返回值

成功时返回包含读取字段的索引数组， 或者在失败时返回 `false`。

> CSV 文件中的空行将被返回为一个包含有单个 `null` 字段的数组，不会被当成错误。

> 在 PHP 8.1.0 之前， 可以启用 auto_detect_line_endings 运行时配置选项，帮助 PHP 正确识别读取 Macintosh 系统创建的文件时的行结束符。 此选项自 PHP 8.1.0 起弃用。如有必要，请改为手动处理 `"\r"` 换行符。

## 错误／异常

如果 `$separator` 或者 `$enclosure` 长度不是一个字节，则抛出 ValueError。

如果 `$escape` 的长度不是一个字节或者为空字符串，则抛出 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在已弃用依赖 escape 的默认值。 |
| 8.3.0 | 如果最后一个字段仅包含未终止的 enclosure，则返回空字符串，而不是带有单个 NULL 字节的字符串。 |
| 8.0.0 | 现在 `$length` 允许为 null. |
| 7.4.0 | `$escape` 参数也接受空字符串来禁用所有的转义机制。 |

## 示例

**读取并显示 CSV 文件的整个内容**

```php


<?php
$row = 1;
if (($handle = fopen("test.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
        echo "<p> $num fields in line $row: <br /></p>\n";
        $row++;
        for ($c=0; $c < $num; $c++) {
            echo $data[$c] . "<br />\n";
        }
    }
    fclose($handle);
}
?>

    
```

## 参见

 `fputcsv()` `str_getcsv()` `SplFileObject::fgetcsv()` `SplFileObject::fputcsv()` `SplFileObject::setCsvControl()` `SplFileObject::getCsvControl()` `explode()` `file()` `pack()`
