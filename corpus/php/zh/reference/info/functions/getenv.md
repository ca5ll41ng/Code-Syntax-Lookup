---
id: "zh-php-function-function-getenv"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "getenv"
title: "获取单个或者全部环境变量"
signature: "string|array|false getenv(string|null $name = null, bool $local_only = false)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.getenv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取单个或者全部环境变量

## 说明

```php
string|array|false getenv(string|null $name = null, bool $local_only = false)
```

获取单个或者全部环境变量。

使用 `phpinfo()` 你可以看到所有环境变量的列表。 这些变量很多都在 [RFC 3875](3875) 的范围之内， 尤其是章节4.1，"Request Meta-Variables"。

## 参数

- **`$name`** — `string` 形式的变量名或为 `null`。
- **`$local_only`** — 当设置为 `true` 时，仅返回由操作系统或 `putenv()` 设置的本地环境变量。这只在 `$name` 是 `string` 时才生效。

## 返回值

返回环境变量 `$name` 的值，如果环境变量 `$name` 不存在则返回 `false`。如果 `$name` 是 `null`，则所有环境变量都将作为关联 `array` 返回。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$name` 现在可为 null。 |
| 7.1.0 | 现在可以省略 `$name` 来检索所有环境变量的关联数组 `array`。 |
| 7.0.9 | 添加 `$local_only` 参数。 |

## 示例

**`getenv()` 示例**

```php


<?php
// getenv() 使用示例
$ip = getenv('REMOTE_ADDR');

// 或简单仅使用全局变量（$_SERVER 或 $_ENV）
$ip = $_SERVER['REMOTE_ADDR'];

// 安全地获取环境变量，忽略通过 SAPI 或 putenv 修改的值
$ip = getenv('REMOTE_ADDR', true) ?: getenv('REMOTE_ADDR')
?>

    
```

## 注释

> 如果 PHP 在诸如 Fast CGI 之类的 SAPI 中运行，则此函数将始终返回由 SAPI 设置的环境变量的值，即使已使用 `putenv()` 来设置同名的本地环境变量。使用 `$local_only` 参数返回本地设置的环境变量的值。

## 参见

`putenv()` `apache_getenv()` 超全局变量
