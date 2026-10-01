---
id: "zh-php-function-function-geoip-id-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_id_by_name"
title: "获取网络连接类型"
signature: "int geoip_id_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-id-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取网络连接类型

## 说明

```php
int geoip_id_by_name(string $hostname)
```

`geoip_id_by_name()` 函数将会返回和主机名或者 IP 地址相对应的网络连接类型。

函数返回值是数字可以和以下常量对照：

- GEOIP_UNKNOWN_SPEED
- GEOIP_DIALUP_SPEED
- GEOIP_CABLEDSL_SPEED
- GEOIP_CORPORATE_SPEED

## 参数

- **`$hostname`** — 要查找连接类型的主机或者 IP 地址。

## 返回值

返回连接类型。

## 示例

**一个 `geoip_id_by_name()` 使用范例：**

以下将会输出 example.com 主机的连接类型。

```php


<?php
$netspeed = geoip_id_by_name('www.example.com');

echo 'The connection type is ';

switch ($netspeed) {
    case GEOIP_DIALUP_SPEED:
        echo 'dial-up';
        break;
    case GEOIP_CABLEDSL_SPEED:
        echo 'cable or DSL';
        break;
    case GEOIP_CORPORATE_SPEED:
        echo 'corporate';
        break;
    case GEOIP_UNKNOWN_SPEED:
    default:
        echo 'unknown';
}
?>

   
```

以上示例会输出：

```text


The connection type is corporate

   
```
