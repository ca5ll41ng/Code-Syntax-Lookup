---
id: "zh-php-function-yaconf-debug-info"
language: "php"
lang: "zh"
category: "function"
name: "Yaconf::__debug_info"
title: "查看某个配置值的存储方式"
signature: "public static array|null Yaconf::__debug_info(string $name)"
module: "yaconf"
source_url: "https://www.php.net/manual/zh/yaconf.debug-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查看某个配置值的存储方式

## 说明

```php
public static array|null Yaconf::__debug_info(string $name)
```

返回以 `$name` 该值在内存中的地址，以及该值是否仍然存放在 Yaconf 压缩后的存储块中。

> 该方法存在的唯一目的是供 Yaconf 自身的测试套件使用， 测试用它来验证扩展是否工作正常。请勿在生产代码中使用它， 也不要依赖其输出格式：返回的数组可能随时变化。

## 参数

- **`$name`** — 要查看的配置名，使用与 `Yaconf::get()` 相同的点号记法。

## 返回值

当配置存在时，返回一个包含四个元素的 `array`； 否则返回 `null`：

- `key` —— 被查找的配置名。
- `address` —— 该值在内存中的地址。 配置值以驻留字符串（interned string）或不可变数组的形式存储， 因此在配置被重新加载之前，该地址保持不变。
- `val` —— 存储的值本身。
- `changed` —— 当该值的数据仍存放在压缩存储块内时 为 `false`，表示操作系统尚未复制过该内存页（写时复制仍然有效）； 当该值被重新分配到存储块之外时为 `true`。

## 示例

**`Yaconf::__debug_info()` 示例**

```php


<?php
// 假设 app.ini 中包含 name="shop"
var_dump(Yaconf::__debug_info("app.name"));
/*
array(4) {
  ["key"]=>
  string(8) "app.name"
  ["address"]=>
  string(14) "0x7f8b1c0a3d20"
  ["val"]=>
  string(4) "shop"
  ["changed"]=>
  bool(false)
}
*/

var_dump(Yaconf::__debug_info("app.missing")); // NULL
?>

   
```

## 参见

`Yaconf::get()` `Yaconf::has()`
