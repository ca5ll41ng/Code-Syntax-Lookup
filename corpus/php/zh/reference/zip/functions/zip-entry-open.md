---
id: "zh-php-function-function-zip-entry-open"
language: "php"
lang: "zh"
category: "function"
name: "zip_entry_open"
title: "打开用于读取的目录实体"
signature: "#[\\Deprecated] bool zip_entry_open(resource $zip_dp, resource $zip_entry, string $mode = \"rb\")"
module: "zip"
source_url: "https://www.php.net/manual/zh/function.zip-entry-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开用于读取的目录实体

## 说明

```php
#[\Deprecated] bool zip_entry_open(resource $zip_dp, resource $zip_entry, string $mode = "rb")
```

打开ZIP文件中的目录实体以便后续读取。

## 参数

- **`$zip_dp`** — 由函数`zip_open()`返回的有效的资源句柄。
- **`$zip_entry`** — 由函数`zip_read()`返回的目录实体。
- **`$mode`** — 任何在`fopen()`处理文档中指定的模式。
  > 由于ZIP在PHP中只支持读取模式，所以`$mode` 实际上总是被设置为`"rb"`(其他模式会被忽略)。



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 与`fopen()`和其他类似的方法不同，`zip_entry_open()` 的返回值只用于标示该操作结果，不需要读取或关闭该目录实体。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 弃用此函数，取而代之的是对象 API。 |

## 参见

`zip_entry_close()` `zip_entry_read()`
