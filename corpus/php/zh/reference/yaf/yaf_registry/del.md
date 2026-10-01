---
id: "zh-php-function-yaf-registry-del"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Registry::del"
title: "从注册表中移除条目"
signature: "public static bool Yaf_Registry::del(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-registry.del.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从注册表中移除条目

## 说明

```php
public static bool Yaf_Registry::del(string $name)
```

从注册表中移除一个条目。移除不存在的名称会被静默接受。

## 参数

- **`$name`** — 注册表条目的名称。

## 返回值

始终返回 `true`。

## 示例

**`Yaf_Registry::del()` 示例**

```php


<?php
Yaf_Registry::set("redis", new Redis());
var_dump(Yaf_Registry::has("redis"));

var_dump(Yaf_Registry::del("redis"));
var_dump(Yaf_Registry::has("redis"));

/* 删除不存在的条目会被静默接受 */
var_dump(Yaf_Registry::del("redis"));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(true)
bool(false)
bool(true)

   
```

## 参见

 `Yaf_Registry::get()` `Yaf_Registry::set()` `Yaf_Registry::has()`
