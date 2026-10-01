---
id: "zh-php-function-function-xml-parse-into-struct"
language: "php"
lang: "zh"
category: "function"
name: "xml_parse_into_struct"
title: "解析 XML 数据到数组中"
signature: "int|false xml_parse_into_struct(XMLParser $parser, string $data, array $values, array $index = null)"
module: "xml"
source_url: "https://www.php.net/manual/zh/function.xml-parse-into-struct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解析 XML 数据到数组中

## 说明

```php
int|false xml_parse_into_struct(XMLParser $parser, string $data, array $values, array $index = null)
```

该函数解析 XML 字符串到两个对应的数组中，一个（`$index`）含有指向 `$values` 数组中对应值的指针。最后两个参数必须通过引用传递。

## 参数

- **`$parser`** — 引用的 XML 解析器。
- **`$data`** — 包含 XML 数据的字符串。
- **`$values`** — 包含 XML 数据值的数组
- **`$index`** — 包含指向 $values 中适当值位置的指针的数组。

## 返回值

`xml_parse_into_struct()` 失败时返回 0，成功返回 1。这和 `false` 与 `true` 不同，使用运算符（比如 ===）时要小心。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$parser` 现在接受 `XMLParser` 实例；之前接受有效的 `xml` `resource`。 |

## 示例

下面的示例说明了函数生成的数组的内部结构。使用嵌入在 `para` 标签中的简单 `note` 标签，然后解析并打印出生成的结构：

**`xml_parse_into_struct()` 示例**

```php


<?php
$simple = "<para><note>simple note</note></para>";
$p = xml_parser_create();
xml_parse_into_struct($p, $simple, $vals, $index);
echo "Index array\n";
print_r($index);
echo "\nVals array\n";
print_r($vals);
?>

    
```

运行以上代码，输出将是：

```text


Index array
Array
(
    [PARA] => Array
        (
            [0] => 0
            [1] => 2
        )

    [NOTE] => Array
        (
            [0] => 1
        )

)

Vals array
Array
(
    [0] => Array
        (
            [tag] => PARA
            [type] => open
            [level] => 1
        )

    [1] => Array
        (
            [tag] => NOTE
            [type] => complete
            [level] => 2
            [value] => simple note
        )

    [2] => Array
        (
            [tag] => PARA
            [type] => close
            [level] => 1
        )

)

    
```

当 XML 文档很复杂时，事件驱动的解析（基于 expat 库）会变得复杂。此函数不会生成 DOM 风格对象，但会生成适合以树形方式遍历的结构。因此，可以轻松地创建表示 XML 文件中数据的对象。考虑以下表示氨基酸信息小型数据库的 XML 文件：

**moldb.xml - 分子信息的小型数据库**

```xml


<?xml version="1.0"?>
<moldb>

  <molecule>
      <name>Alanine</name>
      <symbol>ala</symbol>
      <code>A</code>
      <type>hydrophobic</type>
  </molecule>

  <molecule>
      <name>Lysine</name>
      <symbol>lys</symbol>
      <code>K</code>
      <type>charged</type>
  </molecule>

</moldb>

    
```

还有一些代码用来解析文档并生成相应对象：

**parsemoldb.php - 将 moldb.xml 解析到分子（molecular）对象的数组中**

```php


<?php

class AminoAcid {
    var $name;  // aa name
    var $symbol;    // three letter symbol
    var $code;  // one letter code
    var $type;  // hydrophobic, charged or neutral
    
    function __construct ($aa) 
    {
        foreach ($aa as $k=>$v)
            $this->$k = $aa[$k];
    }
}

function readDatabase($filename) 
{
    // read the XML database of aminoacids
    $data = file_get_contents($filename);
    $parser = xml_parser_create();
    xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0);
    xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE, 1);
    xml_parse_into_struct($parser, $data, $values, $tags);
    unset($parser);

    // loop through the structures
    foreach ($tags as $key=>$val) {
        if ($key == "molecule") {
            $molranges = $val;
            // each contiguous pair of array entries are the 
            // lower and upper range for each molecule definition
            for ($i=0; $i < count($molranges); $i+=2) {
                $offset = $molranges[$i] + 1;
                $len = $molranges[$i + 1] - $offset;
                $tdb[] = parseMol(array_slice($values, $offset, $len));
            }
        } else {
            continue;
        }
    }
    return $tdb;
}

function parseMol($mvalues) 
{
    for ($i=0; $i < count($mvalues); $i++) {
        $mol[$mvalues[$i]["tag"]] = $mvalues[$i]["value"];
    }
    return new AminoAcid($mol);
}

$db = readDatabase("moldb.xml");
echo "** Database of AminoAcid objects:\n";
print_r($db);

?>

    
```

在执行完 `parsemoldb.php` 后，变量 `$db` 将包含有由 `AminoAcid` 对象组成的数组，该脚本的输出如下： ```text ** Database of AminoAcid objects: Array ( [0] => aminoacid Object ( [name] => Alanine [symbol] => ala [code] => A [type] => hydrophobic ) [1] => aminoacid Object ( [name] => Lysine [symbol] => lys [code] => K [type] => charged ) ) ```
