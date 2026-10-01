---
id: "zh-php-function-function-geoip-record-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_record_by_name"
title: "返回 GeoIP 数据库中详细的城市信息"
signature: "array geoip_record_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-record-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 GeoIP 数据库中详细的城市信息

## 说明

```php
array geoip_record_by_name(string $hostname)
```

`geoip_record_by_name()` 函数将会返回主机或者 IP 地址所对应的记录信息。

该函数在 GeoLite City 版本和商业 GeoIP City 版本中可用。 版本不对的话，将会抛出一个警告。

返回的关联数组不同的键名对应如下：

- "continent_code" -- 由两个字符组成的洲简称。(要求 GeoIP 的库版本是1.0.4以上)
- "country_code" -- 由2个字母组成的国家简称。(参见 `geoip_country_code_by_name()`)
- "country_code3" -- 由三个字母组成的国家简称。(参见 `geoip_country_code3_by_name()`)
- "country_name" -- 国家名称 (参见 `geoip_country_name_by_name()`)
- "region" -- 地区代码 (比如: CA 对应 California)
- "city" -- 城市名称。
- "postal_code" -- 邮编，FSA 或者 Zip 编码。
- "latitude" -- 有符号的 `float` 纬度。
- "longitude" -- 有符号的 `float` 经度。
- "dma_code" -- 指定市场区号 (只支持美国和加拿大)
- "area_code" -- PSTN （公共交换电话网络）地区代码。 (比如: 212)

## 参数

- **`$hostname`** — 所要查找的主机或者 IP 地址。

## 返回值

成功，返回关联数组，未找到相关信息则返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL geoip 1.0.4 | 给 GeoIP 1.4.4及以上版本的库添加 continent_code 字段。 |
| PECL geoip 1.0.3 | 添加 country_code3 和 country_name 字段。 |

## 示例

**`geoip_record_by_name()` 例子：**

以下示例将会输出包含 example.com 主机记录的数组。

```php


<?php
$record = geoip_record_by_name('www.example.com');
if ($record) {
    print_r($record);
}
?>

   
```

以上示例会输出：

```text


Array
(
    [continent_code] => NA
    [country_code] => US
    [country_code3] => USA
    [country_name] => United States
    [region] => CA
    [city] => Marina Del Rey
    [postal_code] =>
    [latitude] => 33.9776992798
    [longitude] => -118.435096741
    [dma_code] => 803
    [area_code] => 310
)

   
```
