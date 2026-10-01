---
id: "en-php-function-function-libxml-set-external-entity-loader"
language: "php"
lang: "en"
category: "function"
name: "libxml_set_external_entity_loader"
title: "Changes the default external entity loader"
signature: "true libxml_set_external_entity_loader(callable|null $resolver_function)"
module: "libxml"
source_url: "https://www.php.net/manual/en/function.libxml-set-external-entity-loader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the default external entity loader

## Description

```php
true libxml_set_external_entity_loader(callable|null $resolver_function)
```

Changes the default external entity loader. This can be used to suppress the expansion of arbitrary external entities to avoid XXE attacks, even when `LIBXML_NOENT` has been set for the respective operation, and is usually preferable over calling `libxml_disable_entity_loader()`.

## Parameters

- **`$resolver_function`** — A `callable` with the following signature: `resource|string|null``{resolver}()` `string|null``$public_id` `string``$system_id` `array``$context` - **`$public_id`** — The public ID. - **`$system_id`** — The system ID. - **`$context`** — An array with the four elements `"directory"`, `"intSubName"`, `"extSubURI"` and `"extSubSystem"`. This callable should return a `resource`, a `string` from which a resource can be opened. If `null` is returned, the entity reference resolution will fail.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

**`libxml_set_external_entity_loader()` example**

```php


<?php
$xml = <<<XML

<foo>bar</foo>
XML;

$dtd = <<<DTD
<!ELEMENT foo (#PCDATA)>
DTD;

libxml_set_external_entity_loader(
    function ($public, $system, $context) use($dtd) {
        var_dump($public);
        var_dump($system);
        var_dump($context);
        $f = fopen("php://temp", "r+");
        fwrite($f, $dtd);
        rewind($f);
        return $f;
    }
);

$dd = new DOMDocument;
$r  = $dd->loadXML($xml);

var_dump($dd->validate());
?>

    
```

The above example will output:

```text


string(10) "-//FOO/BAR"
string(25) "http://example.com/foobar"
array(4) {
  ["directory"]=>
  NULL
  ["intSubName"]=>
  NULL
  ["extSubURI"]=>
  NULL
  ["extSubSystem"]=>
  NULL
}
bool(true)

    
```

## See Also

`libxml_disable_entity_loader()` `libxml_get_external_entity_loader()`
