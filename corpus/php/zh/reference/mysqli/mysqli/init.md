---
id: "zh-php-function-mysqli-init"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::init"
aliases: ["mysqli_init"]
title: "初始化 MySQLi 并返回用于 mysqli_real_connect() 的对象"
signature: "#[\\Deprecated] public bool|null mysqli::init()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化 MySQLi 并返回用于 mysqli_real_connect() 的对象

## 说明

面向对象风格

```php
#[\Deprecated] public bool|null mysqli::init()
```

过程化风格

```php
mysqli|false mysqli_init()
```

分配或者初始化适合 `mysqli_options()` 和 `mysqli_real_connect()` 的 MYSQL 对象。

> 在调用 `mysqli_real_connect()` 之前，对其它 mysqli 函数（`mysqli_options()` 和 `mysqli_ssl_set()` 除外）的后续调用都会失败。

## 参数

此函数没有参数。

## 返回值

`mysqli::init()` 成功时返回 `null`， 或者在失败时返回 `false`。`mysqli_init()` 成功时返回对象， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 弃用面向对象风格的 `mysqli::init()` 方法。用 `parent::__construct()` 替换对 `parent::init()` 的调用。 |

## 示例

参阅 `mysqli_real_connect()`。

## 参见

`mysqli_options()` `mysqli_close()` `mysqli_real_connect()` `mysqli_connect()`
