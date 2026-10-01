---
id: "zh-php-function-function-snmp-set-quick-print"
language: "php"
lang: "zh"
category: "function"
name: "snmp_set_quick_print"
title: "在 NET-SNMP 库中设置 `$enable` 的值"
signature: "true snmp_set_quick_print(bool $enable)"
module: "snmp"
source_url: "https://www.php.net/manual/zh/function.snmp-set-quick-print.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在 NET-SNMP 库中设置 `$enable` 的值

## 说明

```php
true snmp_set_quick_print(bool $enable)
```

设置 NET-SNMP 库中 `$enable` 的值。当设置为（1），SNMP 库将返回“quick printed”。这意味着仅会打印值。当 `$enable` 未启用（默认），NET-SNMP 库输出额外信息，包含值的类型（比如 IpAddress 或 OID）。此外，如果 quick_print 未启用，库将为所有字符串额外打印出三个或更少字符的十六进制值。

默认情况下，NET-SNMP 库返回详细值，quick_print 仅用于返回值。

目前字符串仍会返回带有额外的引号，这将在以后的版本中得到纠正。

## 参数

- **`$enable`**

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在返回类型为 `true`；之前是 `bool`。 |

## 示例

当使用返回的信息而不是显示它时，经常使用设置 quick_print。

**使用 `snmp_set_quick_print()`**

```php


<?php
snmp_set_quick_print(0);
$a = snmpget("127.0.0.1", "public", ".1.3.6.1.2.1.2.2.1.9.1");
echo "$a\n";
snmp_set_quick_print(1);
$a = snmpget("127.0.0.1", "public", ".1.3.6.1.2.1.2.2.1.9.1");
echo "$a\n";
?>

   
```

以上示例的输出类似于：

```text


'Timeticks: (0) 0:00:00.00'
'0:00:00.00'

   
```

## 参见

 `snmp_get_quick_print()`
