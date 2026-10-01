---
id: "zh-php-function-function-ftp-mlsd"
language: "php"
lang: "zh"
category: "function"
name: "ftp_mlsd"
title: "返回指定目录中的文件列表"
signature: "array|false ftp_mlsd(FTP\\Connection $ftp, string $directory)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-mlsd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定目录中的文件列表

## 说明

```php
array|false ftp_mlsd(FTP\Connection $ftp, string $directory)
```

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$directory`** — 要列出的目录。

## 返回值

如果成功，则返回一个由目录中所有文件信息（数组）所组成的数组；如果错误，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_mlsd()` 示例**

```php


<?php

// 简单基本连接
$ftp = ftp_connect($ftp_server);

// 使用用户名和密码进行登录
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// 获取当前目录的内容
$contents = ftp_mlsd($ftp, ".");

// 输出 $contents
var_dump($contents);

?>
  
    
```

以上示例的输出类似于：

```text


array(5) {
  [0]=>
  array(8) {
    ["name"]=>
    string(1) "."
    ["modify"]=>
    string(14) "20171212154511"
    ["perm"]=>
    string(7) "flcdmpe"
    ["type"]=>
    string(4) "cdir"
    ["unique"]=>
    string(11) "811U5740002"
    ["UNIX.group"]=>
    string(2) "33"
    ["UNIX.mode"]=>
    string(4) "0755"
    ["UNIX.owner"]=>
    string(2) "33"
  }
  [1]=>
  array(8) {
    ["name"]=>
    string(2) ".."
    ["modify"]=>
    string(14) "20171212154511"
    ["perm"]=>
    string(7) "flcdmpe"
    ["type"]=>
    string(4) "pdir"
    ["unique"]=>
    string(11) "811U5740002"
    ["UNIX.group"]=>
    string(2) "33"
    ["UNIX.mode"]=>
    string(4) "0755"
    ["UNIX.owner"]=>
    string(2) "33"
  }
  [2]=>
  array(8) {
    ["name"]=>
    string(11) "public_html"
    ["modify"]=>
    string(14) "20171211171525"
    ["perm"]=>
    string(7) "flcdmpe"
    ["type"]=>
    string(3) "dir"
    ["unique"]=>
    string(11) "811U5740525"
    ["UNIX.group"]=>
    string(2) "33"
    ["UNIX.mode"]=>
    string(4) "0755"
    ["UNIX.owner"]=>
    string(2) "33"
  }
  [3]=>
  array(8) {
    ["name"]=>
    string(10) "public_ftp"
    ["modify"]=>
    string(14) "20171211174536"
    ["perm"]=>
    string(7) "flcdmpe"
    ["type"]=>
    string(3) "dir"
    ["unique"]=>
    string(11) "811U57405EE"
    ["UNIX.group"]=>
    string(2) "33"
    ["UNIX.mode"]=>
    string(4) "0755"
    ["UNIX.owner"]=>
    string(2) "33"
  }
  [4]=>
  array(8) {
    ["name"]=>
    string(3) "www"
    ["modify"]=>
    string(14) "www"
    ["perm"]=>
    string(7) "flcdmpe"
    ["type"]=>
    string(3) "dir"
    ["unique"]=>
    string(11) "811U5740780"
    ["UNIX.group"]=>
    string(2) "33"
    ["UNIX.mode"]=>
    string(4) "0755"
    ["UNIX.owner"]=>
    string(2) "33"
  }
}

    
```

## 参见

`ftp_rawlist()` `ftp_nlist()`
