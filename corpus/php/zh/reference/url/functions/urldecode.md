---
id: "zh-php-function-function-urldecode"
language: "php"
lang: "zh"
category: "function"
name: "urldecode"
title: "解码已编码的 URL 字符串"
signature: "string urldecode(string $string)"
module: "url"
source_url: "https://www.php.net/manual/zh/function.urldecode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解码已编码的 URL 字符串

## 说明

```php
string urldecode(string $string)
```

解码给出的已编码字符串中的任何 `%{##}`。 加号（'`+`'）被解码成一个空格字符。

## 参数

- **`$string`** — 要解码的字符串。

## 返回值

返回解码后的字符串。

## 示例

**`urldecode()` 示例**

```php


<?php
$query = "my=apples&are=green+and+red";

foreach (explode('&', $query) as $chunk) {
    $param = explode("=", $chunk);

    if ($param) {
        printf("Value for parameter \"%s\" is \"%s\"<br/>\n", urldecode($param[0]), urldecode($param[1]));
    }
}
?>

    
```

## 注释

> 超全局变量 `$_GET` 和 `$_REQUEST` 已经被解码了。对 `$_GET` 或 `$_REQUEST` 里的元素使用 `urldecode()` 将会导致不可预计和危险的结果。

## 参见

`urlencode()` `rawurlencode()` `rawurldecode()` [RFC 3986](3986)
