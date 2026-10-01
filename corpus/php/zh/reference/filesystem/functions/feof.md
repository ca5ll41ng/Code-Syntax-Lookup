---
id: "zh-php-function-function-feof"
language: "php"
lang: "zh"
category: "function"
name: "feof"
title: "测试文件指针是否到了文件结束的位置"
signature: "bool feof(resource $stream)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.feof.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 测试文件指针是否到了文件结束的位置

## 说明

```php
bool feof(resource $stream)
```

测试文件指针是否到了文件结束的位。

## 参数

- **`$stream`** — 文件指针必须是有效的，必须指向由 `fopen()` 或 `fsockopen()` 成功打开的文件(并还未由 `fclose()` 关闭)。

## 返回值

如果文件指针到了 EOF 或者出错时则返回 `true`，否则返回一个错误（包括 socket 超时），其它情况则返回 `false`。

## 注释

> 如果服务器没有关闭由 `fsockopen()` 所打开的连接，`feof()` 会一直等待直到超时。要解决这个问题可参见以下范例：
>
> **处理 `feof()` 的超时**
>
> ```php
>
>
> <?php
> function safe_feof($fp, &$start = NULL) {
>  $start = microtime(true);
>
>  return feof($fp);
> }
>
> /* $fp 的赋值是由之前 fsockopen() 打开  */
>
> $start = NULL;
> $timeout = ini_get('default_socket_timeout');
>
> while(!safe_feof($fp, $start) && (microtime(true) - $start) < $timeout)
> {
>  /* Handle */
> }
> ?>
>
>      
> ```

> 如果传递的文件指针无效可能会陷入无限循环中，因为 `feof()` 不会返回 `true`。
>
> **使用无效文件指针的 `feof()` 例子**
>
> ```php
>
>
> <?php
> // 如果文件不可读取或者不存在，fopen 函数返回 FALSE
> $file = @fopen("no_such_file", "r");
>
> // 来自 fopen 的 FALSE 会发出一条警告信息并在这里陷入无限循环
> while (!feof($file)) {
> }
>
> fclose($file);
> ?>
>
>      
> ```
