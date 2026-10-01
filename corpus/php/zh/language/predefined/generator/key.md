---
id: "zh-php-function-generator-key"
language: "php"
lang: "zh"
category: "function"
name: "Generator::key"
title: "返回当前产生的键"
signature: "public mixed Generator::key()"
module: "language"
source_url: "https://www.php.net/manual/zh/generator.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前产生的键

## 说明

```php
public mixed Generator::key()
```

获取产生的值的键

## 参数

此函数没有参数。

## 返回值

返回当前产生的键。

## 示例

**`Generator::key()` example**

```php


<?php

function Gen()
{
    yield 'key' => 'value';
}

$gen = Gen();

echo "{$gen->key()} => {$gen->current()}";

    
```

以上示例会输出：

```text


key => value

    
```
