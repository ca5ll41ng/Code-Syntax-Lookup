---
id: "en-php-function-xmlreader-readinnerxml"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::readInnerXml"
title: "Retrieve XML from current node"
signature: "public string XMLReader::readInnerXml()"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.readinnerxml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve XML from current node

## Description

```php
public string XMLReader::readInnerXml()
```

Reads the contents of the current node, including child nodes and markup.

## Parameters

This function has no parameters.

## Return Values

Returns the contents of the current node as a string. Empty string on failure.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>functionname</function> example</title> <para> Any text that describes the purpose of the example, or what </para> <programlisting role="php"> <![CDATA[ <?php if ($anexample === true) { echo 'Use the PEAR Coding standards'; } if ($thereisoutput === 'and it is multiple lines') { echo 'Use a screen like we did below'; } ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ Use the PEAR Coding standards Use a screen like we did below ]]> </screen> </example> </para> </refsect1> 

## Notes

> This function is only available when PHP is compiled against libxml 20620 or later.

## See Also

`XMLReader::readString()` `XMLReader::readOuterXml()` `XMLReader::expand()`
