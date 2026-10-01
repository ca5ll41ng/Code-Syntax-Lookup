---
id: "zh-php-function-function-geoip-asnum-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_asnum_by_name"
title: "获取自治系统号(ASN)"
signature: "string geoip_asnum_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-asnum-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取自治系统号(ASN)

## 说明

```php
string geoip_asnum_by_name(string $hostname)
```

`geoip_asnum_by_name()` 函数将会返回和 IP 地址相关联的自治系统号(ASN)。

## 参数

- **`$hostname`** — 主机的 IP 地址。

## 返回值

如果成功将会返回自治系统号，如果在数据库中未找到相关信息则返回 `false`。

## 示例

**`geoip_asnum_by_name()` 示例**

以下代码将会输出 www.example.com 域名的 ASN。

```php


<?php
$asn = geoip_asnum_by_name('www.example.com');

if ($asn) {
    echo 'The ASN is: ' . $asn;
}
?>

   
```

以上示例会输出：

```text


The ASN is: AS15133 EdgeCast Networks, Inc

   
```
