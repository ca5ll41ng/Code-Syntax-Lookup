---
id: "zh-php-function-function-file"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]},{"type":"source"}]
name: "file"
title: "把整个文件读入一个数组中"
signature: "array|false file(string $filename, int $flags = 0, resource|null $context = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 把整个文件读入一个数组中

## 说明

```php
array|false file(string $filename, int $flags = 0, resource|null $context = null)
```

把整个文件读入一个数组中。

> 你可以通过 `file_get_contents()` 以字符串形式获取文件的内容。

## 参数

- **`$filename`** — 文件的路径。
  > 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。


- **`$flags`** — 可选参数 `$flags` 可以是以下一个或多个常量： - **`FILE_USE_INCLUDE_PATH`** — 在 include_path 中查找文件。 - **`FILE_IGNORE_NEW_LINES`** — 省略数组中每个元素末尾的换行符。 - **`FILE_SKIP_EMPTY_LINES`** — 跳过空行。 - **`FILE_NO_DEFAULT_CONTEXT`** — 不使用默认的上下文。
- **`$context`** — 上下文流（context stream） `resource`。

## 返回值

返回数组形式的文件内容。数组的每个元素对应于文件中的一行（结尾会附加换行符）。 失败时，`file()` 返回 `false`。

> 除非使用了 `FILE_IGNORE_NEW_LINES` ，否则结果数组中的每一行都将包含行尾。

> 在 PHP 8.1.0 之前， 可以启用 auto_detect_line_endings 运行时配置选项，帮助 PHP 正确识别读取 Macintosh 系统创建的文件时的行结束符。 此选项自 PHP 8.1.0 起弃用。如有必要，请改为手动处理 `"\r"` 换行符。

## 错误／异常

自 PHP 8.3.0 起，如果 `$flags` 包含任意无效值（例如 `FILE_APPEND`），则会抛出 ValueError。

如果文件不存在，则发出 `E_WARNING` 级错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | `$flags` 包含任意无效值会抛出 ValueError。 |

## 示例

**`file()` 示例**

```php


<?php
// 将一个文件读入数组。本例中通过 HTTP 从 URL 中取得 HTML 源文件。

$lines = file('http://www.example.com/');

// 在数组中循环，显示 HTML 的源文件并加上行号。

foreach ($lines as $line_num => $line) {
    echo "Line #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br />\n";
}

// 使用可选的 flags 参数
$trimmed = file('somefile.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
?>

    
```

## 注释

> 使用 SSL 时，Microsoft IIS 会违反协议不发送 `close_notify` 标记就关闭连接。PHP 会在到达数据尾端时报告“SSL: Fatal Protocol Error”。 要解决此问题，error_reporting 应设定为降低级别至不包含警告。PHP 4.3.7 及更高版本可以在使用 `https://` 包装器打开流时检测出有问题的 IIS 服务器软件 并抑制警告。在使用 `fsockopen()` 创建 `ssl://` 套接字时，开发者需检测并抑制此警告。

## 参见

`file_get_contents()` `readfile()` `fopen()` `fsockopen()` `popen()` `include()` `stream_context_create()`
