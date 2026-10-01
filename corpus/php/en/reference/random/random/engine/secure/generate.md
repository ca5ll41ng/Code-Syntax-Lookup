---
id: "en-php-function-random-engine-secure-generate"
language: "php"
lang: "en"
category: "function"
name: "Random\\Engine\\Secure::generate"
title: "Generate cryptographically secure randomness"
signature: "public string Random\\Engine\\Secure::generate()"
module: "random"
source_url: "https://www.php.net/manual/en/random-engine-secure.generate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate cryptographically secure randomness

## Description

```php
public string Random\Engine\Secure::generate()
```

Returns cryptographically secure randomness.

The sources of randomness in the order of priority are as follows:

- Linux: [getrandom()](), `/dev/urandom`
- FreeBSD >= 12 (PHP >= 7.3): [getrandom()](), `/dev/urandom`
- Windows (PHP >= 7.2): [CNG-API]() Windows: [CryptGenRandom]()
- macOS (PHP >= 8.2; >= 8.1.9; >= 8.0.22 if CCRandomGenerateBytes is available at compile time): CCRandomGenerateBytes() macOS (PHP >= 8.1; >= 8.0.2): arc4random_buf(), `/dev/urandom`
- NetBSD >= 7 (PHP >= 7.1; >= 7.0.1): arc4random_buf(), `/dev/urandom`
- OpenBSD >= 5.5 (PHP >= 7.1; >= 7.0.1): arc4random_buf(), `/dev/urandom`
- DragonflyBSD (PHP >= 8.1): [getrandom()](), `/dev/urandom`
- Solaris (PHP >= 8.1): [getrandom()](), `/dev/urandom`
- Any combination of operating system and PHP version not previously mentioned: `/dev/urandom`
- If none of the sources are available or they all fail to generate randomness, then a `Random\RandomException` will be thrown.

## Parameters

This function has no parameters.

## Return Values

A string containing `PHP_INT_SIZE` cryptographically secure random bytes.

## Errors/Exceptions

- If an appropriate source of randomness cannot be found, a `Random\RandomException` will be thrown.
