---
id: "en-php-guide-book-eio"
language: "php"
lang: "en"
category: "guide"
name: "book.eio"
title: "Eio"
module: "eio"
source_url: "https://www.php.net/manual/en/book.eio.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Eio

Eio

 Introduction  This extension provides asynchronous POSIX I/O by means of [libeio]() C library written by Marc Lehmann.   
> This extension is not available on Windows platforms.

  
> It is important to be aware that each request is executed in a thread, and the order of execution of continuously queued requests basically is unpredictable. For instance, the following piece of code is incorrect.

 
**Incorrect requests**

```php

<?php
// Request to create symlink of $filename to $link
eio_symlink($filename, $link);

// Request to move $filename to $new_filename
eio_rename($filename, $new_filename);

// Process requests
eio_event_loop();
?>

   
```

 In the example above `eio_rename()` request may finish before `eio_symlink()`. To fix it you might call `eio_rename()` in the callback of `eio_symlink()`: 
**Calling request from a request callback**

```php

<?php
function my_symlink_done($filename, $result) {
 // Request to move $filename to $new_filename
 eio_rename($filename, "/path/to/new-name");

 // Process requests
 eio_event_loop();
}

// Request to create symlink of $filename to $link
eio_symlink($filename, $link, EIO_PRI_DEFAULT, "my_symlink_done", $filename);

// Process requests
eio_event_loop();
?>
   
   
```

 Alternatively, you might want to create a request group: 
**Calling request from a request callback**

```php

<?php
/* Is called when the group requests are done */
function my_grp_done($data, $result) {
 // ...
}

function my_symlink_done($filename, $result) {
 // Create eio_rename request and add it to the group
 $req = eio_rename($filename, "/path/to/new-name");
 eio_grp_add($grp, $req);
 // You might want to add more requests...
}

// Create a request group
$grp = eio_grp("my_grp_done", "my_grp_data");

// Create eio_symlink request and add it to the group
// Pass $filename to the callback
$req = eio_symlink($filename, $link,
  EIO_PRI_DEFAULT, "my_symlink_done", $filename);
eio_grp_add($grp, $req);

// Process requests
eio_event_loop();
?>
```

 Group is a special kind of request that could accumulate a set of regular *eio* requests. This could be used to create a complex request that opens, reads and closes a file.    Since version 0.3.0 alpha, a variable used in communications with libeio internally, could be retrieved with `eio_get_event_stream()`. The variable could be used to bind to an event loop supported by some other extension. You might organize a simple event loop where eio and libevent work together: 
**Using eio with libevent**

```php

<?php
function my_eio_poll($fd, $events, $arg) {
    /* Some libevent regulation might go here .. */
    if (eio_nreqs()) {
        eio_poll();
    }
    /* .. and here */
}

function my_res_cb($d, $r) {
    var_dump($r); var_dump($d);
}

$base = event_base_new();
$event = event_new();

// This stream is used to bind with libevent
$fd = eio_get_event_stream();

eio_nop(EIO_PRI_DEFAULT, "my_res_cb", "nop data");
eio_mkdir("/tmp/abc-eio-temp", 0750, EIO_PRI_DEFAULT, "my_res_cb", "mkdir data");
/* some other eio_* calls here ... */

// set event flags
event_set($event, $fd, EV_READ /*| EV_PERSIST*/, "my_eio_poll", array($event, $base));

// set event base
event_base_set($event, $base);

// enable event
event_add($event);

// start event loop
event_base_loop($base);

/* The same will be available via buffered libevent interface */
?>
```
