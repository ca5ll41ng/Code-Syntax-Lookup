---
id: "zh-php-function-function-xml-set-unparsed-entity-decl-handler"
language: "php"
lang: "zh"
category: "function"
name: "xml_set_unparsed_entity_decl_handler"
title: "建立未解析实体定义声明处理程序"
signature: "true xml_set_unparsed_entity_decl_handler(XMLParser $parser, callable|string|null $handler)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-set-unparsed-entity-decl-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立未解析实体定义声明处理程序

## 说明

```php
true xml_set_unparsed_entity_decl_handler(XMLParser $parser, callable|string|null $handler)
```

为 `$parser` XML 解析器设置未解析实体声明处理函数。

当 XML 解析器遇到如下含有 NDATA 声明的外部实体定义声明时，该 `$handler` 处理程序将被调用：

```xml


<!ENTITY <parameter>name</parameter> {<parameter>publicId</parameter> | <parameter>systemId</parameter>}
        NDATA <parameter>notationName</parameter>

   
```

请参阅 [XML 1.0 参考的第 4.2.2 节](#sec-external-ent)以获取有关已声明外部实体注释定义的信息。

## 参数

- **`$parser`** — XML 解析器。
- **`$handler`** — 如果传递 `null`，处理程序将重置为其默认状态。 > 空字符串也可以重置处理程序，然而自 PHP 8.4.0 起已弃用。 — 如果 `$handler` 是 `callable`，设置的 callable 将作为处理程序。 — 如果 `$handler` 是 `string`，它可以是 `xml_set_object()` 设置的对象的方法名称。 > 自 PHP 8.4.0 起弃用。
  > 自 PHP 8.4.0 起，在设置处理程序时会检测 callable 是否有效，而不是在调用时检测。这意味着在将字符串方法名设置为 callback 之前必须调用 `xml_set_object()`。然而，由于此行为自 PHP 8.4.0 起也已弃用，因此建议为该方法使用适当的`callable`。

 — 处理程序的签名必须是： `void``{handler}()` `XMLParser``$parser` `string``$entity_name` `string|false``$base` `string``$system_id` `string|false``$public_id` `string|false``$notation_name` - **`$parser`** — XML 解析器调用的处理程序。 - **`$entity_name`** — 将被定义的实体名。 - **`$base`** — 这个参数是解析外部实体的系统标识符（`$system_id`）的基础。 - **`$system_id`** — 外部实体的系统标识符。 - **`$public_id`** — 外部实体的公共标识符。 - **`$notation_name`** — 该实体的注释名（请参阅 `xml_set_notation_decl_handler()`）。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现已弃用传递非 `callable` 的 `string` 到 `$handler`，为方法使用适当的 callable 或者使用 `null` 来重置处理程序。 |
| 8.4.0 | 现在设置处理程序时会检测 `$handler` 作为 `callable` 的有效性，而不是在调用时检测。 |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |
