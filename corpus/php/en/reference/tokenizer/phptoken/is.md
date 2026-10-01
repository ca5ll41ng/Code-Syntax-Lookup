---
id: "en-php-function-phptoken-is"
language: "php"
lang: "en"
category: "function"
name: "PhpToken::is"
title: "Tells whether the token is of given kind."
signature: "public bool PhpToken::is(int|string|array $kind)"
module: "tokenizer"
source_url: "https://www.php.net/manual/en/phptoken.is.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tells whether the token is of given kind.

## Description

```php
public bool PhpToken::is(int|string|array $kind)
```

Tells whether the token is of given `$kind`.

## Parameters

- **`$kind`** — Either a single value to match the token's id or textual content, or an array thereof.

## Return Values

A boolean value whether the token is of given kind.

## Examples

**`PhpToken::is()` example**

```php


<?php
$token = new PhpToken(T_ECHO, 'echo');
var_dump($token->is(T_ECHO));        // -> bool(true)
var_dump($token->is('echo'));        // -> bool(true)
var_dump($token->is(T_FOREACH));     // -> bool(false)
var_dump($token->is('foreach'));     // -> bool(false)

   
```

**Usage with array**

```php


<?php
function isClassType(PhpToken $token): bool {
    return $token->is([T_CLASS, T_INTERFACE, T_TRAIT]);
}

$interface = new PhpToken(T_INTERFACE, 'interface');
var_dump(isClassType($interface));   // -> bool(true)

$function = new PhpToken(T_FUNCTION, 'function');
var_dump(isClassType($function));    // -> bool(false)

   
```

## See Also

 `token_name()`
