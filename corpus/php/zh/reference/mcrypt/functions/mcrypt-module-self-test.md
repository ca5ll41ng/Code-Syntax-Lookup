---
id: "zh-php-function-function-mcrypt-module-self-test"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_module_self_test"
title: "在指定模块上执行自检"
signature: "bool mcrypt_module_self_test(string $algorithm, [string $lib_dir = ...])"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-module-self-test.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在指定模块上执行自检

## 说明

```php
bool mcrypt_module_self_test(string $algorithm, [string $lib_dir = ...])
```

在指定模块上执行自检。

## 参数

- **`$algorithm`** — `MCRYPT_ciphername` 常量中的一个，或者是字符串值的算法名称。
- **`$lib_dir`** — 可选参数 `$lib_dir`， 表示包含加密算法模块的路径。

## 返回值

自检成功返回 `true`， 自检失败返回 `false`。

## 示例

**`mcrypt_module_self_test()` 示例**

```php


<?php
var_dump(mcrypt_module_self_test(MCRYPT_RIJNDAEL_128)) . "\n";
var_dump(mcrypt_module_self_test(MCRYPT_BOGUS_CYPHER));
?>

   
```

以上示例会输出：

```text


bool(true)
bool(false)

   
```
