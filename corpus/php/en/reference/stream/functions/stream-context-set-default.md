---
id: "en-php-function-function-stream-context-set-default"
language: "php"
lang: "en"
category: "function"
name: "stream_context_set_default"
title: "Set the default stream context"
signature: "resource stream_context_set_default(array $options)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-context-set-default.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the default stream context

## Description

```php
resource stream_context_set_default(array $options)
```

Set the default stream context which will be used whenever file operations (`fopen()`, `file_get_contents()`, etc...) are called without a context parameter. Uses the same syntax as `stream_context_create()`.

## Parameters

 {{{ 

- **`$options`** — The options to set for the default context.
  > `$options` must be an associative array of associative arrays in the format `$arr['wrapper']['option'] = $value`.



 }}} 

## Return Values

 {{{ 

Returns the default stream context.

 }}} 

## Examples

 {{{ 

**`stream_context_set_default()` example**

 {{{ 

```php


<?php
$default_opts = [
  'http' => [
    'method' => "GET",
    'header' => "Accept-language: en\r\n" .
                "Cookie: foo=bar",
    'proxy'  => "tcp://10.54.1.39:8000",
  ]
];

$default = stream_context_set_default($default_opts);

/* Sends a regular GET request to proxy server at 10.54.1.39
 * For www.example.com using context options specified in $default_opts
 */
readfile('http://www.example.com');
?>

    
```

 }}} 

## See Also

 {{{ 

`stream_context_create()` `stream_context_get_default()` Listing of supported wrappers with context options (`wrappers`).

 }}}
