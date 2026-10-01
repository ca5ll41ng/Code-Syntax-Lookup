---
id: "zh-php-function-function-untaint"
language: "php"
lang: "zh"
category: "function"
name: "untaint"
title: "清除字符串上的污点标记"
signature: "bool untaint(string $string, string $strings)"
module: "taint"
source_url: "https://www.php.net/manual/zh/function.untaint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 清除字符串上的污点标记

## 说明

```php
bool untaint(string $string, string $strings)
```

清除指定字符串上的污点标记。

标记存储于字符串本身而非变量之上，因此一次调用即可同时清除 所有共享同一字符串的变量上的标记。可用它来为已经自行校验过的值 放行，例如在严格的白名单检查之后。

## 参数

- **`$string`** — 持有待清除标记的字符串的变量。
- **`$strings`** — 更多待清除标记的变量。

## 返回值

始终返回 `true`。当 taint.enable 未开启时， 该函数不做任何事，但仍然返回 `true`。

## 示例

**`untaint()` 示例**

```php


<?php
$id = "42";
taint($id);
if (preg_match('/^\d+$/', $id)) {
    // strictly validated as digits: safe to trust
    untaint($id);
}
var_dump(is_tainted($id));
?>

   
```

以上示例的输出类似于：

```text


bool(false)

   
```

## 注释

> 只有字符串能携带标记；传入非字符串值时不做任何事。

## 参见

`taint()` `is_tainted()`
