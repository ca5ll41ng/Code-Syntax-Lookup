---
id: "zh-php-function-function-getmyuid"
language: "php"
lang: "zh"
category: "function"
name: "getmyuid"
title: "获取 PHP 脚本所有者的 UID"
signature: "int|false getmyuid()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.getmyuid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 PHP 脚本所有者的 UID

## 说明

```php
int|false getmyuid()
```

获取当前脚本的用户 ID。

## 参数

此函数没有参数。

## 返回值

返回当前脚本的用户 ID，或在错误时返回 `false`。

## 参见

`getmygid()` `getmypid()` `get_current_user()` `getmyinode()` `getlastmod()`
