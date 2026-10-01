---
id: "zh-php-function-function-hash-file"
language: "php"
lang: "zh"
category: "function"
name: "hash_file"
title: "给指定文件的内容生成散列值"
signature: "string|false hash_file(string $algo, string $filename, bool $binary = false, array $options = [])"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 给指定文件的内容生成散列值

## 说明

```php
string|false hash_file(string $algo, string $filename, bool $binary = false, array $options = [])
```

## 参数

- **`$algo`** — 要使用的散列算法的名称（例如：`“sha256”`）。 可以在 `hash_algos()` 中查看当前支持的算法。
- **`$filename`** — 要进行散列运算的文件位置的 URL；支持 `fopen()` 封装协议。
- **`$binary`** — 设置为 `true` 时，输出原始二进制数据。 设置为 `false` 时，输出小写的十六进制字符串。
- **`$options`** — 各种散列算法的一系列选项数组。 目前 MurmurHash 算法仅支持 `“seed”` 参数。

## 返回值

返回的字符串包含计算出的消息摘要，默认为小写十六进制字符串， 如果 `$binary` 设置为 true，则返回原始二进制表示， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 新增 `$options` 参数。 |

## 示例

**`hash_file()` 示例**

```php

     
<?php
/* Create a file to calculate hash of */
file_put_contents('example.txt', 'The quick brown fox jumped over the lazy dog.');

echo hash_file('sha256', 'example.txt');
?>

    
```

以上示例会输出：

```text


68b1282b91de2c054c36629cb8dd447f12f096d3e3c587978dc2248444633483

    
```

## 参见

`hash_init()` `hash_hmac_file()`
