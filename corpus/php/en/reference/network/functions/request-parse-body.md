---
id: "en-php-function-function-request-parse-body"
language: "php"
lang: "en"
category: "function"
name: "request_parse_body"
title: "Read and parse the request body and return the result"
signature: "array request_parse_body(array|null $options = null)"
module: "network"
source_url: "https://www.php.net/manual/en/function.request-parse-body.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read and parse the request body and return the result

## Description

```php
array request_parse_body(array|null $options = null)
```

This function reads the request body and parses it according to the `Content-Type` header. Currently, two content types are supported:

- `application/x-www-form-urlencoded`
- `multipart/form-data`

This function is used primarily to parse `multipart/form-data` requests with HTTP verbs other than `POST` which do not automatically populate the `$_POST` and `$_FILES` superglobals.

> The request body can only be consumed once. `request_parse_body()` consumes the request body without buffering it to the `php://input` stream. Conversely, if the body has already been read (e.g. via `php://input`), `request_parse_body()` will return empty data.

## Parameters

- **`$options`** — The `$options` parameter accepts an associative array to override the following global php.ini settings for parsing of the request body.
  - `max_file_uploads`
  - `max_input_vars`
  - `max_multipart_body_parts`
  - `post_max_size`
  - `upload_max_filesize`



## Return Values

`request_parse_body()` returns an array pair with the equivalent of `$_POST` at index `0` and `$_FILES` at index `1`.

## Errors/Exceptions

When the request body is invalid, according to the `Content-Type` header, a RequestParseBodyException is thrown.

A ValueError is thrown when `$options` contains invalid keys, or invalid values for the corresponding key.

## Examples

**`request_parse_body()` example**

```php


<?php
// Parse request and store result in the $_POST and $_FILES superglobals.
[$_POST, $_FILES] = request_parse_body();
// Echo the content of some transferred file
echo file_get_contents($_FILES['file_name']['tmp_name']);
?>

   
```

**`request_parse_body()` example with customized options**

```php


<?php
// form.php

assert_logged_in();

// Only for this form, we allow a bigger upload size.
[$_POST, $_FILES] = request_parse_body([
    'post_max_size' => '10M',
    'upload_max_filesize' => '10M',
]);

// Do something with the uploaded files.
?>

   
```
