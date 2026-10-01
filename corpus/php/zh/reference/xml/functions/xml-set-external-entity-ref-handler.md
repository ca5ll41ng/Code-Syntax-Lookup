---
id: "zh-php-function-function-xml-set-external-entity-ref-handler"
language: "php"
lang: "zh"
category: "function"
name: "xml_set_external_entity_ref_handler"
title: "设置外部实体引用处理程序"
signature: "true xml_set_external_entity_ref_handler(XMLParser $parser, callable|string|null $handler)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-set-external-entity-ref-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置外部实体引用处理程序

## 说明

```php
true xml_set_external_entity_ref_handler(XMLParser $parser, callable|string|null $handler)
```

为 XML 解析器 `$parser` 设置外部实体引用处理函数。

## 参数

- **`$parser`** — XML 解析器。
- **`$handler`** — 如果传递 `null`，处理程序将重置为其默认状态。 > 空字符串也可以重置处理程序，然而自 PHP 8.4.0 起已弃用。 — 如果 `$handler` 是 `callable`，设置的 callable 将作为处理程序。 — 如果 `$handler` 是 `string`，它可以是 `xml_set_object()` 设置的对象的方法名称。 > 自 PHP 8.4.0 起弃用。
  > 自 PHP 8.4.0 起，在设置处理程序时会检测 callable 是否有效，而不是在调用时检测。这意味着在将字符串方法名设置为 callback 之前必须调用 `xml_set_object()`。然而，由于此行为自 PHP 8.4.0 起也已弃用，因此建议为该方法使用适当的`callable`。

 — 处理程序的签名必须是： `bool``{handler}()` `XMLParser``$parser` `string``$open_entity_names` `string|false``$base` `string``$system_id` `string|false``$public_id` - **`$parser`** — XML 解析器调用的处理程序。 - **`$open_entity_names`** — 为该实体的解析开放的实体名列表（包括被指向的实体名），这些实体名由空格隔开。 - **`$base`** — 这个参数是解析外部实体的系统标识符（`$system_id`）的基础。 - **`$system_id`** — 在实体定义声明中指定的系统标识符。 - **`$public_id`** — 在实体定义声明中指定的公共标识符，如果未指定任何标识符，则该字符串为空。公共标识符中的空格将按照 XML 的要求被正常化。 — 如果实体已经处理，则处理程序应返回 `true`，否则返回 `false`。当返回 `false` 时，XML 解析器将停止解析并且 `xml_get_error_code()` 将返回 `XML_ERROR_EXTERNAL_ENTITY_HANDLING`。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现已弃用传递非 `callable` 的 `string` 到 `$handler`，为方法使用适当的 callable 或者使用 `null` 来重置处理程序。 |
| 8.4.0 | 现在设置处理程序时会检测 `$handler` 作为 `callable` 的有效性，而不是在调用时检测。 |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |
| 7.3.0 | 如果扩展是针对 libxml 构建的，则不再忽略 `$handler` 的返回值。以前，会忽略返回值，且解析也从不停止。 |
