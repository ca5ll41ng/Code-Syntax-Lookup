---
id: "en-php-guide-class-mongodb-driver-monitoring-commandstartedevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-commandstartedevent"
title: "The MongoDB\\Driver\\Monitoring\\CommandStartedEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-commandstartedevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\CommandStartedEvent class

MongoDB\Driver\Monitoring\CommandStartedEvent

   Introduction  The `MongoDB\Driver\Monitoring\CommandStartedEvent` class encapsulates information about a started command.      Class Synopsis   `MongoDB\Driver\Monitoring\CommandStartedEvent`   `final`  `MongoDB\Driver\Monitoring\CommandStartedEvent`      `public` `readonly` `string` `host`   `public` `readonly` `int` `port`   `public` `readonly` `string` `commandName`   `public` `readonly` `string` `databaseName`   `public` `readonly` `object` `command`   `public` `readonly` `string` `operationId`   `public` `readonly` `string` `requestId`   `public` `readonly` `MongoDB\BSON\ObjectId|null` `serviceId`   `public` `readonly` `int|null` `serverConnectionId`         Properties 
- **`host`** — The hostname of the server that executed the command.
- **`port`** — The port of the server that executed the command.
- **`commandName`** — The command name.
- **`databaseName`** — The database name.
- **`command`** — The command document.
- **`operationId`** — The operation ID. This may be used to link events together such as bulk writes, which may dispatch multiple commands.
- **`requestId`** — The request ID. This may be used to associate this `MongoDB\Driver\Monitoring\CommandStartedEvent` with a corresponding `MongoDB\Driver\Monitoring\CommandSucceededEvent` or `MongoDB\Driver\Monitoring\CommandFailedEvent`.
- **`serviceId`** — The service ID, or `null` if the server does not support it (i.e. not using load-balanced mode).
- **`serverConnectionId`** — The server connection ID, or `null` if not available.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
