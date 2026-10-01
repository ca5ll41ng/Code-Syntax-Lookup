---
id: "en-php-function-function-var-representation"
language: "php"
lang: "en"
category: "function"
name: "var_representation"
title: "Returns a short, readable, parsable string representation of a variable"
signature: "string var_representation(mixed $value, int $flags = 0)"
module: "var_representation"
source_url: "https://www.php.net/manual/en/function.var-representation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a short, readable, parsable string representation of a variable

## Description

```php
string var_representation(mixed $value, int $flags = 0)
```

`var_representation()` (from the var_representation PECL) returns a string with structured information about the given variable. It is similar to `var_export()` with differences in indentation, string escaping, and array representations.

## Parameters

- **`$value`** — The variable to generate a representation of.
- **`$flags`** — Bitmask consisting of `VAR_REPRESENTATION_SINGLE_LINE`, `VAR_REPRESENTATION_UNESCAPED`. The behaviour of these constants is described on the var_representation constants page.

## Return Values

Returns the variable representation.

## Examples

**`var_representation()` Examples**

```php


<?php
$a = [1, 2, ['key' => 'value']];
echo var_representation($a), "\n";
echo var_representation($a, VAR_REPRESENTATION_SINGLE_LINE), "\n";
?>

    
```

The above example will output:

```text


[
  1,
  2,
  [
    'key' => 'value',
  ],
]
[1, 2, ['key' => 'value']]

    
```

**Escaping control characters**

```php


<?php
echo var_representation("Content-Length: 123\r\n");

    
```

The above example will output:

```text


"Content-Length: 123\r\n"

    
```

**Exporting `stdClass`**

```php


<?php
$person = new stdClass;
$person->name = 'ElePHPant ElePHPantsdotter';
$person->website = 'https://php.net/elephpant.php';

echo var_representation($person);

    
```

The above example will output:

```text


(object) [
  'name' => 'ElePHPant ElePHPantsdotter',
  'website' => 'https://php.net/elephpant.php',
]

    
```

**Exporting classes**

```php


<?php
class A { public $var; }
$a = new A;
$a->var = 5;
echo var_representation($a);
?>

    
```

The above example will output:

```text


\A::__set_state([
  'var' => 5,
])

    
```

**Using __set_state()**

```php


<?php
class A
{
    public $var1;
    public $var2;

    public static function __set_state($an_array)
    {
        $obj = new A;
        $obj->var1 = $an_array['var1'];
        $obj->var2 = $an_array['var2'];
        return $obj;
    }
}

$a = new A;
$a->var1 = 5;
$a->var2 = 'foo';

eval('$b = ' . var_representation($a) . ';'); // $b = \A::__set_state([
                                              //   'var1' => 5,
                                              //   'var2' => 'foo',
                                              // ]);
var_dump($b);
?>

    
```

The above example will output:

```text


object(A)#2 (2) {
  ["var1"]=>
  int(5)
  ["var2"]=>
  string(3) "foo"
}

    
```

## See Also

`var_export()`
