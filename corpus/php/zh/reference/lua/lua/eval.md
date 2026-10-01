---
id: "zh-php-function-lua-eval"
language: "php"
lang: "zh"
category: "function"
name: "Lua::eval"
title: "将字符串当做Lua代码执行"
signature: "public mixed Lua::eval(string $statements)"
module: "lua"
source_url: "https://www.php.net/manual/zh/lua.eval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串当做Lua代码执行

## 说明

```php
public mixed Lua::eval(string $statements)
```

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$statements`**

## 返回值

返回运行结果，参数错误返回`null` ，其它错误返回`false`。

## 示例

**`Lua::eval()`示例**

```php


<?php
$lua = new Lua();
$lua->eval(<<<CODE
    print(2);
CODE
);
?>

   
```

以上示例会输出：

```text


2

   
```
