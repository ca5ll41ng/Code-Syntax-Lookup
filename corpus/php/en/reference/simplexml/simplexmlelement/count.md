---
id: "en-php-function-simplexmlelement-count"
language: "php"
lang: "en"
category: "function"
name: "SimpleXMLElement::count"
title: "Counts the children of an element"
signature: "public int SimpleXMLElement::count()"
module: "simplexml"
source_url: "https://www.php.net/manual/en/simplexmlelement.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Counts the children of an element

## Description

```php
public int SimpleXMLElement::count()
```

This method counts the number of children of an element.

## Parameters

This function has no parameters.

## Return Values

Returns the number of elements of an element.

## Examples

**Counting the number of children**

```php


<?php
$xml = <<<EOF
<people>
 <person name="Person 1">
  <child/>
  <child/>
  <child/>
 </person>
 <person name="Person 2">
  <child/>
  <child/>
  <child/>
  <child/>
  <child/>
 </person>
</people>
EOF;

$elem = new SimpleXMLElement($xml);

foreach ($elem as $person) {
    printf("%s has got %d children.\n", $person['name'], $person->count());
}
?>

    
```

The above example will output:

```text


Person 1 has got 3 children.
Person 2 has got 5 children.

    
```

## See Also

`SimpleXMLElement::children()`
