---
id: "zh-php-function-function-shell-exec"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["command_injection"],"cwe":["CWE-78"],"params":[1]},{"type":"source"}]
name: "shell_exec"
title: "通过 shell 执行命令并将完整的输出以字符串的方式返回"
signature: "string|false|null shell_exec(string $command)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.shell-exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过 shell 执行命令并将完整的输出以字符串的方式返回

## 说明

```php
string|false|null shell_exec(string $command)
```

本函数同执行运算符。

> 在 Windows 上，底层管道以文本模式打开，这可能导致函数无法进行二进制输出。考虑使用 `popen()` 避免这种情况。

## 参数

- **`$command`** — 要执行的命令。

## 返回值

`string` 包含已执行命令的输出，如果无法建立管道，则为 `false`，如果发生错误或者命令不产生输出则为 `null`

> 当进程执行过程中发生错误，或者进程不产生输出的情况下，都会返回 `null`。使用本函数无法检测执行是否成功。当需要访问程序退出代码时，应使用 `exec()`。

## 错误／异常

无法建立管道时会产生 `E_WARNING` 级别的错误。

## 示例

**`shell_exec()` 示例**

```php


<?php
$output = shell_exec('ls -lart');
echo "<pre>$output</pre>";
?>

    
```

## 参见

`exec()` `escapeshellcmd()`
