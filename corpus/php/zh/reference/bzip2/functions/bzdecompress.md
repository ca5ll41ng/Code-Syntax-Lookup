---
id: "zh-php-function-function-bzdecompress"
language: "php"
lang: "zh"
category: "function"
name: "bzdecompress"
title: "解压经 bzip2 编码过的数据"
signature: "string|int|false bzdecompress(string $data, bool $use_less_memory = false)"
module: "bzip2"
source_url: "https://www.php.net/manual/zh/function.bzdecompress.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解压经 bzip2 编码过的数据

## 说明

```php
string|int|false bzdecompress(string $data, bool $use_less_memory = false)
```

`bzdecompress()` 解压了包含 bzip2 压缩数据的指定字符串。

## 参数

- **`$data`** — 要解压的字符串。
- **`$use_less_memory`** — 如果为 `true`，将会使用一种内存开销更小的替代算法（最大内存需求降低至大约 2300K）但速度会降低约一半。 — 寻找该功能的更多信息可参见 [bzip2 文档]()。

## 返回值

返回解压后的字符串或者 `false`，如果发生了一个错误则返回一个错误码。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$use_less_memory` 的类型从 `int` 变为 `bool`。 之前默认值为 `0`。 |

## 示例

**解压一个字符串**

```php


<?php
$start_str = "This is not an honest face?";
$bzstr = bzcompress($start_str);

echo "Compressed String: ";
echo $bzstr;
echo "\n<br />\n";

$str = bzdecompress($bzstr);
echo "Decompressed String: ";
echo $str;
echo "\n<br />\n";
?>

   
```

## 参见

 `bzcompress()`
