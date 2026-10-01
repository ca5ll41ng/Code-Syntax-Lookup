---
id: "zh-php-function-function-fopen"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "fopen"
title: "打开文件或者 URL"
signature: "resource|false fopen(string $filename, string $mode, bool $use_include_path = false, resource|null $context = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fopen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开文件或者 URL

## 说明

```php
resource|false fopen(string $filename, string $mode, bool $use_include_path = false, resource|null $context = null)
```

`fopen()` 将由 `$filename` 指定的命名资源绑定到流。

## 参数

- **`$filename`** — 如果 `$filename` 是 "scheme://..." 的格式，则被当成一个 URL，PHP 将搜索协议处理器（也被称为封装协议）来处理此模式。如果该协议尚未注册封装协议，PHP 将发出一条消息来帮助检查脚本中潜在的问题并将 `$filename` 当成一个普通的文件名继续执行下去。 — 如果 PHP 认为 `$filename` 指定的是一个本地文件，将尝试在该文件上打开一个流。该文件必须是 PHP 可以访问的，因此需要确认文件访问权限允许该访问。如果激活了 open_basedir 则会应用进一步的限制。 — 如果 PHP 认为 `$filename` 指定的是一个已注册的协议，而该协议被注册为一个网络 URL，PHP 将检查并确认 allow_url_fopen 已被激活。如果关闭了，PHP 将发出一个警告，而 `fopen()` 的调用则失败。
  > 所支持的协议列表见`wrappers`。某些协议（也被称为 `wrappers`）支持 `context` 和／或 php.ini 选项。参见相应的页面哪些选项可以被设定（例如 php.ini 中用于 `http` wrapper 的 `user_agent` 值）。

 — 在 Windows 平台上，注意对文件路径中的反斜线进行转义，或者使用斜线。 ```php <?php $handle = fopen("c:\\folder\\resource.txt", "r"); ?> ```
- **`$mode`** — `$mode` 参数指定了所要求到该流的访问类型。可以是以下： | `$mode` | 说明 | | --- | --- | | `'r'` | 只读方式打开，将文件指针指向文件头。 | | `'r+'` | 读写方式打开，将文件指针指向文件头。 | | `'w'` | 写入方式打开，将文件指针指向文件头并将文件大小截为零。如果文件不存在则尝试创建之。 | | `'w+'` | 读写方式打开，否则行为同 `'w'`。 | | `'a'` | 写入方式打开，将文件指针指向文件末尾。如果文件不存在则尝试创建之。在这种情况下，`fseek()` 没有效果，写入总是追加。 | | `'a+'` | 读写方式打开，将文件指针指向文件末尾。如果文件不存在则尝试创建之。在这种情况下，`fseek()` 只相应读取位置，写入总是追加。 | | `'x'` | 创建并以写入方式打开，将文件指针指向文件头。如果文件已存在，则 `fopen()` 调用失败并返回 `false`，并生成一条 `E_WARNING` 级别的错误信息。如果文件不存在则尝试创建之。这和给底层的 `open(2)` 系统调用指定 `O_EXCL\|O_CREAT` 标记是等价的。 | | `'x+'` | 创建并以读写方式打开，其他的行为和 `'x'` 一样。 | | `'c'` | 以只写模式打开文件。如果文件不存在，则创建该文件；如果文件已存在，既不会截断文件（与 `'w'` 不同），也不会导致函数调用失败（与 `'x'` 不同）。文件指针位于文件开头。如果希望在尝试修改文件之前获取劝告锁（参见 `flock()`），这可能很有用，因为使用 `'w'` 模式可能会在获取锁之前截断文件（如果需要截断，可以在请求锁后使用 `ftruncate()`）。 | | `'c+'` | 以读写模式打开文件；除此之外，其行为与 `'c'` 相同。 | | `'e'` | 在打开的文件描述符上设置 close-on-exec flag。仅在符合 POSIX.1-2008 标准的系统上编译的 PHP 中可用。 | | `'n'` | 在打开的文件描述符上设置非阻塞 flag。仅在符合 POSIX.1-2008 标准的系统上编译的 PHP 中可用。 |
  > 不同的操作系统家族具有不同的行结束习惯。当写入一个文本文件并想插入一个新行时，需要使用符合操作系统的行结束符号。基于 Unix 的系统使用 `\n` 作为行结束字符，基于 Windows 的系统使用 `\r\n` 作为行结束字符，基于 Macintosh 的系统（传统 Mac OS）使用 `\r` 作为行结束字符。
  >
  > 如果写入文件时使用了错误的行结束符号，则其它应用程序打开这些文件时可能会表现得很怪异。
  >
  > Windows 下提供了一个文本转换标记（`'t'`）可以透明地将 `\n` 转换为 `\r\n`。与此对应还可以使用 `'b'` 来强制使用二进制模式，这样就不会转换数据。要使用这些标记，要么用 `'b'` 或者用 `'t'` 作为 `$mode` 参数的最后一个字符。
  >
  > 默认的转换模式是 `'b'`。如果是操作纯文本文件并在脚本中使用了 `\n` 作为行结束符，但还要期望这些文件可以被其它应用程序例如 旧版本的 Notepad 读取，则在 mode 中使用 `'t'`。在所有其它情况下使用 `'b'`。
  >
  > 在操作二进制文件时如果指定 `'t'` 标记，可能会碰到一些奇怪的问题，包括坏掉的图片文件以及关于 `\r\n` 字符的奇怪问题。


  > 为移植性考虑，强烈建议重写那些依赖于 `'t'` 模式的代码使其使用正确的行结束符并改成 `'b'` 模式。


  > 对于 `php://output`、`php://input`、`php://stdin`、`php://stdout`、`php://stderr` 和 `php://fd` 流封装协议，会忽略 `$mode`。


- **`$use_include_path`** — 如果也需要在 include_path 中搜寻文件的话，可以将可选的第三个参数 `$use_include_path` 设为 `true`。
- **`$context`** — 上下文流（context stream） `resource`。

## 返回值

成功时返回文件指针资源， 或者在失败时返回 `false`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.0.16, 7.1.2 | 新增 `'e'` 选项。 |

## 示例

**`fopen()` 示例**

```php


<?php
$handle = fopen("/home/rasmus/file.txt", "r");
$handle = fopen("/home/rasmus/file.gif", "wb");
$handle = fopen("http://www.example.com/", "r");
$handle = fopen("ftp://user:password@example.com/somefile.txt", "w");
?>

    
```

## 注释

> 使用 SSL 时，Microsoft IIS 会违反协议不发送 `close_notify` 标记就关闭连接。PHP 会在到达数据尾端时报告“SSL: Fatal Protocol Error”。 要解决此问题，error_reporting 应设定为降低级别至不包含警告。PHP 4.3.7 及更高版本可以在使用 `https://` 包装器打开流时检测出有问题的 IIS 服务器软件 并抑制警告。在使用 `fsockopen()` 创建 `ssl://` 套接字时，开发者需检测并抑制此警告。

> 如果在用服务器模块版本的 PHP 时在打开和写入文件上遇到问题，记住要确保所使用的文件和目录是服务器进程所能够访问的。

> 当 `$filename` 为目录时，此函数也可能成功。如果不确定 `$filename` 是文件还是目录，则在调用 `fopen()` 之前可能需要使用 `is_dir()` 函数进行判断。

## 参见

`wrappers` `fclose()` `fgets()` `fread()` `fwrite()` `fsockopen()` `file()` `file_exists()` `is_readable()` `stream_set_timeout()` `popen()` `stream_context_create()` `umask()` `SplFileObject`
