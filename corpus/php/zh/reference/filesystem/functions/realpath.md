---
id: "zh-php-function-function-realpath"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "realpath"
title: "返回规范化的绝对路径名"
signature: "string|false realpath(string $path)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.realpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回规范化的绝对路径名

## 说明

```php
string|false realpath(string $path)
```

`realpath()` 扩展所有符号连接，并处理输入 `$path` 中的 `/./`、`/../` 和多余的 `/`，并返回规范化的绝对路径名。

## 参数

- **`$path`** — 要处理的路径。 > 虽然必须提供路径，但该值可以是一个空字符串。 在这种情况下，该值将被解释为当前目录。

## 返回值

成功时返回规范化的绝对路径名。返回的路径中没有符号连接（symbolic link）、`/./` 或 `/../` 成分。 例如 `\` 和 `/` 这样的尾随分隔符也将被删除。

`realpath()` 失败时返回 `false`，例如文件不存在。

> 当前运行的脚本必须对要处理的路径中的每层目录都具有可执行权限，否则 `realpath()` 将返回 `false`。

> 对于不区分大小写的文件系统，`realpath()` 不一定会规范字符大小写。

> `realpath()` 函数不适用于 Phar 内的文件，因为该路径是虚拟路径，而不是真实路径。

> 在 Windows 上，目录的结点和符号链接仅扩展一级。

> 因为 PHP 的整数类型是有符号整型而且很多平台使用 32 位整型，对 2GB 以上的文件，一些文件系统函数可能返回无法预期的结果。

## 示例

**`realpath()` 例子**

```php


<?php
chdir('/var/www/');
echo realpath('./../../etc/passwd') . PHP_EOL;

echo realpath('/tmp/') . PHP_EOL;
?>

    
```

以上示例会输出：

```text


/etc/passwd
/tmp

    
```

**Windows 上的 `realpath()`**

在 Windows 上，`realpath()` 会将 unix 风格的路径改成 Windows 风格。

```php


<?php
echo realpath('/windows/system32'), PHP_EOL;

echo realpath('C:\Program Files\\'), PHP_EOL;
?>

    
```

以上示例会输出：

```text


C:\WINDOWS\System32
C:\Program Files

    
```

## 参见

`basename()` `dirname()` `pathinfo()`
