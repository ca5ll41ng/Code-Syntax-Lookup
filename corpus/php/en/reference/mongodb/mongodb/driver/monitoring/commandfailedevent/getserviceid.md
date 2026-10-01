---
id: "en-php-function-mongodb-driver-monitoring-commandfailedevent-getserviceid"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\CommandFailedEvent::getServiceId"
title: "Returns the load balancer service ID for the command"
signature: "final public MongoDB\\BSON\\ObjectId|null MongoDB\\Driver\\Monitoring\\CommandFailedEvent::getServiceId()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-commandfailedevent.getserviceid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the load balancer service ID for the command

## Description

```php
final public MongoDB\BSON\ObjectId|null MongoDB\Driver\Monitoring\CommandFailedEvent::getServiceId()
```

When the driver is connected to a MongoDB cluster through a load balancer, the service ID corresponds to the `serviceId` field in the `hello` command response.

## Parameters

This function has no parameters.

## Return Values

Returns the load balancer service ID, or `null` if the driver is not connected to a load balancer.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
