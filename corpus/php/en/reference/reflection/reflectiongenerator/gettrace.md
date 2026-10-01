---
id: "en-php-function-reflectiongenerator-gettrace"
language: "php"
lang: "en"
category: "function"
name: "ReflectionGenerator::getTrace"
title: "Gets the trace of the executing generator"
signature: "public array ReflectionGenerator::getTrace(int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectiongenerator.gettrace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the trace of the executing generator

## Description

```php
public array ReflectionGenerator::getTrace(int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT)
```

Get the trace of the currently executing generator.

## Parameters

- **`$options`** — The value of `$options` can be any of the following flags. — | Option | Description | | --- | --- | | `DEBUG_BACKTRACE_PROVIDE_OBJECT` | Default. | | `DEBUG_BACKTRACE_IGNORE_ARGS` | Don't include the argument information for functions in the stack trace. |

## Return Values

Returns the trace of the currently executing generator.

## Examples

**`ReflectionGenerator::getTrace()` example**

```php


<?php
function foo() {
    yield 1;
}

function bar()
{
    yield from foo();
}

function baz()
{
    yield from bar();
}

$gen = baz();
$gen->valid(); // start the generator

var_dump((new ReflectionGenerator($gen))->getTrace());

    
```

The above example will output something similar to:

```text


array(2) {
  [0]=>
  array(4) {
    ["file"]=>
    string(18) "example.php"
    ["line"]=>
    int(8)
    ["function"]=>
    string(3) "foo"
    ["args"]=>
    array(0) {
    }
  }
  [1]=>
  array(4) {
    ["file"]=>
    string(18) "example.php"
    ["line"]=>
    int(12)
    ["function"]=>
    string(3) "bar"
    ["args"]=>
    array(0) {
    }
  }
}

    
```

## See Also

`ReflectionGenerator::getFunction()` `ReflectionGenerator::getThis()`
