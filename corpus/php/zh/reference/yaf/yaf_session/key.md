---
id: "zh-php-function-yaf-session-key"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::key"
title: "获取当前会话条目的键"
signature: "public mixed Yaf_Session::key()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前会话条目的键

## 说明

```php
public mixed Yaf_Session::key()
```

返回迭代时当前会话条目的键。

## 参数

此函数没有参数。

## 返回值

当前会话条目的键。

## 示例

**`Yaf_Session::key()` 示例**

```php


<?php
$session = Yaf_Session::getInstance();
$session->start();

$session->set("user_id", 42);
$session->set("lang", "en");

for ($session->rewind(); $session->valid(); $session->next()) {
    echo $session->key(), " => ", var_export($session->current(), true), PHP_EOL;
}
?>

   
```

以上示例的输出类似于：

```text


user_id => 42
lang => 'en'

   
```

## 参见

 `Yaf_Session::current()` `Yaf_Session::next()` `Yaf_Session::rewind()` `Yaf_Session::valid()`
