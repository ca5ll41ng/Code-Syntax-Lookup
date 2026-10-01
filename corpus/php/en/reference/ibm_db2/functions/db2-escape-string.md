---
id: "en-php-function-function-db2-escape-string"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "db2_escape_string"
title: "Used to escape certain characters"
signature: "string db2_escape_string(string $string_literal)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-escape-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Used to escape certain characters

## Description

```php
string db2_escape_string(string $string_literal)
```

Prepends backslashes to special characters in the string argument.

## Parameters

- **`$string_literal`** — The string that contains special characters that need to be modified. Characters that are prepended with a backslash are `\x00`, `\n`, `\r`, `\`, `'`, `"` and `\x1a`.

## Return Values

Returns `$string_literal` with the special characters noted above prepended with backslashes.

## Examples

**A `db2_escape_string()` example**

Result of using the `db2_escape_string()` function

```php


<?php

$conn = db2_connect($database, $user, $password);

if ($conn) {
    $str[0] = "All characters: \x00 , \n , \r , \ , ' , \" , \x1a .";
    $str[1] = "Backslash (\). Single quote ('). Double quote (\")";
    $str[2] = "The NULL character \0 must be quoted as well";
    $str[3] = "Interesting characters: \x1a , \x00 .";
    $str[4] = "Nothing to quote";
    $str[5] = 200676;
    $str[6] = "";

    foreach( $str as $string ) {
        echo "db2_escape_string: " . db2_escape_string($string). "\n";
    }
}
?>

   
```

The above example will output:

```text


db2_escape_string: All characters: \0 , \n , \r , \\ , \' , \" , \Z .
db2_escape_string: Backslash (\\). Single quote (\'). Double quote (\")
db2_escape_string: The NULL character \0 must be quoted as well
db2_escape_string: Interesting characters: \Z , \0 .
db2_escape_string: Nothing to quote
db2_escape_string: 200676
db2_escape_string:

   
```

## See Also

 `db2_prepare()`
