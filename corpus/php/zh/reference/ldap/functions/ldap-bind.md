---
id: "zh-php-function-function-ldap-bind"
language: "php"
lang: "zh"
category: "function"
name: "ldap_bind"
title: "绑定 LDAP 目录"
signature: "bool ldap_bind(LDAP\\Connection $ldap, string|null $dn = null, string|null $password = null)"
module: "ldap"
source_url: "https://www.php.net/manual/zh/function.ldap-bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绑定 LDAP 目录

## 说明

```php
bool ldap_bind(LDAP\Connection $ldap, string|null $dn = null, string|null $password = null)
```

使用指定的 RDN 和密码绑定到 LDAP 目录。

## 参数

- **`$ldap`** — 通过 `ldap_connect()` 返回的 `LDAP\Connection` 实例。
- **`$dn`**
- **`$password`**

如果没有指定 `$password` 或为空，将会以匿名身份绑定。`$dn` 也可以为空，用于匿名绑定。这在 https://tools.ietf.org/html/rfc2251#section-4.2.2 中有定义。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ldap` 参数接受 `LDAP\Connection` 实例，之前接受有效的 `ldap link` `resource`。 |

## 示例

**使用 LDAP Bind**

```php


<?php

// using ldap bind
$ldaprdn  = 'uname';     // ldap rdn or dn
$ldappass = 'password';  // associated password

// connect to ldap server
$ldapconn = ldap_connect("ldap://ldap.example.com")
    or die("Could not connect to LDAP server.");

if ($ldapconn) {

    // binding to ldap server
    $ldapbind = ldap_bind($ldapconn, $ldaprdn, $ldappass);

    // verify binding
    if ($ldapbind) {
        echo "LDAP bind successful...";
    } else {
        echo "LDAP bind failed...";
    }

}

?>

    
```

**Using LDAP Bind Anonymously**

```php


<?php

//using ldap bind anonymously

// connect to ldap server
$ldapconn = ldap_connect("ldap://ldap.example.com")
    or die("Could not connect to LDAP server.");

if ($ldapconn) {

    // binding anonymously
    $ldapbind = ldap_bind($ldapconn);

    if ($ldapbind) {
        echo "LDAP bind anonymous successful...";
    } else {
        echo "LDAP bind anonymous failed...";
    }

}

?>

    
```

## 参见

`ldap_bind_ext()` `ldap_unbind()`
