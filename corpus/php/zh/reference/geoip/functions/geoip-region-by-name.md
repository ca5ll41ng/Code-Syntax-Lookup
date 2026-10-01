---
id: "zh-php-function-function-geoip-region-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_region_by_name"
title: "获取国家和地区代码"
signature: "array geoip_region_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-region-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取国家和地区代码

## 说明

```php
array geoip_region_by_name(string $hostname)
```

`geoip_region_by_name()` 函数将会返回与主机或者 IP 地址相关的国家和地区代码。

该函数只对购买了商业 GeoIP Region 版本的用户可用。否则将会抛出一个警告！

所返回的关联数组的各字段具体含义如下：

- "country_code" -- 由两个字母组成的国家代码(参见 `geoip_country_code_by_name()`)
- "region" -- 地区代码。 (比如: CA 对应 California)

## 参数

- **`$hostname`** — 查找的主机或者 IP 地址。

## 返回值

成功，返回关联数组， 如果信息未找到则返回 `false`。

## 示例

**`geoip_region_by_name()` 例子：**

以下示例将会打印对应 example.com 主机的包含国家和地区代码的关联数组。

```php


<?php
$region = geoip_region_by_name('www.example.com');
if ($region) {
    print_r($region);
}
?>

   
```

以上示例会输出：

```text


Array
(
    [country_code] => US
    [region] => CA
)

   
```
