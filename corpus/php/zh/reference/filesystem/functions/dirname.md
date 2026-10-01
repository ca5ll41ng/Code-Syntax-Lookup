---
id: "zh-php-function-function-dirname"
language: "php"
lang: "zh"
category: "function"
name: "dirname"
title: "返回路径中的目录部分"
signature: "string dirname(string $path, int $levels = 1)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.dirname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回路径中的目录部分

## 说明

```php
string dirname(string $path, int $levels = 1)
```

给出一个包含有指向一个文件的全路径的字符串，本函数返回去掉文件名后的目录名，且目录深度为 `$levels` 级。

> `dirname()` 纯粹基于输入字符串操作， 它不会受实际文件系统和类似 "`..`" 的路径格式影响。

> 在 Windows 上，`dirname()` 假设当前设置的代码页，因此要查看具有多字节字符路径的正确目录名称，必须设置匹配的代码页。如果 `$path` 包含当前代码页无效的字符，则 `dirname()` 的行为是未定义的。
>
> 在其它系统上，`dirname()` 假设 `$path` 是以 ASCII 兼容编码进行编码的。否则函数的行为是未定义的。

## 参数

- **`$path`** — 一个路径。 — 在 Windows 中，斜线（`/`）和反斜线（`\`）都可以用作目录分隔符。在其它环境下是斜线（`/`）。
- **`$levels`** — 要向上的父目录数量。 — 整型，必须大于 0。

## 返回值

返回 path 的父目录。如果在 `$path` 中没有斜线，则返回一个点（'`.`'），表示当前目录。否则返回的是把 `$path` 中结尾的 `/component`（最后一个斜线以及后面部分）去掉之后的字符串。

> Be careful when using this function in a loop that can reach the top-level directory as this can result in an infinite loop. ```php <?php dirname('.'); // Will return '.'. dirname('/'); // Will return `\` on Windows and '/' on *nix systems. dirname('\\'); // Will return `\` on Windows and '.' on *nix systems. dirname('C:\\'); // Will return 'C:\' on Windows and '.' on *nix systems. ?> ```

## 示例

**`dirname()` 例子**

```php


<?php
echo dirname("/etc/passwd") . PHP_EOL;
echo dirname("/etc/") . PHP_EOL;
echo dirname(".") . PHP_EOL;
echo dirname("C:\\") . PHP_EOL;
echo dirname("/usr/local/lib", 2);

    
```

以上示例的输出类似于：

```text


/etc
/ (or \ on Windows)
.
C:\
/usr

    
```

## 参见

`basename()` `pathinfo()` `realpath()`
