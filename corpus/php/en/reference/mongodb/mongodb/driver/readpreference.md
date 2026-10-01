---
id: "en-php-guide-class-mongodb-driver-readpreference"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-readpreference"
title: "The MongoDB\\Driver\\ReadPreference class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-readpreference.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\ReadPreference class

MongoDB\Driver\ReadPreference

   Introduction       Class Synopsis   `MongoDB\Driver\ReadPreference`   `final`  `MongoDB\Driver\ReadPreference`   MongoDB\BSON\Serializable   Serializable      `public` `readonly` `string` `mode`   `public` `readonly` `array|null` `tags`   `public` `readonly` `int` `maxStalenessSeconds`   `public` `readonly` `object|null` `hedge`    `const` `string` `MongoDB\Driver\ReadPreference::PRIMARY` primary   `const` `string` `MongoDB\Driver\ReadPreference::PRIMARY_PREFERRED` primaryPreferred   `const` `string` `MongoDB\Driver\ReadPreference::SECONDARY` secondary   `const` `string` `MongoDB\Driver\ReadPreference::SECONDARY_PREFERRED` secondaryPreferred   `const` `string` `MongoDB\Driver\ReadPreference::NEAREST` nearest   `const` `int` `MongoDB\Driver\ReadPreference::NO_MAX_STALENESS` -1   `const` `int` `MongoDB\Driver\ReadPreference::SMALLEST_MAX_STALENESS_SECONDS` 90         Properties 
- **`mode`** — The read preference mode as a string (e.g. `"primary"`, `"secondary"`).
- **`tags`** — The tag set list used by the read preference, or `null` if no tag sets were specified.
- **`maxStalenessSeconds`** — The maximum staleness in seconds for reads, or `MongoDB\Driver\ReadPreference::NO_MAX_STALENESS` if no maximum staleness was specified.
- **`hedge`** — A document specifying the hedge options for the read preference, or `null` if no hedge options were specified.
  > This property is deprecated as hedged reads are deprecated in MongoDB 8.0.

     Predefined Constants 
- **`MongoDB\Driver\ReadPreference::PRIMARY`** — All operations read from the current replica set primary. This is the default read preference for MongoDB.
- **`MongoDB\Driver\ReadPreference::PRIMARY_PREFERRED`** — In most situations, operations read from the primary but if it is unavailable, operations read from secondary members.
- **`MongoDB\Driver\ReadPreference::SECONDARY`** — All operations read from the secondary members of the replica set.
- **`MongoDB\Driver\ReadPreference::SECONDARY_PREFERRED`** — In most situations, operations read from secondary members but if no secondary members are available, operations read from the primary.
- **`MongoDB\Driver\ReadPreference::NEAREST`** — Operations read from member of the replica set with the least network latency, irrespective of the member's type.
- **`MongoDB\Driver\ReadPreference::NO_MAX_STALENESS`** — The default value for the `"maxStalenessSeconds"` option is to specify no limit on maximum staleness, which means that the driver will not consider a secondary's lag when choosing where to direct a read operation.
- **`MongoDB\Driver\ReadPreference::SMALLEST_MAX_STALENESS_SECONDS`** — The minimum value for the `"maxStalenessSeconds"` option is 90 seconds. The driver estimates secondaries' staleness by periodically checking the latest write date of each replica set member. Since these checks are infrequent, the staleness estimate is coarse. Thus, the driver cannot enforce a max staleness value of less than 90 seconds.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
| PECL mongodb 2.0.0 | Removed the `MongoDB\Driver\ReadPreference::RP_PRIMARY`, `MongoDB\Driver\ReadPreference::RP_PRIMARY_PREFERRED`, `MongoDB\Driver\ReadPreference::RP_SECONDARY`, `MongoDB\Driver\ReadPreference::RP_SECONDARY_PREFERRED`, and `MongoDB\Driver\ReadPreference::RP_NEAREST` constants. The `getMode()` method was also removed. |
| PECL mongodb 1.20.0 | Deprecated the `MongoDB\Driver\ReadPreference::RP_PRIMARY`, `MongoDB\Driver\ReadPreference::RP_PRIMARY_PREFERRED`, `MongoDB\Driver\ReadPreference::RP_SECONDARY`, `MongoDB\Driver\ReadPreference::RP_SECONDARY_PREFERRED`, and `MongoDB\Driver\ReadPreference::RP_NEAREST` constants. |
| PECL mongodb 1.7.0 | Added the `MongoDB\Driver\ReadPreference::PRIMARY`, `MongoDB\Driver\ReadPreference::PRIMARY_PREFERRED`, `MongoDB\Driver\ReadPreference::SECONDARY`, `MongoDB\Driver\ReadPreference::SECONDARY_PREFERRED`, and `MongoDB\Driver\ReadPreference::NEAREST` constants.    Implements Serializable. |
| PECL mongodb 1.2.0 | Added the `MongoDB\Driver\ReadPreference::NO_MAX_STALENESS` and `MongoDB\Driver\ReadPreference::SMALLEST_MAX_STALENESS_SECONDS` constants.    Implements MongoDB\BSON\Serializable. |
