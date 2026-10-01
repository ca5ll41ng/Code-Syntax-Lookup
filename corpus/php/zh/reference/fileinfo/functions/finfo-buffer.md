---
id: "zh-php-function-function-finfo-buffer"
language: "php"
lang: "zh"
category: "function"
name: "finfo_buffer"
aliases: ["finfo::buffer"]
title: "返回一个字符串缓冲区的信息"
signature: "string|false finfo_buffer(finfo $finfo, string $string, int $flags = FILEINFO_NONE, resource|null $context = null)"
module: "fileinfo"
source_url: "https://www.php.net/manual/zh/function.finfo-buffer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个字符串缓冲区的信息

## 说明

过程化风格

```php
string|false finfo_buffer(finfo $finfo, string $string, int $flags = FILEINFO_NONE, resource|null $context = null)
```

面向对象风格

```php
public string|false finfo::buffer(string $string, int $flags = FILEINFO_NONE, resource|null $context = null)
```

本函数用来获取字符串中二进制数据的信息。

## 参数

- **`$finfo`** — 经 `finfo_open()` 返回的 `finfo` 实例。
- **`$string`** — 要检查的文件内容。
- **`$flags`** — 一个 Fileinfo 常量 或多个 Fileinfo 常量 进行逻辑或运算。
- **`$context`**

## 返回值

返回 `$string` 参数所指定内容的类型描述。 发生错误时返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$finfo` 参数现在接受 `finfo` 实例，之前接受 `resource`。 |
| 8.0.0 | `$context` 现在可以为 null。 |

## 示例

**`finfo_buffer()` 示例**

```php


<?php
$finfo = new finfo(FILEINFO_MIME);
echo $finfo->buffer($_POST["script"]) . "\n";
?>

   
```

以上示例的输出类似于：

```text


application/x-sh; charset=us-ascii

   
```

## 参见

 `finfo_file()`
