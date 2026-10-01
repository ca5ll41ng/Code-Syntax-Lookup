---
id: "zh-php-function-function-fread"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "fread"
title: "读取文件（可安全用于二进制文件）"
signature: "string|false fread(resource $stream, int $length)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fread.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取文件（可安全用于二进制文件）

## 说明

```php
string|false fread(resource $stream, int $length)
```

`fread()` 从文件指针 `$stream` 读取最多 `$length` 个字节。 该函数在遇上以下几种情况时停止读取文件：

- 读取了 `$length` 个字节
- 到达了文件末尾（EOF）
- a packet becomes available or the socket timeout occurs (for network streams)
- if the stream is read buffered and it does not represent a plain file, at most one read of up to a number of bytes equal to the chunk size (usually 8192) is made; depending on the previously buffered data, the size of the returned data may be larger than the chunk size.

## 参数

- **`$stream`** — 文件系统指针，是典型地由 `fopen()` 创建的 `resource`(资源)。
- **`$length`** — 最多读取 `$length` 个字节。

## 返回值

返回所读取的字符串， 或者在失败时返回 `false`。

## 示例

**一个简单的 `fread()` 例子**

```php


<?php
// get contents of a file into a string
$filename = "/usr/local/something.txt";
$handle = fopen($filename, "r");
$contents = fread($handle, filesize($filename));
fclose($handle);
?>

    
```

**Binary `fread()` example**

> 在区分二进制文件和文本文件的系统上（如 Windows）打开文件时，`fopen()` 函数的 mode 参数要加上 'b'。

```php


<?php
$filename = "c:\\files\\somepic.gif";
$handle = fopen($filename, "rb");
$contents = fread($handle, filesize($filename));
fclose($handle);
?>

    
```

**Remote `fread()` examples**

> 当从任何不是普通本地文件读取时，例如在读取从远程文件或 `popen()` 以及 `fsockopen()` 返回的流时，读取会在一个包可用之后停止。这意味着应该如下例所示将数据收集起来合并成大块。

```php


<?php
$handle = fopen("http://www.example.com/", "rb");
if (FALSE === $handle) {
    exit("Failed to open stream to URL");
}

$contents = stream_get_contents($handle);

fclose($handle);
?>

    
```

```php


<?php
$handle = fopen("http://www.example.com/", "rb");
$contents = '';
while (!feof($handle)) {
    $contents .= fread($handle, 8192);
}
fclose($handle);
?>

    
```

## 注释

> 如果只是想将一个文件的内容读入到一个字符串中，用 `file_get_contents()`，它的性能比上面的代码好得多。

> Note that `fread()` reads from the current position of the file pointer. Use `ftell()` to find the current position of the pointer and `rewind()` to rewind the pointer position.

## 参见

`fwrite()` `fopen()` `fsockopen()` `popen()` `fgets()` `fgetss()` `fscanf()` `file()` `fpassthru()` `fseek()` `ftell()` `rewind()` `unpack()`
