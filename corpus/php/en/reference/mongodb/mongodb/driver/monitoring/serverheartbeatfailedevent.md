---
id: "en-php-guide-class-mongodb-driver-monitoring-serverheartbeatfailedevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-serverheartbeatfailedevent"
title: "The MongoDB\\Driver\\Monitoring\\ServerHeartbeatFailedEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-serverheartbeatfailedevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent class

MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent

   Introduction  The `MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent` class encapsulates information about a failed server heartbeat (i.e. [hello](reference/command/hello/) command issued through [server monitoring]()).      Class Synopsis   `MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent`   `final`  `MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent`      `public` `readonly` `string` `host`   `public` `readonly` `int` `port`   `public` `readonly` `bool` `awaited`   `public` `readonly` `int` `duration`   `public` `readonly` `Exception` `error`         Properties 
- **`host`** — The hostname of the server.
- **`port`** — The port of the server.
- **`awaited`** — Whether the heartbeat used a streaming protocol. The extension does not use the streaming protocol for monitoring, so this method will always return `false`.
- **`duration`** — The duration of the heartbeat in microseconds. The duration is a calculated value that includes the time to send the message and receive the response from the server.
- **`error`** — The exception that was thrown when the heartbeat failed.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. The `duration` property replaces the `getDurationMicros()` method. |
