---
id: "zh-php-function-function-net-get-interfaces"
language: "php"
lang: "zh"
category: "function"
name: "net_get_interfaces"
title: "获取网络接口"
signature: "array|false net_get_interfaces()"
module: "network"
source_url: "https://www.php.net/manual/zh/function.net-get-interfaces.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取网络接口

## 说明

```php
array|false net_get_interfaces()
```

返回本地机器上的网络接口（适配器）的列举。

## 参数

此函数没有参数。

## 返回值

返回一个关联 `array`，其中 key 是接口的名称，value 是一个接口属性的关联数组。 或者在失败时返回 `false`。

每个接口关联数组包含：

| 名字 | 说明 |
| --- | --- |
| 描述 | 用于描述接口的可选字符串值。 仅限 Windows。 |
| mac | 接口的 MAC 地址的可选字符串值。 仅限 Windows。 |
| mtu | 接口的最大传输单位（MTU）的整数值。 仅限 Windows。 |
| unicast | 关联数组，见下面的单播属性。 |
| up | 接口的布尔状态（开/关）。 |

| 名字 | 说明 |
| --- | --- |
| flags | 整数值。 |
| family | 整数值。 |
| address | IPv4 或 IPv6 中的地址的字符串值。 |
| netmask | IPv4 或 IPv6 中的网络掩码的字符串值。 |

## 错误／异常

在获取接口信息失败时会抛出 `E_WARNING`。
