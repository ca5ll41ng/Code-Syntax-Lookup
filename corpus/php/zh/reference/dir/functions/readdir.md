---
id: "zh-php-function-function-readdir"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "readdir"
title: "从目录句柄中读取条目"
signature: "string|false readdir(resource|null $dir_handle = null)"
module: "dir"
source_url: "https://www.php.net/manual/zh/function.readdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从目录句柄中读取条目

## 说明

```php
string|false readdir(resource|null $dir_handle = null)
```

返回目录中下一个文件的文件名。文件名以在文件系统中的排序返回。

## 参数

- **`$dir_handle`** — 先前通过 `opendir()` 打开的目录句柄 `resource`。如果 `$dir_handle` 为 `null`，则使用最近一次通过 `opendir()` 打开的句柄。

## 返回值

成功则返回文件名 或者在失败时返回 `false`

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 现在已弃用将 `$dir_handle` 设为 `null` 的做法，应明确提供最近打开的目录句柄。 |
| 8.0.0 | 现在 `$dir_handle` 可以为 null。 |

## 示例

完整示例请参见 `opendir()` 的文档。

## 参见

 `opendir()` `rewinddir()` `closedir()` `dir()` `is_dir()` `glob()` `scandir()`
