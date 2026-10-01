---
id: "en-php-function-threaded-notifyone"
language: "php"
lang: "en"
category: "function"
name: "Threaded::notifyOne"
title: "Synchronization"
signature: "public bool Threaded::notifyOne()"
module: "pthreads"
source_url: "https://www.php.net/manual/en/threaded.notifyone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Synchronization

## Description

```php
public bool Threaded::notifyOne()
```

Send notification to the referenced object. This unblocks at least one of the blocked threads (as opposed to unblocking all of them, as seen with `Threaded::notify()`).

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Notifications and Waiting**

```php


<?php
class My extends Thread {
    public function run() {
        /** cause this thread to wait **/
        $this->synchronized(function($thread){
            if (!$thread->done)
                $thread->wait();
        }, $this);
    }
}
$my = new My();
$my->start();
/** send notification to the waiting thread **/
$my->synchronized(function($thread){
    $thread->done = true;
    $thread->notifyOne();
}, $my);
var_dump($my->join());
?>

   
```

The above example will output:

```text


bool(true)

   
```
