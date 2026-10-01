---
id: "zh-php-function-function-xml-set-element-handler"
language: "php"
lang: "zh"
category: "function"
name: "xml_set_element_handler"
title: "建立起始和终止元素处理程序"
signature: "true xml_set_element_handler(XMLParser $parser, callable|string|null $start_handler, callable|string|null $end_handler)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-set-element-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立起始和终止元素处理程序

## 说明

```php
true xml_set_element_handler(XMLParser $parser, callable|string|null $start_handler, callable|string|null $end_handler)
```

为 `$parser` 参数指定的 XML 解析器建立元素处理函数。

当打开新的 XML 元素时调用 `$start_handler`，当关闭 XML 元素时调用 `$end_handler`。

## 参数

- **`$parser`** — XML 解析器。
- **`$start_handler`** — 如果传递 `null`，处理程序将重置为其默认状态。 > 空字符串也可以重置处理程序，然而自 PHP 8.4.0 起已弃用。 — 如果 `$handler` 是 `callable`，设置的 callable 将作为处理程序。 — 如果 `$handler` 是 `string`，它可以是 `xml_set_object()` 设置的对象的方法名称。 > 自 PHP 8.4.0 起弃用。
  > 自 PHP 8.4.0 起，在设置处理程序时会检测 callable 是否有效，而不是在调用时检测。这意味着在将字符串方法名设置为 callback 之前必须调用 `xml_set_object()`。然而，由于此行为自 PHP 8.4.0 起也已弃用，因此建议为该方法使用适当的`callable`。

 — 处理程序的签名必须是： `void``{start_element_handler}()` `XMLParser``$parser` `string``$name` `array``$attributes` - **`$parser`** — XML 解析器调用的处理程序。 - **`$name`** — 包含调用此处理程序的元素名称。如果大写转换对该解析器有效，元素名将用大写字母表示。 - **`$attributes`** — 带有元素属性的关联数组。如果元素没有数组则为空数组。数组元素的下标为属性名，元素的值即为属性的值。属性名将以和元素名同样的标准进行大写转换，值*不*进行大写转换。 — 遍历 `$attributes` 的顺序与声明 attributes 的顺序相同。
- **`$end_handler`** — 如果传递 `null`，处理程序将重置为其默认状态。 > 空字符串也可以重置处理程序，然而自 PHP 8.4.0 起已弃用。 — 如果 `$handler` 是 `callable`，设置的 callable 将作为处理程序。 — 如果 `$handler` 是 `string`，它可以是 `xml_set_object()` 设置的对象的方法名称。 > 自 PHP 8.4.0 起弃用。
  > 自 PHP 8.4.0 起，在设置处理程序时会检测 callable 是否有效，而不是在调用时检测。这意味着在将字符串方法名设置为 callback 之前必须调用 `xml_set_object()`。然而，由于此行为自 PHP 8.4.0 起也已弃用，因此建议为该方法使用适当的`callable`。

 — 处理程序的签名必须是： `void``{end_element_handler}()` `XMLParser``$parser` `string``$name` - **`$parser`** — XML 解析器调用的处理程序。 - **`$name`** — 包含调用此处理程序的元素名称。如果大写转换对该解析器有效，元素名将用大写字母表示。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现已弃用传递非 `callable` 的 `string` 到 `$handler`，为方法使用适当的 callable 或者使用 `null` 来重置处理程序。 |
| 8.4.0 | 现在设置处理程序时会检测 `$handler` 作为 `callable` 的有效性，而不是在调用时检测。 |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |
