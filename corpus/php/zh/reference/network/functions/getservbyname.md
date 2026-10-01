---
id: "zh-php-function-function-getservbyname"
language: "php"
lang: "zh"
category: "function"
name: "getservbyname"
title: "获取互联网服务协议对应的端口"
signature: "int|false getservbyname(string $service, string $protocol)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.getservbyname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取互联网服务协议对应的端口

## 说明

```php
int|false getservbyname(string $service, string $protocol)
```

`getservbyname()` 返回互联网服务 `$service` 指定的协议 `$protocol` 中对应的端口， 依据 `/etc/services`。

## 参数

- **`$service`** — 互联网服务名称的字符串。
- **`$protocol`** — `$protocol` 既可以是 `"tcp"` 也可以是 `"udp"` (小写)。

## 返回值

返回端口号，如果 `$service` 或 `$protocol` 未找到返回 `false`。

## 示例

**`getservbyname()` 例子**

```php


<?php
$services = array('http', 'ftp', 'ssh', 'telnet', 'imap',
'smtp', 'nicname', 'gopher', 'finger', 'pop3', 'www');

foreach ($services as $service) {
    $port = getservbyname($service, 'tcp');
    echo $service . ": " . $port . "<br />\n";
}
?>

    
```

## 参见

`getservbyport()` []() 端口号的完整列表
