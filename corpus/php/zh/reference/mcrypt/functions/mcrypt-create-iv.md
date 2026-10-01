---
id: "zh-php-function-function-mcrypt-create-iv"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_create_iv"
title: "从随机源创建初始向量"
signature: "string mcrypt_create_iv(int $size, int $source = MCRYPT_DEV_URANDOM)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-create-iv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从随机源创建初始向量

## 说明

```php
string mcrypt_create_iv(int $size, int $source = MCRYPT_DEV_URANDOM)
```

从随机源创建初始向量。

初始向量只是为了给加密算法提供一个可用的种子， 所以它不需要安全保护， 你甚至可以随同密文一起发布初始向量也不会对安全性带来影响。

## 参数

- **`$size`** — 初始向量大小。
- **`$source`** — 初始向量数据来源。可选值有： `MCRYPT_RAND` （系统随机数生成器）, `MCRYPT_DEV_RANDOM` （从 `/dev/random` 文件读取数据） 和 `MCRYPT_DEV_URANDOM` （从 `/dev/urandom` 文件读取数据）。 在 Windows 平台，PHP 5.3.0 之前的版本中，仅支持 `MCRYPT_RAND`。 — 请注意，在 PHP 5.6.0 之前的版本中， 此参数的默认值为 `MCRYPT_DEV_RANDOM`。
  > 需要注意的是，如果没有更多可用的用来产生随机数据的信息，那么 `MCRYPT_DEV_RANDOM` 可能进入阻塞状态。



## 返回值

返回初始向量。如果发生错误，则返回 `false`。

## 示例

**`mcrypt_create_iv()` 示例**

```php


<?php
    $size = mcrypt_get_iv_size(MCRYPT_CAST_256, MCRYPT_MODE_CFB);
    $iv = mcrypt_create_iv($size, MCRYPT_DEV_RANDOM);
?>

   
```

## 参见

 []() []()  9.3 节。 `random_bytes()`
