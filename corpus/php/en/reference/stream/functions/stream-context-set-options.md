---
id: "en-php-function-function-stream-context-set-options"
language: "php"
lang: "en"
category: "function"
name: "stream_context_set_options"
title: "Sets options on the specified context"
signature: "true stream_context_set_options(resource $context, array $options)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-context-set-options.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets options on the specified context

## Description

```php
true stream_context_set_options(resource $context, array $options)
```

Sets options on the specified context.

## Parameters

- **`$context`** — The stream or context resource to apply the options to.
- **`$options`** — The options to set for `$context`.
  > `$options` must be an associative `array` of associative arrays in the format $array['wrapper']['option'] = $value.
  >
  > Refer to context options and parameters for a listing of stream options.



## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`stream_context_set_options()` example**

```php


<?php

$context = stream_context_create();

$options = [
    'http' => [
        'protocol_version' => 1.1,
        'user_agent' => 'PHPT Agent',
    ],
];

stream_context_set_options($context, $options);
var_dump(stream_context_get_options($context));
?>

    
```

The above example will output:

```text


array(1) {
  ["http"]=>
  array(2) {
    ["protocol_version"]=>
    float(1.1)
    ["user_agent"]=>
    string(10) "PHPT Agent"
  }
}

    
```

## See Also

`stream_context_set_option()`
