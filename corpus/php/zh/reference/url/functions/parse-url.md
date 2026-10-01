---
id: "zh-php-function-function-parse-url"
language: "php"
lang: "zh"
category: "function"
name: "parse_url"
title: "解析 URL，返回其组成部分"
signature: "int|string|array|null|false parse_url(string $url, int $component = -1)"
module: "url"
source_url: "https://www.php.net/manual/zh/function.parse-url.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解析 URL，返回其组成部分

## 说明

```php
int|string|array|null|false parse_url(string $url, int $component = -1)
```

本函数解析 URL 并返回关联数组，包含在 URL 中出现的各种组成部分。数组的元素值*不会* URL 解码。

本函数*不是*用来验证给定 URL 的有效性的，只是将其分解为下面列出的部分。也会接受不完整或无效的 URL，`parse_url()` 会尝试尽量正确解析。

> 此函数可能无法对相对和无效 URL 提供正确的结果，结果甚至可能会跟常见的 HTTP 客户端行为不匹配。如果需要解析来自不受信任输入的 URL，则需要另外验证，例如，使用带 `FILTER_VALIDATE_URL` 过滤器的 `filter_var()`。

## 参数

- **`$url`** — 要解析的 URL。

- **`$component`** — 指定 `PHP_URL_SCHEME`、`PHP_URL_HOST`、`PHP_URL_PORT`、`PHP_URL_USER`、`PHP_URL_PASS`、`PHP_URL_PATH`、`PHP_URL_QUERY` 或 `PHP_URL_FRAGMENT` 的其中一个来获取 URL 中指定的部分的 `string`。（当指定为 `PHP_URL_PORT` 时，返回值将是 `int`）。

## 返回值

对严重不合格的 URL，`parse_url()` 可能会返回 `false`。

如果省略了 `$component` 参数，将返回关联数组 `array`。至少会有一个元素出现在数组中。数组中可能的键有以下几种：

- `scheme`——如 `http`
- `host`
- `port`
- `user`
- `pass`
- `path`
- `query`——在问号 `?` 之后
- `fragment`——在注释符号 `#` 之后

如果指定 `$component` 参数，`parse_url()` 返回 `string` （或在指定为 `PHP_URL_PORT` 时返回 `int`）而不是 `array`。如果 URL 中指定的组成部分不存在，将会返回 `null`。自 PHP 8.0.0 起，`parse_url()` 开始对 query 和 fragment 区分不存在和空值。

```text http://example.com/foo → query = null, fragment = null http://example.com/foo? → query = "", fragment = null http://example.com/foo# → query = null, fragment = "" http://example.com/foo?# → query = "", fragment = "" ```

之前所有的情况都会导致 query 和 fragment 为 `null`。

注意组件中的控制字符（参见 `ctype_cntrl()`）替换为下划线（`_`）。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `parse_url()` 现在对 query 和 fragment 区分不存在和空值。 |

## 示例

**`parse_url()` 示例**

```php


<?php
$url = 'http://username:password@hostname:9090/path?arg=value#anchor';

var_dump(parse_url($url));
var_dump(parse_url($url, PHP_URL_SCHEME));
var_dump(parse_url($url, PHP_URL_USER));
var_dump(parse_url($url, PHP_URL_PASS));
var_dump(parse_url($url, PHP_URL_HOST));
var_dump(parse_url($url, PHP_URL_PORT));
var_dump(parse_url($url, PHP_URL_PATH));
var_dump(parse_url($url, PHP_URL_QUERY));
var_dump(parse_url($url, PHP_URL_FRAGMENT));
?>

    
```

以上示例会输出：

```text


array(8) {
  ["scheme"]=>
  string(4) "http"
  ["host"]=>
  string(8) "hostname"
  ["port"]=>
  int(9090)
  ["user"]=>
  string(8) "username"
  ["pass"]=>
  string(8) "password"
  ["path"]=>
  string(5) "/path"
  ["query"]=>
  string(9) "arg=value"
  ["fragment"]=>
  string(6) "anchor"
}
string(4) "http"
string(8) "username"
string(8) "password"
string(8) "hostname"
int(9090)
string(5) "/path"
string(9) "arg=value"
string(6) "anchor"

   
```

**`parse_url()` 解析丢失协议的示例**

```php


<?php
$url = '//www.example.com/path?googleguy=googley';

// 在 5.4.7 之前这会输出路径 "//www.example.com/path"
var_dump(parse_url($url));
?>

    
```

以上示例会输出：

```text


array(3) {
  ["host"]=>
  string(15) "www.example.com"
  ["path"]=>
  string(5) "/path"
  ["query"]=>
  string(17) "googleguy=googley"
}

    
```

## 注释

> `parse_url()` 是专门用来解析 URL 而不是 URI 的。不过为遵从 PHP 向后兼容的需要有个例外，对 `file://` 协议允许三个斜线（`file:///...`）。其它任何协议都不能这样。

## 参见

`pathinfo()` `parse_str()` `http_build_query()` `dirname()` `basename()` [RFC 3986](3986)
