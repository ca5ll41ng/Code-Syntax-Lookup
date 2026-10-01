---
id: "zh-php-function-yaconf-has"
language: "php"
lang: "zh"
category: "function"
name: "Yaconf::has"
title: "检查某个配置值是否存在"
signature: "public static bool Yaconf::has(string $name)"
module: "yaconf"
source_url: "https://www.php.net/manual/zh/yaconf.has.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查某个配置值是否存在

## 说明

```php
public static bool Yaconf::has(string $name)
```

判断在 `$name` 使用与 `Yaconf::get()` 相同的点号记法： 例如 `"app.name"` 还可以用 `"users.database.master"`

## 参数

- **`$name`** — 要查找的配置名。使用点号记法逐层定位嵌套的键，例如 `"app.name"`

## 返回值

如果在 `$name` `false`。

## 示例

下面的示例假定在 `yaconf.directory` 配置的目录中 放置了一个 `app.ini`，其中包含 `name="shop"` 和 `debug=0` 两个键。

**`Yaconf::has()` 示例**

```php


<?php
var_dump(Yaconf::has("app.name"));     // bool(true)
var_dump(Yaconf::has("app.missing"));  // bool(false)

// 可用于区分"存了空值"和"键不存在"：
// 这两种情况下 Yaconf::get() 都会返回同一个默认值
if (Yaconf::has("app.debug")) {
    $debug = (bool) Yaconf::get("app.debug");
}
?>

   
```

## 参见

`Yaconf::get()` `Yaconf::__debug_info()`
