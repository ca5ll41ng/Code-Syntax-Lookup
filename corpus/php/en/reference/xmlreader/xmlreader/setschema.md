---
id: "en-php-function-xmlreader-setschema"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::setSchema"
title: "Validate document against XSD"
signature: "public bool XMLReader::setSchema(string|null $filename)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.setschema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Validate document against XSD

## Description

```php
public bool XMLReader::setSchema(string|null $filename)
```

Use W3C XSD schema to validate the document as it is processed. Activation is only possible before the first Read().

## Parameters

- **`$filename`** — The filename of the XSD schema.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

Issues `E_WARNING` if libxml was built without schema support, the schema contains errors or if `XMLReader::read()` has already been called.

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>functionname</function> example</title> <para> Any text that describes the purpose of the example, or what goes on in the example should be here. (Inside the tag, not out). </para> <programlisting role="php"> <![CDATA[ <?php if ($anexample === true) { echo 'Use the PEAR Coding standards'; } if ($thereisoutput === 'and it is multiple lines') { echo 'Use a screen like we did below'; } ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ Use the PEAR Coding standards Use a screen like we did below ]]> </screen> </example> </para> </refsect1> 

## Notes

> This function is only available when PHP is compiled against libxml 20620 or later.

## See Also

`XMLReader::setRelaxNGSchema()` `XMLReader::setRelaxNGSchemaSource()` `XMLReader::isValid()`
