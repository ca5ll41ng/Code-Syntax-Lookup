---
id: "en-php-guide-gender-examples"
language: "php"
lang: "en"
category: "guide"
name: "gender.examples"
title: "Examples"
module: "gender"
source_url: "https://www.php.net/manual/en/gender.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## Usage example.

Gender class usage example.

**Usage example.**

```php


<?php

namespace Gender;

$gender = new Gender;


$name = "Milene";
$country = Gender::FRANCE;

$result = $gender->get($name, $country);

$data = $gender->country($country);

switch($result) {
    case Gender::IS_FEMALE:
        printf("The name %s is female in %s\n", $name, $data['country']);
    break;


    case Gender::IS_MOSTLY_FEMALE:
        printf("The name %s is mostly female in %s\n", $name, $data['country']);
    break;


    case Gender::IS_MALE:
        printf("The name %s is male in %s\n", $name, $data['country']);
    break;


    case Gender::IS_MOSTLY_MALE:
        printf("The name %s is mostly male in %s\n", $name, $data['country']);
    break;


    case Gender::IS_UNISEX_NAME:
        printf("The name %s is unisex in %s\n", $name, $data['country']);
    break;


    case Gender::IS_A_COUPLE:
        printf("The name %s is both male and female in %s\n", $name, $data['country']);
    break;


    case Gender::NAME_NOT_FOUND:
        printf("The name %s was not found for %s\n", $name, $data['country']);
    break;


    case Gender::ERROR_IN_NAME:
        echo "There is an error in the given name!\n";
    break;

    default:
        echo "An error occurred!\n";
    break;

}

   
```
