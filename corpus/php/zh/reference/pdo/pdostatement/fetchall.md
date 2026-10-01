---
id: "zh-php-function-pdostatement-fetchall"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::fetchAll"
title: "从结果集中获取剩余的行"
signature: "public array PDOStatement::fetchAll(int $mode = PDO::FETCH_DEFAULT)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.fetchall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果集中获取剩余的行

## 说明

```php
public array PDOStatement::fetchAll(int $mode = PDO::FETCH_DEFAULT)
```

```php
public array PDOStatement::fetchAll(int $mode = PDO::FETCH_COLUMN, int $column)
```

```php
public array PDOStatement::fetchAll(int $mode = PDO::FETCH_CLASS, string $class, array|null $constructorArgs)
```

```php
public array PDOStatement::fetchAll(int $mode = PDO::FETCH_FUNC, callable $callback)
```

## 参数

- **`$mode`** — 控制返回数组的内容如同 `PDOStatement::fetch()` 文档中记载的一样。默认为 `PDO::ATTR_DEFAULT_FETCH_MODE` 的值（ 其缺省值为 `PDO::FETCH_BOTH` ） — 想要返回一个包含结果集中单独一列所有值的数组，需要指定 `PDO::FETCH_COLUMN` 。通过指定 `$column` 参数获取想要的列。 — 要根据某一列的值（而不是连续的数字）来索引结果数组，在 SQL 的列（column）列表中将该列名放在首位，并使用 `PDO::FETCH_UNIQUE`。这一列必须仅包含唯一值，否则部分数据将会丢失。 — 要将结果以三维数组的形式对指定列的值进行分组，在 SQL 的列（column）列表中将该列名放在首位，并使用 `PDO::FETCH_GROUP`。 — 要将结果以二维数组的形式进行分组，使用 `PDO::FETCH_GROUP` 与 `PDO::FETCH_COLUMN` 的按位或（OR）操作。结果将会按照第一列进行分组，数组元素的值将是来自第二列的相应条目的列表数组。

以下是依赖获取模式的动态参数。它们不能与命名参数一起使用。

- **`$column`** — 与 `PDO::FETCH_COLUMN` 一起使用。返回指定以 0 开始索引的列。
- **`$class`** — 与 `PDO::FETCH_CLASS`一起使用。返回指定类的实例，映射每行的列到类中对应的属性名。
- **`$constructorArgs`** — 当 `$mode` 参数为 `PDO::FETCH_CLASS` 时自定义类构造方法的参数。
- **`$callback`** — 与 `PDO::FETCH_FUNC`一起使用。将每行的列作为参数传递给指定的函数，并返回调用函数后的结果。

## 返回值

`PDOStatement::fetchAll()` 返回一个包含结果集中所有剩余行的数组。此数组的每一行要么是一个列值的数组，要么是属性对应每个列名的一个对象。如果获取到的结果为 0，则返回空数组。

使用此方法获取大结果集将导致系统负担加重且可能占用大量网络资源。与其取回所有数据后用PHP来操作，倒不如考虑使用数据库服务来处理结果集。例如，在取回数据并通过PHP处理前，在 SQL 中使用 WHERE 和 ORDER BY 子句来限定结果。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在此方法始终返回 `array`，之前可能在失败时返回 `false`。 |

## 示例

**获取结果集中所有剩余的行**

```php


<?php
$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

/* 获取结果集中所有剩余的行 */
print "Fetch all of the remaining rows in the result set:\n";
$result = $sth->fetchAll();
print_r($result);
?>

    
```

以上示例的输出类似于：

```text


Fetch all of the remaining rows in the result set:
Array
(
    [0] => Array
        (
            [name] => apple
            [0] => apple
            [colour] => red
            [1] => red
        )

    [1] => Array
        (
            [name] => pear
            [0] => pear
            [colour] => green
            [1] => green
        )

    [2] => Array
        (
            [name] => watermelon
            [0] => watermelon
            [colour] => pink
            [1] => pink
        )

)

    
```

**获取结果集中单独一列的所有值**

下面示例演示了如何从一个结果集中返回单独一列所有的值，尽管 SQL 语句自身可能返回每行多列。

```php


<?php
$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

/* 获取第一列所有值 */
$result = $sth->fetchAll(PDO::FETCH_COLUMN, 0);
var_dump($result);
?>

    
```

以上示例的输出类似于：

```text


Array(3)
(
    [0] =>
    string(5) => apple
    [1] =>
    string(4) => pear
    [2] =>
    string(10) => watermelon
)

    
```

**根据单独的一列把所有值分组**

下面示例演示了如何返回一个根据结果集中指定列的值分组的关联数组。该数组包含三个键：返回的 `apple` 和 `pear` 数组包含了两种不同的颜色，而返回的 `watermelon` 数组仅包含一种颜色。

```php


<?php
$insert = $dbh->prepare("INSERT INTO fruit(name, colour) VALUES (?, ?)");
$insert->execute(array('apple', 'green'));
$insert->execute(array('pear', 'yellow'));

$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

/* 根据第一列分组  */
var_dump($sth->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_GROUP));
?>

    
```

以上示例的输出类似于：

```text


array(3) {
  ["apple"]=>
  array(2) {
    [0]=>
    string(5) "green"
    [1]=>
    string(3) "red"
  }
  ["pear"]=>
  array(2) {
    [0]=>
    string(5) "green"
    [1]=>
    string(6) "yellow"
  }
  ["watermelon"]=>
  array(1) {
    [0]=>
    string(5) "pink"
  }
}


    
```

**每行结果实例化一个类**

下面列子演示了 `PDO::FETCH_CLASS` 获取风格的行为。

```php


<?php
class fruit {
    public $name;
    public $colour;
}

$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

$result = $sth->fetchAll(PDO::FETCH_CLASS, "fruit");
var_dump($result);
?>

    
```

以上示例的输出类似于：

```text


array(3) {
  [0]=>
  object(fruit)#1 (2) {
    ["name"]=>
    string(5) "apple"
    ["colour"]=>
    string(5) "green"
  }
  [1]=>
  object(fruit)#2 (2) {
    ["name"]=>
    string(4) "pear"
    ["colour"]=>
    string(6) "yellow"
  }
  [2]=>
  object(fruit)#3 (2) {
    ["name"]=>
    string(10) "watermelon"
    ["colour"]=>
    string(4) "pink"
  }
  [3]=>
  object(fruit)#4 (2) {
    ["name"]=>
    string(5) "apple"
    ["colour"]=>
    string(3) "red"
  }
  [4]=>
  object(fruit)#5 (2) {
    ["name"]=>
    string(4) "pear"
    ["colour"]=>
    string(5) "green"
  }
}

    
```

**每行调用一次函数**

下面列子演示了 `PDO::FETCH_FUNC` 获取风格的行为。

```php


<?php
function fruit($name, $colour) {
    return "{$name}: {$colour}";
}

$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

$result = $sth->fetchAll(PDO::FETCH_FUNC, "fruit");
var_dump($result);
?>

    
```

以上示例的输出类似于：

```text


array(3) {
  [0]=>
  string(12) "apple: green"
  [1]=>
  string(12) "pear: yellow"
  [2]=>
  string(16) "watermelon: pink"
  [3]=>
  string(10) "apple: red"
  [4]=>
  string(11) "pear: green"
}

    
```

## 参见

`PDO::query()` `PDOStatement::fetch()` `PDOStatement::fetchColumn()` `PDO::prepare()` `PDOStatement::setFetchMode()`
