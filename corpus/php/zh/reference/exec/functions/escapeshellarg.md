---
id: "zh-php-function-function-escapeshellarg"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "escapeshellarg"
title: "把字符串转义为可以在 shell 命令里使用的参数"
signature: "string escapeshellarg(string $arg)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.escapeshellarg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 把字符串转义为可以在 shell 命令里使用的参数

## 说明

```php
string escapeshellarg(string $arg)
```

`escapeshellarg()` 将给字符串增加一个单引号并且能引用或者转义任何已经存在的单引号，这样以确保能够直接将一个字符串传入 shell 函数，并且还是确保安全的。对于用户输入的部分参数就应该使用这个函数。shell 函数包含`exec()`、`system()` 和执行运算符 。

在 Windows 上，`escapeshellarg()` 用空格替换了百分号、感叹号（延迟变量替换）和双引号，并在字符串两边加上双引号。此外，每条连续的反斜线(`\`)都会被一个额外的反斜线所转义。

## 参数

- **`$arg`** — 需要被转义的参数。

## 返回值

转换之后字符串。

## 示例

**`escapeshellarg()` 的例子**

```php


<?php
system('ls '.escapeshellarg($dir));
?>

    
```

## 参见

`escapeshellcmd()` `exec()` `popen()` `system()` 执行运算符
