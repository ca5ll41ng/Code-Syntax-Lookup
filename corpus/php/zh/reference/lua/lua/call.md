---
id: "zh-php-function-lua-call"
language: "php"
lang: "zh"
category: "function"
name: "Lua::call"
aliases: ["Lua::__call"]
title: "调用Lua函数"
signature: "public mixed Lua::call(callable $lua_func, [array $args = ...], int $use_self = 0)"
module: "lua"
source_url: "https://www.php.net/manual/zh/lua.call.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用Lua函数

## 说明

```php
public mixed Lua::call(callable $lua_func, [array $args = ...], int $use_self = 0)
```

```php
public mixed Lua::__call(callable $lua_func, [array $args = ...], int $use_self = 0)
```

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$lua_func`** — lua中的函数名。
- **`$args`** — 向Lua函数传入的参数。
- **`$use_self`** — 是否使用`self`。

## 返回值

返回调用函数的结果，参数错误返回`null` ，其它错误返回`false`。

## 示例

**`Lua::call()`示例**

```php


<?php
$lua = new Lua();
$lua->eval(<<<CODE
    function dummy(foo, bar)
        print(foo, ",", bar)
    end
CODE
);
$lua->call("dummy", array("Lua", "geiliable\n"));
$lua->dummy("Lua", "geiliable"); // __call()
var_dump($lua->call(array("table", "concat"), array(array(1=>1, 2=>2, 3=>3), "-")));
?>

   
```

以上示例会输出：

```text


Lua,geiliable
Lua,geiliable
string(5) "1-2-3"

   
```

## 参见

 __call()
