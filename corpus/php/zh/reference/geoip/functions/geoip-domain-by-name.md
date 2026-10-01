---
id: "zh-php-function-function-geoip-domain-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_domain_by_name"
title: "获取二级域名"
signature: "string geoip_domain_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-domain-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取二级域名

## 说明

```php
string geoip_domain_by_name(string $hostname)
```

`geoip_domain_by_name()` 函数将会返回和主机或者 IP 地址相关联的二级域名。

当前该函数只对购买了商业 GeoIP 域名版本的用户是可用的。如果没有该版本的数据库，使用该函数时将会抛出一个警告。

## 参数

- **`$hostname`** — 主机名或者 IP 地址。

## 返回值

成功，返回域名，如果在数据库中未找到信息则返回 `false` 。

## 示例

**一个 `geoip_domain_by_name()` 使用范例：**

以下代码将会输出和 IP 61.106.139.1相关联的域名。

```php


<?php
$domain = geoip_domain_by_name('61.106.139.1');

if ($domain) {
    echo 'The domain is: '. $domain;
}

?>

   
```

以上示例会输出：

```text


The domain is: von.co.kr

   
```
