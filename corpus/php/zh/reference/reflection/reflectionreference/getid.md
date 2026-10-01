---
id: "zh-php-function-reflectionreference-getid"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionReference::getId"
title: "获取引用的唯一 ID"
signature: "public string ReflectionReference::getId()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionreference.getid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取引用的唯一 ID

## 说明

```php
public string ReflectionReference::getId()
```

返回一个 ID，该 ID 在该引用的生命周期内对于该引用是唯一的。 此 ID 可用于比较引用的相等性，或维护已知引用的映射。

## 参数

此函数没有参数。

## 返回值

返回一个未指定格式的 `string`。

## 示例

**基本的 `ReflectionReference::getId()` 用法**

```php


<?php
$val1 = 'foo';
$val2 = 'bar';
$arr = [&$val1, &$val2, &$val1];

$rr1 = ReflectionReference::fromArrayElement($arr, 0);
$rr2 = ReflectionReference::fromArrayElement($arr, 1);
$rr3 = ReflectionReference::fromArrayElement($arr, 2);

var_dump($rr1->getId() === $rr2->getId());
var_dump($rr1->getId() === $rr3->getId());
?>

   
```

以上示例会输出：

```text


bool(false)
bool(true)

   
```
