---
id: "zh-php-function-mysqli-options"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::options"
aliases: ["mysqli_options"]
title: "设置选项"
signature: "public bool mysqli::options(int $option, string|int $value)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.options.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置选项

## 说明

面向对象风格

```php
public bool mysqli::options(int $option, string|int $value)
```

过程化风格

```php
bool mysqli_options(mysqli $mysql, int $option, string|int $value)
```

用于设置连接的扩展选项，这些选项可以改变这个连接的行为。

如果要对多个选项进行设置，可以多次调用此函数来。

`mysqli_options()` 需要在 `mysqli_init()` 函数之后、 `mysqli_real_connect()` 函数之前调用。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$option`** — 要进行设置的选项，可以是下列值中的某一项： | 名称 | 描述 | | --- | --- | | `MYSQLI_OPT_CONNECT_TIMEOUT` | 连接超时设置，以秒为单位 | | `MYSQLI_OPT_READ_TIMEOUT` | 命令执行超时秒数，自 PHP 7.2.0 起可用。 | | `MYSQLI_OPT_LOCAL_INFILE` | 启用或禁用 `LOAD LOCAL INFILE` | | `MYSQLI_OPT_LOAD_DATA_LOCAL_DIR` | 用于 `LOAD DATA LOCAL INFILE` 的目录。 | | `MYSQLI_INIT_COMMAND` | 连接到 MySQL 服务器后要执行的命令 | | `MYSQLI_SET_CHARSET_NAME` | 设置的默认字符集 | | `MYSQLI_READ_DEFAULT_FILE` | 从指定的文件中读取选项，而不是使用 `my.cnf` 中的选项。mysqlnd 不支持。 | | `MYSQLI_READ_DEFAULT_GROUP` | 从 `my.cnf` 或者 `MYSQL_READ_DEFAULT_FILE` 指定的文件中 读取指定的组中的选项。mysqlnd 不支持。 | | `MYSQLI_SERVER_PUBLIC_KEY` | SHA-256 认证模式下，要使用的 RSA 公钥文件。 | | `MYSQLI_OPT_NET_CMD_BUFFER_SIZE` | 内部命令/网络缓冲大小， 仅在 mysqlnd 驱动下有效。 | | `MYSQLI_OPT_NET_READ_BUFFER_SIZE` | 以字节为单位，读取 MySQL 命令报文时候的块大小， 仅在 mysqlnd 驱动下有效。 | | `MYSQLI_OPT_INT_AND_FLOAT_NATIVE` | 使用非预处理语句时，将整数和浮点数类型的列转换成 PHP 的数值类型。 仅在 mysqlnd 驱动下有效。 | | `MYSQLI_OPT_SSL_VERIFY_SERVER_CERT` | 是否验证服务器证书。 | | `MYSQLI_OPT_CAN_HANDLE_EXPIRED_PASSWORDS` | 客户端是否接受过期密码。 | | `1` | 是否使用网络通信压缩。 |
- **`$value`** — 选项值。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 示例

参见 `mysqli_real_connect()`。

## 注释

> MySQLnd 总是使用服务器的默认字符集。此字符集在连接握手／认证时发送，并被 mysqlnd 使用。
>
> Libmysqlclient 使用 `my.cnf` 中的默认字符集或者由在调用 `mysqli_init()` 之后，`mysqli_real_connect()` 之前先调用 `mysqli_options()` 来指定。

## 参见

`mysqli_init()` `mysqli_real_connect()`
