---
id: "zh-php-function-function-php-sapi-name"
language: "php"
lang: "zh"
category: "function"
name: "php_sapi_name"
title: "返回 web 服务器和 PHP 之间的接口类型"
signature: "string|false php_sapi_name()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.php-sapi-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 web 服务器和 PHP 之间的接口类型

## 说明

```php
string|false php_sapi_name()
```

返回描述 PHP 所使用的接口类型（the Server API, SAPI）的小写字符串。 例如，CLI 的 PHP 下这个字符串会是 "cli"，Apache 下可能会有几个不同的值，取决于具体使用的 SAPI。 以下列出了可能的值。

## 参数

此函数没有参数。

## 返回值

返回接口类型的小写字符串， 或者在失败时返回 `false`。

尽管不够全面，可能返回的值包括了 `apache`、`apache2handler`、`cgi`（直到 PHP 5.3）、`cgi-fcgi`、`cli`、`cli-server`、`embed`、`fpm-fcgi`、`litespeed`、`phpdbg`。

## 示例

**`php_sapi_name()` 示例**

以下示例检测了子字符串 `cgi`，因为它也有可能会是 `cgi-fcgi`。

```php


<?php
$sapi_type = php_sapi_name();
if (substr($sapi_type, 0, 3) == 'cgi') {
    echo "You are using CGI PHP\n";
} else {
    echo "You are not using CGI PHP\n";
}
?>

    
```

## 注释

> 另一种方法
>
> PHP 常量 `PHP_SAPI` 具有和 `php_sapi_name()` 相同的值。

> 一个潜在的疑难问题
>
> 定义的 SAPI 可能不够明显，比如它可能定义为 `apache2handler`，而不是 `apache`。

## 参见

PHP_SAPI
