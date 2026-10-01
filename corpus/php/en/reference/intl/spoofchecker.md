---
id: "en-php-guide-class-spoofchecker"
language: "php"
lang: "en"
category: "guide"
name: "class.spoofchecker"
title: "The Spoofchecker class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.spoofchecker.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Spoofchecker class

Spoofchecker

   Introduction  This class is provided because Unicode contains large number of characters and incorporates the varied writing systems of the world and their incorrect usage can expose programs or systems to possible security attacks using characters similarity.    Provided methods allow to check whether an individual string is likely an attempt at confusing the reader (`spoof detection`), such as "pаypаl" spelled with Cyrillic 'а' characters.      Class Synopsis    `Spoofchecker`    `public` `const` `int` `Spoofchecker::SINGLE_SCRIPT_CONFUSABLE`   `public` `const` `int` `Spoofchecker::MIXED_SCRIPT_CONFUSABLE`   `public` `const` `int` `Spoofchecker::WHOLE_SCRIPT_CONFUSABLE`   `public` `const` `int` `Spoofchecker::ANY_CASE`   `public` `const` `int` `Spoofchecker::SINGLE_SCRIPT`   `public` `const` `int` `Spoofchecker::INVISIBLE`   `public` `const` `int` `Spoofchecker::CHAR_LIMIT`   `public` `const` `int` `Spoofchecker::ASCII`   `public` `const` `int` `Spoofchecker::HIGHLY_RESTRICTIVE`   `public` `const` `int` `Spoofchecker::MODERATELY_RESTRICTIVE`   `public` `const` `int` `Spoofchecker::MINIMALLY_RESTRICTIVE`   `public` `const` `int` `Spoofchecker::UNRESTRICTIVE`   `public` `const` `int` `Spoofchecker::SINGLE_SCRIPT_RESTRICTIVE`   `public` `const` `int` `Spoofchecker::MIXED_NUMBERS`   `public` `const` `int` `Spoofchecker::HIDDEN_OVERLAY`   `public` `const` `int` `Spoofchecker::IGNORE_SPACE`   `public` `const` `int` `Spoofchecker::CASE_INSENSITIVE`   `public` `const` `int` `Spoofchecker::ADD_CASE_MAPPINGS`   `public` `const` `int` `Spoofchecker::SIMPLE_CASE_INSENSITIVE`         Predefined Constants 
- **`Spoofchecker::SINGLE_SCRIPT_CONFUSABLE` `int`**
- **`Spoofchecker::MIXED_SCRIPT_CONFUSABLE` `int`**
- **`Spoofchecker::WHOLE_SCRIPT_CONFUSABLE` `int`**
- **`Spoofchecker::ANY_CASE` `int`**
- **`Spoofchecker::SINGLE_SCRIPT` `int`**
- **`Spoofchecker::INVISIBLE` `int`**
- **`Spoofchecker::CHAR_LIMIT` `int`**
- **`Spoofchecker::ASCII` `int`**
- **`Spoofchecker::HIGHLY_RESTRICTIVE` `int`**
- **`Spoofchecker::MODERATELY_RESTRICTIVE` `int`**
- **`Spoofchecker::MINIMALLY_RESTRICTIVE` `int`**
- **`Spoofchecker::UNRESTRICTIVE` `int`**
- **`Spoofchecker::SINGLE_SCRIPT_RESTRICTIVE` `int`**
- **`Spoofchecker::MIXED_NUMBERS` `int`**
- **`Spoofchecker::HIDDEN_OVERLAY` `int`**
- **`Spoofchecker::IGNORE_SPACE` `int`**
- **`Spoofchecker::CASE_INSENSITIVE` `int`** — Enables case-insensitive matching
- **`Spoofchecker::ADD_CASE_MAPPINGS` `int`** — Adds all case mappings for each element in the set
- **`Spoofchecker::SIMPLE_CASE_INSENSITIVE` `int`** — Enables case-insensitive matching

   Changelog 
|  |  |
| --- | --- |
| 8.4.0 | Added `Spoofchecker::IGNORE_SPACE`, `Spoofchecker::CASE_INSENSITIVE`, `Spoofchecker::ADD_CASE_MAPPINGS`, `Spoofchecker::SIMPLE_CASE_INSENSITIVE`. |
| 8.4.0 | The class constants are now typed. |
| 7.3.0 | Class constants used by `Spoofchecker::setRestrictionLevel()` such as `Spoofchecker::ASCII`, `Spoofchecker::HIGHLY_RESTRICTIVE`, `Spoofchecker::MODERATELY_RESTRICTIVE`, `Spoofchecker::MINIMALLY_RESTRICTIVE`, `Spoofchecker::UNRESTRICTIVE`, `Spoofchecker::SINGLE_SCRIPT_RESTRICTIVE` has been added. |
