---
id: "en-php-function-function-openssl-x509-verify"
language: "php"
lang: "en"
category: "function"
name: "openssl_x509_verify"
title: "Verifies digital signature of x509 certificate against a public key"
signature: "int openssl_x509_verify(OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key)"
module: "openssl"
source_url: "https://www.php.net/manual/en/function.openssl-x509-verify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Verifies digital signature of x509 certificate against a public key

## Description

```php
int openssl_x509_verify(OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key)
```

`openssl_x509_verify()` verifies that the `$certificate` certificate was signed by the private key corresponding to public key `$public_key`.

## Parameters

- **`$certificate`** — See Key/Certificate parameters for a list of valid values.
- **`$public_key`** — `OpenSSLAsymmetricKey` - a key, returned by `openssl_get_publickey()` — `string` - a PEM formatted key (e.g. `-----BEGIN PUBLIC KEY----- MIIBCgK...`)

## Return Values

Returns 1 if the signature is correct, 0 if it is incorrect, and -1 on error.

> Both the success value and the error value are truthy, so a plain truth test such as if (openssl_x509_verify(...)) treats an error as a successful verification. The result must be compared strictly against `1`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$certificate` accepts an `OpenSSLCertificate` instance now; previously, a `resource` of type `OpenSSL X.509` was accepted. |
| 8.0.0 | `$public_key` accepts an `OpenSSLAsymmetricKey` or `OpenSSLCertificate` instance now; previously, a `resource` of type `OpenSSL key` or `OpenSSL X.509` was accepted. |

## Examples

**`openssl_x509_verify()` example**

```php


<?php
$hostname = "news.php.net";
$ssloptions = array(
    "capture_peer_cert" => true, 
    "capture_peer_cert_chain" => true, 
    "allow_self_signed"=> false, 
    "CN_match" => $hostname,
    "verify_peer" => true,
    "SNI_enabled" => true,
    "peer_name" => $hostname,
);
 
$ctx = stream_context_create( array("ssl" => $ssloptions) );
$result = stream_socket_client("ssl://$hostname:443", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $ctx);
$cont = stream_context_get_params($result);
$x509 = $cont["options"]["ssl"]["peer_certificate"];
$certparsed = openssl_x509_parse($x509);

foreach($cont["options"]["ssl"]["peer_certificate_chain"] as $chaincert)
{
    $chainparsed = openssl_x509_parse($chaincert);
    $chain_public_key = openssl_get_publickey($chaincert);
    $r = openssl_x509_verify($x509, $chain_public_key);
    if ($r === 1)
    {
        echo $certparsed['subject']['CN'];
        echo " was digitally signed by ";
        echo $chainparsed['subject']['CN']."\n";
    }
}
?>

    
```

## See Also

`openssl_verify()` `openssl_get_publickey()`
