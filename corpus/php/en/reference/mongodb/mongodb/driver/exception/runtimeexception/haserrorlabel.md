---
id: "en-php-function-mongodb-driver-runtimeexception-haserrorlabel"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Exception\\RuntimeException::hasErrorLabel"
title: "Returns whether an error label is associated with an exception"
signature: "final public bool MongoDB\\Driver\\Exception\\RuntimeException::hasErrorLabel(string $errorLabel)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-runtimeexception.haserrorlabel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether an error label is associated with an exception

## Description

```php
final public bool MongoDB\Driver\Exception\RuntimeException::hasErrorLabel(string $errorLabel)
```

Returns whether the `$errorLabel` has been set for this exception. Error labels are set by either the server or the extension to indicate specific situations that may be handled by an application. A common situation might be determining whether to safely retry a transaction that failed due to a transient error (e.g. network error, transaction conflict). Examples of error labels are `TransientTransactionError` and `UnknownTransactionCommitResult`.

## Parameters

- **`$errorLabel`** — The name of the `errorLabel` to test for.

## Return Values

Whether the given `errorLabel` is associated with this exception.

## See Also

 `MongoDB\Driver\Session::commitTransaction()` [MongoDB documentation on transactions]()
