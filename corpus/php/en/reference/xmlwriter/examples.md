---
id: "en-php-guide-xmlwriter-examples"
language: "php"
lang: "en"
category: "guide"
name: "xmlwriter.examples"
title: "Examples"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## Creating a simple XML document

This example shows how to use XMLWriter to create a XML document in memory.

**Creating a simple XML document**

```php


<?php

$xw = xmlwriter_open_memory();
xmlwriter_set_indent($xw, 1);
$res = xmlwriter_set_indent_string($xw, ' ');

xmlwriter_start_document($xw, '1.0', 'UTF-8');

// A first element
xmlwriter_start_element($xw, 'tag1');

// Attribute 'att1' for element 'tag1'
xmlwriter_start_attribute($xw, 'att1');
xmlwriter_text($xw, 'valueofatt1');
xmlwriter_end_attribute($xw);

xmlwriter_write_comment($xw, 'this is a comment.');

// Start a child element
xmlwriter_start_element($xw, 'tag11');
xmlwriter_text($xw, 'This is a sample text, ä');
xmlwriter_end_element($xw); // tag11

xmlwriter_end_element($xw); // tag1


// CDATA
xmlwriter_start_element($xw, 'testc');
xmlwriter_write_cdata($xw, "This is cdata content");
xmlwriter_end_element($xw); // testc

xmlwriter_start_element($xw, 'testc');
xmlwriter_start_cdata($xw);
xmlwriter_text($xw, "test cdata2");
xmlwriter_end_cdata($xw);
xmlwriter_end_element($xw); // testc

// A processing instruction
xmlwriter_start_pi($xw, 'php');
xmlwriter_text($xw, '$foo=2;echo $foo;');
xmlwriter_end_pi($xw);

xmlwriter_end_document($xw);

echo xmlwriter_output_memory($xw);

    
```

The above example will output:

```text


<?xml version="1.0" encoding="UTF-8"?>
<tag1 att1="valueofatt1">
 <!--this is a comment.-->
 <tag11>This is a sample text, ä</tag11>
</tag1>
<testc><![CDATA[This is cdata content]]></testc>
<testc><![CDATA[test cdata2]]></testc>
<?php $foo=2;echo $foo;?>

    
```

## Working with XML namespaces

This example shows how to create namespaced XML elements.

**Working with XML namespaces**

```php


<?php

$xw = xmlwriter_open_memory();
xmlwriter_set_indent($xw, 1);
$res = xmlwriter_set_indent_string($xw, ' ');

xmlwriter_start_document($xw, '1.0', 'UTF-8');
// A first element
xmlwriter_start_element_ns($xw,'prefix', 'books', 'uri');
xmlwriter_start_attribute($xw, 'isbn');

xmlwriter_start_attribute_ns($xw, 'prefix', 'isbn', 'uri');
xmlwriter_end_attribute($xw);

xmlwriter_end_attribute($xw);

xmlwriter_text($xw, 'book1');
xmlwriter_end_element($xw);

xmlwriter_end_document($xw);

echo xmlwriter_output_memory($xw);

    
```

The above example will output:

```text


<?xml version="1.0" encoding="UTF-8"?>
<prefix:books isbn="" prefix:isbn="" xmlns:prefix="uri">book1</prefix:books>

    
```

## Working with the OO API

This example shows how to work with XMLWriter's object-oriented API.

**Working with the OO API**

```php


<?php

$xw = new XMLWriter();
$xw->openMemory();
$xw->startDocument("1.0");
$xw->startElement("book");
$xw->text("example");
$xw->endElement();
$xw->endDocument();
echo $xw->outputMemory();

    
```

The above example will output:

```text


<?xml version="1.0"?>
<book>example</book>

    
```
