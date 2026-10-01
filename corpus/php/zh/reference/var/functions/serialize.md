---
id: "zh-php-function-function-serialize"
language: "php"
lang: "zh"
category: "function"
name: "serialize"
title: "生成值的可存储表示"
signature: "string serialize(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.serialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成值的可存储表示

## 说明

```php
string serialize(mixed $value)
```

生成值的可存储表示。

这有利于存储或传递 PHP 的值，同时不丢失其类型和结构。

想要将已序列化的字符串变回 PHP 的值，可使用 `unserialize()`。

## 参数

- **`$value`** — 要序列化的值。`serialize()` 处理所有的类型，除了 `resource` 类型和一些 `object`（见下面的注释）。`serialize()` 甚至可以序列化包含对自身引用的数组。数组/对象内的循环引用也会被存储。其它任何引用都会丢失。 — 序列化对象时，PHP 将尝试在序列化之前调用成员函数 __serialize() 或 __sleep()。这是为了允许对象在序列化之前进行最后一分钟的清理等等。同样，当使用 `unserialize()` 恢复对象时，会调用 __unserialize() 或 __wakeup() 成员函数。
  > 对象的 private 成员会在名前添加类名；protected 成员会在名前添加“*”；这些前置值在两边都有 null 字节。



## 返回值

返回字符串，包含 `$value` 的字节流表示，可以存储在任何地方。

注意这可能是包含 null 字节的二进制字符串，需要按原样存储和处理。例如，`serialize()` 的输出通常应该存储在数据库中 的 BLOB 字段，而不是 CHAR 或 TEXT 字段。

## 示例

**`serialize()` 示例**

```php


<?php
// $sssion_data 是多维数组，包含当前用户的
// 会话信息。可以在请求结束时使用 serialize()
// 将其存储在数据库中。

$conn = odbc_connect("webdb", "php", "chicken");
$stmt = odbc_prepare($conn,
      "UPDATE sessions SET data = ? WHERE id = ?");
$sqldata = array (serialize($session_data), $_SERVER['PHP_AUTH_USER']);
if (!odbc_execute($stmt, $sqldata)) {
    $stmt = odbc_prepare($conn,
     "INSERT INTO sessions (id, data) VALUES(?, ?)");
    if (!odbc_execute($stmt, array_reverse($sqldata))) {
        /* Something went wrong.. */
    }
}
?>

    
```

## 注释

> 注意许多内置 PHP 对象不能序列化。然而，要么实现 Serializable 接口，要么实现 __serialize()/__unserialize() 或 __sleep()/__wakeup() 魔术方法的则是可以的。如果内部类不满足这些其中任意一个，则就不能可靠的进行序列化。
>
> 上述规则有一些历史例外，一些内部对象可以在不实现接口或公开方法的情况下，使其序列化。

> 当 `serialize()` 序列化对象时，命名空间中的类名不要以反斜线开头，以便实现最大兼容性。

## 参见

`unserialize()` `var_export()` `json_encode()` 序列化对象 __sleep() __wakeup() __serialize() __unserialize()
