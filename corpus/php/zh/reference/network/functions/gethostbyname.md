---
id: "zh-php-function-function-gethostbyname"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "gethostbyname"
title: "返回主机名对应的 IPv4地址。"
signature: "string gethostbyname(string $hostname)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.gethostbyname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回主机名对应的 IPv4地址。

## 说明

```php
string gethostbyname(string $hostname)
```

返回主机名 `$hostname` 对应的 IPv4 互联网地址。

## 参数

- **`$hostname`** — 主机名

## 返回值

成功时返回 IPv4 地址，失败时原封不动返回 `$hostname` 字符串。

## 示例

**简单的 `gethostbyname()` 例子**

```php


<?php
$ip = gethostbyname('www.example.com');

echo $ip;
?>

    
```

## 参见

`gethostbyaddr()` `gethostbynamel()` `inet_pton()` `inet_ntop()`
