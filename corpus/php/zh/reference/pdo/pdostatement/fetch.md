---
id: "zh-php-function-pdostatement-fetch"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::fetch"
title: "从结果集中获取下一行"
signature: "public mixed PDOStatement::fetch(int $mode = PDO::FETCH_DEFAULT, int $cursorOrientation = PDO::FETCH_ORI_NEXT, int $cursorOffset = 0)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.fetch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果集中获取下一行

## 说明

```php
public mixed PDOStatement::fetch(int $mode = PDO::FETCH_DEFAULT, int $cursorOrientation = PDO::FETCH_ORI_NEXT, int $cursorOffset = 0)
```

从一个 PDOStatement 对象相关的结果集中获取下一行。`$mode` 参数决定 POD 如何返回行。

## 参数

- **`$mode`** — 控制下一行如何返回给调用者。此值必须是 `PDO::FETCH_*` 系列常量中的一个，缺省为 `PDO::ATTR_DEFAULT_FETCH_MODE` 的值 （默认为 `PDO::FETCH_BOTH` ）。 - `PDO::FETCH_ASSOC`：返回一个索引为结果集列名的数组 - `PDO::FETCH_BOTH`（默认）：返回一个索引为结果集列名和以0开始的列号的数组 - `PDO::FETCH_BOUND`：返回 `true` ，并分配结果集中的列值给 `PDOStatement::bindColumn()` 方法绑定的 PHP 变量。 - `PDO::FETCH_CLASS`：返回请求类的新实例，通过将结果集的列映射到类的属性以实现对象初始化。此过程发生于构造方法调用之前，允许填充属性，无论其可见性如何，也不管是否被标记为 `readonly`。若类中不存在对应属性且存在魔术方法 __set()，则调用该方法；否则创建动态 public 属性。但如果同时指定了 `PDO::FETCH_PROPS_LATE` flag，则将在填充属性*前*调用构造函数。若 `$mode` 包含 `PDO::FETCH_CLASSTYPE`（例如 `PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE` ），类名由第一列的值确定。 - `PDO::FETCH_INTO`：更新一个被请求类已存在的实例，映射结果集中的列到类中命名的属性 - `PDO::FETCH_LAZY`：`PDO::FETCH_BOTH` 和 `PDO::FETCH_OBJ` 组合使用，返回 `PDORow` 对象，该对象在访问时创建对象属性名。 - `PDO::FETCH_NAMED`：返回与 `PDO::FETCH_ASSOC` 具有相同形式的数组，除了如果有多个同名列，则该键引用的值将是具有该列名的行中所有值的数组 - `PDO::FETCH_NUM`：返回一个索引为以0开始的结果集列号的数组 - `PDO::FETCH_OBJ`：返回一个属性名对应结果集列名的匿名对象 - `PDO::FETCH_PROPS_LATE`：当与 `PDO::FETCH_CLASS` 一起使用时，类的构造方法在从相应的列值分配属性之前被调用。
- **`$cursorOrientation`** — 对于 一个 PDOStatement 对象表示的可滚动游标，该值决定了哪一行将被返回给调用者。此值必须是 `PDO::FETCH_ORI_*` 系列常量中的一个，默认为 `PDO::FETCH_ORI_NEXT`。要想让 PDOStatement 对象使用可滚动游标，必须在用 `PDO::prepare()` 预处理SQL语句时，设置 `PDO::ATTR_CURSOR` 属性为 `PDO::CURSOR_SCROLL`。
- **`$cursorOffset`** — 对于一个 `$cursorOrientation` 参数设置为 `PDO::FETCH_ORI_ABS` 的 PDOStatement 对象代表的可滚动游标，此值指定结果集中想要获取行的绝对行号。 — 对于一个 `$cursorOrientation` 参数设置为 `PDO::FETCH_ORI_REL` 的 PDOStatement 对象代表的可滚动游标，此值指定想要获取行相对于调用 `PDOStatement::fetch()` 前游标的位置

## 返回值

此方法成功时返回的值依赖于获取类型。在所有情况下，失败或没有更多记录时都返回 `false`。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**使用不同的提取方式获取行**

```php


<?php
$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

/* 运用 PDOStatement::fetch 风格 */
print "PDO::FETCH_ASSOC: ";
print "Return next row as an array indexed by column name\n";
$result = $sth->fetch(PDO::FETCH_ASSOC);
print_r($result);
print "\n";

print "PDO::FETCH_BOTH: ";
print "Return next row as an array indexed by both column name and number\n";
$result = $sth->fetch(PDO::FETCH_BOTH);
print_r($result);
print "\n";

print "PDO::FETCH_LAZY: ";
print "Return next row as a PDORow object with column names as properties\n";
$result = $sth->fetch(PDO::FETCH_LAZY);
print_r($result);
print "\n";

print "PDO::FETCH_OBJ: ";
print "Return next row as an anonymous object with column names as properties\n";
$result = $sth->fetch(PDO::FETCH_OBJ);
print $result->name;
print "\n";
?>

    
```

以上示例会输出：

```text


PDO::FETCH_ASSOC: Return next row as an array indexed by column name
Array
(
    [name] => apple
    [colour] => red
)

PDO::FETCH_BOTH: Return next row as an array indexed by both column name and number
Array
(
    [name] => banana
    [0] => banana
    [colour] => yellow
    [1] => yellow
)

PDO::FETCH_LAZY: Return next row as a PDORow object with column names as properties
PDORow Object
(
    [name] => orange
    [colour] => orange
)

PDO::FETCH_OBJ: Return next row as an anonymous object with column names as properties
kiwi

    
```

**使用一个可滚动游标获取行**

```php


<?php
function readDataForwards($dbh) {
    $sql = 'SELECT hand, won, bet FROM mynumbers ORDER BY BET';
    $stmt = $dbh->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
    $stmt->execute();
    while ($row = $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_NEXT)) {
        $data = $row[0] . "\t" . $row[1] . "\t" . $row[2] . "\n";
        print $data;
    }
}
function readDataBackwards($dbh) {
    $sql = 'SELECT hand, won, bet FROM mynumbers ORDER BY bet';
    $stmt = $dbh->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_LAST);
    do {
        $data = $row[0] . "\t" . $row[1] . "\t" . $row[2] . "\n";
        print $data;
    } while ($row = $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_PRIOR));
}

print "Reading forwards:\n";
readDataForwards($conn);

print "Reading backwards:\n";
readDataBackwards($conn);
?>

    
```

以上示例会输出：

```text


Reading forwards:
21    10    5
16    0     5
19    20    10

Reading backwards:
19    20    10
16    0     5
21    10    5

    
```

**构造顺序**

当通过 `PDO::FETCH_CLASS` 获取对象时，首先分配对象属性，然后调用类的构造方法。然而，当指定了 `PDO::FETCH_PROPS_LATE` 时，则此顺序相反，即首先调用构造方法，然后分配属性。

```php


<?php
class Person
{
    private $name;

    public function __construct()
    {
        $this->tell();
    }

    public function tell()
    {
        if (isset($this->name)) {
            echo "I am {$this->name}.\n";
        } else {
            echo "I don't have a name yet.\n";
        }
    }
}

$sth = $dbh->query("SELECT * FROM people");
$sth->setFetchMode(PDO::FETCH_CLASS, 'Person');
$person = $sth->fetch();
$person->tell();
$sth->setFetchMode(PDO::FETCH_CLASS|PDO::FETCH_PROPS_LATE, 'Person');
$person = $sth->fetch();
$person->tell();
?>

    
```

以上示例的输出类似于：

```text


I am Alice.
I am Alice.
I don't have a name yet.
I am Bob.

    
```

## 参见

`PDO::prepare()` `PDOStatement::execute()` `PDOStatement::fetchAll()` `PDOStatement::fetchColumn()` `PDOStatement::fetchObject()` `PDOStatement::setFetchMode()`
