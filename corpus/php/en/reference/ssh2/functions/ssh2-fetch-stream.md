---
id: "en-php-function-function-ssh2-fetch-stream"
language: "php"
lang: "en"
category: "function"
name: "ssh2_fetch_stream"
title: "Fetch an extended data stream"
signature: "resource ssh2_fetch_stream(resource $channel, int $streamid)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-fetch-stream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch an extended data stream

## Description

```php
resource ssh2_fetch_stream(resource $channel, int $streamid)
```

Fetches an alternate substream associated with an SSH2 channel stream. The SSH2 protocol currently defines only one substream, STDERR, which has a substream ID of `SSH2_STREAM_STDERR` (defined as 1).

## Parameters

- **`$channel`**
- **`$streamid`** — An SSH2 channel stream.

## Return Values

Returns the requested stream resource.

## Examples

**Opening a shell and retrieving the stderr stream associated with it**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$stdio_stream = ssh2_shell($connection);
$stderr_stream = ssh2_fetch_stream($stdio_stream, SSH2_STREAM_STDERR);
?>

   
```

## See Also

 `ssh2_shell()` `ssh2_exec()` `ssh2_connect()`
