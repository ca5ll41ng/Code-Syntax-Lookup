---
id: "zh-php-function-function-ezmlm-hash"
language: "php"
lang: "zh"
category: "function"
name: "ezmlm_hash"
title: "计算 EZMLM 所需的散列值"
signature: "int ezmlm_hash(string $addr)"
module: "mail"
source_url: "https://www.php.net/manual/zh/function.ezmlm-hash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算 EZMLM 所需的散列值

## 说明

```php
int ezmlm_hash(string $addr)
```

`ezmlm_hash()` 计算用于在 MySQL 数据库中保存 EZMLM 邮件列表的散列值。

## 参数

- **`$addr`** — 要进行散列算法的电子邮件地址。

## 返回值

`$addr` 的散列值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数已移除。 |
| 7.2.0 | 此函数已废弃。 |

## 示例

**计算散列值并订阅一个用户**

```php


<?php

$user = "joecool@example.com";
$hash = ezmlm_hash($user);
$query = sprintf("INSERT INTO sample VALUES (%s, '%s')", $hash, $user);
$db->query($query); // using PHPLIB db interface

?>

    
```
