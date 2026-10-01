---
id: "zh-php-function-yaf-session-next"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::next"
title: "前进到下一个会话条目"
signature: "public void Yaf_Session::next()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 前进到下一个会话条目

## 说明

```php
public void Yaf_Session::next()
```

将内部迭代器移动到下一个会话条目。

## 参数

此函数没有参数。

## 返回值

不返回值。

## 示例

**`Yaf_Session::next()` 示例**

```php


<?php
$session = Yaf_Session::getInstance();
$session->start();

$session->set("user_id", 42);
$session->set("lang", "en");

$session->rewind();
echo $session->key(), PHP_EOL;

$session->next();
echo $session->key(), PHP_EOL;
?>

   
```

以上示例的输出类似于：

```text


user_id
lang

   
```

## 参见

 `Yaf_Session::current()` `Yaf_Session::key()` `Yaf_Session::rewind()` `Yaf_Session::valid()`
