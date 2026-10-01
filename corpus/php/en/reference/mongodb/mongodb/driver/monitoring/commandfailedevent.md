---
id: "en-php-guide-class-mongodb-driver-monitoring-commandfailedevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-commandfailedevent"
title: "The MongoDB\\Driver\\Monitoring\\CommandFailedEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-commandfailedevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\CommandFailedEvent class

MongoDB\Driver\Monitoring\CommandFailedEvent

   Introduction  The `MongoDB\Driver\Monitoring\CommandFailedEvent` class encapsulates information about a failed command.      Class Synopsis   `MongoDB\Driver\Monitoring\CommandFailedEvent`   `final`  `MongoDB\Driver\Monitoring\CommandFailedEvent`      `public` `readonly` `string` `host`   `public` `readonly` `int` `port`   `public` `readonly` `string` `commandName`   `public` `readonly` `string` `databaseName`   `public` `readonly` `int` `duration`   `public` `readonly` `Exception` `error`   `public` `readonly` `object` `reply`   `public` `readonly` `string` `operationId`   `public` `readonly` `string` `requestId`   `public` `readonly` `MongoDB\BSON\ObjectId|null` `serviceId`   `public` `readonly` `int|null` `serverConnectionId`         Properties 
- **`host`** — The hostname of the server that executed the command.
- **`port`** — The port of the server that executed the command.
- **`commandName`** — The command name.
- **`databaseName`** — The database name.
- **`duration`** — The duration of the command in microseconds. The duration is a calculated value that includes the time to send the message and receive the response from the server.
- **`error`** — The exception that was thrown when the command failed.
- **`reply`** — The failure reply document returned by the server.
- **`operationId`** — The operation ID. This may be used to link events together such as bulk writes, which may dispatch multiple commands.
- **`requestId`** — The request ID. This may be used to associate this `MongoDB\Driver\Monitoring\CommandFailedEvent` with a corresponding `MongoDB\Driver\Monitoring\CommandStartedEvent`.
- **`serviceId`** — The service ID, or `null` if the server does not support it (i.e. not using load-balanced mode).
- **`serverConnectionId`** — The server connection ID, or `null` if not available.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. The `duration` property replaces the `getDurationMicros()` method. |
