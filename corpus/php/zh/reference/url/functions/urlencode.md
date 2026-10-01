---
id: "zh-php-function-function-urlencode"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "urlencode"
title: "编码 URL 字符串"
signature: "string urlencode(string $string)"
module: "url"
source_url: "https://www.php.net/manual/zh/function.urlencode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 编码 URL 字符串

## 说明

```php
string urlencode(string $string)
```

此函数便于将字符串编码并将其用于 URL 的请求部分，同时它还便于将变量传递给下一页。

## 参数

- **`$string`** — 要编码的字符串。

## 返回值

返回字符串，此字符串中除了 `-_.` 之外的所有非字母数字字符都将被替换成百分号（`%`）后跟两位十六进制数，空格则编码为加号（`+`）。此编码与 WWW 表单 POST 数据的编码方式是一样的，同时与 `application/x-www-form-urlencoded` 的媒体类型编码方式一样。由于历史原因，此编码在将空格编码为加号（+）方面与 [RFC3986](3986) 编码（参见 `rawurlencode()`）不同。

## 示例

**`urlencode()` 例子**

```php


<?php
$userinput = 'Data123!@-_ +';
echo "UserInput: $userinput\n";
echo '<a href="mycgi?foo=', urlencode($userinput), '">';
?>

    
```

以上示例会输出：

```html


UserInput: Data123!@-_ +
<a href="mycgi?foo=Data123%21%40-_+%2B">

    
```

**`urlencode()` 与 `htmlentities()` 例子**

```php


<?php
$foo = 'Data123!@-_ +';
$bar = "Not the same content as $foo";
echo "foo: $foo\n";
echo "bar: $bar\n";
$query_string = 'foo=' . urlencode($foo) . '&bar=' . urlencode($bar);
echo '<a href="mycgi?' . htmlentities($query_string) . '">';
?>

    
```

以上示例会输出：

```html


foo: Data123!@-_ +
bar: Not the same content as Data123!@-_ +
<a href="mycgi?foo=Data123%21%40-_+%2Bbar=Not+the+same+content+as+Data123%21%40-_+%2B">

    
```

## 注释

> 注意：小心与 HTML 实体相匹配的变量。像 &amp、&copy 和 &pound 都将被浏览器解析，并使用实际实体替代所期待的变量名。这是明显的混乱，W3C 已经告诫人们好几年了。参考地址：[]()。
>
> PHP 通过 arg_separator.ini 指令，支持将参数分割符变成 W3C 所建议的分号。不幸的是大多数用户代理并不发送分号分隔符格式的表单数据。较为简单的解决办法是使用  代替 & 作为分隔符。你不需要为此修改 PHP 的 arg_separator。让它仍为 &，而仅使用 `htmlentities()` 或 `htmlspecialchars()` 对你的 URL 进行编码。

## 参见

`urldecode()` `htmlentities()` `rawurlencode()` `rawurldecode()` [RFC 3986](3986)
