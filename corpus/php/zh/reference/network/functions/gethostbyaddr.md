---
id: "zh-php-function-function-gethostbyaddr"
language: "php"
lang: "zh"
category: "function"
name: "gethostbyaddr"
title: "获取指定 IP 地址对应的 Internet 主机名"
signature: "string|false gethostbyaddr(string $ip)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.gethostbyaddr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取指定 IP 地址对应的 Internet 主机名

## 说明

```php
string|false gethostbyaddr(string $ip)
```

返回由 `$ip` 指定的 Internet 主机名。

## 参数

- **`$ip`** — 主机 IP 地址。

## 返回值

成功则返回主机名，失败时返回未修改的 `$ip`，输入错误时返回 `false`。

## 示例

**`gethostbyaddr()` 的简单例子**

```php


<?php
$hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);

echo $hostname;
?>

    
```

## 参见

`gethostbyname()` `gethostbynamel()`
