---
id: "zh-php-guide-pdo-constants-fetch-modes"
language: "php"
lang: "zh"
category: "guide"
name: "pdo.constants.fetch-modes"
title: "获取模式"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.constants.fetch-modes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取模式

参见 `PDO::FETCH_ORI_*` 游标常量的游标常量。

## 基本获取模式

| 获取模式 | 摘要 |
| --- | --- |
| `PDO::FETCH_DEFAULT` | 用于当前默认获取模式的特殊值。 |
| `PDO::FETCH_ASSOC` | 仅按列名索引的数组。 |
| `PDO::FETCH_BOTH`（默认） | 同时按列号和列名索引的数组。 |
| `PDO::FETCH_NAMED` | 保留重复列的 `PDO::FETCH_ASSOC` 变体。 |
| `PDO::FETCH_NUM` | 仅按列号索引的数组。 |
| `PDO::FETCH_COLUMN` | 单列。 |
| `PDO::FETCH_KEY_PAIR` | 键值对，按第一列索引。 |
| `PDO::FETCH_FUNC` | 使用函数创建返回值。（仅适用于 `PDOStatement::fetchAll()`） |
| `PDO::FETCH_OBJ` | 匿名（`stdClass`）对象。 |
| `PDO::FETCH_CLASS` | 指定类的对象。 |

## PDO::FETCH_CLASS 选项

这些模式用于在使用 `PDO::FETCH_CLASS` 时实现选项。

| 获取模式 | 摘要 |
| --- | --- |
| `PDO::FETCH_CLASSTYPE` | 使用第一列作为类名。 |
| `PDO::FETCH_PROPS_LATE` | 在设置属性之前调用构造方法。 |
| `PDO::FETCH_SERIALIZE` | 使用 PHP 序列化数据。自 PHP 8.1.0 起弃用。 |

## 单结果模式

以下模式无法与 `PDOStatement::fetchAll()` 一起使用。

| 获取模式 | 摘要 |
| --- | --- |
| `PDO::FETCH_BOUND` | 将值绑定到指定变量。 |
| `PDO::FETCH_INTO` | 更新现有对象。 |
| `PDO::FETCH_LAZY` | 通过 `PDORow` 实现延迟获取，以支持类似数组和对象的访问方式。 |

## `PDOStatement::fetchAll()` 的特殊行为 flag

以下适用于多结果的特殊模式仅与 `PDOStatement::fetchAll()` 兼容，且不适用于某些其他获取模式。详情请参阅完整文档。

| 获取模式 | 摘要 |
| --- | --- |
| `PDO::FETCH_GROUP` | 结果按第一列分组。 |
| `PDO::FETCH_UNIQUE` | 结果按第一列（唯一）索引。 |

## 重复列名的处理方式

结果中可能包含使用相同名称的多个列。例如，在连接两个表时，这两个表都包含具有相同名称的列。

由于 PHP 的数组和对象等结构不支持使用相同名称的多个 key 或属性，返回的数组或对象将仅包含其中一个使用相同名称的值。

对于重复名称，指定返回哪个值应视为未定义行为。

为避免此问题，可以使用别名手动命名列。例如：

 
```sql

SELECT table1.created_at AS t1_created_at,
       table2.created_at AS t2_created_at
FROM table1
JOIN table2 ON table1.table2id = table2.id

   
```

 

参见 `PDO::FETCH_NAMED`、`PDO::ATTR_FETCH_TABLE_NAMES` 和 `PDO::ATTR_FETCH_CATALOG_NAMES`。

## 设置默认获取模式

可以使用 `PDO::__construct()` 或 `PDO::setAttribute()`，通过 `PDO::ATTR_DEFAULT_FETCH_MODE` 设置所有查询的默认获取模式。

可以使用 `PDOStatement::setFetchMode()` 为特定语句设置默认获取模式。这会影响作为预处理语句的再次使用以及迭代（使用 foreach）。

> `PDOStatement::setAttribute()` 无法用于设置默认获取模式。它仅接受特定驱动程序的属性，并会静默忽略未识别的属性。

## PDO::FETCH_DEFAULT (`int`)

自 PHP 8.0.7 起可用。

这是一个特殊值，`PDOStatement` 是当前默认使用的获取模式。当扩展 `PDOStatement` 以与 `PDO::ATTR_STATEMENT_CLASS` 一起使用时，它作为方法参数的默认值非常有用。

此值不能与 `PDO::ATTR_DEFAULT_FETCH_MODE` 一起使用。

## PDO::FETCH_ASSOC (`int`)

`PDO::FETCH_ASSOC` 返回仅按列名索引的数组。

 
```php

<?php
$stmt = $pdo->query("SELECT userid, name, country FROM users");
$row = $stmt->fetch(\PDO::FETCH_ASSOC);
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [userid] => 104
    [name] => Chris
    [country] => Ukraine
)

   
```

 

## PDO::FETCH_BOTH (`int`)

这是默认的获取模式。

`PDO::FETCH_BOTH` 返回同时列号和列名索引的数组。这意味着每一行结果中的每个返回值都是重复的。

列号从 0 开始，由查询结果中的列顺序决定，而不是表中定义的列顺序。

> 不建议使用数字列索引，因为当查询发生更改时，或者在使用 `SELECT *` 时表结构发生更改，列索引可能会发生变化。

> 在多个返回列使用相同名称的情况下，按名称索引的条目数量可能与按数字索引的条目数量不匹配。

 
```php

<?php
$stmt = $pdo->query("SELECT userid, name, country FROM users");
$row = $stmt->fetch(\PDO::FETCH_BOTH);
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [id] => 104,
    [0] => 104,
    [name] => Chris,
    [1] => Chris,
    [country] => Ukraine,
    [2] => Ukraine
)

   
```

 

## PDO::FETCH_NAMED (`int`)

`PDO::FETCH_NAMED` 返回的结果格式与 `PDO::FETCH_ASSOC` 相同，但当多个列使用相同名称时，所有值将以列表形式返回。

有关重复列名的处理及其替代方法的更多信息，请参阅上文关于重复名称处理的部分。

重复值的返回顺序应视为未定义。无法确定每个值的来源。

 
```php

<?php
$stmt = $pdo->query(
    "SELECT users.*, referrer.name
     FROM users
     LEFT JOIN users AS referrer ON users.referred_by = referrer.userid
     WHERE userid = 109"
);
$row = $stmt->fetch(\PDO::FETCH_NUM);
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [userid] => 109
    [name] => Array
        (
            [0] => Toni
            [1] => Chris
        )
    [country] => Germany
    [referred_by] = 104
)

   
```

 

## PDO::FETCH_NUM (`int`)

`PDO::FETCH_NUM` 返回的数组仅按列号索引。列号从 0 开始，并由查询中的结果列顺序决定，而不是（例如）表中定义的列顺序。

> 不建议使用数字列索引，因为当查询发生更改时，或者在使用 `SELECT *` 时表结构发生更改，该索引可能会发生变化。

 
```php

<?php
$stmt = $pdo->query("SELECT userid, name, country FROM users");
$row = $stmt->fetch(\PDO::FETCH_NUM);
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [0] => 104
    [1] => Chris
    [2] => Ukraine
)

   
```

 

## PDO::FETCH_COLUMN (`int`)

`PDO::FETCH_COLUMN` 用于返回单列的值。可通过 `PDOStatement::setFetchMode()` 或 `PDOStatement::fetchAll()` 的第二个参数指定要返回的列。

若指定的列不存在，将抛出 `ValueError`。

 
```php

<?php
$stmt = $pdo->query("SELECT name, country FROM users LIMIT 3");
$row = $stmt->fetchAll(\PDO::FETCH_COLUMN);
print_r($row);

$stmt = $pdo->query("SELECT name, country FROM users LIMIT 3");
$row = $stmt->fetchAll(\PDO::FETCH_COLUMN, 1);
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [0] => Chris
    [1] => Jamie
    [2] => Robin
)

Array
(
    [0] => Ukraine
    [1] => England
    [2] => Germany
)

   
```

 

## PDO::FETCH_KEY_PAIR (`int`)

`PDO::FETCH_KEY_PAIR` 返回以第一列为索引的键值对，结果必须仅包含两列。此获取模式仅适用于 `PDOStatement::fetchAll()`。

> 若第一列不唯一，将丢失部分值，具体哪些值会丢失属于未定义行为。

 
```php

<?php
$stmt = $pdo->query("SELECT name, country FROM users LIMIT 3");
$row = $stmt->fetchAll(\PDO::FETCH_KEY_PAIR);
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [Chris] => Ukraine
    [Jamie] => England
    [Robin] => Germany
)

   
```

 

## PDO::FETCH_FUNC (`int`)

指定用于创建返回值的函数。此模式仅可用于 `PDOStatement::fetchAll()`。

该函数以各列的值作为参数接收。因无法获知某个值原本关联的列名，因此必须确保查询中的列顺序与函数参数顺序一致。

> `PDO::FETCH_GROUP` 和 `PDO::FETCH_UNIQUE` 的效果会在调用该函数之前应用于结果。

 
```php

<?php
function valueCreator($col1, $col2, $col3)
{
    return [
        'col1' => $col1,
        'col2' => strtoupper($col2),
        'col3' => $col3,
        'customKey' => 'customValue',
    ];
}

$stmt = $pdo->query("SELECT userid, name, country FROM users LIMIT 3");
$row = $stmt->fetchAll(\PDO::FETCH_FUNC, valueCreator(...));
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [0] => Array
        (
            [col1] => 104
            [col2] => SAM
            [col3] => Ukraine
            [customKey] => customValue
        )

    [1] => Array
        (
            [col1] => 105
            [col2] => JAMIE
            [col3] => England
            [customKey] => customValue
        )

    [2] => Array
        (
            [col1] => 107
            [col2] => ROBIN
            [col3] => Germany
            [customKey] => customValue
        )

)

   
```

 

## PDO::FETCH_OBJ (`int`)

`PDO::FETCH_OBJ` 返回 `stdClass` 对象。

参见 `PDOStatement::fetchObject()` 和 `PDO::FETCH_CLASS`。

 
```php

<?php
$stmt = $pdo->query("SELECT userid, name, country FROM users");
$row = $stmt->fetch(\PDO::FETCH_OBJ);
print_r($row);

   
```

 以上示例会输出：  
```text

stdClass Object
(
    [userid] => 104
    [name] => Chris
    [country] => Ukraine
)

   
```

 

## PDO::FETCH_CLASS (`int`)

返回指定类的对象。有关附加行为，请参见选项 flag。

如果返回的列名与对象中已存在的属性名称不匹配，将会动态声明该属性。已废弃此行为，并自 PHP 9.0 起会引发错误。

参见 `PDOStatement::fetchObject()`。

 
```php

<?php

class TestEntity
{
    public $userid;

    public $name;

    public $country;

    public $referred_by_userid;

    public function __construct()
    {
        print "Constructor called with ". count(func_get_args()) ." args\n";
        print "Properties set when constructor called? "
            . (isset($this->name) ? 'Yes' : 'No') . "\n";
    }
}

$stmt = $db->query(
    "SELECT userid, name, country, referred_by_userid FROM users"
);
$stmt->setFetchMode(PDO::FETCH_CLASS, TestEntity::class);
$result = $stmt->fetch();
var_dump($result);

   
```

 以上示例的输出类似于：  
```text

Constructor called with 0 args
Properties set when constructor called? Yes
object(TestEntity)#3 (4) {
  ["userid"]=>
  int(104)
  ["name"]=>
  string(5) "Chris"
  ["country"]=>
  string(7) "Ukraine"
  ["referred_by_userid"]=>
  NULL
}

   
```

 

## PDO::FETCH_CLASSTYPE (`int`)

此获取模式仅可与 `PDO::FETCH_CLASS`（及其他选项）结合使用。

使用此获取模式时，PDO 会将返回结果的第一列作为要实例化的类名。

若指定的类未找到，将返回 `stdClass` 对象，且不产生警告或错误。

 
```php

<?php
class TestEntity
{
    public $userid;

    public $name;

    public $country;

    public $referred_by_userid;

    public function __construct()
    {
        print "Constructor called with ". count(func_get_args()) ." args\n";
        print "Properties set when constructor called? "
            . (isset($this->name) ? 'Yes' : 'No') . "\n";
    }
}

$stmt = $db->query(
    "SELECT 'TestEntity', userid, name, country, referred_by_userid FROM users"
);
$stmt->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE);
$result = $stmt->fetch();
var_dump($result);

   
```

 以上示例的输出类似于：  
```text

Constructor called with 0 args
Properties set when constructor called? Yes
object(TestEntity)#3 (4) {
  ["userid"]=>
  int(104)
  ["name"]=>
  string(5) "Chris"
  ["country"]=>
  string(7) "Ukraine"
  ["referred_by_userid"]=>
  NULL
}

   
```

 

## PDO::FETCH_PROPS_LATE (`int`)

此获取模式仅可与 `PDO::FETCH_CLASS`（及其他选项）结合使用。

使用此获取模式时，会在属性赋值前调用构造方法。

 
```php

<?php
class TestEntity
{
    public $userid;

    public $name;

    public $country;

    public $referred_by_userid;

    public function __construct()
    {
        print "Constructor called with ". count(func_get_args()) ." args\n";
        print "Properties set when constructor called? "
            . (isset($this->name) ? 'Yes' : 'No') . "\n";
    }
}

$stmt = $db->query(
    "SELECT userid, name, country, referred_by_userid FROM users"
);
$stmt->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, TestEntity::class);
$result = $stmt->fetch();
var_dump($result);

   
```

 以上示例的输出类似于：  
```text

Constructor called with 0 args
Properties set when constructor called? No
object(TestEntity)#3 (4) {
  ["userid"]=>
  int(104)
  ["name"]=>
  string(5) "Chris"
  ["country"]=>
  string(7) "Ukraine"
  ["referred_by_userid"]=>
  NULL
}

   
```

 

## PDO::FETCH_SERIALIZE (`int`)

> 此功能自 PHP 8.1.0 起*弃用*。强烈建议不要应用此功能。

此获取模式仅可与 `PDO::FETCH_CLASS`（及其他选项）结合使用。

使用此获取模式时，指定的类必须实现 Serializable。

> 此功能不支持包含完整序列化对象（通过 `serialize()` 生成）的字符串。

> 此获取模式不会调用构造方法。

 
```php

<?php
class TestEntity implements Serializable
{
    public $userid;

    public $name;

    public $country;

    public $referred_by_userid;

    public function __construct()
    {
        print "Constructor called with " . count(func_get_args()) . " args\n";
        print "Properties set when constructor called? "
            . (isset($this->name) ? 'Yes' : 'No') . "\n";
    }

    public function serialize()
    {
        return join(
            "|",
            [$this->userid, $this->name, $this->country, $this->referred_by_userid]
        );
    }

    public function unserialize(string $data)
    {
        $parts = explode("|", $data);
        $this->userid = (int) $parts[0];
        $this->name = $parts[1];
        $this->country = $parts[2];

        $refId = $parts[3];
        $this->referred_by_userid = ($refId === "" ? null : (int) $refId);
    }
}

print "Set up record (constructor called manually):\n";
$db->exec(
    "CREATE TABLE serialize (
        sdata TEXT
    )"
);

$origObj = new TestEntity();
$origObj->userid = 200;
$origObj->name = 'Seri';
$origObj->country = 'Syria';
$origObj->referred_by_userid = null;

$insert = $db->prepare("INSERT INTO serialize (sdata) VALUES (:sdata)");
$insert->execute(['sdata' => $origObj->serialize()]);

print "\nRetrieve result:\n";
$query = "SELECT sdata FROM serialize";
$stmt = $db->query($query);
// NOTE: Constructor is never called!
$stmt->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_SERIALIZE, TestEntity::class);
$result = $stmt->fetch();
var_dump($result);

   
```

 以上示例的输出类似于：  
```text

Deprecated: TestEntity implements the Serializable interface, which is deprecated. Implement __serialize() and __unserialize() instead (or in addition, if support for old PHP versions is necessary) in Standard input code on line 2
Set up record (constructor called manually):
Constructor called with 0 args
Properties set when constructor called? No

Retrieve result:
Deprecated: PDOStatement::setFetchMode(): The PDO::FETCH_SERIALIZE mode is deprecated in Standard input code on line 58

Deprecated: PDOStatement::fetch(): The PDO::FETCH_SERIALIZE mode is deprecated in Standard input code on line 59
object(TestEntity)#5 (4) {
  ["userid"]=>
  int(200)
  ["name"]=>
  string(4) "Seri"
  ["country"]=>
  string(5) "Syria"
  ["referred_by_userid"]=>
  NULL
}

   
```

 

## PDO::FETCH_BOUND (`int`)

此获取模式无法与 `PDOStatement::fetchAll()` 一起使用。

此获取模式不直接返回结果，而是将值绑定到通过 `PDOStatement::bindColumn()` 指定的变量，所调用的获取方法返回 `true`。

> 使用预处理语句时，为确保正确运行，变量必须在查询执行后进行绑定。

```php


<?php
$query = "SELECT users.userid, users.name, users.country, referrer.name
    FROM users
    LEFT JOIN users AS referrer ON users.referred_by_userid = referrer.userid";
$stmt = $db->prepare($query);
$stmt->execute();

$stmt->bindColumn('userid', $userId);
$stmt->bindColumn('name', $name);
$stmt->bindColumn('country', $country);
// Bind by column position to resolve duplicated column name
// To avoid this breaking if the query is changed, use an SQL alias instead
// For example: referrer.name AS referrer_name
$stmt->bindColumn(4, $referrerName);

while ($stmt->fetch(\PDO::FETCH_BOUND)) {
    print join("\t", [$userId, $name, $country, ($referrerName ?? 'NULL')]) . "\n";
}

  
```

以上示例会输出：

```text


104	Chris	Ukraine	NULL
105	Jamie	England	NULL
107	Robin	Germany	Chris
108	Sean	Ukraine	NULL
109	Toni	Germany	NULL
110	Toni	Germany	NULL

  
```

## PDO::FETCH_INTO (`int`)

此获取模式无法与 `PDOStatement::fetchAll()` 一起使用。

此获取模式会更新指定对象中的属性。成功后，将返回该对象。

如果返回的列名对应的属性不存在，则会动态声明该属性。已弃用此行为，自 PHP 9.0 起会导致错误。

属性必须是 `public` 并且不能是 `readonly`。

> 若不在每次获取记录之间使用 `PDOStatement::setFetchMode()`，则无法更改待更新的对象。

 
```php

<?php
class TestEntity
{
    public $userid;

    public $name;

    public $country;

    public $referred_by_userid;
}

$obj = new TestEntity();

$stmt = $db->query("SELECT userid, name, country, referred_by_userid FROM users");

$stmt->setFetchMode(\PDO::FETCH_INTO, $obj);
$result = $stmt->fetch();

var_dump($result);

   
```

 以上示例的输出类似于：  
```text

object(TestEntity)#3 (4) {
  ["userid"]=>
  int(104)
  ["name"]=>
  string(5) "Chris"
  ["country"]=>
  string(7) "Ukraine"
  ["referred_by_userid"]=>
  NULL
}

   
```

 

## PDO::FETCH_LAZY (`int`)

此获取模式无法与 `PDOStatement::fetchAll()` 一起使用。

此获取模式返回 `PDORow` 对象，以延迟方式检索，并同时支持类似数组和对象访问值的方式（即结合了 `PDO::FETCH_BOTH` 与 `PDO::FETCH_OBJ` 的行为）。

这种方式可在 PHP 端实现对数据库服务器上非缓冲结果的内存高效访问。PDO 是否对结果使用客户端缓冲，取决于所使用的数据库特定驱动及其配置。

> `PDORow` 在访问未定义的属性或 key 时会返回 `NULL`，且不产生任何错误或警告，这可能导致拼写错误或查询未返回预期数据等问题更难发现和调试。

> 返回的 `PDORow` 对象在每次获取结果时都会更新。

```php


<?php
$stmt = $db->query("SELECT userid, name, country, referred_by_userid FROM users");
$result = $stmt->fetch(\PDO::FETCH_LAZY);

print "ID: ". $result[0] ."\n";
print "Name: {$result->name}\n";
print "Country: " . $result['country'] ."\n";
// 返回 NULL，不触发警告或错误
print "Does not exist: " . var_export($result->does_not_exist, true) . "\n";

$differentResult = $stmt->fetch(\PDO::FETCH_LAZY);
// 先前检索的 PDORow 现在指向新的检索结果
print "ID: ". $result[0] ."\n";


  
```

以上示例会输出：

```text


ID: 104
Name: Chris
Country: Ukraine
Does not exist: NULL
ID: 105

  
```

## PDO::FETCH_GROUP (`int`)

`PDO::FETCH_GROUP` 返回以某一（非唯一）列作为索引的关联数组列表。此获取模式仅适用于 `PDOStatement::fetchAll()`。

当与 `PDO::FETCH_UNIQUE` 组合使用时，两种模式会使用同一列，导致该组合失去实际作用。

此获取模式应与 `PDO::FETCH_ASSOC`、`PDO::FETCH_BOTH`、`PDO::FETCH_NAMED`、`PDO::FETCH_NUM`、`PDO::FETCH_COLUMN` 或 `PDO::FETCH_FUNC` 中的一种组合使用。

若未指定上述列表中的获取模式，则当前的默认获取模式用于 `PDOStatement`。

 
```php

<?php
$stmt = $pdo->query("SELECT country, userid, name FROM users");
$row = $stmt->fetchAll(\PDO::FETCH_GROUP | \PDO::FETCH_ASSOC);
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [Ukraine] => Array
        (
            [0] => Array
                (
                    [userid] => 104
                    [name] => Chris
                )

            [1] => Array
                (
                    [userid] => 108
                    [name] => Sean
                )

        )
    [England] => Array
        (
            [0] => Array
                (
                    [userid] => 105
                    [name] => Jamie
                )

        )

    [Germany] => Array
        (
            [0] => Array
                (
                    [userid] => 107
                    [name] => Robin
                )

            [1] => Array
                (
                    [userid] => 109
                    [name] => Toni
                )
        )
)

   
```

 

在上述示例中需注意，每行数组中会省略第一列，该列仅作为 key 存在。若要将其包含在数组中，可重复该列，如下例所示：

 
```php

<?php
$stmt = $pdo->query("SELECT country, userid, name, country FROM users");
$row = $stmt->fetchAll(\PDO::FETCH_GROUP | \PDO::FETCH_ASSOC);
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [Ukraine] => Array
        (
            [0] => Array
                (
                    [userid] => 104
                    [name] => Chris
                    [country] => Ukraine
                )

            [1] => Array
                (
                    [userid] => 108
                    [name] => Sean
                    [country] => Ukraine
                )

        )
    [England] => Array
        (
            [0] => Array
                (
                    [userid] => 105
                    [name] => Jamie
                    [country] => England
                )

        )

    [Germany] => Array
        (
            [0] => Array
                (
                    [userid] => 107
                    [name] => Robin
                    [country] => Germany
                )

            [1] => Array
                (
                    [userid] => 109
                    [name] => Toni
                    [country] => Germany
                )
        )
)

   
```

 

## PDO::FETCH_UNIQUE (`int`)

`PDO::FETCH_UNIQUE` 使用第一列作为索引记录，每个索引值返回一条记录。此获取模式仅适用于 `PDOStatement::fetchAll()`。

当与 `PDO::FETCH_GROUP` 组合使用时，两种模式会使用同一列，导致该组合失去实际作用。

此获取模式应与 `PDO::FETCH_ASSOC`、`PDO::FETCH_BOTH`、`PDO::FETCH_NAMED`、`PDO::FETCH_NUM`、`PDO::FETCH_COLUMN` 或 `PDO::FETCH_FUNC` 中的一种组合使用。

若未指定上述列表中的获取模式，则当前的默认获取模式用于 `PDOStatement`。

当与已知的唯一列（例如记录 ID）一起使用时，此模式可快速返回以该值为索引的结果。

> 若第一列不唯一，将丢失部分值，具体哪些值会丢失属于未定义行为。

> 应尽可能在 SQL 中进行记录过滤。数据库会利用索引优化该过程，仅返回所需记录。若从数据库中选取了超出所需的记录，可能会显著增加内存占用和查询时间，尤其在结果集较大时。

 
```php

<?php
$stmt = $pdo->query("SELECT userid, name, country FROM users LIMIT 3");
$row = $stmt->fetchAll(\PDO::FETCH_UNIQUE | \PDO::FETCH_ASSOC);
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [104] => Array
        (
            [name] => Chris
            [country] => Ukraine
        )

    [105] => Array
        (
            [name] => Jamie
            [country] => England
        )

    [107] => Array
        (
            [name] => Robin
            [country] => Germany
        )

)

   
```

 

在上述示例中需注意，每行数组中会省略第一列，该列仅作为 key 存在。若要将其包含在数组中，可重复该列，如下例所示：

 
```php

<?php
$stmt = $pdo->query("SELECT userid, userid, name, country FROM users LIMIT 3");
$row = $stmt->fetchAll(\PDO::FETCH_UNIQUE | \PDO::FETCH_ASSOC);
print_r($row);

   
```

 以上示例会输出：  
```text

Array
(
    [104] => Array
        (
            [userid] => 104
            [name] => Chris
            [country] => Ukraine
        )

    [105] => Array
        (
            [userid] => 105
            [name] => Jamie
            [country] => England
        )

    [107] => Array
        (
            [userid] => 107
            [name] => Robin
            [country] => Germany
        )

)

   
```
