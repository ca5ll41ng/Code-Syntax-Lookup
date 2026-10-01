---
id: "zh-php-function-wrappers-php"
language: "php"
lang: "zh"
category: "function"
name: "php://"
title: "访问各个输入/输出流（I/O streams）"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.php.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 访问各个输入/输出流（I/O streams）

## 说明

PHP 提供了一些杂项输入/输出（IO）流，允许访问 PHP 的输入输出流、标准输入输出和错误描述符， 内存中、磁盘备份的临时文件流以及可以操作其他读取写入文件资源的过滤器。

### php://stdin, php://stdout 和 php://stderr

`php://stdin`、`php://stdout` 和 `php://stderr` 允许直接访问 PHP 进程相应的输入或者输出流。 数据流引用了复制的文件描述符，所以如果你打开 `php://stdin` 并在之后关了它， 仅是关闭了复制品，真正被引用的 `STDIN` 并不受影响。 推荐你简单使用常量 `STDIN`、 `STDOUT` 和 `STDERR` 来代替手工打开这些封装器。

`php://stdin` 是只读的， `php://stdout` 和 `php://stderr` 是只写的。

### php://input

`php://input` 是个可以访问请求的原始数据的只读流。 如果启用了 enable_post_data_reading 选项， `php://input` 在使用 `enctype="multipart/form-data"` 的 POST 请求中不可用。

### php://output

`php://output` 是一个只写的数据流， 允许你以 `print()` 和 `echo()` 一样的方式 写入到输出缓冲区。

### php://fd

`php://fd` 允许直接访问指定的文件描述符。 例如 `php://fd/3` 引用了文件描述符 3。

### php://memory 和 php://temp

`php://memory` 和 `php://temp` 是一个类似文件 包装器的数据流，允许读写临时数据。 两者的一个区别是 `php://memory` 总是把数据储存在内存中， 而 `php://temp` 会在内存量达到预定义的限制后（默认是 2MB）存入临时文件中。 临时文件位置的决定和 `sys_get_temp_dir()` 的方式一致。

`php://temp` 的内存限制可通过添加 `/maxmemory:NN` 来控制，`NN` 是以字节为单位、保留在内存的最大数据量，超过则使用临时文件。

> 某些 PHP 扩展可能需要标准 IO 流，并且可能尝试将指定流转换为标准 IO 流。对于内存流，此转换可能会失败，因为需要 C `fopencookie()` 函数可以调用。此 C 函数在 Windows 上*无效*。

### php://filter

`php://filter` 是一种元封装器， 设计用于数据流打开时的筛选过滤应用。 这对于一体式（all-in-one）的文件函数非常有用，类似 `readfile()`、 `file()` 和 `file_get_contents()`， 在数据流内容读取之前没有机会应用其他过滤器。

`php://filter` 目标使用以下的参数作为它路径的一部分。 复合过滤链能够在一个路径上指定。详细使用这些参数可以参考具体范例。

| 名称 | 描述 |
| --- | --- |
| `resource=<要过滤的数据流>` | 这个参数是必须的。它指定了你要筛选过滤的数据流。 |
| `read=<读链的筛选列表>` | 该参数可选。可以设定一个或多个过滤器名称，以管道符（`\|`）分隔。 |
| `write=<写链的筛选列表>` | 该参数可选。可以设定一个或多个过滤器名称，以管道符（`\|`）分隔。 |
| `<；两个链的筛选列表>` | 任何没有以 `read=` 或 `write=` 作前缀 的筛选器列表会视情况应用于读或写链。 |

## 可选项

 {{{ 

| 属性 | 支持 |
| --- | --- |
| 受限于 allow_url_fopen | No |
| 受限于 allow_url_include | 仅 `php://input`、 `php://stdin`、 `php://memory` 和 `php://temp`。 |
| 允许读取 | 仅 `php://stdin`、 `php://input`、 `php://fd`、 `php://memory` 和 `php://temp`。 |
| 允许写入 | 仅 `php://stdout`、 `php://stderr`、 `php://output`、 `php://fd`、 `php://memory` 和 `php://temp`。 |
| 允许追加 | 仅 `php://stdout`、 `php://stderr`、 `php://output`、 `php://fd`、 `php://memory` 和 `php://temp`（等于写入） |
| 允许同时读写 | 仅 `php://fd`、 `php://memory` 和 `php://temp`。 |
| 支持 `stat()` | 不支持。不过，`php://memory` 和 `php://temp` 支持 `fstat()`。 |
| 支持 `unlink()` | No |
| 支持 `rename()` | No |
| 支持 `mkdir()` | No |
| 支持 `rmdir()` | No |
| 仅仅支持 `stream_select()` | `php://stdin`、 `php://stdout`、 `php://stderr`、 `php://fd` 和 `php://temp`。 |

 }}} 

## 示例

 {{{ 

**php://temp/maxmemory**

 {{{ 

这个可选选项允许设置 `php://temp` 开始使用临时文件前的最大内存限制。

```php


<?php
// 限制内存为 5 MB。
$fiveMBs = 5 * 1024 * 1024;
$fp = fopen("php://temp/maxmemory:$fiveMBs", 'r+');

fputs($fp, "hello\n");

// 读取刚才写入的内容。
rewind($fp);
echo stream_get_contents($fp);
?>

   
```

 }}} 

**php://filter/resource=<待过滤的数据流>**

 {{{ 

这个参数必须位于 `php://filter` 的末尾，并且指向需要过滤筛选的数据流。

```php


<?php
/* 这简单等同于：
  readfile("http://www.example.com");
  实际上没有指定过滤器 */

readfile("php://filter/resource=http://www.example.com");
?>

   
```

 }}} 

**php://filter/read=<读链需要应用的过滤器列表>**

 {{{ 

这个参数采用一个或以管道符 `|` 分隔的多个过滤器名称。

```php


<?php
/* 这会以大写字母输出 www.example.com 的全部内容 */
readfile("php://filter/read=string.toupper/resource=http://www.example.com");

/* 这会和以上所做的一样，但还会用 ROT13 加密。 */
readfile("php://filter/read=string.toupper|string.rot13/resource=http://www.example.com");
?>

   
```

 }}} 

**php://filter/write=<写链需要应用的过滤器列表>**

 {{{ 

这个参数采用一个或以管道符 `|` 分隔的多个过滤器名称。

```php


<?php
/* 这会通过 rot13 过滤器筛选出字符 "Hello World"
  然后写入当前目录下的 example.txt */
file_put_contents("php://filter/write=string.rot13/resource=example.txt","Hello World");
?>

   
```

 }}} 

**php://memory 和 php://temp 是一次性的**

`php://memory` 和 `php://temp` 是一次性的，比如：stream 流关闭后，就无法再次得到以前的内容了。

```php


<?php
file_put_contents('php://memory', 'PHP');
echo file_get_contents('php://memory'); // 啥也没有

   
```

**php://input 从请求体中读取 JSON 数据**

此例演示了如何使用 `php://input` 读取 POST、PUT 和 PATCH 请求中的原始 JSON 数据。

```php


<?php
$input = file_get_contents("php://input");
$json_array = json_decode(
  json: $input,
  associative: true,
  flags: JSON_THROW_ON_ERROR
);

echo "Received JSON data: ";
print_r($json_array);
?>

   
```

 }}}
