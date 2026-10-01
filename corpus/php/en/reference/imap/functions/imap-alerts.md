---
id: "en-php-function-function-imap-alerts"
language: "php"
lang: "en"
category: "function"
name: "imap_alerts"
title: "Returns all IMAP alert messages that have occurred"
signature: "array|false imap_alerts()"
module: "imap"
source_url: "https://www.php.net/manual/en/function.imap-alerts.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns all IMAP alert messages that have occurred

## Description

```php
array|false imap_alerts()
```

Returns all of the IMAP alert messages generated since the last `imap_alerts()` call, or the beginning of the page.

When `imap_alerts()` is called, the alert stack is subsequently cleared. The IMAP specification requires that these messages be passed to the user.

## Parameters

This function has no parameters.

## Return Values

Returns an array of all of the IMAP alert messages generated or `false` if no alert messages are available.

## See Also

`imap_errors()`
