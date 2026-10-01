---
id: "en-php-function-function-stream-context-get-params"
language: "php"
lang: "en"
category: "function"
name: "stream_context_get_params"
title: "Retrieves parameters from a context"
signature: "array stream_context_get_params(resource $context)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-context-get-params.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves parameters from a context

## Description

```php
array stream_context_get_params(resource $context)
```

Retrieves parameter and options information from the stream or context.

## Parameters

- **`$context`** — A stream `resource` or a context `resource`

## Return Values

Returns an associate array containing all context options and parameters.

## Examples

**`stream_context_get_params()` example**

Basic usage example

```php


<?php
$ctx = stream_context_create();
$params = array("notification" => "stream_notification_callback");
stream_context_set_params($ctx, $params);

var_dump(stream_context_get_params($ctx));
?>

    
```

The above example will output something similar to:

```text


array(2) {
  ["notification"]=>
  string(28) "stream_notification_callback"
  ["options"]=>
  array(0) {
  }
}

    
```

## See Also

`stream_context_set_option()` `stream_context_set_params()`
