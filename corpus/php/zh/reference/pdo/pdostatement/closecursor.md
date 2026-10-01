---
id: "zh-php-function-pdostatement-closecursor"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::closeCursor"
title: "关闭游标，使语句能再次被执行"
signature: "public bool PDOStatement::closeCursor()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.closecursor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭游标，使语句能再次被执行

## 说明

```php
public bool PDOStatement::closeCursor()
```

`PDOStatement::closeCursor()` 释放到数据库服务的连接，以便发出其他 SQL 语句，但使语句处于一个可以被再次执行的状态。

当上一个执行的 PDOStatement 对象仍有未取行时，此方法对那些不支持再执行一个 PDOStatement 对象的数据库驱动非常有用。 如果数据库驱动受此限制，则可能出现失序错误的问题。

`PDOStatement::closeCursor()` 要么是一个可选驱动的特有方法（效率最高）来实现，要么是在没有驱动特定的功能时作为一般的PDO 备用来实现。一般的备用语义上与下面的 PHP 代码相同：

```php


<?php
do {
    while ($stmt->fetch())
        ;
    if (!$stmt->nextRowset())
        break;
} while (true);
?>

   
```

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**`PDOStatement::closeCursor()` 示例**

在下面示例中，`$stmt` PDOStatement 对象返回多行，但应用程序只取第一行，让 PDOStatement 对象处于一个有未取行的状态。为确保应用程序对所有数据库驱动都能正常运行，在执行 `$otherStmt` PDOStatement 对象前，在 `$stmt` 调用 `PDOStatement::closeCursor()`。

```php


<?php
/* 创建一个 PDOStatement 对象 */
$stmt = $dbh->prepare('SELECT foo FROM bar');

/* 创建第二个 PDOStatement 对象 */
$otherStmt = $dbh->prepare('SELECT foobaz FROM foobar');

/* 执行第一条语句 */
$stmt->execute();

/*  从结果集中只取出第一行 */
$stmt->fetch();

/* The following call to closeCursor() may be required by some drivers */
$stmt->closeCursor();

/*  现在可以执行第二条语句了 */
$otherStmt->execute();
?>

    
```

## 参见

`PDOStatement::execute()`
