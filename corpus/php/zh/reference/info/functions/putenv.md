---
id: "zh-php-function-function-putenv"
language: "php"
lang: "zh"
category: "function"
name: "putenv"
title: "设置环境变量的值"
signature: "bool putenv(string $assignment)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.putenv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置环境变量的值

## 说明

```php
bool putenv(string $assignment)
```

添加 `$assignment` 到服务器环境变量。 环境变量仅存活于当前请求期间。 在请求结束时环境会恢复到初始状态。

## 参数

- **`$assignment`** — 设置，例如 `"FOO=BAR"`

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**设置一个环境变量**

```php


<?php
putenv("UNIQID=$uniqid");
?>

    
```

## 参见

`getenv()` `apache_setenv()`
