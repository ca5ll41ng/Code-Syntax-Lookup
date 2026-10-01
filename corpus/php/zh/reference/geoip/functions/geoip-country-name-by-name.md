---
id: "zh-php-function-function-geoip-country-name-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_country_name_by_name"
title: "获取国家的全称"
signature: "string geoip_country_name_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-country-name-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取国家的全称

## 说明

```php
string geoip_country_name_by_name(string $hostname)
```

`geoip_country_name_by_name()` 函数返回主机或者 IP 地址所对应的国家名全称。

## 参数

- **`$hostname`** — 定位所用的主机或者 IP 地址。

## 返回值

成功，返回国家全称，如果在数据库中未找到相关信息则返回 `false` 。

## 示例

**`geoip_country_name_by_name()` 函数的使用范例：**

以下代码将会打印 example.com 主机的定位信息。

```php


<?php
$country = geoip_country_name_by_name('www.example.com');
if ($country) {
    echo 'This host is located in: ' . $country;
}
?>

   
```

以上示例会输出：

```text


 This host is located in: United States

   
```

## 参见

 `geoip_country_code_by_name()` `geoip_country_code3_by_name()`
