---
id: "zh-php-guide-mysql-examples"
language: "php"
lang: "zh"
category: "guide"
name: "mysql.examples"
title: "示例"
module: "mysql"
source_url: "https://www.php.net/manual/zh/mysql.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## MySQL 扩展概述范例

这个简单的范例展示了如何连接、执行一个查询，打印结果集后断开 MySQL 数据库的连接。

**MySQL 扩展概述范例**

```php


<?php
// 连接、选择数据库
$link = mysql_connect('mysql_host', 'mysql_user', 'mysql_password')
    or die('Could not connect: ' . mysql_error());
echo 'Connected successfully';
mysql_select_db('my_database') or die('Could not select database');

// 执行 SQL 查询
$query = 'SELECT * FROM my_table';
$result = mysql_query($query) or die('Query failed: ' . mysql_error());

// 以 HTML 打印查询结果
echo "<table>\n";
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
    echo "\t</tr>\n";
}
echo "</table>\n";

// 释放结果集
mysql_free_result($result);

// 关闭连接
mysql_close($link);
?>

    
```
