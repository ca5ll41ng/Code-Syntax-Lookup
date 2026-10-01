---
id: "zh-php-function-function-ftp-cdup"
language: "php"
lang: "zh"
category: "function"
name: "ftp_cdup"
title: "切换到当前目录的父目录"
signature: "bool ftp_cdup(FTP\\Connection $ftp)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-cdup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 切换到当前目录的父目录

## 说明

```php
bool ftp_cdup(FTP\Connection $ftp)
```

切换目录至当前目录的父目录 (上级目录)。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_cdup()` 例子**

```php
 
 
<?php 
// set up basic connection 
$ftp = ftp_connect($ftp_server); 

// login with username and password 
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass); 

// change the current directory to html 
ftp_chdir($ftp, 'html'); 

echo ftp_pwd($ftp); // /html 

// return to the parent directory 
if (ftp_cdup($ftp)) { 
  echo "cdup successful\n"; 
} else { 
  echo "cdup not successful\n"; 
} 

echo ftp_pwd($ftp); // / 

ftp_close($ftp); 
?> 
 
    
```

## 参见

`ftp_chdir()` `ftp_pwd()`
