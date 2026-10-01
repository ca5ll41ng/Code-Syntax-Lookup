---
id: "zh-php-function-function-xml-set-object"
language: "php"
lang: "zh"
category: "function"
name: "xml_set_object"
title: "在对象中使用 XML 解析器"
signature: "#[\\Deprecated] true xml_set_object(XMLParser $parser, object $object)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-set-object.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在对象中使用 XML 解析器

## 说明

```php
#[\Deprecated] true xml_set_object(XMLParser $parser, object $object)
```

此函数允许在 `$object` 内部使用 `$parser`。所有回调函数都可以用 `xml_set_element_handler()` 等设置，并假定为 `$object` 的方法。

## 参数

- **`$parser`** — 指向对象内要使用的 XML 解析器。
- **`$object`** — 使用 XML 解析器的对象。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 此函数现已弃用，代替办法是将适当的 `callable` 值传递给 `xml_set_()` |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |

## 示例

**`xml_set_object()` 示例**

```php


<?php
class CustomXMLParser
{
    private $parser;

    function __construct() 
    {
        $this->parser = xml_parser_create();

        xml_set_object($this->parser, $this);
        xml_set_element_handler($this->parser, "tag_open", "tag_close");
        xml_set_character_data_handler($this->parser, "cdata");
    }

    function parse($data) 
    {
        xml_parse($this->parser, $data);
    }

    function tag_open($parser, $tag, $attributes) 
    {
        var_dump($tag, $attributes); 
    }

    function cdata($parser, $cdata) 
    {
        var_dump($cdata);
    }

    function tag_close($parser, $tag) 
    {
        var_dump($tag);
    }
}

$xml_parser = new CustomXMLParser();
$xml_parser->parse("<A ID='hallo'>PHP</A>");
?>

    
```

以上示例会输出：

```text


string(1) "A"
array(1) {
  ["ID"]=>
  string(5) "hallo"
}
string(3) "PHP"
string(1) "A"

    
```
