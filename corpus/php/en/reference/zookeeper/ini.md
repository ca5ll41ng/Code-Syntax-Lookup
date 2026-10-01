---
id: "en-php-guide-zookeeper-configuration"
language: "php"
lang: "en"
category: "guide"
name: "zookeeper.configuration"
title: "Runtime Configuration"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| zookeeper.recv_timeout | 10000 | `INI_ALL` |  |
| zookeeper.session_lock | 1 | `INI_SYSTEM` |  |
| zookeeper.sess_lock_wait | 150000 | `INI_ALL` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$zookeeper.recv_timeout` `int`** — Default the timeout for any ZooKeeper session.
- **`$zookeeper.session_lock` `int`** — Enable PHP session locking.
- **`$zookeeper.sess_lock_wait` `int`** — PHP Session spin lock retry wait time in microseconds. Be careful when setting this value. Valid values are integers, where 0 is interpreted as the default value. Negative values result in a reduces locking to a try lock.
