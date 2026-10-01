---
id: "zh-php-function-pdostatement-setfetchmode"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::setFetchMode"
title: "为语句设置默认的获取模式"
signature: "public bool PDOStatement::setFetchMode(int $mode)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.setfetchmode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为语句设置默认的获取模式

## 说明

```php
public bool PDOStatement::setFetchMode(int $mode)
```

```php
public bool PDOStatement::setFetchMode(int $mode = PDO::FETCH_COLUMN, int $colno)
```

```php
public bool PDOStatement::setFetchMode(int $mode = PDO::FETCH_CLASS, string $class, array|null $constructorArgs = null)
```

```php
public bool PDOStatement::setFetchMode(int $mode = PDO::FETCH_INTO, object $object)
```

## 参数

- **`$mode`** — 获取模式必须是 `PDO::FETCH_{*}` 常量中的一个。
- **`$colno`** — 列号。
- **`$class`** — 类名。
- **`$constructorArgs`** — 构造方法参数。
- **`$object`** — 对象。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**设置获取模式**

以下示例演示了 `PDOStatement::setFetchMode()` 如何更改 PDOStatement 对象的默认获取模式。

```php


<?php
$stmt = $dbh->query('SELECT name, colour, calories FROM fruit');
$stmt->setFetchMode(PDO::FETCH_NUM);
foreach ($stmt as $row) {
    print $row[0] . "\t" . $row[1] . "\t" . $row[2] . "\n";
}

    
```

以上示例的输出类似于：

```text


apple   red     150
banana  yellow  250
orange  orange  300
kiwi    brown   75
lemon   yellow  25
pear    green   150

    
```

 Use when adding See Also links <refsect1 role="seealso"> <title xmlns="http://docbook.org/ns/docbook">参见</title> <para> <simplelist> <member><methodname></methodname></member> <member>Or <link linkend="somethingelse">something else</link></member> </simplelist> </para> </refsect1>
