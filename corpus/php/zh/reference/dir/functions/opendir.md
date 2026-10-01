---
id: "zh-php-function-function-opendir"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "opendir"
title: "打开目录句柄"
signature: "resource|false opendir(string $directory, resource|null $context = null)"
module: "dir"
source_url: "https://www.php.net/manual/zh/function.opendir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开目录句柄

## 说明

```php
resource|false opendir(string $directory, resource|null $context = null)
```

打开一个目录句柄，可用于之后的 `closedir()`，`readdir()` 和 `rewinddir()` 调用中。

## 参数

- **`$directory`** — 要打开的目录路径。
- **`$context`** — `$context` 参数的说明见手册中的 Streams API 一章。

## 返回值

成功时返回目录句柄， 或者在失败时返回 `false`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

如果 `$directory` 不是有效的目录，由于权限不足或文件系统错误而无法打开目录，则可能会发生这种情况。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$context` 允许为 null。 |

## 示例

**列出目录中的所有条目，跳过特殊目录 `.` 和 `..`**

由于文件和目录名称可能是 PHP 视为“假值”的字符串（例如名为 `"0"` 的目录），而 `readdir()` 在读取完目录中所有条目后会返回 `false`，因此需使用 `===` 比较运算符，才能准确区分名称为“假值”的目录条目与已读取完所有目录条目的情况。

```php


<?php

if ($handle = opendir('/path/to/files')) {
    echo "Entries:\n";

    /* 正确处理可能会视为假值的目录条目 */
    while (false !== ($entry = readdir($handle))) {
        if ($entry === '.' || $entry === '..') {
            continue;
        }
        echo "$entry\n";
    }

    closedir($handle);
}
?>

   
```

以上示例的输出类似于：

```text


Entries:
base
en
fr
output.md
test.php

   
```

## 参见

 `readdir()` `rewinddir()` `closedir()` `dir()` `is_dir()` `glob()` `scandir()`
