---
id: "zh-php-function-function-mime-content-type"
language: "php"
lang: "zh"
category: "function"
name: "mime_content_type"
title: "检测文件的 MIME 类型"
signature: "string|false mime_content_type(resource|string $filename)"
module: "fileinfo"
source_url: "https://www.php.net/manual/zh/function.mime-content-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测文件的 MIME 类型

## 说明

```php
string|false mime_content_type(resource|string $filename)
```

返回通过使用 `magic.mime` 检测到的文件 MIME 类型。

## 参数

- **`$filename`** — 要检测的文件名。

## 返回值

返回文件的 MIME 内容类型，例如 `text/plain` 或 `application/octet-stream`。 或者在失败时返回 `false`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`mime_content_type()` 示例**

```php


<?php
echo mime_content_type('php.gif') . "\n";
echo mime_content_type('test.php');
?>

   
```

以上示例会输出：

```text


image/gif
text/plain

   
```

## 参见

 `finfo_file()` `finfo_buffer()`
