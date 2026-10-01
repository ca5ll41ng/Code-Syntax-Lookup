---
id: "zh-php-function-function-mcrypt-list-algorithms"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_list_algorithms"
title: "获取支持的加密算法"
signature: "array mcrypt_list_algorithms(string $lib_dir = ini_get(\"mcrypt.algorithms_dir\"))"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-list-algorithms.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取支持的加密算法

## 说明

```php
array mcrypt_list_algorithms(string $lib_dir = ini_get("mcrypt.algorithms_dir"))
```

获取 `$lib_dir` 中 包含的受支持的算法。

## 参数

- **`$lib_dir`** — 指定算法所在的位置。 如果未指定，将使用 php.ini 中的 `mcrypt.algorithms_dir` 指示所指定的位置。

## 返回值

以数组方式返回所有受支持的算法。

## 示例

**`mcrypt_list_algorithms()` 示例**

```php


<?php
$algorithms = mcrypt_list_algorithms();
print_r($algorithms);
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [0] => cast-128
    [1] => gost
    [2] => rijndael-128
    [3] => twofish
    [4] => arcfour
    [5] => cast-256
    [6] => loki97
    [7] => rijndael-192
    [8] => saferplus
    [9] => wake
    [10] => blowfish-compat
    [11] => des
    [12] => rijndael-256
    [13] => serpent
    [14] => xtea
    [15] => blowfish
    [16] => enigma
    [17] => rc2
    [18] => tripledes
)

   
```
