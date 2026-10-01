---
id: "en-php-function-luasandbox-pauseusagetimer"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::pauseUsageTimer"
title: "Pause the CPU usage timer"
signature: "public bool LuaSandbox::pauseUsageTimer()"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.pauseusagetimer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Pause the CPU usage timer

## Description

```php
public bool LuaSandbox::pauseUsageTimer()
```

Pauses the CPU usage timer.

This only has effect when called from within a callback from Lua. When execution returns to Lua, the timer will be automatically unpaused. If a new call into Lua is made, the timer will be unpaused for the duration of that call.

If a PHP callback calls into Lua again with timer not paused, and then that Lua function calls into PHP again, the second PHP call will not be able to pause the timer. The logic is that even though the second PHP call would avoid counting the CPU usage against the limit, the first call still counts it.

## Parameters

This function has no parameters.

## Return Values

Returns a `bool` indicating whether the timer is now paused.

## Examples

**Manipulating the usage timer**

```php


<?php

// create a new LuaSandbox and set a CPU limit
$sandbox = new LuaSandbox();
$sandbox->setCPULimit( 1 );

function doWait( $t ) {
    $end = microtime( true ) + $t;
    while ( microtime( true ) < $end ) {
        // waste CPU cycles
    }
}

// Register a PHP callback
$sandbox->registerLibrary( 'php', [
    'test' => function () use ( $sandbox ) {
        $sandbox->pauseUsageTimer();
        doWait( 5 );

        $sandbox->unpauseUsageTimer();
        doWait( 0.1 );
    },
    'test2' => function () use ( $sandbox ) {
        $sandbox->pauseUsageTimer();
        $sandbox->unpauseUsageTimer();
        doWait( 1.1 );
    }
] );

echo "This should not time out...\n";
$sandbox->loadString( 'php.test()' )->call();

echo "This should time out.\n";
try {
    $sandbox->loadString( 'php.test2()' )->call();
    echo "It did not?\n";
} catch ( LuaSandboxTimeoutError $ex ) {
    echo "It did! " . $ex->getMessage() . "\n";
}

?>

   
```

The above example will output:

```text


This should not time out...
This should time out.
It did! The maximum execution time for this script was exceeded

   
```

## See Also

 `LuaSandbox::setCPULimit()` `LuaSandbox::unpauseUsageTimer()`
