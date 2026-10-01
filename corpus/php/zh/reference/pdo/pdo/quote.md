---
id: "zh-php-function-pdo-quote"
language: "php"
lang: "zh"
category: "function"
name: "PDO::quote"
title: "为 SQL 查询里的字符串添加引号"
signature: "public string|false PDO::quote(string $string, int $type = PDO::PARAM_STR)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.quote.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为 SQL 查询里的字符串添加引号

## 说明

```php
public string|false PDO::quote(string $string, int $type = PDO::PARAM_STR)
```

`PDO::quote()` 为输入的字符串添加引号，并对特殊字符进行转义，且引号的风格和底层驱动适配。

如果使用此函数构建 SQL 语句，*强烈*建议使用 `PDO::prepare()` 配合参数构建，而不是用 `PDO::quote()` 把用户输入的数据拼接进 SQL 语句。使用 prepare 语句处理参数，不仅仅可移植性更好，而且更方便、免疫 SQL 注入；相对于拼接 SQL 更快，客户端和服务器都能缓存编译后的 SQL 查询。

不是所有的 PDO 驱动都实现了此功能（例如 PDO_ODBC）。 考虑使用 prepare 代替。

> 安全性：默认字符集
>
> 字符集不仅仅要在数据库服务器上设置，也要为数据库连接设置（取决于驱动），它影响了 `PDO::quote()`。 更多信息可参考PDO 驱动文档。

## 参数

- **`$string`** — 要添加引号的字符串。
- **`$type`** — 为驱动程序的数据类型提供引号风格的提示。例如 `PDO_PARAM_LOB` 将告诉驱动程序转义二进制数据。

## 返回值

返回加引号的字符串，理论上可以安全用于 SQL 语句。 如果驱动不支持这种方式，将返回 `false` 。

 Use when ERRORS exist <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title> <para> When does this function throw E_* level errors, or exceptions? </para> </refsect1> 

## 示例

**普通字符串加引号**

```php


<?php
$conn = new PDO('sqlite:/home/lynn/music.sql3');

/* 简单字符串 */
$string = 'Nice';
print "Unquoted string: $string\n";
print "Quoted string: " . $conn->quote($string) . "\n";
?>

    
```

以上示例会输出：

```text


Unquoted string: Nice
Quoted string: 'Nice'

    
```

**危险字符串加引号**

```php


<?php
$conn = new PDO('sqlite:/home/lynn/music.sql3');

/* 危险字符串 */
$string = 'Naughty \' string';
print "Unquoted string: $string\n";
print "Quoted string:" . $conn->quote($string) . "\n";
?>

    
```

以上示例会输出：

```text


Unquoted string: Naughty ' string
Quoted string: 'Naughty '' string'

    
```

**复杂字符串加引号**

```php


<?php
$conn = new PDO('sqlite:/home/lynn/music.sql3');

/* 复杂字符串 */
$string = "Co'mpl''ex \"st'\"ring";
print "Unquoted string: $string\n";
print "Quoted string: " . $conn->quote($string) . "\n";
?>

    
```

以上示例会输出：

```text


Unquoted string: Co'mpl''ex "st'"ring
Quoted string: 'Co''mpl''''ex "st''"ring'

    
```

## 参见

`PDO::prepare()` `PDOStatement::execute()`
