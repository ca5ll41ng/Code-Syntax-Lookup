---
id: "zh-php-function-function-geoip-time-zone-by-country-and-region"
language: "php"
lang: "zh"
category: "function"
name: "geoip_time_zone_by_country_and_region"
title: "返回国家和地区的时区"
signature: "string geoip_time_zone_by_country_and_region(string $country_code, [string $region_code = ...])"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-time-zone-by-country-and-region.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回国家和地区的时区

## 说明

```php
string geoip_time_zone_by_country_and_region(string $country_code, [string $region_code = ...])
```

`geoip_time_zone_by_country_and_region()` 函数将会返回与国家或者地区相对应的时区。

在美国，地区代码是每个州对应的两个字母的缩写，而在加拿大，则是由两个字母组成的每个省的邮政编码。

在世界上其他地区，GeoIP 使用 FIPS 给定的10到4位的代码来表示各地区。你可以点击以下连接 []() 查看详细信息。

该函数只在 GeoIP 1.4.1版本以上的库才可用。并且结果集的数据来源是直接从 GeoIP 库中获取的，而不是从任何数据库中。

## 参数

- **`$country_code`** — 由两个字母组成的国家代码 (参见 `geoip_country_code_by_name()`)
- **`$region_code`** — 由两个字母组成的地区代码 (参见 `geoip_region_by_name()`)

## 返回值

成功，返回地区名字，如果相关信息未找到则返回 `false` 。

## 示例

**`geoip_time_zone_by_country_and_region()` 使用美国和加拿大地区的范例：**

以下示例将会打印国家简称为 CA (加拿大)，地区简称为 QC (魁北克)的时区。

```php


<?php
$timezone = geoip_time_zone_by_country_and_region('CA', 'QC');
if ($timezone) {
    echo 'Time zone for CA/QC is: ' . $timezone;
}
?>

    
```

以上示例会输出：

```text


Time zone for CA/QC is: America/Montreal

    
```

**`geoip_time_zone_by_country_and_region()` 使用 FIPS 代码的范例：**

以下示例将会打印国家简称为 JP (日本),地区代码为 01的时区。

```php


<?php
$timezone = geoip_time_zone_by_country_and_region('JP', '01');
if ($timezone) {
    echo 'Time zone for JP/01 is: ' . $timezone;
}
?>

    
```

以上示例会输出：

```text


Time zone for JP/01 is: Asia/Tokyo

    
```
