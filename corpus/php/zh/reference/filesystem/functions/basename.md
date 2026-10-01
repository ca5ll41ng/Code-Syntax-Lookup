---
id: "zh-php-function-function-basename"
language: "php"
lang: "zh"
category: "function"
name: "basename"
title: "返回路径中的文件名部分"
signature: "string basename(string $path, string $suffix = \"\")"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.basename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回路径中的文件名部分

## 说明

```php
string basename(string $path, string $suffix = "")
```

给出一个包含有指向一个文件的全路径的字符串，本函数返回基本的文件名。

> `basename()` 纯粹基于输入字符串操作， 它不会受实际文件系统和类似 "`..`" 的路径格式影响。

> `basename()` 是本地化的，所以如果要正确处理多字节字符的路径，需要用 `setlocale()` 正确设置匹配的 locale。如果 `$path` 包含当前区域设置无效的字符，`basename()` 的行为未定义。

## 参数

- **`$path`** — 一个路径。 — 在 Windows 中，斜线（`/`）和反斜线（`\`）都可以用作目录分隔符。在其它环境下是斜线（`/`）。
- **`$suffix`** — 如果文件名是以 `$suffix` 结束的，那这一部分也会被去掉。

## 返回值

返回指定 `$path` 的基本名称。

## 示例

**`basename()` 例子**

```php


<?php
echo "1) ".basename("/etc/sudoers.d", ".d").PHP_EOL;
echo "2) ".basename("/etc/sudoers.d").PHP_EOL;
echo "3) ".basename("/etc/passwd").PHP_EOL;
echo "4) ".basename("/etc/").PHP_EOL;
echo "5) ".basename(".").PHP_EOL;
echo "6) ".basename("/");
?>

    
```

以上示例会输出：

```text


1) sudoers
2) sudoers.d
3) passwd
4) etc
5) .
6) 

    
```

## 参见

`dirname()` `pathinfo()`
