---
id: "en-php-function-luasandbox-setcpulimit"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::setCPULimit"
title: "Set the CPU time limit for the Lua environment"
signature: "public void LuaSandbox::setCPULimit(float|bool $limit)"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.setcpulimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the CPU time limit for the Lua environment

## Description

```php
public void LuaSandbox::setCPULimit(float|bool $limit)
```

Sets the CPU time limit for the Lua environment.

If the total user and system time used by the environment after the call to this method exceeds this limit, a `LuaSandboxTimeoutError` exception is thrown.

Time used in PHP callbacks is included in the limit.

Setting the time limit from a callback while Lua is running causes the timer to be reset, or started if it was not already running.

> On Windows, the CPU limit will be ignored. On operating systems that do not support `CLOCK_THREAD_CPUTIME_ID`, such as FreeBSD and Mac OS X, wall-clock time rather than CPU time will be limited.

## Parameters

- **`$limit`** — Limit as a `float` in seconds, or `false` for no limit.

## Return Values

No value is returned.

## Examples

**Calling a Lua function**

```php


<?php

// create a new LuaSandbox
$sandbox = new LuaSandbox();

// set a time limit
$sandbox->setCPULimit( 2 );

// Run Lua code
$sandbox->loadString( 'while true do end' )->call();

?>

   
```

The above example will output something similar to:

```text


PHP Fatal error:  Uncaught LuaSandboxTimeoutError: The maximum execution time for this script was exceeded

   
```

## See Also

 `LuaSandbox::getCPUUsage()` `LuaSandbox::setMemoryLimit()`
