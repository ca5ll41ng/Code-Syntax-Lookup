---
id: "en-php-function-phptoken-gettokenname"
language: "php"
lang: "en"
category: "function"
name: "PhpToken::getTokenName"
title: "Returns the name of the token."
signature: "public string|null PhpToken::getTokenName()"
module: "tokenizer"
source_url: "https://www.php.net/manual/en/phptoken.gettokenname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the name of the token.

## Description

```php
public string|null PhpToken::getTokenName()
```

Returns the name of the token.

## Parameters

This function has no parameters.

## Return Values

An ASCII character for single-char tokens, or one of T_* constant names for known tokens (see `tokens`), or `null` for unknown tokens.

## Examples

**`PhpToken::getTokenName()` example**

```php


<?php
// known token
$token = new PhpToken(T_ECHO, 'echo');
var_dump($token->getTokenName());   // -> string(6) "T_ECHO"

// single-char token
$token = new PhpToken(ord(';'), ';');
var_dump($token->getTokenName());   // -> string(1) ";"

// unknown token
$token = new PhpToken(10000 , "\0");
var_dump($token->getTokenName());   // -> NULL

   
```

## See Also

 `PhpToken::tokenize()` `token_name()`
