---
id: "en-php-function-streamwrapper-stream-lock"
language: "php"
lang: "en"
category: "function"
name: "streamWrapper::stream_lock"
title: "Advisory file locking"
signature: "public bool streamWrapper::stream_lock(int $operation)"
module: "stream"
source_url: "https://www.php.net/manual/en/streamwrapper.stream-lock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Advisory file locking

## Description

```php
public bool streamWrapper::stream_lock(int $operation)
```

This method is called in response to `flock()`, when `file_put_contents()` (when `$flags` contains `LOCK_EX`), `stream_set_blocking()` and when closing the stream (`LOCK_UN`).

## Parameters

- **`$operation`** — `$operation` is one of the following: - `LOCK_SH` to acquire a shared lock (reader). - `LOCK_EX` to acquire an exclusive lock (writer). - `LOCK_UN` to release a lock (shared or exclusive). — It is also possible to have `LOCK_NB` added as a bitmask to one of the above operations, if the lock should not block during the locking attempt (not supported on Windows).

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

 {{{ 

Emits `E_WARNING` if call to this method fails (i.e. not implemented).

 }}} 

 <refsect1 role="examples"> <title>Examples</title> <para> <example> <title><function>streamWrapper::stream_lock</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## See Also

`stream_set_blocking()` `flock()`
