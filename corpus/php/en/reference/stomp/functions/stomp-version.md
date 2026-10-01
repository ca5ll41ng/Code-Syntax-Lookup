---
id: "en-php-function-function-stomp-version"
language: "php"
lang: "en"
category: "function"
name: "stomp_version"
title: "Gets the current stomp extension version"
signature: "string stomp_version()"
module: "stomp"
source_url: "https://www.php.net/manual/en/function.stomp-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the current stomp extension version

## Description

```php
string stomp_version()
```

Returns a string containing the version of the current stomp extension.

## Parameters

This function has no parameters.

## Return Values

It returns the current stomp extension version

## Examples

**`stomp_version()` example**

```php


<?php

var_dump(stomp_version());

?>

   
```

The above example will output something similar to:

```text


string(5) "0.2.0"

   
```
