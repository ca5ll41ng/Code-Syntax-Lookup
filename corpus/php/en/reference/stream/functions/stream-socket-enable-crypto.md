---
id: "en-php-function-function-stream-socket-enable-crypto"
language: "php"
lang: "en"
category: "function"
name: "stream_socket_enable_crypto"
title: "Turns encryption on/off on an already connected socket"
signature: "int|bool stream_socket_enable_crypto(resource $stream, bool $enable, int|null $crypto_method = null, resource|null $session_stream = null)"
module: "stream"
source_url: "https://www.php.net/manual/en/function.stream-socket-enable-crypto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Turns encryption on/off on an already connected socket

## Description

```php
int|bool stream_socket_enable_crypto(resource $stream, bool $enable, int|null $crypto_method = null, resource|null $session_stream = null)
```

Enable or disable encryption on the stream.

Once the crypto settings are established, cryptography can be turned on and off dynamically by passing `true` or `false` in the `$enable` parameter.

## Parameters

- **`$stream`** — The stream resource.
- **`$enable`** — Enable/disable cryptography on the stream.
- **`$crypto_method`** — Setup encryption on the stream. Valid methods are - `STREAM_CRYPTO_METHOD_SSLv2_CLIENT` - `STREAM_CRYPTO_METHOD_SSLv3_CLIENT` - `STREAM_CRYPTO_METHOD_SSLv23_CLIENT` - `STREAM_CRYPTO_METHOD_ANY_CLIENT` - `STREAM_CRYPTO_METHOD_TLS_CLIENT` - `STREAM_CRYPTO_METHOD_TLSv1_0_CLIENT` - `STREAM_CRYPTO_METHOD_TLSv1_1_CLIENT` - `STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT` - `STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT` (as of PHP 7.4.0) - `STREAM_CRYPTO_METHOD_SSLv2_SERVER` - `STREAM_CRYPTO_METHOD_SSLv3_SERVER` - `STREAM_CRYPTO_METHOD_SSLv23_SERVER` - `STREAM_CRYPTO_METHOD_ANY_SERVER` - `STREAM_CRYPTO_METHOD_TLS_SERVER` - `STREAM_CRYPTO_METHOD_TLSv1_0_SERVER` - `STREAM_CRYPTO_METHOD_TLSv1_1_SERVER` - `STREAM_CRYPTO_METHOD_TLSv1_2_SERVER` - `STREAM_CRYPTO_METHOD_TLSv1_3_SERVER` (as of PHP 7.4.0) — If omitted, the `crypto_method` context option on the stream's SSL context will be used instead.
- **`$session_stream`** — Seed the stream with settings from `$session_stream`.

## Return Values

Returns `true` on success, `false` if negotiation has failed or `0` if there isn't enough data and you should try again (only for non-blocking sockets).

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$session_stream` is now nullable. |

## Examples

 {{{ 

**`stream_socket_enable_crypto()` example**

 {{{ 

```php


<?php
$fp = stream_socket_client("tcp://myproto.example.com:31337", $errno, $errstr, 30);
if (!$fp) {
    die("Unable to connect: $errstr ($errno)");
}

/* Turn on encryption for login phase */
stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_SSLv23_CLIENT);
fwrite($fp, "USER god\r\n");
fwrite($fp, "PASS secret\r\n");

/* Turn off encryption for the rest */
stream_socket_enable_crypto($fp, false);

while ($motd = fgets($fp)) {
    echo $motd;
}

fclose($fp);
?>

    
```

The above example will output something similar to:

```text



    
```

 }}} 

## See Also

 {{{ 

`ref.openssl` `transports`

 }}}
