---
id: "zh-php-function-function-ip2long"
language: "php"
lang: "zh"
category: "function"
name: "ip2long"
title: "将 IPV4 的字符串互联网协议转换成长整型数字"
signature: "int|false ip2long(string $ip)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.ip2long.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 IPV4 的字符串互联网协议转换成长整型数字

## 说明

```php
int|false ip2long(string $ip)
```

函数 `ip2long()` 返回 IPV4 网络地址的长整型格式，从标准网络地址格式(点字符串)转化得到。

`ip2long()` 还可以与非完整IP进行工作。阅读 []() 获得更多信息。

## 参数

- **`$ip`** — 一个标准格式的地址。

## 返回值

返回IP地址转换后的数字，如果 `$ip` 无效，则为 `false`。

## 示例

**`ip2long()` 例子**

```php


<?php
$ip = gethostbyname('www.example.com');
$out = "The following URLs are equivalent:<br />\n";
$out .= 'http://www.example.com/, http://' . $ip . '/, and http://' . sprintf("%u", ip2long($ip)) . "/<br />\n";
echo $out;
?>

    
```

**显示 IP 地址**

第二个例子说明使用 `printf()` 打印转换后的地址：

```php


<?php
$ip   = gethostbyname('www.example.com');
$long = ip2long($ip);

if ($long == -1 || $long === FALSE) {
    echo 'Invalid IP, please try again';
} else {
    echo $ip   . "\n";            // 192.0.34.166
    echo $long . "\n";            // 3221234342 （-1073732954 32 位系统，整型溢出）
    printf("%u\n", ip2long($ip)); // 3221234342
}
?>

    
```

## 注释

> 因为 PHP 的 `int` 类型是有符号，并且有许多的 IP 地址将导致在 32 位系统的情况下为负数，你需要使用“%u”进行转换通过 `sprintf()` 或 `printf()` 得到的字符串来表示无符号的 IP 地址。

> 由于整数值溢出，`ip2long()` 将为 32 位系统上的 IP `255.255.255.255` 返回 `-1`。

## 参见

`long2ip()` `sprintf()`
