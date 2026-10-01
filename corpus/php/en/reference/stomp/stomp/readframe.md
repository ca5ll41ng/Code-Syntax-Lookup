---
id: "en-php-function-stomp-readframe"
language: "php"
lang: "en"
category: "function"
name: "Stomp::readFrame"
aliases: ["stomp_read_frame"]
title: "Reads the next frame"
signature: "public stompframe Stomp::readFrame(string $class_name = \"stompFrame\")"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.readframe.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reads the next frame

## Description

Object-oriented style (method):

```php
public stompframe Stomp::readFrame(string $class_name = "stompFrame")
```

Procedural style:

```php
array stomp_read_frame(resource $link)
```

Reads the next frame. It is possible to instantiate an object of a specific class, and pass parameters to that class's constructor.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.
- **`$class_name`** — The name of the class to instantiate. If not specified, a stompFrame object is returned.

## Return Values

> A transaction header may be specified, indicating that the message acknowledgment should be part of the named transaction.

## Changelog

|  |  |
| --- | --- |
| PECL stomp 0.4.0 | `$class_name` parameter was added. |

## Examples

**Object-oriented style**

```php


<?php

/* connection */
try {
    $stomp = new Stomp('tcp://localhost:61613');
} catch(StompException $e) {
    die('Connection failed: ' . $e->getMessage());
}

/* subscribe to messages from the queue 'foo' */
$stomp->subscribe('/queue/foo');

/* read a frame */
var_dump($stomp->readFrame());

/* close connection */
unset($stomp);

?>

    
```

The above example will output something similar to:

```text


object(StompFrame)#2 (3) {
  ["command"]=>
  string(7) "MESSAGE"
  ["headers"]=>
  array(5) {
    ["message-id"]=>
    string(41) "ID:php.net-55293-1257226743606-4:2:-1:1:1"
    ["destination"]=>
    string(10) "/queue/foo"
    ["timestamp"]=>
    string(13) "1257226805828"
    ["expires"]=>
    string(1) "0"
    ["priority"]=>
    string(1) "0"
  }
  ["body"]=>
  string(3) "bar"
}

   
```

**Procedural style**

```php


<?php

/* connection */
$link = stomp_connect('ssl://localhost:61612');

/* check connection */
if (!$link) {
    die('Connection failed: ' . stomp_connect_error());
}

/* subscribe to messages from the queue 'foo' */
stomp_subscribe($link, '/queue/foo');

/* read a frame */
$frame = stomp_read_frame($link);

/* close connection */
stomp_close($link);

?>

    
```

The above example will output something similar to:

```text


array(3) {
  ["command"]=>
  string(7) "MESSAGE"
  ["body"]=>
  string(3) "bar"
  ["headers"]=>
  array(6) {
    ["transaction"]=>
    string(2) "t1"
    ["message-id"]=>
    string(41) "ID:php.net-55293-1257226743606-4:3:-1:1:1"
    ["destination"]=>
    string(10) "/queue/foo"
    ["timestamp"]=>
    string(13) "1257227037059"
    ["expires"]=>
    string(1) "0"
    ["priority"]=>
    string(1) "0"
  }
}

   
```
