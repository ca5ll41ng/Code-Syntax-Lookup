---
id: "zh-php-function-function-oci-password-change"
language: "php"
lang: "zh"
category: "function"
name: "oci_password_change"
title: "修改 Oracle 用户的密码"
signature: "bool oci_password_change(resource $connection, string $username, string $old_password, string $new_password)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-password-change.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 修改 Oracle 用户的密码

## 说明

```php
bool oci_password_change(resource $connection, string $username, string $old_password, string $new_password)
```

```php
resource oci_password_change(string $database_name, string $username, string $old_password, string $new_password)
```

修改用户 `$username` 的密码。

`oci_password_change()` 函数对于 PHP 命令行脚本或在整个 PHP 应用程序中使用非持久连接时最有用。

## 参数

- **`$connection`** — Oracle 连接标识符，由 `oci_connect()` 或 `oci_pconnect()` 返回。
- **`$username`** — Oracle 用户名。
- **`$old_password`** — 旧密码。
- **`$new_password`** — 要设置的新密码。
- **`$database_name`** — 数据库名。

## 返回值

提供 `$database_name` 时，`oci_password_change()` 成功时返回 `true`， 或者在失败时返回 `false`。提供 `$connection` 时，`oci_password_change()` 成功时返回连接资源， 或者在失败时返回 `false`。

## 示例

**`oci_password_change()` 示例，更改已连接用户的密码**

```php


<?php

$dbase      = 'localhost/orcl';
$user       = 'cj';
$current_pw = 'welcome';
$new_pw     = 'geelong';

$c = oci_pconnect($user, $current_pw, $dbase);
oci_password_change($c, $user, $current_pw, $new_pw);
echo "New password is : " . $new_pw . "\n";

?>

    
```

**`oci_password_change()` 示例之一步更改密码并连接**

```php


<?php

$dbase      = 'localhost/orcl';
$user       = 'cj';
$current_pw = 'welcome';
$new_pw     = 'geelong';

$c = oci_pconnect($user, $current_pw, $dbase);
if (!$c) {
    $m = oci_error();
    if ($m['code'] == 28001) { // "ORA-28001: the password has expired"
        // Login and reset password at the same time
        $c = oci_password_change($dbase, $user, $current_pw, $new_pw);
        if ($c) {
            echo "New password is : " . $new_pw . "\n";
        }
    }
}

if (!$c) {  // The original error wasn't 28001, or the password change failed
    $m = oci_error();
    trigger_error('Could not connect to database: '. $m['message'], E_USER_ERROR);
}

// Use the connection $c
// ...

?>

    
```

## 注释

> 使用此函数或直接在 Oracle 中更改密码应该小心。这是因为 PHP 应用程序可能会通过使用旧密码进行身份验证来继续成功地重用持久连接。最佳做法是每当更改用户密码时重新启动所有 Web 服务器。

> 如果将 Oracle 客户端库或数据库从 11.2.0.3 之前的版本升级到 11.2.0.3 或更高版本，`oci_password_change()` 可能会给出错误“ORA-1017: invalid username/password”，除非同时升级客户端和服务器版本。

> 第二个 `oci_password_change()` 语法自 OCI8 版本 1.1 起可用。
