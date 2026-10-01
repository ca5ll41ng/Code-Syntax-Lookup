---
id: "en-php-function-mongodb-driver-topologydescription-getservers"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\TopologyDescription::getServers"
title: "Returns the servers in the topology"
signature: "final public array MongoDB\\Driver\\TopologyDescription::getServers()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-topologydescription.getservers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the servers in the topology

## Description

```php
final public array MongoDB\Driver\TopologyDescription::getServers()
```

Returns an array of `MongoDB\Driver\ServerDescription` objects corresponding to the known servers in the topology.

## Parameters

This function has no parameters.

## Return Values

Returns an array of `MongoDB\Driver\ServerDescription` objects corresponding to the known servers in the topology.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
