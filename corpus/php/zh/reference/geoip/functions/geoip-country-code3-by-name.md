---
id: "zh-php-function-function-geoip-country-code3-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_country_code3_by_name"
title: "获取三个字母组成的国家简称"
signature: "string geoip_country_code3_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-country-code3-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取三个字母组成的国家简称

## 说明

```php
string geoip_country_code3_by_name(string $hostname)
```

`geoip_country_code3_by_name()` 函数返回由三个字母组成和主机或者 IP 相对应的国家代码。

## 参数

- **`$hostname`** — 定位所用的主机名或者 IP 地址。

## 返回值

成功，返回由三个字母组成的国家简称，如果在数据库中未找到相关信息则返回 `false` 。

## 示例

**`geoip_country_code3_by_name()` 函数的使用范例：**

以下代码将会打印 example.com 主机的定位信息。

```php


<?php
$country = geoip_country_code3_by_name('www.example.com');
if ($country) {
    echo 'This host is located in: ' . $country;
}
?>

   
```

以上示例会输出：

```text


This host is located in: USA

   
```

## 参见

 `geoip_country_code_by_name()` `geoip_country_name_by_name()`
