---
id: "zh-php-function-yaf-session-isset"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::__isset"
title: "检查会话键是否存在"
signature: "public bool Yaf_Session::__isset(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.isset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查会话键是否存在

## 说明

```php
public bool Yaf_Session::__isset(string $name)
```

检查会话键是否存在。此方法是 `Yaf_Session::has()` 的别名，在对会话对象使用 `isset()` 时会被调用。

## 参数

- **`$name`** — 要检查的会话键。

## 返回值

键存在时返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Session::__isset()` 示例**

```php


<?php
$session = Yaf_Session::getInstance();
$session->start();

$session->user_id = 42;

var_dump(isset($session->user_id));
var_dump(isset($session->user_name));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(false)

   
```

## 参见

 `Yaf_Session::has()` `Yaf_Session::get()`
