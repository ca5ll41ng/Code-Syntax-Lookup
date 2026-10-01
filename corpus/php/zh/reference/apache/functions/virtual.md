---
id: "zh-php-function-function-virtual"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["file_inclusion"],"cwe":["CWE-98"],"params":[1]}
name: "virtual"
title: "执行 Apache 子请求"
signature: "bool virtual(string $uri)"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.virtual.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行 Apache 子请求

## 说明

```php
bool virtual(string $uri)
```

`virtual()` 是一个 Apache 特有函数， 类似于 `mod_include` 中的 `<!--#include virtual...-->`。 它执行一个 Apache 子请求。可用于包含一个 CGI 脚本或 `.shtml` 文件，或任何其它可通过 Apache 解析的请求。注意对一个 CGI 脚本，该脚本 生成合法的 CGI 头，至少必须 生成`Content-Type` 头。

为运行子请求，所有缓冲将中止并刷新至浏览器，包括头信息。

仅在 PHP 以 Apache 模块运行时，才支持此函数。

## 参数

- **`$uri`** — virtual命令将执行的文件

## 返回值

成功执行 virtual 命令，或失败时返回 `false` 。

## 示例

示例请看 `apache_note()` 。

## 注释

> 查询字符串可被传递至被包含文件，但是 `$_GET` 是拷贝于父文件，仅有 `$_SERVER['QUERY_STRING']` 将填充传递入的查询字符串。 且此查询字符串只在使用 Apache 2 时被填充。 此请求文件将不会显示在 Apache 访问日志中。

> 在被请求文件中设置的环境变量在原请求文件中不可见。

> 此函数可以用于 PHP 文件。然而一般来说对 PHP 文件最好是使用 `include()` 或者 `require()`。

## 参见

`apache_note()`
