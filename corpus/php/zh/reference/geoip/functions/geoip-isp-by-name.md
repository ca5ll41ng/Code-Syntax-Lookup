---
id: "zh-php-function-function-geoip-isp-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_isp_by_name"
title: "获取 ISP (网络服务提供商)的名称"
signature: "string geoip_isp_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-isp-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 ISP (网络服务提供商)的名称

## 说明

```php
string geoip_isp_by_name(string $hostname)
```

`geoip_isp_by_name()` 函数将会返回 IP 地址所归属的网络服务提供商(ISP)的名称。

目前，该函数只对购买了商业 GeoIP ISP 版本的用户可用，否则将会抛出一个警告！

## 参数

- **`$hostname`** — 主机或者 IP 地址。

## 返回值

成功，则返回 ISP 名称，未找到相关信息则返回 `false` 。

## 示例

**一个 `geoip_isp_by_name()` 使用范例：**

以下代码将会输出 example.com 主机的 ISP 名称。

```php


<?php
$isp = geoip_isp_by_name('www.example.com');
if ($isp) {
    echo 'This host IP is from ISP: ' . $isp;
}
?>

   
```

以上示例会输出：

```text


This host IP is from ISP: ICANN c/o Internet Assigned Numbers Authority

   
```
