---
id: "zh-php-function-pdo-connect"
language: "php"
lang: "zh"
category: "function"
name: "PDO::connect"
title: "连接到数据库，如果驱动支持则返回 PDO 子类实例"
signature: "public static static PDO::connect(string $dsn, string|null $username = null, string|null $password = null, array|null $options = null)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 连接到数据库，如果驱动支持则返回 PDO 子类实例

## 说明

```php
public static static PDO::connect(string $dsn, string|null $username = null, string|null $password = null, array|null $options = null)
```

如果所连接的数据库存在对应的 `PDO` 子类， 则创建该子类的实例，否则返回通用的 `PDO` 实例。



## 返回值

如果对应的 PDO 驱动存在子类，则返回该 `PDO` 子类的实例，否则返回通用的 `PDO` 实例。



## 参见

 `Pdo\Dblib` `Pdo\Firebird` `Pdo\Mysql` `Pdo\Odbc` `Pdo\Pgsql` `Pdo\Sqlite` `PDO::__construct()`
