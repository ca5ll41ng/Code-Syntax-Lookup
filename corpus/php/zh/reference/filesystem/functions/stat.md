---
id: "zh-php-function-function-stat"
language: "php"
lang: "zh"
category: "function"
name: "stat"
title: "给出文件的信息"
signature: "array|false stat(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.stat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 给出文件的信息

## 说明

```php
array|false stat(string $filename)
```

获取由 `$filename` 指定的文件的统计信息。如果 `$filename` 是符号连接，则统计信息是关于被连接文件本身的，而不是符号连接。在 PHP 7.4.0 之前，使用 Windows NTS 版本获取 `size`、`atime`、`mtime` 和 `ctime` 统计信息将从符号链接获取。

`lstat()` 和 `stat()` 相同，只除了它会返回符号连接的状态。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

| 数字下标 | 关联键名 | 说明 |
| --- | --- | --- |
| 0 | dev | 设备号 *** |
| 1 | ino | inode 号 **** |
| 2 | mode | inode 保护模式 ***** |
| 3 | nlink | 连接数目 |
| 4 | uid | 所有者的用户 id * |
| 5 | gid | 所有者的组 id * |
| 6 | rdev | 设备类型，如果是 inode 设备的话 |
| 7 | size | 文件大小的字节数 |
| 8 | atime | 上次访问时间（Unix 时间戳） |
| 9 | mtime | 上次修改时间（Unix 时间戳） |
| 10 | ctime | 上次 inodb 改变时间（Unix 时间戳） |
| 11 | blksize | 文件系统 IO 的块大小 ** |
| 12 | blocks | 分配的 512 字节块数 ** |

* Windows 下总是 `0`。

* - 仅在支持 st_blksize 类型的系统下有效。其它系统（如 Windows）返回 `-1`。

*** On Windows, as of PHP 7.4.0, this is the serial number of the volume that contains the file, which is a 64-bit *unsigned* integer, so may overflow. Previously, it was the numeric representation of the drive letter (e.g. `2` for `C:`) for `stat()`, and `0` for `lstat()`.

**** 在 Windows 上，自 PHP 7.4.0 起，这是跟文件相关的标识符，因为是64位 *unsigned* 整数，因此可能会溢出。之前始终为 `0`。

***** On Windows, the writable permission bit is set according to the read-only file attribute, and the same value is reported for all users, group and owner. The ACL is not taken into account, contrary to `is_writable()`.

`mode` 的值包含几个函数读取到的信息。当用八进制编写时，从右开始，前三位由 `chmod()` 返回。PHP 忽略下一个数字。接下来的两位数字表示文件类型：

| 八进制表示 `mode` | 含义 |
| --- | --- |
| `0140000` | socket |
| `0120000` | link |
| `0100000` | 常规文件 |
| `0060000` | 块设备 |
| `0040000` | 目录 |
| `0020000` | 字符设备 |
| `0010000` | fifo |

例如普通文件可能是 `0100644`，目录可能是 `0040755`。

如果出错，`stat()` 返回 `false`。

> 因为 PHP 的整数类型是有符号整型而且很多平台使用 32 位整型，对 2GB 以上的文件，一些文件系统函数可能返回无法预期的结果。

## 错误／异常

错误时会产生 `E_WARNING` 级别的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | On Windows, the device number is now the serial number of the volume that contains the file, and the inode number is the identifier associated with the file. |
| 7.4.0 | The `size`, `atime`, `mtime` and `ctime` statistics of symlinks are always those of the target. This was previously not the case for NTS builds on Windows. |

## 示例

**`stat()` 例子**

```php


<?php
/* Get file stat */
$stat = stat('C:\php\php.exe');

/*
 * Print file access time, this is the same 
 * as calling fileatime()
 */
echo 'Access time: ' . $stat['atime'];

/*
 * Print file modification time, this is the 
 * same as calling filemtime()
 */
echo 'Modification time: ' . $stat['mtime'];

/* Print the device number */
echo 'Device number: ' . $stat['dev'];
?>

    
```

**Using `stat()` information together with `touch()`**

```php


<?php
/* Get file stat */
$stat = stat('C:\php\php.exe');

/* Did we failed to get stat information? */
if (!$stat) {
    echo 'stat() call failed...';
} else {
    /*
     * We want the access time to be 1 week 
     * after the current access time.
     */
    $atime = $stat['atime'] + 604800;

    /* Touch the file */
    if (!touch('some_file.txt', time(), $atime)) {
        echo 'Failed to touch file...';
    } else {
        echo 'touch() returned success...';
    }
}
?>

    
```

## 注释

> 注意：不同文件系统对时间的判断方法可能是不相同的。

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`lstat()` `fstat()` `filemtime()` `filegroup()` `SplFileInfo`
