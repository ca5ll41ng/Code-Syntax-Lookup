---
id: "zh-php-function-function-get-current-user"
language: "php"
lang: "zh"
category: "function"
name: "get_current_user"
title: "获取当前 PHP 脚本所有者名称"
signature: "string get_current_user()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.get-current-user.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前 PHP 脚本所有者名称

## 说明

```php
string get_current_user()
```

返回当前 PHP 脚本所有者名称。

## 参数

此函数没有参数。

## 返回值

以字符串返回用户名。

## 示例

**`get_current_user()` 示例**

```php


<?php
echo 'Current script owner: ' . get_current_user();
?>

    
```

以上示例的输出类似于：

```text


Current script owner: SYSTEM

    
```

## 参见

`getmyuid()` `getmygid()` `getmypid()` `getmyinode()` `getlastmod()`
