---
id: "zh-php-function-function-geoip-continent-code-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_continent_code_by_name"
title: "获取七大洲的大写字母简称"
signature: "string geoip_continent_code_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-continent-code-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取七大洲的大写字母简称

## 说明

```php
string geoip_continent_code_by_name(string $hostname)
```

`geoip_continent_code_by_name()` 函数将会返回主机或者IP地址相对应的七大洲大写字母简称。

## 参数

- **`$hostname`** — 所要定位的主机或IP地址。

## 返回值

成功，返回两个大写字母组成的七大洲简称字符串, 如果在数据库中未找到相关信息则返回 `false` 。

| Code | 洲名 |
| --- | --- |
| `AF` | 非洲 |
| `AN` | 南极洲 |
| `AS` | 亚洲 |
| `EU` | 欧洲 |
| `NA` | 北美洲 |
| `OC` | 大洋洲 |
| `SA` | 南美洲 |

## 示例

**`geoip_continent_code_by_name()` 函数的使用范例：**

以下代码将会打印 example.com 的定位信息。

```php


<?php
$continent = geoip_continent_code_by_name('www.example.com');
if ($continent) {
    echo 'This host is located in: ' . $continent;
}
?>

   
```

以上示例会输出：

```text


 This host is located in: NA

   
```

## 参见

 `geoip_country_code_by_name()`
