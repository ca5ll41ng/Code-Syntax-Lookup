---
id: "en-php-function-intldateformatter-islenient"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::isLenient"
aliases: ["datefmt_is_lenient"]
title: "Get the lenient used for the IntlDateFormatter"
signature: "public bool IntlDateFormatter::isLenient()"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.islenient.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the lenient used for the IntlDateFormatter

## Description

Object-oriented style

```php
public bool IntlDateFormatter::isLenient()
```

Procedural style

```php
bool datefmt_is_lenient(IntlDateFormatter $formatter)
```

Check if the parser is strict or lenient in interpreting inputs that do not match the pattern exactly.

## Parameters

- **`$formatter`** — The formatter resource.

## Return Values

`true` if parser is lenient, `false` if parser is strict. By default the parser is lenient.

## Examples

**`datefmt_is_lenient()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'dd/mm/yyyy'
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
datefmt_set_lenient($fmt,false);
echo 'Now lenient of the formatter is : ';
if ($fmt->isLenient()) {
    echo 'TRUE';
} else {
    echo 'FALSE';
}
datefmt_parse($fmt, '35/13/1971');
echo "\n Trying to do parse('35/13/1971').Result is : " . datefmt_parse($fmt, '35/13/1971');
if (intl_get_error_code() != 0) {
    echo "\nError_msg is : " . intl_get_error_message();
    echo "\nError_code is : " . intl_get_error_code();
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
    "dd/mm/yyyy"
);
echo "lenient of the formatter is : ";
if ($fmt->isLenient()) {
    echo 'TRUE';
} else {
    echo 'FALSE';
}
$fmt->parse('35/13/1971');
echo "\n Trying to do parse('35/13/1971').\nResult is : " . $fmt->parse('35/13/1971');
if (intl_get_error_code() != 0){
    echo "\nError_msg is : " . intl_get_error_message();
    echo "\nError_code is : " . intl_get_error_code();
}

$fmt->setLenient(FALSE);
echo 'Now lenient of the formatter is : ';
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
Result is : -2147483
Now lenient of the formatter is : FALSE
Trying to do parse('35/13/1971').
Result is : 
Error_msg is : Date parsing failed: U_PARSE_ERROR 
Error_code is : 9

     
```

## See Also

`datefmt_set_lenient()` `datefmt_create()`
