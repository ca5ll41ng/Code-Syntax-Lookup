---
id: "zh-php-function-function-touch"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "touch"
title: "设定文件的访问和修改时间"
signature: "bool touch(string $filename, int|null $mtime = null, int|null $atime = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.touch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设定文件的访问和修改时间

## 说明

```php
bool touch(string $filename, int|null $mtime = null, int|null $atime = null)
```

尝试将由 `$filename` 给出的文件的访问和修改时间设定为给出的 `$mtime`。 注意访问时间总是会被修改的，不论有几个参数。

如果文件不存在，则会被创建。

## 参数

- **`$filename`** — 要设定的文件名。
- **`$mtime`** — 要设定的时间。如果参数 `$mtime` 为 `null`，则会使用当前系统的 `time()`。
- **`$atime`** — 如果这个参数不是 `null`，则给定文件的访问时间会被设为 `$atime`。 否则会设置为 `$mtime`。 如果两个参数都是 `null`，则使用当前系统时间。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$mtime` 和 `$atime` 现在可以为空。 |

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`touch()` 例子**

```php


<?php
if (touch($filename)) {
    echo $filename . ' modification time has been changed to present time';
} else {
    echo 'Sorry, could not change modification time of ' . $filename;
}
?>

    
```

**使用 `$mtime` 参数的 `touch()`**

```php


<?php
// This is the touch time, we'll set it to one hour in the past.
$time = time() - 3600;

// Touch the file
if (!touch('some_file.txt', $time)) {
    echo 'Whoops, something went wrong...';
} else {
    echo 'Touched file with success';
}
?>

    
```

## 注释

> 注意：不同文件系统对时间的判断方法可能是不相同的。
