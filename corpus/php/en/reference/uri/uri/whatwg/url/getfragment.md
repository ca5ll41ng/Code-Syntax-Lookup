---
id: "en-php-function-uri-whatwg-url-getfragment"
language: "php"
lang: "en"
category: "function"
name: "Uri\\WhatWg\\Url::getFragment"
title: "Retrieve the fragment component"
signature: "public string|null Uri\\WhatWg\\Url::getFragment()"
module: "uri"
source_url: "https://www.php.net/manual/en/uri-whatwg-url.getfragment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the fragment component

## Description

```php
public string|null Uri\WhatWg\Url::getFragment()
```

Retrieves the fragment component.

## Parameters

This function has no parameters.

## Return Values

Returns the fragment component as a `string` if the fragment component exists, `null` is returned otherwise.

## Examples

**`Uri\WhatWg\Url::getFragment()` basic example**

```php


<?php
$url = new \Uri\WhatWg\Url("https://example.com#foo");

echo $url->getFragment();
?>

   
```

The above example will output:

```text


foo

   
```

## See Also

 `Uri\WhatWg\Url::withFragment()` `Uri\Rfc3986\Uri::getRawFragment()` `Uri\Rfc3986\Uri::getFragment()`
