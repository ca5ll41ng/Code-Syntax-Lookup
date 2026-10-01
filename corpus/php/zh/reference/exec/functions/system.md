---
id: "zh-php-function-function-system"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["command_injection"],"cwe":["CWE-78"],"params":[1]},{"type":"source"}]
name: "system"
title: "执行外部程序，并且显示输出"
signature: "string|false system(string $command, int $result_code = null)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.system.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行外部程序，并且显示输出

## 说明

```php
string|false system(string $command, int $result_code = null)
```

同 C 版本的 `system()` 函数一样，本函数执行 `$command` 参数所指定的命令，并且输出执行结果。

如果 PHP 运行在服务器模块中，`system()` 函数还会尝试在每行输出完毕之后，自动刷新 web 服务器的输出缓存。

如果要获取一个命令未经任何处理的原始输出，请使用 `passthru()` 函数。

## 参数

- **`$command`** — 要执行的命令。
- **`$result_code`** — 如果提供 `$result_code` 参数，则外部命令执行后的返回状态将会被设置到此变量中。

## 返回值

成功则返回命令输出的最后一行，失败则返回 `false`

## 示例

**`system()` 示例**

```php


<?php
echo '<pre>';

// 输出 shell 命令 "ls" 的返回结果
// 并且将输出的最后一样内容返回到 $last_line。
// 将命令的返回值保存到 $retval。
$last_line = system('ls', $retval);

// 打印更多信息
echo '
</pre>
<hr />Last line of the output: ' . $last_line . '
<hr />Return value: ' . $retval;
?>

    
```

## 注释

> 当传入用户提供的数据到本函数时，应使用 `escapeshellarg()` 或 `escapeshellcmd()` 来防止用户欺骗系统执行任意命令。

> 如何程序使用此函数启动，为了能保持在后台运行，此程序必须将输出重定向到文件或其它输出流。否则会导致 PHP 挂起，直至程序执行结束。

## 参见

`exec()` `passthru()` `popen()` `escapeshellcmd()` `pcntl_exec()` 执行运算符
