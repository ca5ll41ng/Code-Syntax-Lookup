---
id: "en-php-function-phptoken-tostring"
language: "php"
lang: "en"
category: "function"
name: "PhpToken::__toString"
title: "Returns the textual content of the token."
signature: "public string PhpToken::__toString()"
module: "tokenizer"
source_url: "https://www.php.net/manual/en/phptoken.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the textual content of the token.

## Description

```php
public string PhpToken::__toString()
```

Returns the textual content of the token.

## Parameters

This function has no parameters.

## Return Values

A textual content of the token.

## Examples

**`PhpToken::__toString()` example**

```php


<?php
$token = new PhpToken(T_ECHO, 'echo');
echo $token;

   
```

The above examples will output:

```text


echo

   
```

## See Also

 `token_name()`
