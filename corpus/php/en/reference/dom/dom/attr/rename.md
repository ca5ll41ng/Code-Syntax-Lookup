---
id: "en-php-function-dom-attr-rename"
language: "php"
lang: "en"
category: "function"
name: "Dom\\Attr::rename"
title: "Changes the qualified name or namespace of an attribute"
signature: "public void Dom\\Attr::rename(string|null $namespaceURI, string $qualifiedName)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-attr.rename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the qualified name or namespace of an attribute

## Description

```php
public void Dom\Attr::rename(string|null $namespaceURI, string $qualifiedName)
```

This method changes the qualified name or namespace of an attribute.

## Parameters

- **`$namespaceURI`** — The new namespace URI of the attribute.
- **`$qualifiedName`** — The new qualified name of the attribute.

## Return Values

No value is returned.

## Errors/Exceptions

- **`DOMException` with code `Dom\NAMESPACE_ERR`** — Raised if there is an error with the namespace, as determined by `$qualifiedName`.
- **`DOMException` with code `Dom\INVALID_MODIFICATION_ERR`** — Raised if there already exists an attribute in the element with the same qualified name.

## Examples

**`Dom\Attr::rename()` example to change both the namespace and qualified name**

This changes the qualified name of `my-attr` to `my-new-attr` and also changes its namespace to `urn:my-ns`.

```php


<?php

$doc = Dom\XMLDocument::createFromString('<root my-attr="value"/>');

$root = $doc->documentElement;
$attribute = $root->attributes['my-attr'];
$attribute->rename('urn:my-ns', 'my-new-attr');

echo $doc->saveXml();

?>

   
```

The above example will output:

```text


<?xml version="1.0" encoding="UTF-8"?>
<root xmlns:ns1="urn:my-ns" ns1:my-new-attr="value"/>

   
```

**`Dom\Attr::rename()` example to change only the qualified name**

This only changes the qualified name of `my-attr` and keeps the namespace URI the same.

```php


<?php

$doc = Dom\XMLDocument::createFromString('<root my-attr="value"/>');

$root = $doc->documentElement;
$attribute = $root->attributes['my-attr'];
$attribute->rename($attribute->namespaceURI, 'my-new-attr');

echo $doc->saveXml();

?>

   
```

The above example will output:

```text


<?xml version="1.0" encoding="UTF-8"?>
<root my-new-attr="value"/>

   
```

## Notes

> It is sometimes necessary to change the qualified name and namespace URI together in one step to not break any namespace rules.

## See Also

 `Dom\Element::rename()`
