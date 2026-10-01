---
id: "en-php-function-eventhttpconnection-makerequest"
language: "php"
lang: "en"
category: "function"
name: "EventHttpConnection::makeRequest"
title: "Makes an HTTP request over the specified connection"
signature: "public bool EventHttpConnection::makeRequest(EventHttpRequest $req, int $type, string $uri)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttpconnection.makerequest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Makes an HTTP request over the specified connection

## Description

```php
public bool EventHttpConnection::makeRequest(EventHttpRequest $req, int $type, string $uri)
```

Makes an HTTP request over the specified connection. `$type` is one of `EventHttpRequest::CMD_*` constants.

## Parameters

- **`$req`** — The connection object over which to send the request.
- **`$type`** — One of `EventHttpRequest::CMD_*` constants.
- **`$uri`** — The URI associated with the request.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`EventHttpConnection::makeRequest()` example**

```php


<?php
function _request_handler($req, $base) {
    echo __FUNCTION__, PHP_EOL;

    if (is_null($req)) {
        echo "Timed out\n";
    } else {
        $response_code = $req->getResponseCode();

        if ($response_code == 0) {
            echo "Connection refused\n";
        } elseif ($response_code != 200) {
            echo "Unexpected response: $response_code\n";
        } else {
            echo "Success: $response_code\n";
            $buf = $req->getInputBuffer();
            echo "Body:\n";
            while ($s = $buf->readLine(EventBuffer::EOL_ANY)) {
                echo $s, PHP_EOL;
            }
        }
    }

    $base->exit(NULL);
}

$address = "127.0.0.1";
$port = 80;

$base = new EventBase();
$conn = new EventHttpConnection($base, NULL, $address, $port);
$conn->setTimeout(5);
$req = new EventHttpRequest("_request_handler", $base);

$req->addHeader("Host", $address, EventHttpRequest::OUTPUT_HEADER);
$req->addHeader("Content-Length", "0", EventHttpRequest::OUTPUT_HEADER);
$conn->makeRequest($req, EventHttpRequest::CMD_GET, "/index.cphp");

$base->loop();
?>

   
```

The above example will output something similar to:

```text


_request_handler
Success: 200
Body:
PHP, date:
2013-03-13T20:27:52+05:00

   
```

## See Also

  `EventHttpRequest::addHeader()`
