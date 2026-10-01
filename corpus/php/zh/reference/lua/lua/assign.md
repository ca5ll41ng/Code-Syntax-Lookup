---
id: "zh-php-function-lua-assign"
language: "php"
lang: "zh"
category: "function"
name: "Lua::assign"
title: "将一个php变量赋值给Lua"
signature: "public mixed Lua::assign(string $name, string $value)"
module: "lua"
source_url: "https://www.php.net/manual/zh/lua.assign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将一个php变量赋值给Lua

## 说明

```php
public mixed Lua::assign(string $name, string $value)
```

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$name`**
- **`$value`**

## 返回值

赋值成功返回`$this`否则返回`null`

## 示例

**`Lua::assign()`示例**

```php


<?php
$lua = new Lua();
$lua->assign("php_var", array(1=>1, 2, 3)); //lua table index begin with 1
$lua->eval(<<<CODE
    print(php_var);
CODE
);
?>

   
```

以上示例会输出：

```text


Array
 (
     [1] => 1
     [2] => 2
     [3] => 3
 )

   
```
