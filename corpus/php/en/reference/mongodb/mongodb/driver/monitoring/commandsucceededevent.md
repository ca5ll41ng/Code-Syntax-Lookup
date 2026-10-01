---
id: "en-php-guide-class-mongodb-driver-monitoring-commandsucceededevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-commandsucceededevent"
title: "The MongoDB\\Driver\\Monitoring\\CommandSucceededEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-commandsucceededevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\CommandSucceededEvent class

MongoDB\Driver\Monitoring\CommandSucceededEvent

   Introduction  The `MongoDB\Driver\Monitoring\CommandSucceededEvent` class encapsulates information about a successful command.      Class Synopsis   `MongoDB\Driver\Monitoring\CommandSucceededEvent`   `final`  `MongoDB\Driver\Monitoring\CommandSucceededEvent`      `public` `readonly` `string` `host`   `public` `readonly` `int` `port`   `public` `readonly` `string` `commandName`   `public` `readonly` `string` `databaseName`   `public` `readonly` `int` `duration`   `public` `readonly` `object` `reply`   `public` `readonly` `string` `operationId`   `public` `readonly` `string` `requestId`   `public` `readonly` `MongoDB\BSON\ObjectId|null` `serviceId`   `public` `readonly` `int|null` `serverConnectionId`         Properties 
- **`host`** — The hostname of the server that executed the command.
- **`port`** — The port of the server that executed the command.
- **`commandName`** — The command name.
- **`databaseName`** — The database name.
- **`duration`** — The duration of the command in microseconds. The duration is a calculated value that includes the time to send the message and receive the response from the server.
- **`reply`** — The reply document returned by the server.
- **`operationId`** — The operation ID. This may be used to link events together such as bulk writes, which may dispatch multiple commands.
- **`requestId`** — The request ID. This may be used to associate this `MongoDB\Driver\Monitoring\CommandSucceededEvent` with a corresponding `MongoDB\Driver\Monitoring\CommandStartedEvent`.
- **`serviceId`** — The service ID, or `null` if the server does not support it (i.e. not using load-balanced mode).
- **`serverConnectionId`** — The server connection ID, or `null` if not available.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. The `duration` property replaces the `getDurationMicros()` method. |
