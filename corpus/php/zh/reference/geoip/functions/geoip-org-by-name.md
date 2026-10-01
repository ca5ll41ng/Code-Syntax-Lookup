---
id: "zh-php-function-function-geoip-org-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_org_by_name"
title: "获取机构的名称"
signature: "string geoip_org_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-org-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取机构的名称

## 说明

```php
string geoip_org_by_name(string $hostname)
```

`geoip_org_by_name()` 函数将会返回 IP 地址所分配的机构名称。

目前，该函数只对购买了商业 GeoIP Organization， ISP 或者 AS 版本的用户可用，否则将会抛出一个警告！

## 参数

- **`$hostname`** — 主机名或者 IP 地址。

## 返回值

成功， 返回组织的名称，未找到相关信息则返回 `false` 。

## 示例

**一个 `geoip_org_by_name()` 使用范例：**

以下代码将会打印 example.com 主机的所有者。

```php


<?php
$org = geoip_org_by_name('www.example.com');
if ($org) {
    echo 'This host IP is allocated to: ' . $org;
}
?>

   
```

以上示例会输出：

```text


This host IP is allocated to: ICANN c/o Internet Assigned Numbers Authority

   
```
