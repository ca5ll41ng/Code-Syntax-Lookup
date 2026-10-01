---
id: "zh-php-function-function-mb-encoding-aliases"
language: "php"
lang: "zh"
category: "function"
name: "mb_encoding_aliases"
title: "获取已知编码类型的别名"
signature: "array mb_encoding_aliases(string $encoding)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-encoding-aliases.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取已知编码类型的别名

## 说明

```php
array mb_encoding_aliases(string $encoding)
```

返回已知 `$encoding` 类型的别名数组。

## 参数

- **`$encoding`** — 要检查其别名的编码类型。

## 返回值

返回以数字为索引的编码别名数组。

## 错误／异常

从 PHP 8.0.0 起，如果 `$encoding` 是无效编码， 则会抛出 ValueError。 在 PHP 8.0.0 之前，会发出 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在，如果 `$encoding` 是无效编码， 会抛出 ValueError。 以前会发出 `E_WARNING` 并返回 `false`。 |

## 示例

**`mb_encoding_aliases()` 示例**

```php


<?php
$encoding        = 'ASCII';
$known_encodings = mb_list_encodings();

if (in_array($encoding, $known_encodings)) {

    $aliases = mb_encoding_aliases($encoding);
    print_r($aliases);

} else {

    echo "Unknown ($encoding) encoding.\n";

}
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [0] => ANSI_X3.4-1968
    [1] => iso-ir-6
    [2] => ANSI_X3.4-1986
    [3] => ISO_646.irv:1991
    [4] => US-ASCII
    [5] => ISO646-US
    [6] => us
    [7] => IBM367
    [8] => cp367
    [9] => csASCII
)

   
```

## 参见

`mb_list_encodings()`
