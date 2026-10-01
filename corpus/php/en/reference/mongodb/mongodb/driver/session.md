---
id: "en-php-guide-class-mongodb-driver-session"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-session"
title: "The MongoDB\\Driver\\Session class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-session.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Session class

MongoDB\Driver\Session

   Introduction  The `MongoDB\Driver\Session` class represents a client session and is returned by `MongoDB\Driver\Manager::startSession()`. Commands, queries, and write operations may then be associated with the session.      Class Synopsis   `MongoDB\Driver\Session`   `final`  `MongoDB\Driver\Session`      `const` `string` `MongoDB\Driver\Session::TRANSACTION_NONE` none   `const` `string` `MongoDB\Driver\Session::TRANSACTION_STARTING` starting   `const` `string` `MongoDB\Driver\Session::TRANSACTION_IN_PROGRESS` in_progress   `const` `string` `MongoDB\Driver\Session::TRANSACTION_COMMITTED` committed   `const` `string` `MongoDB\Driver\Session::TRANSACTION_ABORTED` aborted         Predefined Constants 
- **`MongoDB\Driver\Session::TRANSACTION_NONE`** — There is no transaction in progress.
- **`MongoDB\Driver\Session::TRANSACTION_STARTING`** — A transaction has been started, but no operation has been sent to the server.
- **`MongoDB\Driver\Session::TRANSACTION_IN_PROGRESS`** — A transaction is in progress.
- **`MongoDB\Driver\Session::TRANSACTION_COMMITTED`** — The transaction was committed.
- **`MongoDB\Driver\Session::TRANSACTION_ABORTED`** — The transaction was aborted.
