---
id: "zh-php-function-function-apache-note"
language: "php"
lang: "zh"
category: "function"
name: "apache_note"
title: "取得或设置 apache 请求记录"
signature: "string|false apache_note(string $note_name, string|null $note_value = null)"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.apache-note.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得或设置 apache 请求记录

## 说明

```php
string|false apache_note(string $note_name, string|null $note_value = null)
```

这个函数是 Apache `table_get` 和 `table_set` 的包装。 它编辑了请求中存在的 notes 表。 这个表的目的是允许 Apache 模块进行通讯。

`apache_note()` 的主要用途是在同一个请求中，从一个模块传递信息到另一个模块。

## 参数

- **`$note_name`** — note 名。
- **`$note_value`** — note 值。

## 返回值

如果 `$note_value` 被省略或者为 `null`，则返回记录 `note_name` 的当前值。否则将记录 `note_name` 的值设为 `note_value` 并返回记录 `note_name` 的前一个值。如果未能获取记录，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$note_value` 可为 null。 |

## 示例

**在 PHP 与 Perl 之间传递信息**

```php


<?php

apache_note('name', 'Fredrik Ekengren');

// 调用 perl 脚本
virtual("/perl/some_script.pl");

$result = apache_note("resultdata");
?>

    
```

```perl


# 获取 Apache 请求对象
my $r = Apache->request()->main();

# 获取传递的数据
my $name = $r->notes('name');

# 一些处理

# 将结果返回给 PHP
$r->notes('resultdata', $result);

    
```

**在 access.log 中记录值**

```php


<?php

apache_note('sessionID', session_id());

?>

    
```

```apache


# "%{sessionID}n" can be used in the LogFormat directive

    
```

## 参见

`virtual()`
