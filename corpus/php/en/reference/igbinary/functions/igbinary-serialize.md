---
id: "en-php-function-function-igbinary-serialize"
language: "php"
lang: "en"
category: "function"
name: "igbinary_serialize"
title: "Generates a compact, storable binary representation of a value"
signature: "string|false igbinary_serialize(mixed $value)"
module: "igbinary"
source_url: "https://www.php.net/manual/en/function.igbinary-serialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates a compact, storable binary representation of a value

## Description

```php
string|false igbinary_serialize(mixed $value)
```

Generates a storable representation of a value.

This is useful for storing or passing PHP values around without losing their type and structure.

To make the serialized string into a PHP value again, `igbinary_unserialize()` can be used.

## Parameters

- **`$value`** — The value to be serialized. `igbinary_serialize()` handles all types, except the `resource`-type and some `object`s (see note below). Even `array`s that contain references to itself can be processed by `igbinary_serialize()`. Circular references inside the `array` or `object` that is being serializend will also be stored. Any other reference will be lost. — When serializing objects, igbinary will attempt to call the member functions __serialize() or __sleep() prior to serialization. This is to allow the object to do any last minute clean-up, etc. prior to being serialized. Likewise, when the object is restored using `igbinary_unserialize()` the __unserialize() or __wakeup() member function is called.
  > Private members of `object`s have the class name prepended to the member name; protected members have a `'*'` prepended to the member name. These prepended values have null bytes on either side.



## Return Values

Returns a string containing a byte-stream representation of `$value` that can be stored anywhere.

Note that this is a binary string which can include any byte value, and needs to be stored and handled as such. For example, `igbinary_serialize()` output should generally be stored in a `BLOB` field in a database, rather than a `CHAR` or `TEXT` field.

## Examples

**`igbinary_serialize()` example**

```php


<?php
$ser = igbinary_serialize(['test', 'test']);
echo urlencode($ser), "\n";
var_export(igbinary_unserialize($ser));
?>

   
```

The above example will output:

```text


%00%00%00%02%14%02%06%00%11%04test%06%01%0E%00
array (
  0 => 'test',
  1 => 'test',
)

   
```

## Notes

> Note that many built-in PHP objects cannot be serialized. However, those with this ability either implement the Serializable interface or the magic __serialize()/__unserialize() or __sleep()/__wakeup() methods. If an internal class does not fulfill any of those requirements, it cannot reliably be serialized with any serializer.
>
> There are some historical exceptions to the above rule, where some internal objects could be serialized without implementing the interface or exposing the methods.

## See Also

 `serialize()` `igbinary_unserialize()` `var_export()` `json_encode()` Serializing Objects __sleep() __wakeup() __serialize() __unserialize()
