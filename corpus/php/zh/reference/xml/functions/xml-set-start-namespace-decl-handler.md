---
id: "zh-php-function-function-xml-set-start-namespace-decl-handler"
language: "php"
lang: "zh"
category: "function"
name: "xml_set_start_namespace_decl_handler"
title: "设置起始命名空间声明处理程序"
signature: "true xml_set_start_namespace_decl_handler(XMLParser $parser, callable|string|null $handler)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-set-start-namespace-decl-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置起始命名空间声明处理程序

## 说明

```php
true xml_set_start_namespace_decl_handler(XMLParser $parser, callable|string|null $handler)
```

设置在声明命名空间时要调用的处理程序。命名空间声明出现在开始标签内。开始标记内的命名空间声明，命名空间声明开始处理程序在开始标记处理程序之前调用。

## 参数

- **`$parser`** — XML 解析器。
- **`$handler`** — 如果传递 `null`，处理程序将重置为其默认状态。 > 空字符串也可以重置处理程序，然而自 PHP 8.4.0 起已弃用。 — 如果 `$handler` 是 `callable`，设置的 callable 将作为处理程序。 — 如果 `$handler` 是 `string`，它可以是 `xml_set_object()` 设置的对象的方法名称。 > 自 PHP 8.4.0 起弃用。
  > 自 PHP 8.4.0 起，在设置处理程序时会检测 callable 是否有效，而不是在调用时检测。这意味着在将字符串方法名设置为 callback 之前必须调用 `xml_set_object()`。然而，由于此行为自 PHP 8.4.0 起也已弃用，因此建议为该方法使用适当的`callable`。

 — 处理程序的签名必须是： `void``{handler}()` `XMLParser``$parser` `string|false``$prefix` `string``$uri` - **`$parser`** — XML 解析器调用的处理程序。 - **`$prefix`** — 前缀是一个字符串，用于引用 XML 对象中的命名空间。如果不存在前缀则为 `false`。 - **`$uri`** — 命名空间的统一资源标识符 (URI)。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现已弃用传递非 `callable` 的 `string` 到 `$handler`，为方法使用适当的 callable 或者使用 `null` 来重置处理程序。 |
| 8.4.0 | 现在设置处理程序时会检测 `$handler` 作为 `callable` 的有效性，而不是在调用时检测。 |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |

## 参见

`xml_set_end_namespace_decl_handler()`
