---
id: "en-php-function-luasandbox-setmemorylimit"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::setMemoryLimit"
title: "Set the memory limit for the Lua environment"
signature: "public void LuaSandbox::setMemoryLimit(int $limit)"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.setmemorylimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the memory limit for the Lua environment

## Description

```php
public void LuaSandbox::setMemoryLimit(int $limit)
```

Sets the memory limit for the Lua environment.

If this limit is exceeded, a `LuaSandboxMemoryError` exception is thrown.

## Parameters

- **`$limit`** — Memory limit in bytes.

## Return Values

No value is returned.

## Examples

**Calling a Lua function**

```php


<?php

// create a new LuaSandbox
$sandbox = new LuaSandbox();

// set a memory limit
$sandbox->setMemoryLimit( 50 * 1024 * 1024 );

// Run Lua code
$sandbox->loadString( 'local x = "x"; while true do x = x .. x; end' )->call();

?>

   
```

The above example will output something similar to:

```text


PHP Fatal error:  Uncaught LuaSandboxMemoryError: not enough memory

   
```

## See Also

 `LuaSandbox::getMemoryUsage()` `LuaSandbox::getPeakMemoryUsage()` `LuaSandbox::setCPULimit()`
