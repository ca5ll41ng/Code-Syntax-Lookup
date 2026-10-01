---
id: "zh-php-function-function-escapeshellcmd"
language: "php"
lang: "zh"
category: "function"
name: "escapeshellcmd"
title: "shell 元字符转义"
signature: "string escapeshellcmd(string $command)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.escapeshellcmd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# shell 元字符转义

## 说明

```php
string escapeshellcmd(string $command)
```

`escapeshellcmd()` 对字符串中可能会欺骗 shell 命令执行任意命令的字符进行转义。 此函数保证用户输入的数据在传送到 `exec()` 或 `system()` 函数，或者 执行操作符 之前进行转义。

反斜线（\）会在以下字符之前插入：`&#;`|*?~<>^()[]{}$\`、`\x0A` 和 `\xFF`。 `'` 和 `"` 仅在不配对儿的时候被转义。在 Windows 平台上，所有这些字符以及 `%` 和 `!` 字符前面都有一个插入符号（`^`）。

## 参数

- **`$command`** — 要转义的命令。

## 返回值

转义后的字符串。

## 示例

**`escapeshellcmd()` example**

```php


<?php
// 我们故意允许任意数量的参数
$command = './configure '.$_POST['configure_options'];

$escaped_command = escapeshellcmd($command);
 
system($escaped_command);
?>

    
```

## 注释

> `escapeshellcmd()` 应被用在完整的命令字符串上。 即使如此，攻击者还是可以传入任意数量的参数。 请使用 `escapeshellarg()` 函数 对单个参数进行转义。

> `escapeshellcmd()` 不会对空格转义，这在 Windows 上对这样的路径（比如`C:\Program Files\ProgramName\program.exe`）可能会有出现问题。可以使用如下代码暂时解决：
>
> ```php
>
>
> <?php
> $cmd = preg_replace('`(?<!^) `', '^ ', escapeshellcmd($cmd));
>
>     
> ```

## 参见

`escapeshellarg()` `exec()` `popen()` `system()` 执行运算符
