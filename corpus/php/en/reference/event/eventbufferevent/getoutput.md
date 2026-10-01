---
id: "en-php-function-eventbufferevent-getoutput"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::getOutput"
title: "Returns underlying output buffer associated with current buffer event"
signature: "public EventBuffer EventBufferEvent::getOutput()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.getoutput.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns underlying output buffer associated with current buffer event

## Description

```php
public EventBuffer EventBufferEvent::getOutput()
```

Returns underlying output buffer associated with current buffer event. An output buffer is a storage for data to be written.

Note, there is also `output` property of `EventBufferEvent` class.

## Parameters

This function has no parameters.

## Return Values

Returns instance of `EventBuffer` output buffer associated with current buffer event.

## Examples

**`EventBufferEvent::getOutput()` example**

```php


<?php
$base = new EventBase();

$dns_base = new EventDnsBase($base, TRUE); // Use async DNS resolving
if (!$dns_base) {
    exit("Failed to init DNS Base\n");
}

$bev = new EventBufferEvent($base, /* use internal socket */ NULL,
    EventBufferEvent::OPT_CLOSE_ON_FREE | EventBufferEvent::OPT_DEFER_CALLBACKS,
    "readcb", /* writecb */ NULL, "eventcb", $base
);
if (!$bev) {
    exit("Failed creating bufferevent socket\n");
}

$bev->enable(Event::READ | Event::WRITE);

$output = $bev->getOutput();
if (!$output->add(
    "GET {$argv[2]} HTTP/1.0\r\n".
    "Host: {$argv[1]}\r\n".
    "Connection: Close\r\n\r\n"
)) {
    exit("Failed adding request to output buffer\n");
}

/* ... */
?>

   
```

## See Also

  `EventBufferEvent::getInput()`
