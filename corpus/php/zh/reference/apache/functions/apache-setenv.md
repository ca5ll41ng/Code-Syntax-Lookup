---
id: "zh-php-function-function-apache-setenv"
language: "php"
lang: "zh"
category: "function"
name: "apache_setenv"
title: "设置 Apache 子进程环境变量"
signature: "bool apache_setenv(string $variable, string $value, bool $walk_to_top = false)"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.apache-setenv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 Apache 子进程环境变量

## 说明

```php
bool apache_setenv(string $variable, string $value, bool $walk_to_top = false)
```

`apache_setenv()` 设置由`$variable`指定的 Apache 环境变量值。

> 当设置了某 Apache 环境变量, 相应的 `$_SERVER` 变量不会改变。

## 参数

- **`$variable`** — 将被设置的环境变量。
- **`$value`** — 新 `$variable` 值。
- **`$walk_to_top`** — 是否将所设置的顶层变量应用到所有 Apache 层。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**使用 `apache_setenv()` 设置一个 Apache 环境变量**

```php


<?php
apache_setenv("EXAMPLE_VAR", "Example Value");
?>

    
```

## 注释

> `apache_setenv()` 可与 `apache_getenv()` 配合使用，以在不同页面间传递变量，或将 PHP 脚本中已设置变量传入 Server Side Includes (.shtml)页面。

## 参见

`apache_getenv()`
