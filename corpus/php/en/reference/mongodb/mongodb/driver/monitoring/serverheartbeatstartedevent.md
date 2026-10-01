---
id: "en-php-guide-class-mongodb-driver-monitoring-serverheartbeatstartedevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-serverheartbeatstartedevent"
title: "The MongoDB\\Driver\\Monitoring\\ServerHeartbeatStartedEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-serverheartbeatstartedevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent class

MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent

   Introduction  The `MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent` class encapsulates information about a started server heartbeat (i.e. [hello](reference/command/hello/) command issued through [server monitoring]()).      Class Synopsis   `MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent`   `final`  `MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent`      `public` `readonly` `string` `host`   `public` `readonly` `int` `port`   `public` `readonly` `bool` `awaited`         Properties 
- **`host`** — The hostname of the server.
- **`port`** — The port of the server.
- **`awaited`** — Whether the heartbeat used a streaming protocol. The extension does not use the streaming protocol for monitoring, so this method will always return `false`.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
