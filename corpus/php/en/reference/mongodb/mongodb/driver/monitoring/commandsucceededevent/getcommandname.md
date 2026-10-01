---
id: "en-php-function-mongodb-driver-monitoring-commandsucceededevent-getcommandname"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\CommandSucceededEvent::getCommandName"
title: "Returns the command name"
signature: "final public string MongoDB\\Driver\\Monitoring\\CommandSucceededEvent::getCommandName()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-commandsucceededevent.getcommandname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the command name

## Description

```php
final public string MongoDB\Driver\Monitoring\CommandSucceededEvent::getCommandName()
```

Returns the command name (e.g. `"find"`, `"aggregate"`).

## Parameters

This function has no parameters.

## Return Values

Returns the command name.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `mongodb.tutorial.apm`
