---
id: "en-php-function-eventbufferevent-getinput"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::getInput"
title: "Returns underlying input buffer associated with current buffer event"
signature: "public EventBuffer EventBufferEvent::getInput()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.getinput.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns underlying input buffer associated with current buffer event

## Description

```php
public EventBuffer EventBufferEvent::getInput()
```

Returns underlying input buffer associated with current buffer event. An input buffer is a storage for data to read.

Note, there is also `input` property of `EventBufferEvent` class.

## Parameters

This function has no parameters.

## Return Values

Returns instance of `EventBuffer` input buffer associated with current buffer event.

## Examples

**Buffer event's read callback**

```php


<?php
function readcb($bev, $base) {
    $input = $bev->input; //$bev->getInput();

    while (($n = $input->remove($buf, 1024)) > 0) {
        echo $buf;
    }
}
?>

   
```

## See Also

  `EventBufferEvent::getOutput()`
