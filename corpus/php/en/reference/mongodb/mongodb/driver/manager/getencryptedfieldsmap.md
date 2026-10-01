---
id: "en-php-function-mongodb-driver-manager-getencryptedfieldsmap"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::getEncryptedFieldsMap"
title: "Return the encryptedFieldsMap auto encryption option for the Manager"
signature: "final public array|object|null MongoDB\\Driver\\Manager::getEncryptedFieldsMap()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.getencryptedfieldsmap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the encryptedFieldsMap auto encryption option for the Manager

## Description

```php
final public array|object|null MongoDB\Driver\Manager::getEncryptedFieldsMap()
```

Returns the `encryptedFieldsMap` auto encryption option for the Manager, if specified.

## Parameters

This function has no parameters.

## Return Values

The `encryptedFieldsMap` auto encryption option for the Manager, or `null` if it was not specified.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Manager::__construct()`
