---
id: "zh-php-function-function-closedir"
language: "php"
lang: "zh"
category: "function"
name: "closedir"
title: "关闭目录句柄"
signature: "void closedir(resource|null $dir_handle = null)"
module: "dir"
source_url: "https://www.php.net/manual/zh/function.closedir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭目录句柄

## 说明

```php
void closedir(resource|null $dir_handle = null)
```

关闭由 `$dir_handle` 指定的目录流。

## 参数

- **`$dir_handle`** — 先前通过 `opendir()` 打开的目录句柄 `resource`。如果 `$dir_handle` 为 `null`，则使用最近一次通过 `opendir()` 打开的句柄。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 现在已弃用将 `$dir_handle` 设为 `null` 的做法，应明确提供最近打开的目录句柄。 |
| 8.0.0 | `$dir_handle` 现在可为 null。 |

## 示例

完整示例请参见 `opendir()` 的文档。

## 参见

 `opendir()` `readdir()` `rewinddir()` `dir()` `is_dir()` `glob()` `scandir()`
