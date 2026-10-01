---
id: "zh-php-function-function-geoip-netspeedcell-by-name"
language: "php"
lang: "zh"
category: "function"
name: "geoip_netspeedcell_by_name"
title: "获取网络连接速度"
signature: "string geoip_netspeedcell_by_name(string $hostname)"
module: "geoip"
source_url: "https://www.php.net/manual/zh/function.geoip-netspeedcell-by-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取网络连接速度

## 说明

```php
string geoip_netspeedcell_by_name(string $hostname)
```

`geoip_netspeedcell_by_name()` 函数将会返回主机或者 IP 地址对应的网络连接类型和速度。

该函数只有在 GeoIP 1.4.8 版本以上才能使用。

目前，该函数只对购买了商业 GeoIP NetSpeedCell 版本的用户可用，否则将会抛出一个警告！

返回值为字符串，结果集如下：

- Cable/DSL
- Dialup
- Cellular
- Corporate

## 参数

- **`$hostname`** — 主机名或者 IP 地址。

## 返回值

成功，返回连接速度，未找到相关信息则返回 `false` 。

## 示例

**一个 `geoip_netspeedcell_by_name()` 使用范例：**

以下代码将会输出 example.com 主机的连接速度。

```php


<?php
$netspeed = geoip_netspeedcell_by_name('www.example.com');

if ($netspeed) {
    echo 'The connection type is: '. $netspeed;
}
?>

   
```

以上示例会输出：

```text


The connection type is: Corporate

   
```
