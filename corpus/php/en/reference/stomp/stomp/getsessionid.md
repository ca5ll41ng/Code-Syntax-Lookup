---
id: "en-php-function-stomp-getsessionid"
language: "php"
lang: "en"
category: "function"
name: "Stomp::getSessionId"
aliases: ["stomp_get_session_id"]
title: "Gets the current stomp session ID"
signature: "public string|false Stomp::getSessionId()"
module: "stomp"
source_url: "https://www.php.net/manual/en/stomp.getsessionid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the current stomp session ID

## Description

Object-oriented style (method):

```php
public string|false Stomp::getSessionId()
```

Procedural style:

```php
string|false stomp_get_session_id(resource $link)
```

Gets the current stomp session ID.

## Parameters

- **`$link`** — Procedural style only: The stomp link identifier returned by `stomp_connect()`.

## Return Values

`string` session id on success or `false` on failure.

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

var_dump($stomp->getSessionId());

/* close connection */
unset($stomp);

?>

    
```

The above example will output something similar to:

```text


string(35) "ID:php.net-52873-1257291895530-4:14"

   
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

var_dump(stomp_get_session_id($link));

/* close connection */
stomp_close($link);

?>

    
```

The above example will output something similar to:

```text


string(35) "ID:php.net-52873-1257291895530-4:14"

   
```
