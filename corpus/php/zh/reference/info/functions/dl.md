---
id: "zh-php-function-function-dl"
language: "php"
lang: "zh"
category: "function"
name: "dl"
title: "运行时载入一个 PHP 扩展"
signature: "bool dl(string $extension_filename)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.dl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时载入一个 PHP 扩展

## 说明

```php
bool dl(string $extension_filename)
```

载入指定参数 `$extension_filename` 的 PHP 扩展。

使用 `extension_loaded()` 来测试指定的扩展是否已经激活。 这既能用于内建的扩展也可以用于动态加载的扩展（既可以通过 php.ini 也可以通过 `dl()`）。

> 此函数仅适用于 CLI 和嵌入式 SAPI，以及从命令行运行时的 CGI SAPI。

## 参数

- **`$extension_filename`** — 此参数*仅仅*是要加载的扩展的文件名，依赖于你的平台。 比如，sockets（作为共享模块编译，而不是默认的！）在 Unix 平台上称为 `sockets.so` 而 在 Windows 平台上是 `php_sockets.dll`。 — 扩展加载的目录依赖于你的平台： — Windows - 如果没有在 php.ini 里明确设置，扩展默认会从 `C:\php5\` 加载。 — Unix - 如果没有在 php.ini 里明确设置，默认的扩展目录依赖于 - PHP 是否通过 `--enable-debug` 选项构建 - PHP 是否以 ZTS （Zend 线程安全）支持构建 - 当前的内部 `ZEND_MODULE_API_NO`（Zend 内部模块 API 数字，基本上是主要模块修改时的日期） 考虑到上述，目录默认为 `<install-dir>/lib/php/extensions/ <debug-or-not>-<zts-or-not>-ZEND_MODULE_API_NO`，例如 `/usr/local/php/lib/php/extensions/debug-non-zts-20010901` 或 `/usr/local/php/lib/php/extensions/no-debug-zts-20010901`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果加载模块的功能是无效或者禁用的（可以关闭 enable_dl 设置）将导致一个 `E_ERROR` 并中断执行。 如果因为指定的库无法加载而导致 `dl()` 失败，除了返回 `false`，还会产生一个 `E_WARNING` 的消息。

## 示例

**`dl()` 示例**

```php


<?php
// 加载一个扩展的示例，基于操作系统
if (!extension_loaded('sqlite')) {
    if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
        dl('php_sqlite.dll');
    } else {
        dl('sqlite.so');
    }
}

// 或者，使用常量 PHP_SHLIB_SUFFIX 
if (!extension_loaded('sqlite')) {
    $prefix = (PHP_SHLIB_SUFFIX === 'dll') ? 'php_' : '';
    dl($prefix . 'sqlite.' . PHP_SHLIB_SUFFIX);
}
?>

    
```

## 注释

> 在某些 Unix 平台上，`dl()` 是大小写敏感的。

## 参见

扩展加载指令 `extension_loaded()`
