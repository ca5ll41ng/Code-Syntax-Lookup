---
id: "zh-php-function-function-geoip-region-name-by-code"
language: "php"
lang: "zh"
category: "function"
name: "geoip_region_name_by_code"
title: "返回给定的国家和地区代码组合所对应的地区名称"
signature: "string geoip_region_name_by_code(string $country_code, string $region_code)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-region-name-by-code.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回给定的国家和地区代码组合所对应的地区名称

## 说明

```php
string geoip_region_name_by_code(string $country_code, string $region_code)
```

`geoip_region_name_by_code()` 函数将会返回与给定的国家和地区代码组合相对应的地区名称。

在美国，地区代码是每个州对应的两个字母的缩写，而在加拿大，则是由两个字母组成的每个省的邮政编码。

在世界其他地区，GeoIP使用 FIPS 给定的10到4位的代码来表示各地区。你可以点击以下连接 []() 查看详细信息。

该函数只在 GeoIP 1.4.1版本以上的库才可用。并且结果集的数据来源是直接从 GeoIP 库中获取的，而不是从任何数据库中。

## 参数

- **`$country_code`** — 由两个字母组成的国家代码 (参见 `geoip_country_code_by_name()`)
- **`$region_code`** — 由两个字母组成的地区代码 (参见 `geoip_region_by_name()`)

## 返回值

成功，返回地区名字，如果相关信息未找到则返回 `false` 。

## 示例

**`geoip_region_name_by_code()` 使用美国和加拿大地区的范例。**

以下示例将会打印国家简称为 CA (加拿大)，地区简称为 QC (魁北克)的地区名：

```php


<?php
$region = geoip_region_name_by_code('CA', 'QC');
if ($region) {
    echo 'Region name for CA/QC is: ' . $region;
}
?>

    
```

以上示例会输出：

```text


Region name for CA/QC is: Quebec

    
```

**`geoip_region_name_by_code()` 使用 FIPS 代码的范例：**

以下示例将会打印国家简称为 JP (日本)地区代码为 01的地区名称。

```php


<?php
$region = geoip_region_name_by_code('JP', '01');
if ($region) {
    echo 'Region name for JP/01 is: ' . $region;
}
?>

    
```

以上示例会输出：

```text


Region name for JP/01 is: Aichi

    
```
