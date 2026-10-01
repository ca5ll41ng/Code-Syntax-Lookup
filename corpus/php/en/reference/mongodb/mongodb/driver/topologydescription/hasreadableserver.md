---
id: "en-php-function-mongodb-driver-topologydescription-hasreadableserver"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\TopologyDescription::hasReadableServer"
title: "Returns whether the topology has a readable server"
signature: "final public bool MongoDB\\Driver\\TopologyDescription::hasReadableServer(MongoDB\\Driver\\ReadPreference|null $readPreference = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-topologydescription.hasreadableserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the topology has a readable server

## Description

```php
final public bool MongoDB\Driver\TopologyDescription::hasReadableServer(MongoDB\Driver\ReadPreference|null $readPreference = null)
```

Returns whether the topology has a readable server or, if `$readPreference` is specified, a server matching the specified read preference.

## Parameters

This function has no parameters.

## Return Values

Returns whether the topology has a readable server or, if `$readPreference` is specified, a server matching the specified read preference.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
