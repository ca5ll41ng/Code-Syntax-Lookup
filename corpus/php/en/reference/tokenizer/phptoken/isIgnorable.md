---
id: "en-php-function-phptoken-isignorable"
language: "php"
lang: "en"
category: "function"
name: "PhpToken::isIgnorable"
title: "Tells whether the token would be ignored by the PHP parser."
signature: "public bool PhpToken::isIgnorable()"
module: "tokenizer"
source_url: "https://www.php.net/manual/en/phptoken.isignorable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tells whether the token would be ignored by the PHP parser.

## Description

```php
public bool PhpToken::isIgnorable()
```

Tells whether the token would be ignored by the PHP parser.

## Parameters

This function has no parameters.

## Return Values

A boolean value whether the token would be ignored by the PHP parser (such as whitespace or comments).

## Examples

**`PhpToken::isIgnorable()` example**

```php


<?php
$echo = new PhpToken(T_ECHO, 'echo');
var_dump($echo->isIgnorable());   // -> bool(false)

$space = new PhpToken(T_WHITESPACE, ' ');
var_dump($space->isIgnorable());  // -> bool(true)

   
```

## See Also

 `PhpToken::tokenize()`
