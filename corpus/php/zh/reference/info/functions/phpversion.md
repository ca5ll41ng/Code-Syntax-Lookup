---
id: "zh-php-function-function-phpversion"
language: "php"
lang: "zh"
category: "function"
name: "phpversion"
title: "获取当前的PHP版本"
signature: "string|false phpversion(string|null $extension = null)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.phpversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前的PHP版本

## 说明

```php
string|false phpversion(string|null $extension = null)
```

返回了包含当前运行 PHP 解释器或扩展版本信息的 string。

## 参数

- **`$extension`** — 可选的扩展名。

## 返回值

以 `string` 形式返回当前 PHP 版本。如果为 `$extension` 提供了 `string` 类型的参数，`phpversion()` 会返回该扩展的版本。如果没有对应的版本信息，或者该扩展未启用，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$extension` 现在可为 null。 |

## 示例

**`phpversion()` 示例**

```php


<?php
// 打印 'Current PHP version: 8.3.12'
echo 'Current PHP version: ' . phpversion();

// 打印 '2.0'，如果扩展未启用则不输出
echo phpversion('tidy');
?>

    
```

**`PHP_VERSION_ID` 示例和用法**

```php


<?php

/**
 * PHP_VERSION_ID 定义为一个数字，PHP 版本越高，数字越大。
 * 使用下列表达式定义
 *
 * $version_id = $major_version * 10000 + $minor_version * 100 + $release_version;
 *
 * 现在可以通过 PHP_VERSION_ID 来检查 PHP 版本，
 * 而不用每次都必须用 version_compare() 来检查 PHP 是否支持某个功能。
 *
 * 比如，可以在此定义一系列 PHP_*_VERSION 常量，
 * 而在 5.2.7 之前的版本并没有定义。
 */

if (PHP_VERSION_ID < 50207) {
    define('PHP_MAJOR_VERSION',   $version[0]);
    define('PHP_MINOR_VERSION',   $version[1]);
    define('PHP_RELEASE_VERSION', $version[2]);

    // 等等， ...
}

?>

    
```

## 注释

> 这些信息也存在于预定义常量 `PHP_VERSION` 里。更多版本的信息可以使用常量 `PHP_{*}_VERSION`。

> 许多扩展可能会定义它们自己的版本号。然而，大多数捆绑版本将会使用 PHP 版本作为他们的版本号。

> 一些扩展可能会定义他们自己的版本号。 然而，大多数内置的扩展会使用 PHP 版本作为它们的版本号。

## 参见

常量 PHP_VERSION `version_compare()` `phpinfo()` `phpcredits()` `zend_version()`
