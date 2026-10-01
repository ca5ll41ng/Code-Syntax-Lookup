---
id: "zh-php-function-function-pcntl-exec"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["command_injection"],"cwe":["CWE-78"],"params":[1]}
name: "pcntl_exec"
title: "在当前进程空间执行指定程序"
signature: "false pcntl_exec(string $path, array $args = [], array $env_vars = [])"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在当前进程空间执行指定程序

## 说明

```php
false pcntl_exec(string $path, array $args = [], array $env_vars = [])
```

以给定参数执行程序。

## 参数

- **`$path`** — `$path` 必须时可执行二进制文件路径或一个在文件第一行指定了 一个可执行文件路径标头的脚本（比如文件第一行是 #!/usr/local/bin/perl 的 perl 脚本）。 更多的信息请查看您系统的 execve（2）手册。
- **`$args`** — `$args` 是一个要传递给程序的参数的字符串数组。
- **`$env_vars`** — `$env_vars` 是一个要传递给程序作为环境变量的字符串数组。这个数组是 key => value 格式的，key 代表要传递的环境变量的名称，value 代表该环境变量值。

## 返回值

返回 `false`。
