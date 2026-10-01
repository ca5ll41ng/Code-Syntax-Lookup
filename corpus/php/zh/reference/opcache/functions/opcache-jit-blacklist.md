---
id: "zh-php-function-function-opcache-jit-blacklist"
language: "php"
lang: "zh"
category: "function"
name: "opcache_jit_blacklist"
title: "将某个函数加入黑名单，使其不参与 JIT 编译"
signature: "void opcache_jit_blacklist(Closure $closure)"
module: "opcache"
source_url: "https://www.php.net/manual/zh/function.opcache-jit-blacklist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将某个函数加入黑名单，使其不参与 JIT 编译

## 说明

```php
void opcache_jit_blacklist(Closure $closure)
```

此函数在启用追踪 JIT 时，将指定的函数加入黑名单，使其不参与 JIT 编译。函数通过 `Closure` 指定。

> 函数中已 JIT 编译的部分不受影响，仍会继续使用 JIT 编译。

## 参数

- **`$closure`** — 要加入黑名单的函数，以一级可调用形式表示。也可传入匿名函数，此时匿名函数自身会加入黑名单。

## 返回值

没有返回值。

## 示例

**`opcache_jit_blacklist()` 基础示例**

```php


<?php
function foo() {
	$x = 1;
	$x += 0;
	++$x;
	var_dump($x);
}
opcache_jit_blacklist(foo(...));
foo();
?>

   
```

## 参见

 `opcache_invalidate()` `opcache_reset()`
