---
id: "zh-php-guide-book-taint"
language: "php"
lang: "zh"
category: "guide"
name: "book.taint"
title: "Taint"
module: "taint"
source_url: "https://www.php.net/manual/zh/book.taint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Taint

Taint

 简介  Taint 是一个污点追踪扩展，用于检测 XSS 代码（即被污染的字符串）， 也可以用来发现 SQL 注入、命令注入、文件路径注入等类似漏洞。    开启 taint 后，来自用户输入 —— `$_GET`、`$_POST` 和 `$_COOKIE` —— 的字符串会在请求开始时被标记为 已污染，并且该标记会随字符串操作一路传递。当一个被污染的字符串 到达危险的汇点（sink，如输出、SQL 查询、shell 命令、文件路径等）时， taint 会在该处发出警告。完整的清单见 传播规则与被检查的汇点。    Taint 是开发和审计工具，而不是运行时的防御手段：它只报告可能 存在的问题，既不会拦截也不会修改数据。它有意采用保守策略，宁可 多报，因此一次"干净"的运行只意味着"taint 没有发现任何污点"， 绝不等于"已证明安全"。不要在生产环境中开启它。   
**Taint 示例**

```php

<?php
$a = trim($_GET['a']);

$file_name = '/tmp/' . $a;
$output    = "Welcome, {$a} !!!";
$sql       = "SELECT * FROM users WHERE name = " . $a;

echo $output;
print $output;
include $file_name;
mysqli_query($link, $sql);
?>

   
```

以上示例的输出类似于：

```text

Warning: main() [echo]: Attempt to echo a string that might be tainted in /path/to/script.php on line 9

Warning: main() [print]: Attempt to print a string that might be tainted in /path/to/script.php on line 10

Warning: main() [include]: File path contains data that might be tainted in /path/to/script.php on line 11

Warning: main() [mysqli_query]: SQL statement contains data that might be tainted in /path/to/script.php on line 12

   
```
