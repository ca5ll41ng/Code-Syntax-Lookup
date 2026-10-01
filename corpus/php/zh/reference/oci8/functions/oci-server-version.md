---
id: "zh-php-function-function-oci-server-version"
language: "php"
lang: "zh"
category: "function"
name: "oci_server_version"
title: "返回 Oracle 数据库版本"
signature: "string|false oci_server_version(resource $connection)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-server-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 Oracle 数据库版本

## 说明

```php
string|false oci_server_version(resource $connection)
```

以字符串返回 Oracle 数据库版本和可用选项。

## 参数

- **`$connection`**

## 返回值

以字符串返回版本信息，错误时为 `false`。

## 示例

**`oci_server_version()` 示例**

```php


<?php

$conn = oci_connect("hr", "hrpwd", "localhost/XE");
echo "Server Version: " . oci_server_version($conn);

// Displays:
// Server Version: Oracle Database 11g Enterprise Edition Release 11.2.0.1.0 - 64bit Production
// With the Partitioning, OLAP, Data Mining and Real Application Testing option

oci_close($conn);

?>

    
```

## 参见

`oci_client_version()`
