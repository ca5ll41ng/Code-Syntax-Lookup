---
id: "en-php-function-locale-acceptfromhttp"
language: "php"
lang: "en"
category: "function"
name: "Locale::acceptFromHttp"
aliases: ["locale_accept_from_http"]
title: "Tries to find out best available locale based on HTTP \"Accept-Language\" header"
signature: "public static string|false Locale::acceptFromHttp(string $header)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.acceptfromhttp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tries to find out best available locale based on HTTP "Accept-Language" header

## Description

Object-oriented style

```php
public static string|false Locale::acceptFromHttp(string $header)
```

Procedural style

```php
string|false locale_accept_from_http(string $header)
```

Tries to find locale that can satisfy the language list that is requested by the HTTP "Accept-Language" header.

## Parameters

- **`$header`** — The string containing the "Accept-Language" header according to format in RFC 2616.

## Return Values

The corresponding locale identifier.

Returns `false` when the length of `$header` exceeds `INTL_MAX_LOCALE_LEN`.

## Examples

**`locale_accept_from_http()` example**

```php

    
<?php
$locale = locale_accept_from_http($_SERVER['HTTP_ACCEPT_LANGUAGE']);
echo $locale;
?>

   
```

**OO example**

```php


<?php
$locale = Locale::acceptFromHttp($_SERVER['HTTP_ACCEPT_LANGUAGE']);
echo $locale;
?>

   
```

The above example will output:

```text


en_US

  
```

## See Also

`locale_lookup()`
