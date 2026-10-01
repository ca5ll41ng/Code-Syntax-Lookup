---
id: "zh-php-function-function-php-uname"
language: "php"
lang: "zh"
category: "function"
name: "php_uname"
title: "返回运行 PHP 的系统的有关信息"
signature: "string php_uname(string $mode = \"a\")"
module: "info"
source_url: "https://www.php.net/manual/zh/function.php-uname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回运行 PHP 的系统的有关信息

## 说明

```php
string php_uname(string $mode = "a")
```

`php_uname()` 返回了运行 PHP 的操作系统的描述。 这和 `phpinfo()` 最顶端上输出的是同一个字符串。 如果仅仅要获取操作系统的名称。可以考虑使用常量 `PHP_OS`，不过要注意该常量会包含 PHP 构建（*built*）时的操作系统名。

在一些旧的 UNIX 平台，它有可能无法检测到当前系统的信息，然后会还原显示成构建 PHP 时的系统信息。 这仅仅在你的 uname() 函数库不存在或无法运行时发生。

## 参数

- **`$mode`** — `$mode` 是单个字符，用于定义要返回什么信息： - `'a'`：此为默认。返回与空格分隔的单独模式 `'s'` `'n'` `'r'` `'v'` `'m'` 相同的信息。 - `'s'`：操作系统名称。例如： `FreeBSD`。 - `'n'`：主机名。例如： `localhost.example.com`。 - `'r'`：版本名称，例如： `5.1.2-RELEASE`。 - `'v'`：版本信息。操作系统之间有很大的不同。 - `'m'`：机器类型。例如：`i386`。

## 返回值

返回描述字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 当指定的 `$mode` 无效时，抛出 `ValueError`。 |

## 示例

**一些 `php_uname()` 示例**

```php


<?php
echo php_uname();
echo PHP_OS;

/* 比如有些会输出：
Linux localhost 2.4.21-0.13mdk #1 Fri Mar 14 15:08:06 EST 2003 i686
Linux

FreeBSD localhost 3.2-RELEASE #15: Mon Dec 17 08:46:02 GMT 2001
FreeBSD

Windows NT XN1 5.1 build 2600
WINNT
*/

if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
    echo 'This is a server using Windows!';
} else {
    echo 'This is a server not using Windows!';
}

?>

    
```

同样可以方便地使用一些相关的 PHP 预定义常量，例如：

**一些系统相关常量的示例**

```php


<?php
// *nix
echo DIRECTORY_SEPARATOR; // /
echo PHP_SHLIB_SUFFIX;    // so
echo PATH_SEPARATOR;      // :

// Win*
echo DIRECTORY_SEPARATOR; // \
echo PHP_SHLIB_SUFFIX;    // dll
echo PATH_SEPARATOR;      // ;
?>

    
```

## 参见

`phpversion()` `php_sapi_name()` `phpinfo()`
