---
id: "zh-php-function-function-file-put-contents"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1,2]}
name: "file_put_contents"
title: "将数据写入文件"
signature: "int|false file_put_contents(string $filename, mixed $data, int $flags = 0, resource|null $context = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.file-put-contents.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将数据写入文件

## 说明

```php
int|false file_put_contents(string $filename, mixed $data, int $flags = 0, resource|null $context = null)
```

和依次调用 `fopen()`，`fwrite()` 以及 `fclose()` 功能一样。

如果 `$filename` 不存在，将会创建文件。反之，存在的文件将会重写，除非设置 `FILE_APPEND` flag。

## 参数

- **`$filename`** — 要被写入数据的文件名。
- **`$data`** — 要写入的数据。类型可以是 `string`，`array` 或者是 `stream` 资源（如上面所说的那样）。 — 如果 `$data` 指定为 stream 资源，这里 stream 中所保存的缓存数据将被写入到指定文件中，这种用法就相似于使用 `stream_copy_to_stream()` 函数。 — 参数 `$data` 可以是数组（但不能为多维数组），这就相当于 `file_put_contents($filename, join('', $array))`。
- **`$flags`** — `$flags` 的值可以是 以下 flag 使用 OR (`|`) 运算符进行的组合。 — | Flag | 描述 | | --- | --- | | `FILE_USE_INCLUDE_PATH` | 在 include 目录里搜索 `$filename`。 更多信息可参见 include_path。 | | `FILE_APPEND` | 如果文件 `$filename` 已经存在，追加数据而不是覆盖。 | | `LOCK_EX` | 在写入时获取文件独占锁。换句话说，在调用 `fopen()` 和 `fwrite()` 中间发生了 `flock()` 调用。这与调用带模式“x”的 `fopen()` 不同。 |
- **`$context`** — 一个 context 资源。

## 返回值

该函数将返回写入到文件内数据的字节数，失败时返回`false`

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 示例

**简单用法示例**

```php


<?php
$file = 'people.txt';
// 打开文件获取已经存在的内容
$current = file_get_contents($file);
// 追加新成员到文件
$current .= "John Smith\n";
// 将内容写回文件
file_put_contents($file, $current);
?>

    
```

**Using flags**

```php


<?php
$file = 'people.txt';
// The new person to add to the file
$person = "John Smith\n";
// Write the contents to the file, 
// using the FILE_APPEND flag to append the content to the end of the file
// and the LOCK_EX flag to prevent anyone else writing to the file at the same time
file_put_contents($file, $person, FILE_APPEND | LOCK_EX);
?>

    
```

## 注释

> 此函数可安全用于二进制对象。

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

## 参见

`fopen()` `fwrite()` `file_get_contents()` `stream_context_create()`
