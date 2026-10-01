---
id: "zh-php-function-function-hash-hmac"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "hash_hmac"
title: "使用 HMAC 方法生成带有密钥的散列值"
signature: "string hash_hmac(string $algo, string $data, string $key, bool $binary = false)"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-hmac.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用 HMAC 方法生成带有密钥的散列值

## 说明

```php
string hash_hmac(string $algo, string $data, string $key, bool $binary = false)
```

## 参数

- **`$algo`** — 要使用的散列算法的名称（例如：`“sha256”`）。 可以在 `hash_hmac_algos()` 中查看当前支持的算法。
  > 不允许使用非加密哈希函数。


- **`$data`** — 要进行散列运算的消息。
- **`$key`** — 使用 HMAC 生成信息摘要时所使用的密钥。
- **`$binary`** — 设置为 `true` 输出原始二进制数据，设置为 `false` 输出小写 16 进制字符串。

## 返回值

如果 `$binary` 设置为 `true`，则返回原始二进制数据表示的信息摘要，否则返回 16 进制小写字符串格式表示的信息摘要。

## 错误／异常

如果 `$algo` 未知或非加密散列函数，则抛出 `ValueError` 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `$algo` 未知或者非加密散列函数，现在将抛出 `ValueError` 异常；以前返回 `false`。 |
| 7.2.0 | 不再支持非加密的散列函数（adler32、crc32、crc32b、fnv132、fnv1a32、fnv164、fnv1a64、joaat）。 |

## 示例

**`hash_hmac()` 示例**

```php


<?php
echo hash_hmac('sha256', 'The quick brown fox jumped over the lazy dog.', 'secret');
?>

    
```

以上示例会输出：

```text


9c5c42422b03f0ee32949920649445e417b2c634050833c5165704b825c2a53b

    
```

## 参见

`hash_hmac_algos()` `hash_hmac_file()` `hash_equals()`
