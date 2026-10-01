---
id: "zh-php-function-function-ftp-rawlist"
language: "php"
lang: "zh"
category: "function"
name: "ftp_rawlist"
title: "返回指定目录下文件的详细列表"
signature: "array|false ftp_rawlist(FTP\\Connection $ftp, string $directory, bool $recursive = false)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-rawlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定目录下文件的详细列表

## 说明

```php
array|false ftp_rawlist(FTP\Connection $ftp, string $directory, bool $recursive = false)
```

`ftp_rawlist()` 函数将执行 FTP LIST 命令，并把结果做为一个数组返回。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$directory`** — 要操作的目录路径，可以包括 LIST 参数。
- **`$recursive`** — 如果此参数为 `true`，实际执行的命令将会为 LIST -R。

## 返回值

返回一个数组，数组的每个元素为返回文本的每一行，输出结构不会被解析。使用函数 `ftp_systype()` 可以用来判断 FTP 服务器的类型，从而可以用来判断返回列表的类型。

不以任何方式解析输出。`ftp_systype()` 返回的系统类型标识符可用于确定应如何解释结果。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_rawlist()` 示例**

```php


<?php

// 初始化连接
$ftp = ftp_connect($ftp_server);

// 使用用户名和密码登录
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// 获取 / 路径下的文件列表
$buff = ftp_rawlist($ftp, '/');

// 关闭连接
ftp_close($ftp);

// 输出
var_dump($buff);
?>

    
```

以上示例的输出类似于：

```text


array(3) {
  [0]=>
  string(65) "drwxr-x---   3 vincent  vincent      4096 Jul 12 12:16 public_ftp"
  [1]=>
  string(66) "drwxr-x---  15 vincent  vincent      4096 Nov  3 21:31 public_html"
  [2]=>
  string(73) "lrwxrwxrwx   1 vincent  vincent        11 Jul 12 12:16 www -> public_html"
}

    
```

## 参见

`ftp_nlist()` `ftp_mlsd()`
