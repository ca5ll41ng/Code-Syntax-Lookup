---
id: "zh-php-function-function-getmxrr"
language: "php"
lang: "zh"
category: "function"
name: "getmxrr"
title: "获取 Internet 主机名对应的 MX 记录"
signature: "bool getmxrr(string $hostname, array $hosts, array $weights = null)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.getmxrr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 Internet 主机名对应的 MX 记录

## 说明

```php
bool getmxrr(string $hostname, array $hosts, array $weights = null)
```

在 DNS 中搜索 `$hostname` 对应的 MX 记录。

## 参数

- **`$hostname`** — Internet 主机名。
- **`$hosts`** — 找到的 MX 记录列表存放于 `$hosts` 数组。
- **`$weights`** — 提供了 `$weights` 数组后，它会用找到的权重信息填充数组。

## 返回值

找到记录返回 `true`，没找到或者出错时返回 `false`。

## 注释

> 本函数不应使用于地址验证。仅在 MX 记录在 DNS 中找到时才会返回，然而根据[RFC 2821](2821)，没有 MX 记录时，`$hostname` 本身就是 MX 主机，优先级为 `0`。

> 在兼容 Windows 实现之前的版本，可以使用 [PEAR]() class 的 [Net_DNS](Net_DNS)。

## 参见

`checkdnsrr()` `dns_get_record()` `gethostbyname()` `gethostbynamel()` `gethostbyaddr()` Linux 手册页面 `named(8)`
