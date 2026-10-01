---
id: "zh-php-guide-pdo-connections"
language: "php"
lang: "zh"
category: "guide"
name: "pdo.connections"
title: "连接与连接管理"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.connections.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 连接与连接管理

连接是通过创建 PDO 基类的实例而建立的。使用哪种驱动程序并不重要，始终都会用 PDO 类名。构造函数接受用于指定数据库源（也称为 DSN）以及可选的用户名和密码（如果有）的参数。

**连接到 MySQL**

```php


<?php
$dbh = new PDO('mysql:host=localhost;dbname=test', $user, $pass);
?>
 
   
```

如果有任何连接错误，将抛出 `PDOException` 对象。如果想处理错误状态，可以捕获异常，或者选择将其留给 `set_exception_handler()` 设置的应用程序全局异常处理程序。

**处理连接错误**

```php


<?php
try {
    $dbh = new PDO('mysql:host=localhost;dbname=test', $user, $pass);
} catch (PDOException $e) {
    // 对于示例，尝试在超时后重新连接
}

   
```

> 就像其它任一 exception 一样，`PDOException` 可以通过  语句手动捕获，也可以通过 `set_exception_handler()` 自动捕获。否则，默认行为是将未捕获的异常转换为 `E_FATAL_ERROR`。fatal 错误可能会包含泄漏连接详情的 backtrace。因此，生产服务器上的 php.ini 选项 `display_errors` 应设置为 `0`。

连接数据库成功后，返回 PDO 类的实例给脚本。此连接在 PDO 对象的生存周期中保持有效状态。要关闭连接，需要确保删除它的所有剩余引用来销毁对象——可以通过对对象变量赋值 `null` 来实现。如果没有明确这么做，PHP 在脚本结束时会自动关闭连接。

> 如果还有其它对此 PDO 实例的引用（比如来自 PDOStatement 实例，或来自其它同一 PDO 实例的其它变量），也必须删除这些引用（例如，通过将 `null` 赋值给引用 PDOStatement 的变量）。

**关闭连接**

```php


<?php
$dbh = new PDO('mysql:host=localhost;dbname=test', $user, $pass);
// 在此使用连接
$sth = $dbh->query('SELECT * FROM foo');

// 使用完毕，关闭连接
$sth = null;
$dbh = null;
?>

   
```

很多 web 应用程序通过与数据库建立持久连接获得好处。持久连接不会在脚本结束时关闭，而是会缓存，且当另一个脚本使用相同凭证请求连接时重用。持久连接缓存可以避免每次脚本需要与数据库通信时建立新连接的开销，从而让 web 应用程序更快。

**持久化连接**

```php


<?php
$dbh = new PDO('mysql:host=localhost;dbname=test', $user, $pass, array(
    PDO::ATTR_PERSISTENT => true
));
?>

   
```

`PDO::ATTR_PERSISTENT` 选项的值转换为 `boolean`（启用/禁用持久连接），除非它不是数字 `string`，在这种情况下允许使用多个持久连接池。如果不同的链接使用不兼容的设置，非常有用，例如 `PDO::MYSQL_ATTR_USE_BUFFERED_QUERY` 的值不同。

> 如果想使用持久连接，必须在传递给 PDO 构造函数的驱动程序选项数组中设置 `PDO::ATTR_PERSISTENT`。如果在对象实例化后用 `PDO::setAttribute()` 设置此属性，驱动程序将不会使用持久连接。

> PDO 不会对持久连接执行任何清理操作。临时表、锁、事务及其他有状态的更改可能会保留在连接的上一次使用中，从而导致意外问题。更多信息可参阅持久数据库连接部分。

> 如果使用 PDO ODBC 驱动程序且 ODBC 库支持 ODBC 连接池（有 unixODBC 和 Windows 是其中的两个；可能会有更多），建议不要使用持久 PDO 连接，而是把连接缓存留给 ODBC 连接池层。ODBC 连接池在进程中与其它模块共享；如果 PDO 缓存连接，则此连接永远不会被返回到 ODBC 连接池，从而导致创建额外的连接来服务其它模块。
