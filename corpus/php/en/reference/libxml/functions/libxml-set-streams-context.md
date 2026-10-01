---
id: "en-php-function-function-libxml-set-streams-context"
language: "php"
lang: "en"
category: "function"
name: "libxml_set_streams_context"
title: "Set the streams context for the next libxml document load or write"
signature: "void libxml_set_streams_context(resource $context)"
module: "libxml"
source_url: "https://www.php.net/manual/en/function.libxml-set-streams-context.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the streams context for the next libxml document load or write

## Description

```php
void libxml_set_streams_context(resource $context)
```

Sets the streams context for the next libxml document load or write.

## Parameters

- **`$context`** — The stream context resource (created with `stream_context_create()`)

## Return Values

No value is returned.

## Errors/Exceptions

Throws a `TypeError` when a non-stream resource is passed to `$context`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `libxml_set_streams_context()` now throws a TypeError when a non-stream resource is passed to `$context`, instead of throwing later when the context is used. |

## Examples

**A `libxml_set_streams_context()` example**

```php


<?php
$opts = [
    'http' => [
        'user_agent' => 'PHP libxml agent',
    ]
];

$context = stream_context_create($opts);
libxml_set_streams_context($context);

// request a file through HTTP
$dom = new DOMDocument;
$doc = $dom->load('http://www.example.com/file.xml');
?>

    
```

## See Also

`stream_context_create()`
