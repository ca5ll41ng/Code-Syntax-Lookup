---
id: "en-php-function-parle-rlexer-push"
language: "php"
lang: "en"
category: "function"
name: "Parle\\RLexer::push"
title: "Add a lexer rule"
signature: "public void Parle\\RLexer::push(string $regex, int $id)"
module: "parle"
source_url: "https://www.php.net/manual/en/parle-rlexer.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a lexer rule

## Description

```php
public void Parle\RLexer::push(string $regex, int $id)
```

```php
public void Parle\RLexer::push(string $state, string $regex, int $id, string $newState)
```

```php
public void Parle\RLexer::push(string $state, string $regex, string $newState)
```

Push a pattern for lexeme recognition.

A 'start state' and 'exit state' can be specified by using a suitable signature.

## Parameters

- **`$regex`** — Regular expression used for token matching.
- **`$id`** — Token id. If the lexer instance is meant to be used standalone, this can be an arbitrary number. If the lexer instance is going to be passed to the parser, it has to be an id returned by `Parle\RParser::tokenid()`.
- **`$state`** — State name. If '*' is used as start state, then the rule is applied to all lexer states.
- **`$newState`** — New state name, after the rule was applied. — If '.' is specified as the exit state, then the lexer state is unchanged when that rule matches. An exit state with '>' before the name means push. Use the signature without id for either continuation or to start matching, when a continuation or recursion is required. — If '<' is specified as exit state, it means pop. In that case, the signature containing the id can be used to identify the match. Note that even in the case an id is specified, the rule will finish first when all the previous pushes popped.

## Return Values

No value is returned.
