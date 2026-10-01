---
id: "zh-php-function-function-dns-get-record"
language: "php"
lang: "zh"
category: "function"
name: "dns_get_record"
title: "获取指定主机名的 DNS 纪录"
signature: "array|false dns_get_record(string $hostname, int $type = DNS_ANY, array $authoritative_name_servers = null, array $additional_records = null, bool $raw = false)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.dns-get-record.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取指定主机名的 DNS 纪录

## 说明

```php
array|false dns_get_record(string $hostname, int $type = DNS_ANY, array $authoritative_name_servers = null, array $additional_records = null, bool $raw = false)
```

获取指定 `$hostname` 的 DNS 纪录。

## 参数

- **`$hostname`** — `$hostname` 应该是有效的 DNS 主机名，比如“`www.example.com`”。可以使用 `in-addr.arpa` 表示法生成反向查找，但大多数情况下更适合用 `gethostbyaddr()`。
  > 根据 DNS 标准，邮件地址以 `user.host` 格式给出（例如：`hostmaster.example.com` 而不是 `hostmaster@example.com`），请务必检查此值并在必要时进行修改，然后将其与 `mail()` 等函数一起使用。


- **`$type`** — 默认情况下，`dns_get_record()` 将会搜索跟 `$hostname` 关联的任何资源记录。 要限制查询，请使用以下之一的 `DNS_{*}` 常量。
- **`$authoritative_name_servers`** — 引用传递，如果给出，将会填充*权威名称服务器*的资源记录。
- **`$additional_records`** — 引用传递，如果给出，将会填充任何*附加记录*。
- **`$raw`** — `$type` 将解释为原始 DNS 类型 ID（不能使用 `DNS_{*}` 常量）。返回值包含 `data` 键，需要手动解析。

## 返回值

此函数返回由关联数组组成的数组， 或者在失败时返回 `false`。每个关联数组*至少*包含以下键：

| 属性 | 含义 |
| --- | --- |
| host | 与其余相关数据引用的 DNS 命名空间中的记录。 |
| class | `dns_get_record()` 仅返回内部类记录，因此参数将始终返回 `IN`。 |
| type | 包含记录类型的字符串。其他属性也包含在结果数组中，具体取决于 type 的值。查看下表。 |
| ttl | 与此记录相关的 `"Time To Live"`。 这将*不会*等于记录的原始 ttl，而是等于原始 ttl 减去自权威名称服务器查询以来经过的时间长度。 |

| 类型 | 额外列 |
| --- | --- |
| `A` | `ip`：点分十进制格式的 IPv4。 |
| `MX` | `pri`：邮件交换器的有优先级。较低的数字有较高的优先级。`target`：邮件服务器的 FQDN（全称域名）。参阅 `dns_get_mx()`。 |
| `CNAME` | `target`：该记录在 DNS 命名空间中的 FQDN 别名。 |
| `NS` | `target`：此主机名的权威名称服务器的 FQDN。 |
| `PTR` | `target`：此记录指向的 DNS 命名空间中的位置。 |
| `TXT` | `txt`：跟此记录关联的任意字符串数据。 |
| `HINFO` | `cpu`：指定此记录引用的机器的 CPU 的 IANA 号。 `os`：指定此记录引用的机器的操作系统的 IANA 号。 请参阅 IANA 的 [`Operating System Names`]()。 |
| `CAA` | `flags`：单字节位字段；目前仅定义了第 0 位，意味着“critical”；其他位保留且应该忽略。`tag`：CAA 标记名（字母数字的 ASCII 字符串）。`value`：CAA 标记值（二进制字符串，可以使用子格式）。更多信息参阅：[RFC 6844](6844)。 |
| `SOA` | `mname`：资源记录来源的机器的 FQDN。 `rname`：此域的管理联系人的电子邮件地址。 `serial`：请求域的此修订的序列号。 `refresh`：次要名称服务器在更新此域的远程副本时应使用的刷新间隔（秒）。 `retry`：在刷新失败后等待的时间长度（秒），然后再进行第二次尝试。 `expire`：在成功刷新之前，次要 DNS 服务器应保留远程副本的最长时间（秒）。 `minimum-ttl`：客户端可以继续使用 DNS 解析的最短时间（秒）， 在此之前应该从服务器请求新的解析。可以被单独的资源记录覆盖。 |
| `AAAA` | `ipv6`：IPv6 地址 |
| `A6` | `masklen`：从 `$chain` 指定的目标继承的长度（以位为单位）。 `ipv6`：要与 `$chain` 合并的特定记录的地址。 `chain`：要与 `$ipv6` 数据合并的父记录。 |
| `SRV` | `pri`：（优先级）应该首先使用最低优先级。 `weight`：用于加权常见优先级的目标应该随机选择。 `target` 和 `port`：请求服务的主机名和端口。 更多信息参阅：[RFC 2782](2782)。 |
| `NAPTR` | `order` 和 `pref`：等同于上面的 `pri` 和 `weight`。 `flags`、`services`、`regex` 和 `replacement`： 由 [RFC 2915](2915) 定义的参数。 |

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.0.16, 7.1.2 | 新增对 CAA 记录的支持。 |

## 示例

**使用 `dns_get_record()`**

```php


<?php
$result = dns_get_record("php.net");
print_r($result);
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => Array
        (
            [host] => php.net
            [type] => MX
            [pri] => 5
            [target] => pair2.php.net
            [class] => IN
            [ttl] => 6765
        )

    [1] => Array
        (
            [host] => php.net
            [type] => A
            [ip] => 64.246.30.37
            [class] => IN
            [ttl] => 8125
        )

)

    
```

**使用 `dns_get_record()` 和 DNS_ANY**

一旦解析了 MX 记录，通常需要邮件服务器的 IP 地址，因此 `dns_get_record()` 还会在 `$additional_records` 中返回包含关联记录的数组。`$authoritative_name_servers` 也会返回，包含权威名称服务器列表。

```php


<?php
/* 为 php.net 请求“ANY”记录，并创建 $authns 和 $addtl 数组，
   包含名称服务器列表和任何附加记录列表 */
$result = dns_get_record("php.net", DNS_ANY, $authns, $addtl);
echo "Result = ";
print_r($result);
echo "Auth NS = ";
print_r($authns);
echo "Additional = ";
print_r($addtl);
?>

    
```

以上示例的输出类似于：

```text


Result = Array
(
    [0] => Array
        (
            [host] => php.net
            [type] => MX
            [pri] => 5
            [target] => pair2.php.net
            [class] => IN
            [ttl] => 6765
        )

    [1] => Array
        (
            [host] => php.net
            [type] => A
            [ip] => 64.246.30.37
            [class] => IN
            [ttl] => 8125
        )

)
Auth NS = Array
(
    [0] => Array
        (
            [host] => php.net
            [type] => NS
            [target] => remote1.easydns.com
            [class] => IN
            [ttl] => 10722
        )

    [1] => Array
        (
            [host] => php.net
            [type] => NS
            [target] => remote2.easydns.com
            [class] => IN
            [ttl] => 10722
        )

    [2] => Array
        (
            [host] => php.net
            [type] => NS
            [target] => ns1.easydns.com
            [class] => IN
            [ttl] => 10722
        )

    [3] => Array
        (
            [host] => php.net
            [type] => NS
            [target] => ns2.easydns.com
            [class] => IN
            [ttl] => 10722
        )

)
Additional = Array
(
    [0] => Array
        (
            [host] => pair2.php.net
            [type] => A
            [ip] => 216.92.131.5
            [class] => IN
            [ttl] => 6766
        )

    [1] => Array
        (
            [host] => remote1.easydns.com
            [type] => A
            [ip] => 64.39.29.212
            [class] => IN
            [ttl] => 100384
        )

    [2] => Array
        (
            [host] => remote2.easydns.com
            [type] => A
            [ip] => 212.100.224.80
            [class] => IN
            [ttl] => 81241
        )

    [3] => Array
        (
            [host] => ns1.easydns.com
            [type] => A
            [ip] => 216.220.40.243
            [class] => IN
            [ttl] => 81241
        )

    [4] => Array
        (
            [host] => ns2.easydns.com
            [type] => A
            [ip] => 216.220.40.244
            [class] => IN
            [ttl] => 81241
        )

)

    
```

## 参见

`dns_get_mx()` `dns_check_record()`
