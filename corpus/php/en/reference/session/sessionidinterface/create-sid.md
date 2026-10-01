---
id: "en-php-function-sessionidinterface-create-sid"
language: "php"
lang: "en"
category: "function"
name: "SessionIdInterface::create_sid"
title: "Create session ID"
signature: "public string SessionIdInterface::create_sid()"
module: "session"
source_url: "https://www.php.net/manual/en/sessionidinterface.create-sid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create session ID

## Description

```php
public string SessionIdInterface::create_sid()
```

Creates a new session ID.This function is automatically executed when a new session ID needs to be created.

## Parameters

This function has no parameters.

## Return Values

The new session ID. Note that this value is returned internally to PHP for processing.

## See Also

`SessionHandler::create_sid()`
