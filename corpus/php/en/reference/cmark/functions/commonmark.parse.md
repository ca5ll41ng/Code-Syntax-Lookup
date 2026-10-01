---
id: "en-php-function-function-commonmark-parse"
language: "php"
lang: "en"
category: "function"
name: "CommonMark\\Parse"
title: "Parsing"
signature: "CommonMark\\Node CommonMark\\Parse(string $content, [int $options = ...])"
module: "cmark"
source_url: "https://www.php.net/manual/en/function.commonmark-parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parsing

## Description

```php
CommonMark\Node CommonMark\Parse(string $content, [int $options = ...])
```

Shall parse `$content`

## Parameters

- **`$content`** — markdown string
- **`$options`** — A mask of:
  - **`CommonMark\Parser\Normal` (`int`)**
  - **`CommonMark\Parser\Normalize` (`int`)**
  - **`CommonMark\Parser\ValidateUTF8` (`int`)**
  - **`CommonMark\Parser\Smart` (`int`)**



## Return Values

Shall return root CommonMark\Node
