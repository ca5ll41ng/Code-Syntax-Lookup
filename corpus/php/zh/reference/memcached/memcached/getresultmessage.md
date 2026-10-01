---
id: "zh-php-function-memcached-getresultmessage"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getResultMessage"
title: "返回最后一次操作的结果描述消息"
signature: "public string Memcached::getResultMessage()"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getresultmessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后一次操作的结果描述消息

## 说明

```php
public string Memcached::getResultMessage()
```

`Memcached::getResultMessage()` 返回一个字符串来描述最后一次 Memcached 方法执行的结果。

## 参数

此函数没有参数。

## 返回值

最后一次 Memcached 操作结果的描述消息。

## 示例

**`Memcached::getResultMessage()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->add('foo', 'bar'); // first time should succeed
$m->add('foo', 'bar');
echo $m->getResultMessage(),"\n";
?>

    
```

以上示例会输出：

```text


NOT STORED

    
```
