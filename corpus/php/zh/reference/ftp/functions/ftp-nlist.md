---
id: "zh-php-function-function-ftp-nlist"
language: "php"
lang: "zh"
category: "function"
name: "ftp_nlist"
title: "返回给定目录的文件列表"
signature: "array|false ftp_nlist(FTP\\Connection $ftp, string $directory)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-nlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回给定目录的文件列表

## 说明

```php
array|false ftp_nlist(FTP\Connection $ftp, string $directory)
```

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$directory`** — 指定要列表的目录。本参数接受带参数的形式，例如：`ftp_nlist($ftp, "-la /your/dir");`；注意此参数不对传入值做处理，在目录或者文件名包括空格或特殊的情况下，可能会存在问题。

## 返回值

如果成功则返回给定目录下的文件名组成的数组，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_nlist()` 示例**

```php


<?php

// set up basic connection
$ftp = ftp_connect($ftp_server);
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// check connection
if ((!$ftp) || (!$login_result)) {
    die("FTP connection has failed !");
}
 
// get contents of the root directory
$contents = ftp_nlist($ftp, "/");

// output $contents
var_dump($contents);

?>

     
```

以上示例的输出类似于：

```text


array(3) {
  [0]=>
  string(11) "public_html"
  [1]=>
  string(10) "public_ftp"
  [2]=>
  string(3) "www"

    
```

## 参见

`ftp_rawlist()` `ftp_mlsd()`
