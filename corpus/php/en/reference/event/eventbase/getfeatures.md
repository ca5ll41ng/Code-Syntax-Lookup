---
id: "en-php-function-eventbase-getfeatures"
language: "php"
lang: "en"
category: "function"
name: "EventBase::getFeatures"
title: "Returns bitmask of features supported"
signature: "public int EventBase::getFeatures()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbase.getfeatures.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns bitmask of features supported

## Description

```php
public int EventBase::getFeatures()
```

Returns bitmask of features supported.

## Parameters

This function has no parameters.

## Return Values

Returns integer representing a bitmask of supported features. See EventConfig::FEATURE_* constants.

## Examples

**`EventBase::getFeatures()` example**

```php


<?php
// Avoiding "select" method
$cfg = new EventConfig();
if ($cfg->avoidMethod("select")) {
    echo "'select' method avoided\n";
}

$base = new EventBase($cfg);

echo "Features:\n";
$features = $base->getFeatures();
($features & EventConfig::FEATURE_ET) and print "ET - edge-triggered IO\n";
($features & EventConfig::FEATURE_O1) and print "O1 - O(1) operation for adding/deleting events\n";
($features & EventConfig::FEATURE_FDS) and print "FDS - arbitrary file descriptor types, and not just sockets\n";
?>

   
```

## See Also

  `EventBase::getMethod()`   `EventConfig`
