---
id: "zh-php-function-function-gethostbynamel"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "gethostbynamel"
title: "获取互联网主机名对应的 IPv4 地址列表"
signature: "array|false gethostbynamel(string $hostname)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.gethostbynamel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取互联网主机名对应的 IPv4 地址列表

## 说明

```php
array|false gethostbynamel(string $hostname)
```

返回互联网主机名 `$hostname` 解析出来的 IPv4 地址列表。

## 参数

- **`$hostname`** — 主机名

## 返回值

返回 IPv4 地址数组，或在 `$hostname` 无法解析时返回 `false`。

## 示例

**`gethostbynamel()` 例子**

```php


<?php
$hosts = gethostbynamel('www.example.com');
print_r($hosts);
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => 192.0.34.166
)

    
```

## 参见

`gethostbyname()` `gethostbyaddr()` `checkdnsrr()` `getmxrr()` `named(8)` 手册页
