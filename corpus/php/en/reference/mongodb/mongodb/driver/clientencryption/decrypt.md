---
id: "en-php-function-mongodb-driver-clientencryption-decrypt"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::decrypt"
title: "Decrypt a value"
signature: "final public mixed MongoDB\\Driver\\ClientEncryption::decrypt(MongoDB\\BSON\\Binary $value)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decrypt a value

## Description

```php
final public mixed MongoDB\Driver\ClientEncryption::decrypt(MongoDB\BSON\Binary $value)
```

Decrypts the value.

## Parameters

- **`$value`** — A `MongoDB\BSON\Binary` instance with subtype 6 containing the encrypted value.

## Return Values

Returns the decrypted value as it was passed to `MongoDB\Driver\ClientEncryption::encrypt()`.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\EncryptionException` if an error occurs while decrypting the value 

## See Also

 `MongoDB\Driver\ClientEncryption::encrypt()`
