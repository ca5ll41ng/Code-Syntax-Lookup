---
id: "zh-php-function-function-mcrypt-generic"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "mcrypt_generic"
title: "加密数据"
signature: "string mcrypt_generic(resource $td, string $data)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-generic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 加密数据

## 说明

```php
string mcrypt_generic(resource $td, string $data)
```

本函数用来加密数据。 传入数据长度必须是 n * 分组大小，否则需要后补 "`\0`"。 本函数返回加密后的数据。 注意，根据数据补齐不同， 返回的数据可能比输入的数据长度有所增加。

如果你需要把加密后的数据保存到数据库， 请确保保存 mcrypt_generic 返回的完整的字符串， 否则将无法正确解密。 如果原始数据有 10 个字符，分组大小为 8 （使用 `mcrypt_enc_get_block_size()` 获取分组大小）， 则数据库中至少需要 16 个字符来保存数据。 请注意 `mdecrypt_generic()` 函数返回的数据也会是 16 个字符。 使用 rtrim($str, "\0") 移除字符串末尾的 0 。

如果你在例如 MySQL 这样的数据库中存储数据， 请注意 varchar 类型的字段会在插入数据时自动移除字符串末尾的“空格”。 由于加密后的数据可能是以空格（ASCII 32）结尾， 这种特性会导致数据损坏。 请使用 tinyblob/tinytext（或 larger）字段来存储加密数据。

## 参数

- **`$td`** — 加密描述符。 — 在调用本函数之前， 请使用 `mcrypt_generic_init()` 函数初始化加密句柄。 在加密完成之后， 需要调用 `mcrypt_generic_deinit()` 函数进行必要的清理工作。 请参见 `mcrypt_module_open()` 。
- **`$data`** — 要加密的数据。

## 返回值

返回加密后的数据。

## 参见

 `mdecrypt_generic()` `mcrypt_generic_init()` `mcrypt_generic_deinit()`
