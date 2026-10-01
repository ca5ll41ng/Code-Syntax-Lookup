---
id: "zh-php-function-function-xml-set-character-data-handler"
language: "php"
lang: "zh"
category: "function"
name: "xml_set_character_data_handler"
title: "建立字符数据处理器"
signature: "true xml_set_character_data_handler(XMLParser $parser, callable|string|null $handler)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-set-character-data-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立字符数据处理器

## 说明

```php
true xml_set_character_data_handler(XMLParser $parser, callable|string|null $handler)
```

为 `$parser` 变量指向的 XML 解析器指定字符数据处理函数。

## 参数

- **`$parser`** — XML 解析器。
- **`$handler`** — 如果传递 `null`，处理程序将重置为其默认状态。 > 空字符串也可以重置处理程序，然而自 PHP 8.4.0 起已弃用。 — 如果 `$handler` 是 `callable`，设置的 callable 将作为处理程序。 — 如果 `$handler` 是 `string`，它可以是 `xml_set_object()` 设置的对象的方法名称。 > 自 PHP 8.4.0 起弃用。
  > 自 PHP 8.4.0 起，在设置处理程序时会检测 callable 是否有效，而不是在调用时检测。这意味着在将字符串方法名设置为 callback 之前必须调用 `xml_set_object()`。然而，由于此行为自 PHP 8.4.0 起也已弃用，因此建议为该方法使用适当的`callable`。

 — 处理程序的签名必须是： `void``{handler}()` `XMLParser``$parser` `string``$data` - **`$parser`** — XML 解析器调用的处理程序。 - **`$data`** — 字符串格式的字符数据。 — XML 文档的每段文字都会调用字符数据处理程序。可以在每个片段内多次调用（比如非 ASCII 字符串）。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现已弃用传递非 `callable` 的 `string` 到 `$handler`，为方法使用适当的 callable 或者使用 `null` 来重置处理程序。 |
| 8.4.0 | 现在设置处理程序时会检测 `$handler` 作为 `callable` 的有效性，而不是在调用时检测。 |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |
