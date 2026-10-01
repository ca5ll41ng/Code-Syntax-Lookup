---
id: "zh-php-function-function-snmp-get-quick-print"
language: "php"
lang: "zh"
category: "function"
name: "snmp_get_quick_print"
title: "获取当前 NET-SNMP 库的 quick_print 设置的值"
signature: "bool snmp_get_quick_print()"
module: "snmp"
source_url: "https://www.php.net/manual/zh/function.snmp-get-quick-print.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前 NET-SNMP 库的 quick_print 设置的值

## 说明

```php
bool snmp_get_quick_print()
```

返回当前 NET-SNMP 库中存储的 quick_print 值。 quick_print 默认为 off。

## 参数

此函数没有参数。

## 返回值

如果 quick_print 为 on，返回 `true` 否则为 `false`。

## 示例

**`snmp_get_quick_print()` 示例**

```php


<?php
$quickprint = snmp_get_quick_print();
?>

   
```

## 参见

 `snmp_set_quick_print()` 查看 quick_print 的详细说明。
