---
id: "en-php-guide-luasandbox-examples"
language: "php"
lang: "en"
category: "guide"
name: "luasandbox.examples"
title: "Examples"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

Add one or more of these <section>'s, with one ore more <example>'s 

 Make sure each xml:id is unique 

## Basic usage for LuaSandbox

Once you've compiled PHP with LuaSandbox support, you can begin using LuaSandbox to safely run user-provided Lua code.

**Execute some Lua code**

```php


<?php

$sandbox = new LuaSandbox;
$sandbox->setMemoryLimit( 50 * 1024 * 1024 );
$sandbox->setCPULimit( 10 );

// Register some functions in the Lua environment

function frobnosticate( $v ) {
    return [ $v + 42 ];
}

$sandbox->registerLibrary( 'php', [
    'frobnosticate' => 'frobnosticate',
    'output' => function ( $string ) {
        echo "$string\n";
    },
    'error' => function () {
        throw new LuaSandboxRuntimeError( "Something is wrong" );
    }
] );

// Execute some Lua code, including callbacks into PHP and into Lua

$luaCode = <<<EOF
php.output( "Hello, world" );

return "Hi", function ( v )
    return php.frobnosticate( v + 200 )
end
EOF;

list( $hi, $frob ) = $sandbox->loadString( $luaCode )->call();
assert( $frob->call( 4000 ) === [ 4242 ] );

// PHP-thrown LuaSandboxRuntimeError exceptions can be caught inside Lua

list( $ok, $message ) = $sandbox->loadString( 'return pcall( php.error )' )->call();
assert( !$ok );
assert( $message === 'Something is wrong' );

?>

   
```
