---
id: "zh-php-function-function-fileperms"
language: "php"
lang: "zh"
category: "function"
name: "fileperms"
title: "获取文件权限"
signature: "int|false fileperms(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fileperms.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取文件权限

## 说明

```php
int|false fileperms(string $filename)
```

获取指定文件权限。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

以数字模式返回文件权限。此模式的低位与 `chmod()` 期望权限相同，然而在大多数平台上，返回值还将会包含指定 `$filename` 的文件类型信息。下面的示例示范了如何在 POSIX 系统上测试特定权限和文件类型的返回值。

对于本地文件，特定的返回值是通过 C 库的 `stat()` 函数返回结构中的 `st_mode` 成员的值。Exactly which bits are set can vary from platform to platform, and looking up your specific platform's documentation is recommended if parsing the non-permission bits of the return value is required.

失败时返回 `false`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**以八进制的形式显示文件的权限**

```php


<?php
echo substr(sprintf('%o', fileperms('/tmp')), -4);
echo substr(sprintf('%o', fileperms('/etc/passwd')), -4);
?>

    
```

以上示例会输出：

```text


1777
0644

    
```

**输出全部权限**

```php


<?php
$perms = fileperms('/etc/passwd');

switch ($perms & 0xF000) {
    case 0x1000: $info = 'p'; break; // FIFO 管道
    case 0x2000: $info = 'c'; break; // 字符设备
    case 0x4000: $info = 'd'; break; // 目录
    case 0x6000: $info = 'b'; break; // 块设备
    case 0x8000: $info = '-'; break; // regular
    case 0xA000: $info = 'l'; break; // 符号链接
    case 0xC000: $info = 's'; break; // 套接字

    // 位置
    default: $info = 'u';
}

// 所有者
$setuid = $perms & 0x0800;
$info .= (($perms & 0x0100) ? 'r' : '-');
$info .= (($perms & 0x0080) ? 'w' : '-');
$info .= (($perms & 0x0040) ? ($setuid ? 's' : 'x') : ($setuid ? 'S' : '-'));

// 组
$setgid = $perms & 0x0400;
$info .= (($perms & 0x0020) ? 'r' : '-');
$info .= (($perms & 0x0010) ? 'w' : '-');
$info .= (($perms & 0x0008) ? ($setgid ? 's' : 'x') : ($setgid ? 'S' : '-'));

// 其它
$sticky = $perms & 0x0200;
$info .= (($perms & 0x0004) ? 'r' : '-');
$info .= (($perms & 0x0002) ? 'w' : '-');
$info .= (($perms & 0x0001) ? ($sticky ? 't' : 'x') : ($sticky ? 'T' : '-'));

echo $info;
?>

    
```

以上示例会输出：

```text


-rw-r--r--

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`chmod()` `is_readable()` `stat()`
