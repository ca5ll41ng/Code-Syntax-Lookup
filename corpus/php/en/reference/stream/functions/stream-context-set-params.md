---
id: "en-php-function-function-stream-context-set-params"
language: "php"
lang: "en"
category: "function"
name: "stream_context_set_params"
title: "Set parameters for a stream/wrapper/context"
signature: "true stream_context_set_params(resource $context, array $params)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-context-set-params.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set parameters for a stream/wrapper/context

## Description

```php
true stream_context_set_params(resource $context, array $params)
```

Sets parameters on the specified context.

## Parameters

 {{{ 

- **`$context`** — The stream or context to apply the parameters too.
- **`$params`** — An associative array of parameters to be set in the following format: `$params['paramname'] = "paramvalue";`.
  | Parameter | Purpose |
  | --- | --- |
  | `notification` | Name of user-defined callback function to be called whenever a stream triggers a notification. Only supported for http:// and ftp:// stream wrappers. |
  | `options` | Array of options as in context options and parameters. |



 }}} 

## Return Values

 {{{ 

Returns `true` on success or `false` on failure.

 }}} 

## See Also

 {{{ 

 `stream_notification_callback()` 

 }}}
