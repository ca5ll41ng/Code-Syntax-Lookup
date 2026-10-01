---
id: "en-php-function-eventbase-getmethod"
language: "php"
lang: "en"
category: "function"
name: "EventBase::getMethod"
title: "Returns event method in use"
signature: "public string EventBase::getMethod()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbase.getmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns event method in use

## Description

```php
public string EventBase::getMethod()
```

## Parameters

This function has no parameters.

## Return Values

String representing used event method(backend).

## Examples

**`EventBase::getMethod()` example**

```php


<?php
$cfg = new EventConfig();
if ($cfg->avoidMethod("select")) {
    echo "'select' method avoided\n";
}

// Create event_base associated with the config
$base = new EventBase($cfg);
echo "Event method used: ", $base->getMethod(), PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


`select' method avoided
Event method used: epoll

   
```

## See Also

  `EventBase::getFeatures()`
