---
id: "zh-php-function-function-passthru"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["command_injection"],"cwe":["CWE-78"],"params":[1]}
name: "passthru"
title: "执行外部程序并且显示原始输出"
signature: "false|null passthru(string $command, int $result_code = null)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.passthru.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行外部程序并且显示原始输出

## 说明

```php
false|null passthru(string $command, int $result_code = null)
```

同 `exec()` 函数类似， `passthru()` 函数 也是用来执行外部命令（`$command`）的。 当所执行的 Unix 命令输出二进制数据， 并且需要直接传送到浏览器的时候， 需要用此函数来替代 `exec()` 或 `system()` 函数。 常用来执行诸如 pbmplus 之类的可以直接输出图像流的命令。 通过设置 Content-type 为 `image/gif`， 然后调用 pbmplus 程序输出 gif 文件， 就可以从 PHP 脚本中直接输出图像到浏览器。

## 参数

- **`$command`** — 要执行的命令。
- **`$result_code`** — 如果提供 `$result_code` 参数， Unix 命令的返回状态会被记录到此参数。

## 返回值

成功时返回 `null`， 或者在失败时返回 `false`。

## 错误／异常

如果 `passthru()` 无法执行 `$command`，会发出 `E_WARNING`。

如果 `$command` 为空或者包含 null 字节，则抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `$command` 为空或者包含 null 字节，`passthru()` 现在将抛出 `ValueError`。之前会发出 `E_WARNING` 并返回 `false`。 |

## 注释

> 当传入用户提供的数据到本函数时，应使用 `escapeshellarg()` 或 `escapeshellcmd()` 来防止用户欺骗系统执行任意命令。

> 如何程序使用此函数启动，为了能保持在后台运行，此程序必须将输出重定向到文件或其它输出流。否则会导致 PHP 挂起，直至程序执行结束。

## 参见

`exec()` `system()` `popen()` `escapeshellcmd()` 执行运算符
