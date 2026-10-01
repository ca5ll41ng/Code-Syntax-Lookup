---
id: "en-php-function-zmqpoll-getlasterrors"
language: "php"
lang: "en"
category: "function"
name: "ZMQPoll::getLastErrors"
title: "Get poll errors"
signature: "public array ZMQPoll::getLastErrors()"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqpoll.getlasterrors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get poll errors

## Description

```php
public array ZMQPoll::getLastErrors()
```

Returns the ids of the objects that had errors in the last poll.

## Parameters

This function has no parameters.

## Return Values

Returns an array containing ids for the items that had errors in the last poll. Empty array is returned if there were no errors.
