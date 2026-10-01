---
id: "zh-php-function-yaf-session-valid"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::valid"
title: "检查当前会话位置是否有效"
signature: "public bool Yaf_Session::valid()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查当前会话位置是否有效

## 说明

```php
public bool Yaf_Session::valid()
```

检查会话迭代器的当前位置是否有效。

## 参数

此函数没有参数。

## 返回值

当前位置有效时返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Session::valid()` 示例**

```php


<?php
$session = Yaf_Session::getInstance();
$session->start();

$session->set("user_id", 42);

$session->rewind();
var_dump($session->valid());

$session->next();
// 越过最后一个条目后，位置不再有效
var_dump($session->valid());
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(false)

   
```

## 参见

 `Yaf_Session::current()` `Yaf_Session::key()` `Yaf_Session::next()` `Yaf_Session::rewind()`
