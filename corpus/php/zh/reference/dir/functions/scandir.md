---
id: "zh-php-function-function-scandir"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]},{"type":"source"}]
name: "scandir"
title: "列出指定路径中的文件和目录"
signature: "array|false scandir(string $directory, int $sorting_order = SCANDIR_SORT_ASCENDING, resource|null $context = null)"
module: "dir"
source_url: "https://www.php.net/manual/zh/function.scandir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 列出指定路径中的文件和目录

## 说明

```php
array|false scandir(string $directory, int $sorting_order = SCANDIR_SORT_ASCENDING, resource|null $context = null)
```

返回 `array`，包含有 `$directory` 中的文件和目录。

## 参数

- **`$directory`** — 要被浏览的目录
- **`$sorting_order`** — 默认的排序顺序是按字母升序排列。如果使用了可选参数 `$sorting_order`（设为 1），则排序顺序是按字母降序排列。
- **`$context`** — `$context` 参数的说明见手册中的 Streams API 一章。

## 返回值

成功则返回包含有文件名的 `array`，如果失败则返回 `false`。如果 `$directory` 不是个目录，则返回布尔值 `false` 并生成一条 `E_WARNING` 级的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$context` 允许为 null。 |

## 示例

**简单的 `scandir()` 示例**

```php


<?php
$dir    = '/tmp';
$files1 = scandir($dir);
$files2 = scandir($dir, SCANDIR_SORT_DESCENDING);

print_r($files1);
print_r($files2);
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => .
    [1] => ..
    [2] => bar.php
    [3] => foo.txt
    [4] => somedir
)
Array
(
    [0] => somedir
    [1] => foo.txt
    [2] => bar.php
    [3] => ..
    [4] => .
)

    
```

## 注释

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

## 参见

`opendir()` `readdir()` `glob()` `is_dir()` `sort()`
