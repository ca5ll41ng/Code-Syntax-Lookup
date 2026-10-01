---
id: "en-php-function-function-sapi-windows-generate-ctrl-event"
language: "php"
lang: "en"
category: "function"
name: "sapi_windows_generate_ctrl_event"
title: "Send a CTRL event to another process"
signature: "bool sapi_windows_generate_ctrl_event(int $event, int $pid = 0)"
module: "misc"
source_url: "https://www.php.net/manual/en/function.sapi-windows-generate-ctrl-event.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send a CTRL event to another process

## Description

```php
bool sapi_windows_generate_ctrl_event(int $event, int $pid = 0)
```

Sends a CTRL event to another process in the same process group.

## Parameters

- **`$event`** — The `CTRL` event to send; either `PHP_WINDOWS_EVENT_CTRL_C` or `PHP_WINDOWS_EVENT_CTRL_BREAK`.
- **`$pid`** — The ID of the process to which to send the event to. If `0` is given, the event is sent to all processes of the process group.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Basic `sapi_windows_generate_ctrl_event()` Usage**

This example shows how to pass along `CTRL+BREAK` events to a child process. In this case the child process echoes `I'm still alive` every second, until the user presses `CTRL+BREAK`, what causes only the child process to be terminated.

```php


<?php
// forward CTRL+BREAK events to the child process
sapi_windows_set_ctrl_handler('sapi_windows_generate_ctrl_event');

// create a child process which echoes every second
$cmd = ['php', '-r', 'while (true) { echo "I\'m still alive\n"; sleep(1); }'];
$descspec = array(['pipe', 'r'], ['pipe', 'w'], ['pipe', 'w']);
$options = ['create_process_group' => true];
$proc = proc_open($cmd, $descspec, $pipes, null, null, $options);
while (true) {
    echo fgets($pipes[1]);
}
?>

   
```

## See Also

 `proc_open()` `sapi_windows_set_ctrl_handler()`
