---
id: "zh-php-function-function-unserialize"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["code_injection"],"cwe":["CWE-95"],"params":[1]}
name: "unserialize"
title: "从已存储的表示中创建 PHP 的值"
signature: "mixed unserialize(string $data, array $options = [])"
module: "var"
source_url: "https://www.php.net/manual/zh/function.unserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从已存储的表示中创建 PHP 的值

## 说明

```php
mixed unserialize(string $data, array $options = [])
```

`unserialize()` 对单一的已序列化的变量进行操作，将其转换回 PHP 的值。

> 无论 `allowed_classes` 的 `$options` 值如何，都不要将不受信任的用户输入传递给 `unserialize()`。由于对象实例化和自动加载，反序列化可能会导致加载代码并执行，恶意用户可能会利用这一点。如果需要将序列化数据传递给用户，请使用安全、标准的数据交换格式，例如 JSON（通过 `json_decode()` 和 `json_encode()`）。
>
> 如果需要反序列化外部存储的序列化数据，请考虑使用 `hash_hmac()` 做数据验证。确保数据不会被任何人修改。

## 参数

- **`$data`** — 序列化后的字符串。 — 若被反序列化的变量是一个对象，在成功地重新构造对象之后，PHP 会试图自动调用 __unserialize() 或 __wakeup() 方法（如果存在）。 — > unserialize_callback_func 指令 > > 在反序列化未定义类时会调用 unserialize_callback_func 指令中指定的回调。如果没有指定回调，将对象实例化为 `__PHP_Incomplete_Class`。
- **`$options`** — 使用关联数组提供给 `unserialize()` 的任何选项。
  | 名称 | 类型 | 说明 |
  | --- | --- | --- |
  | `allowed_classes` | `array\|bool` | 应该接受的类名数组，`false` 表示不接受任何类，或者 `true` 表示接受所有类。如果定义此选项且 `unserialize()` 遇到不接受的类的对象，则该对象将会实例化为 `__PHP_Incomplete_Class`。    省略此选项等同于定义为 `true`：PHP 将会尝试实例化任何类的对象。 |
  | `max_depth` | `int` | 反序列时允许的最大结构深度，主要为了防止栈溢出。默认深度限制为 `4096`，可以通过将 `max_depth` 设置为 `0` 来禁用。 |



## 返回值

返回的是转换之后的值，可为 `bool`、`int`、`float`、`string`、`array` 或 `object`。

如果传递的字符串不可反序列化，则返回 `false`，并产生 `E_WARNING`。

## 错误／异常

对象可能会在反序列化处理程序中抛出 `Throwable`。

自 PHP 8.4.0 起，如果 `$options` 的 `allowed_classes` 元素不是类名 `array`，则 `unserialize()` 会抛出 TypeError 和 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 如果 `$options` 的 `allowed_classes` 元素不是类名 `array`，现在会抛出 TypeError 和 ValueError。 |
| 8.3.0 | 当输入字符串有未使用的数据时，现在会发出 `E_WARNING`。 |
| 8.3.0 | 当传递的字符串有未消耗的数据时，现在会发出 `E_WARNING`。 |
| 8.3.0 | 当传递的字符串不可序列化时，现在抛出 `E_WARNING`； 之前是抛出 `E_NOTICE`。 |
| 7.4.0 | 新增 `$options` 的 `max_depth` 元素，设置反序列化时允许的最大结构深度。 |
| 7.1.0 | `$options` 的 `allowed_classes` 元素现在是严格类型，即如果给出 `array` 或 `bool` 以外的任何内容，则 `unserialize()` 返回 `false` 并发出 `E_WARNING`。 |

## 示例

**`unserialize()` 示例**

```php


<?php
// 这里，我们使用 unserialize() 装载来自数据库的 $session_data 数组中的会话数据。
// 此例是描述 serialize() 的那个例子的补充。

$conn = odbc_connect("webdb", "php", "chicken");
$stmt = odbc_prepare($conn, "SELECT data FROM sessions WHERE id = ?");
$sqldata = array($_SERVER['PHP_AUTH_USER']);
if (!odbc_execute($stmt, $sqldata) || !odbc_fetch_into($stmt, $tmp)) {
    // 如果执行出错或返回错误，则初始化为空数组
    $session_data = array();
} else {
    // 现在我们需要的是 $tmp[0] 中已序列化的数据。
    $session_data = unserialize($tmp[0]);
    if (!is_array($session_data)) {
        // 出错，初始化为空数组
        $session_data = array();
    }
}
?>

    
```

**unserialize_callback_func 示例**

```php


<?php
$serialized_object='O:1:"a":1:{s:5:"value";s:3:"100";}';

ini_set('unserialize_callback_func', 'mycallback'); // 设置回调函数

function mycallback($classname)
{
   // 只需包含含有类定义的文件
   // $classname 指出需要的是哪一个类
   var_dump($classname);
}

unserialize($serialized_object);
}
?>

    
```

## 注释

> 如果发生了错误或反序列化了已序列化的 `false` 值，则会返回 `false`。可以通过 `$data` 和 `serialize(false)` 进行比较，或者捕捉 `E_WARNING` 错误来判断这种特殊情况。

## 参见

`json_encode()` `json_decode()` `hash_hmac()` `serialize()` 自动加载类 unserialize_callback_func unserialize_max_depth __wakeup() __serialize() __unserialize()
