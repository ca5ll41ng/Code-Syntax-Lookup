---
id: "zh-php-function-luaclosure-invoke"
language: "php"
lang: "zh"
category: "function"
name: "LuaClosure::__invoke"
title: "调用 luaclosure"
signature: "public void LuaClosure::__invoke(mixed $args)"
module: "lua"
source_url: "https://www.php.net/manual/zh/luaclosure.invoke.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用 luaclosure

## 说明

```php
public void LuaClosure::__invoke(mixed $args)
```

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$args`**

## 返回值

## 示例

**`LuaClosure::__invoke()`示例**

```php


<?php
$lua = new Lua();
$closure = $lua->eval(<<<CODE
    return (function ()
        print("hello world")
    end)
CODE
);

$lua->call($closure);
$closure();
?>

   
```

以上示例会输出：

```text


hello worldhello world

   
```
