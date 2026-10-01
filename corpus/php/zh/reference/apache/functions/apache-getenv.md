---
id: "zh-php-function-function-apache-getenv"
language: "php"
lang: "zh"
category: "function"
name: "apache_getenv"
title: "获取 Apache subprocess_env 变量"
signature: "string|false apache_getenv(string $variable, bool $walk_to_top = false)"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.apache-getenv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 Apache subprocess_env 变量

## 说明

```php
string|false apache_getenv(string $variable, bool $walk_to_top = false)
```

获取 `$variable` 指定的环境变量。

## 参数

- **`$variable`** — Apache 环境变量
- **`$walk_to_top`** — 是否获取对Apache各层可用的顶层变量

## 返回值

成功时返回 Apache 环境变量值，失败时返回 `false`

## 示例

**`apache_getenv()` 示例**

该示例显示如何取得 Apache 环境变量 `SERVER_ADDR`的值。

```php


<?php
$ret = apache_getenv("SERVER_ADDR");
echo $ret;
?>

    
```

以上示例的输出类似于：

```text


42.24.42.240

    
```

## 参见

`apache_setenv()` `getenv()` 超全局变量
