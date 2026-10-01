---
id: "en-php-function-mongodb-driver-topologydescription-gettype"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\TopologyDescription::getType"
title: "Returns a string denoting the type of this topology"
signature: "final public string MongoDB\\Driver\\TopologyDescription::getType()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-topologydescription.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a string denoting the type of this topology

## Description

```php
final public string MongoDB\Driver\TopologyDescription::getType()
```

Returns a `string` denoting the type of this topology. The value will correlate with a `MongoDB\Driver\TopologyDescription` constant.

## Parameters

This function has no parameters.

## Return Values

Returns a `string` denoting the type of this topology.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
