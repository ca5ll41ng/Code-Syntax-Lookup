---
id: "zh-php-function-pdostatement-nextrowset"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::nextRowset"
title: "在一个多行集合语句句柄中推进到下一个行集合"
signature: "public bool PDOStatement::nextRowset()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.nextrowset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在一个多行集合语句句柄中推进到下一个行集合

## 说明

```php
public bool PDOStatement::nextRowset()
```

一些数据库服务支持返回一个以上行集合（也被称为结果集）的存储过程。`PDOStatement::nextRowset()` 使你能够结合一个 PDOStatement 对象访问第二个以及后续的行集合。上述的每个行集合可以有不同的列集合。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**获取由一个存储过程返回的多个行集合**

下面示例展示了怎样调用一个存储过程，返回三个行集合的 `MULTIPLE_ROWSETS`。用 do-while 循环来循环调用 `PDOStatement::nextRowset()` 方法，直到返回 `false` 并且不再有行集合可用时结束循环。

```php


<?php
$sql = 'CALL multiple_rowsets()';
$stmt = $conn->query($sql);
$i = 1;
do {
    $rowset = $stmt->fetchAll(PDO::FETCH_NUM);
    if ($rowset) {
        printResultSet($rowset, $i);
    }
    $i++;
} while ($stmt->nextRowset());

function printResultSet(&$rowset, $i) {
    print "Result set $i:\n";
    foreach ($rowset as $row) {
        foreach ($row as $col) {
            print $col . "\t";
        }
        print "\n";
    }
    print "\n";
}
?>

    
```

以上示例会输出：

```text


Result set 1:
apple    red
banana   yellow

Result set 2:
orange   orange    150
banana   yellow    175

Result set 3:
lime     green
apple    red
banana   yellow

    
```

## 参见

`PDOStatement::columnCount()` `PDOStatement::execute()` `PDOStatement::getColumnMeta()` `PDO::query()`
