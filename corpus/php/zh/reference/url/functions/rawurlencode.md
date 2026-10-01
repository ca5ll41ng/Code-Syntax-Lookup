---
id: "zh-php-function-function-rawurlencode"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "rawurlencode"
title: "按照 RFC 3986 对 URL 进行编码"
signature: "string rawurlencode(string $string)"
module: "url"
source_url: "https://www.php.net/manual/zh/function.rawurlencode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 按照 RFC 3986 对 URL 进行编码

## 说明

```php
string rawurlencode(string $string)
```

根据 [RFC 3986](3986) 编码指定的字符。

## 参数

- **`$string`** — 要编码的 URL。

## 返回值

返回字符串，此字符串中除了 `-_.` 之外的所有非字母数字字符都将被替换成百分号（`%`）后跟两位十六进制数。这是在 [RFC 3986](3986) 中描述的编码，是为了保护原义字符以免其被解释为特殊的 URL 定界符，同时保护 URL 格式以免其被传输媒体（像一些邮件系统）使用字符转换时弄乱。

## 示例

**在 FTP URL 里包含一个密码**

```php


<?php
echo '<a href="ftp://user:', rawurlencode('foo @+%/'),
     '@ftp.example.com/x.txt">';
?>

    
```

以上示例会输出：

```html


<a href="ftp://user:foo%20%40%2B%25%2F@ftp.example.com/x.txt">

    
```

或者，如果你想通过 URL 的 PATH_INFO 构成部分去传递信息：

**`rawurlencode()` 示例 2**

```php


<?php
echo '<a href="http://example.com/department_list_script/',
    rawurlencode('sales and marketing/Miami'), '">';
?>

    
```

以上示例会输出：

```html


<a href="http://example.com/department_list_script/sales%20and%20marketing%2FMiami">

    
```

## 参见

`rawurldecode()` `urldecode()` `urlencode()` [RFC 3986](3986)
