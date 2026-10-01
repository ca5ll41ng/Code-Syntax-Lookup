---
id: "zh-php-function-datetime-set-state"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::__set_state"
title: "__set_state 处理程序"
signature: "public static DateTime DateTime::__set_state(array $array)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.set-state.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# __set_state 处理程序

## 说明

```php
public static DateTime DateTime::__set_state(array $array)
```

__set_state() 处理程序。

跟 `DateTimeImmutable::__set_state()` 一样，但适用于 `DateTime`。

## 参数

- **`$array`** — 数组初始化。

## 返回值

返回 DateTime 对象实例。
