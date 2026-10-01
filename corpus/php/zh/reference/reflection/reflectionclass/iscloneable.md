---
id: "zh-php-function-reflectionclass-iscloneable"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::isCloneable"
title: "返回了一个类是否可复制"
signature: "public bool ReflectionClass::isCloneable()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.iscloneable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回了一个类是否可复制

## 说明

```php
public bool ReflectionClass::isCloneable()
```

返回了这个类是否可复制。

## 参数

此函数没有参数。

## 返回值

如果这个类可以复制返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::isCloneable()` 的基本用法**

```php


<?php
class NotCloneable {
    public $var1;
    
    private function __clone() {
    }
}

class Cloneable {
    public $var1;
}

$notCloneable = new ReflectionClass('NotCloneable');
$cloneable = new ReflectionClass('Cloneable');

var_dump($notCloneable->isCloneable());
var_dump($cloneable->isCloneable());
?>

    
```

以上示例会输出：

```text


bool(false)
bool(true)

    
```
