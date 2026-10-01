---
id: "zh-php-function-function-file-get-contents"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]},{"type":"source"}]
name: "file_get_contents"
title: "将整个文件读入一个字符串"
signature: "string|false file_get_contents(string $filename, bool $use_include_path = false, resource|null $context = null, int $offset = 0, int|null $length = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.file-get-contents.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将整个文件读入一个字符串

## 说明

```php
string|false file_get_contents(string $filename, bool $use_include_path = false, resource|null $context = null, int $offset = 0, int|null $length = null)
```

和 `file()` 一样，只除了 `file_get_contents()` 把文件读入一个字符串。将在参数 `$offset` 所指定的位置开始读取长度为 `$length` 的内容。如果失败，`file_get_contents()` 将返回 `false`。

`file_get_contents()` 函数是用来将文件的内容读入到一个字符串中的首选方法。如果操作系统支持还会使用内存映射技术来增强性能。

> 如果要打开有特殊字符的 URL （比如说有空格），就需要使用 `urlencode()` 进行 URL 编码。

## 参数

- **`$filename`** — 要读取的文件的名称。
- **`$use_include_path`**
  > 常量 `FILE_USE_INCLUDE_PATH` 用于触发搜索 include path。 因为 `FILE_USE_INCLUDE_PATH` 是个 `int`，如果开启了严格类型 将无法启用。 所以要用 `true` 来代替常量。


- **`$context`** — `stream_context_create()` 创建的有效的上下文（context）资源。 如果你不需要自定义 context，可以用 `null` 来忽略。
- **`$offset`** — 读取原始数据流的开始位置偏移量。负的 offset 会从数据流的末尾开始统计。 — 远程文件不支持偏移量寻址（`$offset`）。 对远程文件以较小的 offset 可能可以正常寻址， 但由于是对缓冲流进行操作，所以操作结果不可预测。
- **`$length`** — 要读取数据的最大长度。 默认情况下会读到文件末尾。 注意，该参数会应用到处理 stream 的过滤器（filter）中。

## 返回值

函数返回读取到的数据， 或者在失败时返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 错误／异常

以下情况会导致 `E_WARNING` 级别错误： 无法找到 `$filename` 文件； `$length` 小于零； 在 steam 中无法寻址偏移量 `$offset`。

Windows 下用 `file_get_contents()` 读取目录会导致 `E_WARNING` 错误。 PHP 7.4 起，其他操作系统也会出现同样错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$length` 允许为 null。 |
| 7.1.0 | 支持负数 `$offset`。 |

## 示例

**获取并输出网站首页 HTML 源码**

```php


<?php
$homepage = file_get_contents('http://www.example.com/');
echo $homepage;
?>

    
```

**在 include_path 里搜索**

```php


<?php
// 如果开启了严格类型，例如 declare(strict_types=1);
$file = file_get_contents('./people.txt', true);
// 否则就这样写
$file = file_get_contents('./people.txt', FILE_USE_INCLUDE_PATH);
?>

    
```

**读取文件一小节**

```php


<?php
// 从第 21 个字符开始，读取 14 字符长度
$section = file_get_contents('./people.txt', FALSE, NULL, 20, 14);
var_dump($section);
?>

    
```

以上示例的输出类似于：

```text


string(14) "lle Bjori Ro" 

    
```

**使用 stream 上下文（context）**

```php


<?php
// 创建 stream
$opts = [
  'http' => [
    'method' => "GET",
    'header' => "Accept-language: en\r\n" .
                "Cookie: foo=bar",
  ]
];

$context = stream_context_create($opts);

// 以下面设置的 HTTP 头来打开文件
$file = file_get_contents('http://www.example.com/', false, $context);
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

> 使用 SSL 时，Microsoft IIS 会违反协议不发送 `close_notify` 标记就关闭连接。PHP 会在到达数据尾端时报告“SSL: Fatal Protocol Error”。 要解决此问题，error_reporting 应设定为降低级别至不包含警告。PHP 4.3.7 及更高版本可以在使用 `https://` 包装器打开流时检测出有问题的 IIS 服务器软件 并抑制警告。在使用 `fsockopen()` 创建 `ssl://` 套接字时，开发者需检测并抑制此警告。

## 参见

`file()` `fgets()` `fread()` `readfile()` `file_put_contents()` `stream_get_contents()` `stream_context_create()` $http_response_header
