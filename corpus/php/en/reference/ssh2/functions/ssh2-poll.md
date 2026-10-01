---
id: "en-php-function-function-ssh2-poll"
language: "php"
lang: "en"
category: "function"
name: "ssh2_poll"
title: "Poll the channels/listeners/streams for events"
signature: "int ssh2_poll(array $desc, int $timeout = 30)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-poll.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Poll the channels/listeners/streams for events

## Description

```php
int ssh2_poll(array $desc, int $timeout = 30)
```

Polls the channels/listeners/streams for events, and returns the number of descriptors which returned non-zero revents.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$desc`** — An indexed array of subarrays with the keys `'resource'` and `'events'`. The value of the resource is a (channel) stream or an SSH2 Listener resource. The value of the event are SSH2_POLL* flags bitwise ORed together. Each subarray will be populated with an `'revents'` element on return, whose values are SSH2_POLL* flags bitwise ORed together of the events that occurred.
- **`$timeout`** — The timeout in seconds.

## Return Values

Returns the number of descriptors which returned non-zero revents.
