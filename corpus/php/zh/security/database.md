---
id: "zh-php-security-security-database"
language: "php"
lang: "zh"
category: "security"
name: "security.database"
title: "数据库安全"
module: "security"
source_url: "https://www.php.net/manual/zh/security.database.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 数据库安全

今时今日，数据库系统已经成为各个动态网站上 web 应用程序的重要组成部分。由于非常敏感和机密的数据有可能保存在数据库中，所以对数据库实施保护就显得尤为重要了。

要从数据库中提取或者存入数据，就必须经过连接数据库、发送一条合法查询、获取结果、关闭连接等步骤。目前，能完成这一系列动作的最常用的查询语言是结构化查询语言 Structured Query Language (SQL)。可以看看攻击者是如何篡改 SQL 查询语句的。

PHP 本身并不能保护数据库的安全。下面的章节只是讲述怎样用 PHP 脚本对数据库进行基本的访问和操作。

记住一条简单的原则：深入防御。保护数据库的措施越多，攻击者就越难获得和使用数据库内的信息。正确地设计和应用数据库可以减少被攻击的担忧。

## 设计数据库

第一步一般都是创建数据库，除非是使用第三方的数据库服务。当创建一个数据库的时候，会指定一个所有者来执行和新建语句。通常，只有所有者（或超级用户）才有权对数据库中的对象进行任意操作。如果想让其他用户使用，就必须赋予他们权限。

应用程序永远不要使用数据库所有者或超级用户帐号来连接数据库，因为这些帐号可以执行任意的操作，比如说修改数据库结构（例如删除一个表）或者清空整个数据库的内容。

应该为程序的每个方面创建不同的数据库帐号，并赋予对数据库对象的极有限的权限。仅分配给能完成其功能所需的权限，避免同一个用户可以完成另一个用户的事情。这样即使攻击者利用程序漏洞取得了数据库的访问权限，也最多只能做到和该程序一样的影响范围。

## 连接数据库

把连接建立在 SSL 加密技术上可以增加客户端和服务器端通信的安全性，或者 SSH 也可以用于加密客户端和数据库之间的连接。如果使用了这些技术的话，攻击者要监视服务器的通信或者得到数据库的信息是很困难的。

simpara> If your database server has native SSL support, consider using <link linkend="ref.openssl">OpenSSL functions</link> in communication between PHP and database via SSL. </simpara

## 加密存储模型

SSL/SSH 能保护客户端和服务器端交换的数据，但 SSL/SSH 并不能保护数据库中已有的数据。SSL 只是一个加密网络数据流的协议。

如果攻击者取得了直接访问数据库的许可（绕过 web 服务器），敏感数据就可能暴露或者被滥用，除非数据库自己保护了这些信息。对数据库内的数据加密是减少这类风险的有效途径，但是只有很少的数据库提供这些加密功能。

解决这个问题最简单的方法是创建自己的加密包，然后在 PHP 脚本中使用它。PHP 可以通过一些扩展来帮助你解决这个问题，比如 OpenSSL 和 Sodium，涵盖了多种加密算法。脚本在将数据插入数据库之前对其进行加密，并在检索时对其进行解密。更多关于加密工作的例子请参见参考文献。

### 散列

对于真正隐藏的数据，如果不需要其原始表示形式（即不需要显示），应该考虑使用散列。 散列的典型例子是将密码的加密散列值存储在数据库中，而不是存储密码本身。

password 函数提供了一种便捷的方式来对敏感数据进行散列处理，并使用这些散列值进行验证。

`password_hash()` 用于使用当前可用的最强算法对给定字符串进行散列， `password_verify()` 用于检查给定密码是否与存储在数据库中的散列值匹配。

**对密码字段进行散列**

```php


<?php

// 存储密码散列
$query  = sprintf("INSERT INTO users(name,pwd) VALUES('%s','%s');",
            pg_escape_string($username),
            password_hash($password, PASSWORD_DEFAULT));
$result = pg_query($connection, $query);

// 发送请求来验证用户密码
$query = sprintf("SELECT pwd FROM users WHERE name='%s';",
            pg_escape_string($username));
$row = pg_fetch_assoc(pg_query($connection, $query));

if ($row && password_verify($password, $row['pwd'])) {
    echo 'Welcome, ' . htmlspecialchars($username) . '!';
} else {
    echo 'Authentication failed for ' . htmlspecialchars($username) . '.';
}

?>

      
```

## SQL 注入

SQL 注入是一种攻击技术，攻击者利用应用程序代码中构建动态 SQL 查询的缺陷。攻击者可以访问应用程序的特权部分，从数据库检索所有信息，篡改现有数据，甚至在数据库主机上执行危险的系统级命令。当开发人员在他们的 SQL 语句中连接或插入任意输入时，这种漏洞就会发生。

**将结果集切割成页面……并创建超级用户（PostgreSQL）。**

在下面的示例中，用户输入直接插入到 SQL 查询中，使得攻击者能够在数据库中获得超级用户账户。

```php


<?php

$offset = $_GET['offset']; // 注意，没有输入验证！
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 OFFSET $offset;";
$result = pg_query($conn, $query);

?>

      
```

普通用户会点击“上一页”、“下一页”，`$offset` 已经编码到 URL 的链接。脚本期望传入的 `$offset` 是数字。然而，如果有人尝试把以下语句追加入 URL 中的话： ```sql 0; insert into pg_shadow(usename,usesysid,usesuper,usecatupd,passwd) select 'crack', usesysid, 't','t','crack' from pg_shadow where usename='postgres'; -- ``` 如果发生，脚本将向攻击者提供超级用户访问权限。注意那个 `0;` 是为了向原始查询提供有效的偏移量并终止。

> 这是常见的技术，使用 SQL 中的注释符号 `--`，强制 SQL 解析器忽略开发者编写的查询的其余部分。

获取密码的一种可行方式是欺骗搜索结果页面。攻击者只需查看是否有已提交的未经适当处理变量在 SQL 语句中使用。这些过滤器通常可以在先前的表单中设置，以定制 `SELECT` 语句中的 `WHERE、ORDER BY、LIMIT` 和 `OFFSET` 子句。如果数据库支持 `UNION` 构造，攻击者可能会尝试将整个查询附加到原始查询中，以从任意表中列出密码。强烈建议仅存储密码的安全散列值，而不是密码本身。

**列出文章……以及一些密码（任何数据库服务器）**

```php


<?php

$query  = "SELECT id, name, inserted, size FROM products
           WHERE size = '$size'";
$result = odbc_exec($conn, $query);

?>

      
```

查询的静态部分可以与另一个 `SELECT` 语句组合来显示所有密码： ```sql ' union select '1', concat(uname||'-'||passwd) as name, '1971-01-01', '0' from usertable; -- ```

`UPDATE` 和 `INSERT` 语句也容易受到这种攻击的影响。

**从重置密码……到获得更多权限（任何数据库服务器）**

```php


<?php
$query = "UPDATE usertable SET pwd='$pwd' WHERE uid='$uid';";
?>

      
```

如果恶意的用户提交值 `' or uid like'%admin%` 给 `$uid` 来改变 admin 的密码，或者简单设置 `$pwd` 为 `hehehe', trusted=100, admin='yes` 去获得更多权限，然后查询语句实际上就变成了： ```php <?php // $uid: ' or uid like '%admin% $query = "UPDATE usertable SET pwd='...' WHERE uid='' or uid like '%admin%';"; // $pwd: hehehe', trusted=100, admin='yes $query = "UPDATE usertable SET pwd='hehehe', trusted=100, admin='yes' WHERE ...;"; ?> ```

虽然攻击者必须具备至少一些关于数据库架构的知识才能进行成功的攻击，但获取这些信息通常非常简单。例如代码可以是开源软件的一部分并且公开可用。这些信息也可能通过闭源代码泄露 —— 即使它经过了编码、混淆或编译 —— 甚至通过自己的代码显示错误消息来泄露。其他方法包括使用典型的表名和列名。例如，使用 ”users” 表以及列名”id”、 ”username” 和 ”password” 的登录表单。

**攻击数据库主机操作系统（MSSQL Server）**

一种可怕的示例是一些数据库主机上可以访问操作系统级别的命令。

```php


<?php

$query  = "SELECT * FROM products WHERE id LIKE '%$prod%'";
$result = mssql_query($query);

?>

      
```

如果攻击者提交 `a%' exec master..xp_cmdshell 'net user test testpass /ADD' --` 作为变量 `$prod` 的值，那么 `$query` 将会变成 ```php <?php $query = "SELECT * FROM products WHERE id LIKE '%a%' exec master..xp_cmdshell 'net user test testpass /ADD' --%'"; $result = mssql_query($query); ?> ``` MSSQL Server 执行批处理中的 SQL 语句，其中包括向本地账户数据库添加新用户的命令。如果该应用程序以 `sa` 身份运行，并且 MSSQLSERVER 服务以足够的权限运行，则攻击者现在将拥有一个账户，可以用此账户访问这台机器。

> 以上的一些示例与特定的数据库服务器相关联，这并不意味着不能对其他产品进行类似的攻击。用户的数据库服务器可能以其他方式同样存在漏洞。

### 预防措施

避免 SQL 注入的推荐方法是通过使用预处理语句绑定所有数据。仅仅使用参数化查询并不能完全避免 SQL 注入，但它是提供输入给 SQL 语句的最简单和最安全的方式。在 `WHERE`、`SET` 和 `VALUES` 子句中，所有动态数据常量都必须替换为占位符。实际数据将在执行过程中进行绑定，并与 SQL 命令分开发送。

参数绑定只能用于数据。SQL 查询的其他动态部分必须根据已知的允许值列表进行筛选。

**通过使用 PDO 预处理语句来避免 SQL 注入**

```php


<?php

// 动态 SQL 部分根据预期值进行验证
$sortingOrder = $_GET['sortingOrder'] === 'DESC' ? 'DESC' : 'ASC';
$productId = $_GET['productId'];
// 使用占位符准备 SQL
$stmt = $pdo->prepare("SELECT * FROM products WHERE id LIKE ? ORDER BY price {$sortingOrder}");
// 使用 LIKE 通配符提供值
$stmt->execute(["%{$productId}%"]);

?>

       
```

预处理语句由 PDO、MySQLi 和其他数据库库提供。

SQL 注入攻击主要是基于利用代码在编写时没有考虑安全性。永远不要相信任何输入，特别是来自客户端的输入，即使它来自于选择框、隐藏的输入字段或 cookie。第一个示例表明，即使是如此简单的查询也可能带来灾难。

深度防御策略涉及几种良好的编程实践：

- 永远不要以超级用户或数据库所有者的身份连接到数据库。始终使用具有最低权限的自定义用户。
- 检查指定输入是否具有预期的数据类型。PHP 拥有很多输入验证函数，从最简单的变量函数和字符类型函数（例如 `is_numeric()`、`ctype_digit()`）到支持 Perl 兼容正则表达式的函数。
- 如果应用程序期望数字输入，可以考虑使用 `ctype_digit()` 验证数据，使用 `settype()`更改其类型，或者使用 `sprintf()` 打印其数字表示形式。
- 如果数据库层不支持绑定变量，则应使用特定于数据库的字符串转义函数（例如 `mysql_real_escape_string()`、`sqlite_escape_string()` 等）对传递给数据库的用户提供的非数字值进行转义。通用的函数如 `addslashes()` 只在非常特定的环境中有用（例如在禁用了 `NO_BACKSLASH_ESCAPES` 的单字节字符集 MySQL），因此最好避免使用它们。
- 请勿以正当或非正当手段打印出任何特定于数据库的信息，特别是关于 schema 的信息。另请参阅错误报告和错误处理以及日志记录函数。

除此之外，如果数据库支持日志记录，还可以从脚本里或通过数据库自身记录查询语句。显然，日志记录无法阻止任何有害尝试，但它可以帮助追踪绕过了哪个应用程序。日志本身并没有用处，但通过其中包含的信息可以得到帮助。通常情况下，更详细的信息比较少的信息更好。
