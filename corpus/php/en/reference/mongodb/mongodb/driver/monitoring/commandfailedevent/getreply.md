---
id: "en-php-function-mongodb-driver-monitoring-commandfailedevent-getreply"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\CommandFailedEvent::getReply"
title: "Returns the command reply document"
signature: "final public object MongoDB\\Driver\\Monitoring\\CommandFailedEvent::getReply()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-commandfailedevent.getreply.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the command reply document

## Description

```php
final public object MongoDB\Driver\Monitoring\CommandFailedEvent::getReply()
```

The reply document will be converted from BSON to PHP using the default deserialization rules (e.g. BSON documents will be converted to `stdClass`).

## Parameters

This function has no parameters.

## Return Values

Returns the command reply document as a `stdClass` object.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `mongodb.tutorial.apm` `mongodb.persistence`
