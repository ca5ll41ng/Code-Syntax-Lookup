---
id: "en-php-function-function-eio-custom"
language: "php"
lang: "en"
category: "function"
name: "eio_custom"
title: "Execute custom request like any other *eio_** call"
signature: "resource eio_custom(callable $execute, int $pri, callable $callback, mixed $data = NULL)"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-custom.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute custom request like any other *eio_** call

## Description

```php
resource eio_custom(callable $execute, int $pri, callable $callback, mixed $data = NULL)
```

`eio_custom()` executes custom function specified by `$execute` processing it just like any other *eio_** call.

## Parameters

- **`$execute`** — Specifies the request function that should match the following prototype: ```text mixed execute(mixed data); ``` `$callback` is event completion callback that should match the following prototype: ```text void callback(mixed data, mixed result); ``` `$data` is the data passed to `$execute` via `$data` argument without modifications `$result` value returned by `$execute`
- **`$pri`** — The request priority: `EIO_PRI_DEFAULT`, `EIO_PRI_MIN`, `EIO_PRI_MAX`, or `null`. If `null` passed, `$pri` internally is set to `EIO_PRI_DEFAULT`.
- **`$callback`** — `$callback` function is called when the request is done. It should match the following prototype: ```php void callback(mixed $data, int $result[, resource $req]); ``` - **`$data`** — is custom data passed to the request. - **`$result`** — request-specific result value; basically, the value returned by corresponding system call. - **`$req`** — is optional request resource which can be used with functions like `eio_get_last_error()`.
- **`$data`** — Arbitrary variable passed to `$callback`.

## Return Values

`eio_custom()` returns request resource on success, or `false` on failure.

## Examples

**`eio_custom()` example**

```php

 
<?php
/* Callback for the custom callback */
function my_custom_callback($data, $result) {
    var_dump($data);
    var_dump(count($result));
    var_dump($result['data_modified']);
    var_dump($result['result']);
}

/* The custom request */
function my_custom($data) {
    var_dump($data);

    $result  = array(
        'result'        => 1001,
        'data_modified' => "my custom data",
    );

    return $result;
}

$data = "my_custom_data";
$req = eio_custom("my_custom", EIO_PRI_DEFAULT, "my_custom_callback", $data);
var_dump($req);
eio_event_loop();
?>

```

The above example will output something similar to:

```text

 
resource(4) of type (EIO Request Descriptor)
string(14) "my_custom_data"
string(14) "my_custom_data"
int(2)
string(14) "my custom data"
int(1001)
 
 
```
