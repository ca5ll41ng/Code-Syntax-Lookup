---
id: "en-php-function-intldateformatter-setlenient"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::setLenient"
aliases: ["datefmt_set_lenient"]
title: "Set the leniency of the parser"
signature: "public void IntlDateFormatter::setLenient(bool $lenient)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.setlenient.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the leniency of the parser

## Description

Object-oriented style

```php
public void IntlDateFormatter::setLenient(bool $lenient)
```

Procedural style

```php
void datefmt_set_lenient(IntlDateFormatter $formatter, bool $lenient)
```

Define if the parser is strict or lenient in interpreting inputs that do not match the pattern exactly. Enabling lenient parsing allows the parser to accept otherwise flawed date or time patterns, parsing as much as possible to obtain a value. Extra space, unrecognized tokens, or invalid values ("February 30th") are not accepted.

## Parameters

- **`$formatter`** — The formatter resource
- **`$lenient`** — Sets whether the parser is lenient or not, default is `true` (lenient).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`datefmt_set_lenient()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US', 
    IntlDateFormatter::FULL, 
    IntlDateFormatter::FULL, 
    'America/Los_Angeles', 
    IntlDateFormatter::GREGORIAN, 
    'dd/MM/yyyy'
);
echo 'lenient of the formatter is : ';
if ($fmt->isLenient()) {
    echo 'TRUE';
} else {
    echo 'FALSE';
}
datefmt_parse($fmt, '35/13/1971');
echo "\n Trying to do parse('35/13/1971').\nResult is : " . datefmt_parse($fmt, '35/13/1971');
if (intl_get_error_code() != 0) {
    echo "\nError_msg is : " . intl_get_error_message();
    echo "\nError_code is : " . intl_get_error_code();
}
datefmt_set_lenient($fmt, false);
echo "\nNow lenient of the formatter is : ";
if ($fmt->isLenient()) {
    echo 'TRUE';
} else {
    echo 'FALSE';
}
datefmt_parse($fmt, '35/13/1971');
echo "\nTrying to do parse('35/13/1971').\nResult is : " . datefmt_parse($fmt, '35/13/1971');
if (intl_get_error_code() != 0) {
    echo "\nError_msg is : ".intl_get_error_message();
    echo "\nError_code is : ".intl_get_error_code();
}

?>

    
```

**OO example**

```php


<?php
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'dd/MM/yyyy'
);
echo 'lenient of the formatter is : ';
if ($fmt->isLenient()) {
    echo 'TRUE';
} else {
    echo 'FALSE';
}
$fmt->parse('35/13/1971');
echo "\n Trying to do parse('35/13/1971').\nResult is : " . $fmt->parse('35/13/1971');
if (intl_get_error_code() != 0) {
    echo "\nError_msg is : " . intl_get_error_message();
    echo "\nError_code is : " . intl_get_error_code();
}

$fmt->setLenient(FALSE);
echo "\nNow lenient of the formatter is : ";
if ($fmt->isLenient()) {
    echo 'TRUE';
} else {
    echo 'FALSE';
}
$fmt->parse('35/13/1971');
echo "\n Trying to do parse('35/13/1971').\nResult is : " . $fmt->parse('35/13/1971');
if (intl_get_error_code() != 0) {
    echo "\nError_msg is : " . intl_get_error_message();
    echo "\nError_code is : " . intl_get_error_code();
}

?>

    
```

The above example will output:

```text

         
lenient of the formatter is : TRUE
Trying to do parse('35/13/1971').
Result is : 66038400
Now lenient of the formatter is : FALSE
Trying to do parse('35/13/1971').
Result is : 
Error_msg is : Date parsing failed: U_PARSE_ERROR
Error_code is : 9


     
```

## See Also

`datefmt_is_lenient()` `datefmt_create()`
