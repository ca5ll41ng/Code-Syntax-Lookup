---
id: "en-php-function-domimplementation-hasfeature"
language: "php"
lang: "en"
category: "function"
name: "DOMImplementation::hasFeature"
title: "Test if the DOM implementation implements a specific feature"
signature: "public bool DOMImplementation::hasFeature(string $feature, string $version)"
module: "dom"
source_url: "https://www.php.net/manual/en/domimplementation.hasfeature.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Test if the DOM implementation implements a specific feature

## Description

```php
public bool DOMImplementation::hasFeature(string $feature, string $version)
```

Test if the DOM implementation implements a specific `$feature`.

You can find a list of all features in the [Conformance]() section of the DOM specification.

## Parameters

- **`$feature`** — The feature to test.
- **`$version`** — The version number of the `$feature` to test. In level 2, this can be either `2.0` or `1.0`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | Calling this function statically will now throw an `Error`. Previously, an `E_DEPRECATED` was raised. |

## Examples

**Testing your DOM Implementation**

```php


<?php

$features = array(
  'Core'           => 'Core module',
  'XML'            => 'XML module',
  'HTML'           => 'HTML module',
  'Views'          => 'Views module',
  'Stylesheets'    => 'Style Sheets module',
  'CSS'            => 'CSS module',
  'CSS2'           => 'CSS2 module',
  'Events'         => 'Events module',
  'UIEvents'       => 'User interface Events module',
  'MouseEvents'    => 'Mouse Events module',
  'MutationEvents' => 'Mutation Events module',
  'HTMLEvents'     => 'HTML Events module',
  'Range'          => 'Range module',
  'Traversal'      => 'Traversal module'
);

$implementation = new DOMImplementation;

foreach ($features as $key => $name) {
  if ($implementation->hasFeature($key, '2.0')) {
    echo "Has feature $name\n";
  } else {
    echo "Missing feature $name\n";
  }
}

?>

   
```

## See Also

`DOMNode::isSupported()`
