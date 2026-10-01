---
id: "en-php-function-hashcontext-debuginfo"
language: "php"
lang: "en"
category: "function"
name: "HashContext::__debugInfo"
title: "Returns debugging information about the hashing context"
signature: "public array HashContext::__debugInfo()"
module: "hash"
source_url: "https://www.php.net/manual/en/hashcontext.debuginfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns debugging information about the hashing context

## Description

```php
public array HashContext::__debugInfo()
```

This method is not meant to be called directly; it is invoked by `var_dump()` and related functions when inspecting a `HashContext` instance.

## Parameters

This function has no parameters.

## Return Values

Returns an associative array of debugging information. It contains an `algo` key holding the name of the hashing algorithm in use by the context.

## Examples

**`HashContext::__debugInfo()` example**

```php


<?php
$ctx = hash_init('sha256');
var_dump($ctx);
?>

   
```

The above example will output:

```text


object(HashContext)#1 (1) {
  ["algo"]=>
  string(6) "sha256"
}

   
```

## See Also

 `hash_init()` `var_dump()`
