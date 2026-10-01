---
id: "zh-php-function-function-long2ip"
language: "php"
lang: "zh"
category: "function"
name: "long2ip"
title: "将长整型转化为字符串形式带点的互联网标准格式地址（IPV4）"
signature: "string long2ip(int $ip)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.long2ip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将长整型转化为字符串形式带点的互联网标准格式地址（IPV4）

## 说明

```php
string long2ip(int $ip)
```

`long2ip()` 函数通过长整型的表达形式转化生成带点格式的互联网地址（例如：aaa.bbb.ccc.ddd ）。

## 参数

- **`$ip`** — 合格的地址，长整型的表达形式。

## 返回值

以 `string` 的形式返互联网 IP 地址。

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 返回类型从 `string\|false` 改为 `string`。 |
| 7.1.0 | 参数 `$ip` 的类型从 `string` 改成 `int`。 |

 }}} 

## 注释

 {{{ 

> 在 32 位架构中，从 `string` 转换 `int` 整型形式的 ip 地址将有可能导致错误的结果，因为结果数字超出了 `PHP_INT_MAX` 限制。

 }}} 

## 参见

`ip2long()`
