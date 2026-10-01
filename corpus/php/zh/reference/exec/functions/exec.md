---
id: "zh-php-function-function-exec"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["command_injection"],"cwe":["CWE-78"],"params":[1]},{"type":"source","params":[2]}]
name: "exec"
title: "执行一个外部程序"
signature: "string|false exec(string $command, array $output = null, int $result_code = null)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行一个外部程序

## 说明

```php
string|false exec(string $command, array $output = null, int $result_code = null)
```

`exec()` 执行 `$command` 参数所指定的命令。

## 参数

- **`$command`** — 要执行的命令。
- **`$output`** — 如果提供了 `$output` 参数， 那么会用命令执行的输出填充此数组， 每行输出填充数组中的一个元素。 数组中的数据不包含行尾的空白字符，例如 `\n` 字符。 请注意，如果数组中已经包含了部分元素，`exec()` 函数会在数组末尾追加内容。如果你不想在数组末尾进行追加， 请在传入 `exec()` 函数之前 对数组使用 `unset()` 函数进行重置。
- **`$result_code`** — 如果同时提供 `$output` 和 `$result_code` 参数，命令执行后的返回状态会被写入到此变量。

## 返回值

命令执行结果的最后一行内容。 如果你需要获取未经处理的全部输出数据， 请使用 `passthru()` 函数。

失败时返回 `false`。

如果想要获取命令的输出内容， 请确保使用 `$output` 参数。

## 错误／异常

如果 `exec()` 无法执行 `$command`，会发出 `E_WARNING`。

如果 `$command` 为空或者包含 null 字节，则抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `$command` 为空或者包含 null 字节，`exec()` 现在将抛出 `ValueError`。之前会发出 `E_WARNING` 并返回 `false`。 |

## 示例

**`exec()` 示例**

```php


<?php
// 输出运行中的 php/httpd 进程的创建者用户名
// （在可以执行 "whoami" 命令的系统上）
$output=null;
$retval=null;
exec('whoami', $output, $retval);
echo "Returned with status $retval and output:\n";
print_r($output);
?>

    
```

以上示例的输出类似于：

```text


Returned with status 0 and output:
Array
(
    [0] => cmb
)

    
```

## 注释

> 当传入用户提供的数据到本函数时，应使用 `escapeshellarg()` 或 `escapeshellcmd()` 来防止用户欺骗系统执行任意命令。

> 如何程序使用此函数启动，为了能保持在后台运行，此程序必须将输出重定向到文件或其它输出流。否则会导致 PHP 挂起，直至程序执行结束。

> 在 Windows 下，`exec()` 函数会先启动 cmd.exe 来执行指定的命令。如果你希望启动一个额外的应用而不用先启动 cmd.exe 可使用 `proc_open()` 函数加上 `$bypass_shell` 参数。

## 参见

`system()` `passthru()` `escapeshellcmd()` `pcntl_exec()` 执行运算符
