---
id: "zh-php-function-function-checkdnsrr"
language: "php"
lang: "zh"
category: "function"
name: "checkdnsrr"
title: "给指定的主机（域名）或者IP地址做DNS通信检查"
signature: "bool checkdnsrr(string $hostname, string $type = \"MX\")"
module: "network"
source_url: "https://www.php.net/manual/zh/function.checkdnsrr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 给指定的主机（域名）或者IP地址做DNS通信检查

## 说明

```php
bool checkdnsrr(string $hostname, string $type = "MX")
```

在 DNS 中搜索与 `$hostname` 对应的 `$type` 类型纪录。

## 参数

- **`$hostname`** — `$hostname` 可以是点分十进制的 IP 地址，也可以是主机名。
- **`$type`** — `$type` 可能是下面这些类型中的任何一个：A、MX、NS、SOA、PTR、CNAME、AAAA、A6、SRV、NAPTR、TXT 或 ANY。

## 返回值

如果记录能找到，就返回 `true`；如果查找不到该 DNS 记录或者发生了错误，就返回 `false`。

## 注释

> 出于对低版本在 Windows 平台上的兼容性，可以试试 [PEAR]() 扩展包里面提供的 [Net_DNS](Net_DNS) 类。

## 参见

`dns_get_record()` `getmxrr()` `gethostbyaddr()` `gethostbyname()` `gethostbynamel()` the named(8) manual page
