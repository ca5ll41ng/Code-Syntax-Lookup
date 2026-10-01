---
id: "en-php-function-phptoken-tokenize"
language: "php"
lang: "en"
category: "function"
name: "PhpToken::tokenize"
title: "Splits given source into PHP tokens, represented by PhpToken objects."
signature: "public static array PhpToken::tokenize(string $code, int $flags = 0)"
module: "tokenizer"
source_url: "https://www.php.net/manual/en/phptoken.tokenize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Splits given source into PHP tokens, represented by PhpToken objects.

## Description

```php
public static array PhpToken::tokenize(string $code, int $flags = 0)
```

Returns an array of PhpToken objects representing given `$code`.

## Parameters

- **`$code`** — The PHP source to parse.
- **`$flags`** — Valid flags: - `TOKEN_PARSE` - Recognises the ability to use reserved words in specific contexts.

## Return Values

An array of PHP tokens represented by instances of PhpToken or its descendants. This method returns `static[]` so that PhpToken can be seamlessly extended.

## Examples

**`PhpToken::tokenize()` example**

```php


<?php
$tokens = PhpToken::tokenize('<?php echo; ?>');

foreach ($tokens as $token) {
    echo "Line {$token->line}: {$token->getTokenName()} ('{$token->text}')", PHP_EOL;
}

   
```

The above examples will output:

```text


Line 1: T_OPEN_TAG ('<?php ')
Line 1: T_ECHO ('echo')
Line 1: ; (';')
Line 1: T_WHITESPACE (' ')
Line 1: T_CLOSE_TAG ('?>')

   
```

**Extending PhpToken**

```php


<?php

class MyPhpToken extends PhpToken {
    public function getUpperText() {
        return strtoupper($this->text);
    }
}

$tokens = MyPhpToken::tokenize('<?php echo; ?>');
echo "'{$tokens[0]->getUpperText()}'";

   
```

The above examples will output:

```text


'<?PHP '

   
```

## See Also

 `token_get_all()`
