---
id: "zh-php-function-function-hash-init"
language: "php"
lang: "zh"
category: "function"
name: "hash_init"
title: "初始化增量散列运算上下文"
signature: "HashContext hash_init(string $algo, int $flags = 0, string $key = \"\", array $options = [])"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化增量散列运算上下文

## 说明

```php
HashContext hash_init(string $algo, int $flags = 0, string $key = "", array $options = [])
```

## 参数

- **`$algo`** — 要使用的散列算法的名称（例如：`“sha256”`）。 可以在 `hash_algos()` 中查看当前支持的算法。
  > 如果指定 `HASH_HMAC` 标志，则不允许使用非加密哈希函数。


- **`$flags`** — 进行散列运算的可选设置，目前仅支持一个选项：`HASH_HMAC`。当指定此选项的时候，*必须*指定 `$key` 参数。
- **`$key`** — 当 `$flags` 参数为 `HASH_HMAC` 时，使用此参数传入进行 HMAC 散列运算时的共享密钥。
- **`$options`** — 各种散列算法的一系列选项数组。 目前 MurmurHash 算法仅支持 `“seed”` 参数。

## 返回值

返回散列运算上下文对象，以供 `hash_update()`、`hash_update_stream()`、`hash_update_file()` 和 `hash_final()` 函数使用。

## 错误／异常

- 如果 `$algo` 未知或非加密散列函数，或者 `$key` 为空时，抛出 `ValueError` 异常。
- 在 `$options` 中传递错误类型的配置选项时，现在会发出 `E_DEPRECATED` 错误，因为会解读错误。在未来，这将成为 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在已弃用传递错误类型的选项。 |
| 8.1.0 | 新增 `$options` 参数。 |
| 8.0.0 | 如果 `$algo` 未知或非加密散列函数，或者 `$key` 为空时，现在抛出 `ValueError` 异常。之前返回 `false` 并发出 `E_WARNING` 消息。 |
| 7.2.0 | 当使用 `HASH_HMAC` 选项的时候，不再支持非加密的散列函数（adler32，crc32，crc32b，fnv132，fnv1a32，fnv164，fnv1a64，joaat）。 |
| 7.2.0 | 返回 `HashContext` 对象，不再返回资源类型。 |

## 示例

**增量散列运算示例**

```php


<?php
$hash = hash('sha256', 'The quick brown fox jumped over the lazy dog.');

$ctx = hash_init('sha256');
hash_update($ctx, 'The quick brown fox ');
hash_update($ctx, 'jumped over the lazy dog.');
$incremental_hash = hash_final($ctx);

echo $incremental_hash, PHP_EOL;
var_dump($hash === $incremental_hash);
?>

    
```

以上示例会输出：

```text


68b1282b91de2c054c36629cb8dd447f12f096d3e3c587978dc2248444633483
bool(true)

    
```

## 参见

`hash_algos()` `hash_update()` `hash_update_file()` `hash_update_stream()` `hash_final()`
