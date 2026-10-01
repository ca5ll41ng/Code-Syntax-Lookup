---
id: "zh-php-function-function-finfo-file"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[2]}
name: "finfo_file"
aliases: ["finfo::file"]
title: "返回一个文件的信息"
signature: "string|false finfo_file(finfo $finfo, string $filename, int $flags = FILEINFO_NONE, resource|null $context = null)"
module: "fileinfo"
source_url: "https://www.php.net/manual/zh/function.finfo-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个文件的信息

## 说明

过程化风格

```php
string|false finfo_file(finfo $finfo, string $filename, int $flags = FILEINFO_NONE, resource|null $context = null)
```

面向对象风格

```php
public string|false finfo::file(string $filename, int $flags = FILEINFO_NONE, resource|null $context = null)
```

本函数用来获取一个文件的信息。

## 参数

- **`$finfo`** — 经 `finfo_open()` 返回的 `finfo` 实例。
- **`$filename`** — 要检查的文件名。
- **`$flags`** — 一个 Fileinfo 常量或多个进行逻辑或。
- **`$context`** — 关于 `contexts` 的更多描述，请参考 `ref.stream`。

## 返回值

返回 `$filename` 参数指定的文件信息。发生错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$finfo` 参数现在接受 `finfo` 实例，之前接受 `resource`。 |
| 8.0.0 | `$context` 现在可以为 null。 |

## 示例

**`finfo_file()` 示例**

```php


<?php
$finfo = finfo_open(FILEINFO_MIME_TYPE); // 返回 mime 类型，也被称为 mime 类型扩展。
foreach (glob("*") as $filename) {
    echo finfo_file($finfo, $filename) . "\n";
}
finfo_close($finfo);
?>

   
```

以上示例的输出类似于：

```text


text/html
image/gif
application/vnd.ms-excel

   
```

## 参见

 `finfo_buffer()`
