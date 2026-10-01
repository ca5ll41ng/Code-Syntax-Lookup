---
id: "zh-php-function-lua-registercallback"
language: "php"
lang: "zh"
category: "function"
name: "Lua::registerCallback"
title: "向Lua中注册php函数"
signature: "public mixed Lua::registerCallback(string $name, callable $function)"
module: "lua"
source_url: "https://www.php.net/manual/zh/lua.registercallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向Lua中注册php函数

## 说明

```php
public mixed Lua::registerCallback(string $name, callable $function)
```

向Lua注册php函数，函数名为"$name"

## 参数

- **`$name`**
- **`$function`** — 一个有效的PHP回调函数

## 返回值

成功返回`$this`，参数错误返回`null` ，其它错误返回`false`。

## 示例

**`Lua::registerCallback()`示例**

```php


<?php
$lua = new Lua();
$lua->registerCallback("echo", "var_dump");
$lua->eval(<<<CODE
    echo({1, 2, 3});
CODE
);
?>

   
```

以上示例会输出：

```text


array(3) {
  [1]=>
  float(1)
  [2]=>
  float(2)
  [3]=>
  float(3)
}

   
```
