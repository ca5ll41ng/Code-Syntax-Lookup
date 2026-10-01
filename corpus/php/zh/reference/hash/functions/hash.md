---
id: "zh-php-function-function-hash"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "hash"
title: "生成散列值（消息摘要）"
signature: "string hash(string $algo, string $data, bool $binary = false, array $options = [])"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成散列值（消息摘要）

## 说明

```php
string hash(string $algo, string $data, bool $binary = false, array $options = [])
```

## 参数

- **`$algo`** — 要使用的散列算法的名称（例如：`“sha256”`）。 可以在 `hash_algos()` 中查看当前支持的算法。
- **`$data`** — 要进行散列运算的消息。
- **`$binary`** — 设置为 `true` 输出原始二进制数据， 设置为 `false` 输出小写 16 进制字符串。
- **`$options`** — 各种散列算法的一系列选项数组。 目前 MurmurHash 算法仅支持 `“seed”` 参数。

## 返回值

如果 `$binary` 设置为 `true`， 则返回原始二进制数据表示的信息摘要， 否则返回 16 进制小写字符串格式表示的信息摘要。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 新增 `$options` 参数。 |
| 8.0.0 | 如果 `$algo` 未知，现在 `hash()` 将抛出 `ValueError` 异常，之前返回 `false`。 |

## 示例

**`hash()` 示例**

```php


<?php
echo hash('sha256', 'The quick brown fox jumped over the lazy dog.');
?>

    
```

以上示例会输出：

```text


68b1282b91de2c054c36629cb8dd447f12f096d3e3c587978dc2248444633483

    
```

## 参见

`hash_init()` `hash_file()` `hash_hmac()`
