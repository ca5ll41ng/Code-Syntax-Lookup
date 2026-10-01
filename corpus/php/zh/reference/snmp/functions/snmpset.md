---
id: "zh-php-function-function-snmpset"
language: "php"
lang: "zh"
category: "function"
name: "snmpset"
title: "设置 SNMP 对象的值"
signature: "bool snmpset(string $hostname, string $community, array|string $object_id, array|string $type, array|string $value, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/zh/function.snmpset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 SNMP 对象的值

## 说明

```php
bool snmpset(string $hostname, string $community, array|string $object_id, array|string $type, array|string $value, int $timeout = -1, int $retries = -1)
```

`snmpset()` 用于通过 `$object_id` 设置 SNMP 对象的值。

## 参数

- **`$hostname`** — SNMP 代理（服务器）的主机名。
- **`$community`** — The write community.
- **`$object_id`** — SNMP 对象 ID。
- **`$type`** — MIB 定义了各个对象 id 的类型。必须是下面列出的单个字符之一。
  | = | MIB类型 |
  | --- | --- |
  | i | INTEGER |
  | u | INTEGER |
  | s | STRING |
  | x | HEX STRING |
  | d | DECIMAL STRING |
  | n | NULLOBJ |
  | o | OBJID |
  | t | TIMETICKS |
  | a | IPADDRESS |
  | b | BITS |

 — 如果在编译 SNMP 库时定义了 `OPAQUE_SPECIAL_TYPES`，那么下列值是合法的：
  | U | unsigned int64 |
  | --- | --- |
  | I | signed int64 |
  | F | float |
  | D | double |

 — 这些值大都会使用与 ASN.1 相符的类型。's'，'x'，'d' 以及 'b' 都是指定一个八字节字符串值的方式。并且 'u' 无符号类型也可用于处理 Gauge32 值。 — 如果 MIB 文件是用 "snmp_read_mib" 或者通过在 libsnmp config 中指定而加载入 MIB 树时， '=' 可以被用作为所有对象的 `$type` 参数，因为 type 可以被自动从 MIB 中读取。 — 注意有两种方式可以设定 BITS 类型的变量，例如 "SYNTAX BITS {telnet(0), ftp(1), http(2), icmp(3), snmp(4), ssh(5), https(6)}":
  - 使用 "b" 类型以及一个位数的列表。不推荐使用此方法，因为 GET 查询对同一个 OID 将会返回例如 0xF8。
  - 使用 "x" 类型以及一个十六进制数但是不需要通常的 "0x" 前缀。

 — 更多细节见示例部分。
- **`$value`** — 新值。
- **`$timeout`** — 第一次超时前的微秒数。
- **`$retries`** — 发生超时时重试的次数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

如果 SNMP 主机拒绝该数据类型，则会出现一条 E_WARNING 消息，例如显示“Warning: Error in packet. Reason:(badValue)The value given has the wrong type or length.”。如果指定了未知或无效的 OID，警告可能会显示为“Could not add variable”。

## 示例

**使用 `snmpset()`**

```php


<?php
  snmpset("localhost", "public", "IF-MIB::ifAlias.3", "s", "foo");
?>
 
    
```

**使用 `snmpset()` 设置 BITS SNMP 对象 ID**

```php


<?php
  snmpset("localhost", "public", 'FOO-MIB::bar.42', 'b', '0 1 2 3 4');
// or
  snmpset("localhost", "public", 'FOO-MIB::bar.42', 'x', 'F0');
?>
 
    
```

## 参见

 `snmpget()`
