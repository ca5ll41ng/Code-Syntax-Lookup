---
id: "zh-php-function-function-getmypid"
language: "php"
lang: "zh"
category: "function"
name: "getmypid"
title: "获取 PHP 进程的 ID"
signature: "int|false getmypid()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.getmypid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 PHP 进程的 ID

## 说明

```php
int|false getmypid()
```

获取当前 PHP 进程 ID。

## 参数

此函数没有参数。

## 返回值

返回当前 PHP 进程 ID，或在错误时返回 `false`。

## 注释

> 进程 ID 并不是唯一的，所以他们是一个弱熵源。 对安全性有依赖的上下文中我们不推荐依赖于 pid。

## 参见

`getmygid()` `getmyuid()` `get_current_user()` `getmyinode()` `getlastmod()`
