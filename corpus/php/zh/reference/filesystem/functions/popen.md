---
id: "zh-php-function-function-popen"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["command_injection"],"cwe":["CWE-78"],"params":[1]}
name: "popen"
title: "打开进程文件指针"
signature: "resource|false popen(string $command, string $mode)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.popen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开进程文件指针

## 说明

```php
resource|false popen(string $command, string $mode)
```

打开一个指向进程的管道，该进程由派生给定的 command 命令执行而产生。

## 参数

- **`$command`** — 命令。
- **`$mode`** — 模式。`'r'` 表示阅读，`'w'` 表示写入。 — 在 Windows 上，`popen()` 默认是文本模式，即任何从管道中读取/写入的 `\n` 字符都将转换为 `\r\n`。如果避免这种情况，可以通过将 `$mode` 设置为 `'rb'` 和 `'wb'` 来强制执行二进制模式。

## 返回值

返回一个和 `fopen()` 所返回的相同的文件指针，只不过它是单向的（只能用于读或写）并且必须用 `pclose()` 来关闭。此指针可以用于 `fgets()`，`fgetss()` 和 `fwrite()`。 当模式为 'r'，返回的文件指针等于命令的 STDOUT，当模式为 'w'，返回的文件指针等于命令的 STDIN。

如果出错返回 `false`。

## 示例

**`popen()` 例子**

```php


<?php
$handle = popen("/bin/ls", "r");
?>

    
```

如果未找到要执行的命令，会返回一个合法的资源。这看上去很怪，但有道理。它允许访问 shell 返回的任何错误信息：

**`popen()` 例子**

```php


<?php
error_reporting(E_ALL);

/* 加入重定向以得到标准错误输出 stderr。 */
$handle = popen('/path/to/executable 2>&1', 'r');
echo "'$handle'; " . gettype($handle) . "\n";
$read = fread($handle, 2096);
echo $read;
pclose($handle);
?>

    
```

## 注释

> 如果需要双向支持，使用 `proc_open()`。

## 参见

`pclose()` `fopen()` `proc_open()`
