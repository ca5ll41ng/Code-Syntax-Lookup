---
id: "en-php-function-eventbufferevent-sslerror"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::sslError"
title: "Returns most recent OpenSSL error reported on the buffer event"
signature: "public string EventBufferEvent::sslError()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.sslerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns most recent OpenSSL error reported on the buffer event

## Description

```php
public string EventBufferEvent::sslError()
```

Returns most recent OpenSSL error reported on the buffer event.

> This function is available only if `Event` is compiled with OpenSSL support.

## Parameters

This function has no parameters.

## Return Values

Returns OpenSSL error string reported on the buffer event, or `false`, if there is no more error to return.

## Examples

**`EventBufferEvent::sslError()` example**

```php


<?php
// This callback is invoked when some event occurs on the event listener,
// e.g. connection closed, or an error occurred
function ssl_event_cb($bev, $events, $ctx) {
    if ($events & EventBufferEvent::ERROR) {
        // Fetch errors from the SSL error stack
        while ($err = $bev->sslError()) {
            fprintf(STDERR, "Bufferevent error %s.\n", $err);
        }
    }

    if ($events & (EventBufferEvent::EOF | EventBufferEvent::ERROR)) {
        $bev->free();
    }
}
?>

   
```

## See Also

  `EventBufferEvent::sslRenegotiate()`
