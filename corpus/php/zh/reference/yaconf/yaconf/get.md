---
id: "zh-php-function-yaconf-get"
language: "php"
lang: "zh"
category: "function"
name: "Yaconf::get"
title: "按名称读取一个配置值"
signature: "public static mixed Yaconf::get(string $name, mixed $default = null)"
module: "yaconf"
source_url: "https://www.php.net/manual/zh/yaconf.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 按名称读取一个配置值

## 说明

```php
public static mixed Yaconf::get(string $name, mixed $default = null)
```

读取以 `$name` 形式寻址，逐层定位嵌套的键：例如 `"app"` 中某个键的值。自 Yaconf 1.2.0 起，还支持 `"users.database.master"` 子目录下的 `database.ini` 文件中的键。 点号记法最多支持 64 层嵌套。

## 参数

- **`$name`** — 要查找的配置名。使用点号记法逐层定位嵌套的键，例如 `"app.name"` `"users.database.master"`
- **`$default`** — 当 `$name` 时返回该值。未指定时返回 `null`。

## 返回值

当 `$name` `array`；否则返回 `$default` 参数，则返回 `null`）。

## 示例

下面的示例假定在 `yaconf.directory` 配置的目录中 放置了以下两个文件。

```ini


; app.ini
name="shop"                     ; scalar value
debug=0                         ; number
features[]="checkout"           ; array entries, both notations
features.1="wishlist"

  
```

```ini


; users/database.ini, in a sub-directory (Yaconf 1.2.0+)
master="192.168.0.10"
replica="192.168.0.20"

  
```

**`Yaconf::get()` 示例**

```php


<?php
// 读取整个解析后的文件，返回数组
var_dump(Yaconf::get("app"));

// 点号记法逐层访问嵌套的键
var_dump(Yaconf::get("app.name"));           // string(4) "shop"
var_dump(Yaconf::get("app.features.1"));     // string(8) "wishlist"

// 1.2.0 起：子目录中的文件以目录名作为命名空间
var_dump(Yaconf::get("users.database.master")); // string(12) "192.168.0.10"

// 键不存在时返回默认值
var_dump(Yaconf::get("app.missing"));             // NULL
var_dump(Yaconf::get("app.missing", "fallback")); // string(8) "fallback"
?>

   
```

## 参见

`Yaconf::has()` `Yaconf::__debug_info()`
