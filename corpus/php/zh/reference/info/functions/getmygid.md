---
id: "zh-php-function-function-getmygid"
language: "php"
lang: "zh"
category: "function"
name: "getmygid"
title: "获取当前 PHP 脚本拥有者的 GID"
signature: "int|false getmygid()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.getmygid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前 PHP 脚本拥有者的 GID

## 说明

```php
int|false getmygid()
```

获取当前 PHP 脚本拥有者的用户组 ID。

## 参数

此函数没有参数。

## 返回值

返回当前 PHP 脚本拥有者的用户组 ID，或在错误时返回 `false`。

## 参见

`getmyuid()` `getmypid()` `get_current_user()` `getmyinode()` `getlastmod()`
