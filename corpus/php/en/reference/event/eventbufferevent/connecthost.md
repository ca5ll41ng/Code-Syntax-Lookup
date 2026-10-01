---
id: "en-php-function-eventbufferevent-connecthost"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::connectHost"
title: "Connects to a hostname with optionally asynchronous DNS resolving"
signature: "public bool EventBufferEvent::connectHost(EventDnsBase $dns_base, string $hostname, int $port, int $family = EventUtil::AF_UNSPEC)"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.connecthost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Connects to a hostname with optionally asynchronous DNS resolving

## Description

```php
public bool EventBufferEvent::connectHost(EventDnsBase $dns_base, string $hostname, int $port, int $family = EventUtil::AF_UNSPEC)
```

Resolves the DNS name hostname, looking for addresses of type `$family` ( `EventUtil::AF_*` constants). If the name resolution fails, it invokes the event callback with an error event. If it succeeds, it launches a connection attempt just as `EventBufferEvent::connect()` would.

`$dns_base` is optional. May be `null`, or an object created with `EventDnsBase::__construct()`. For asynchronous hostname resolving pass a valid event dns base resource. Otherwise the hostname resolving will block.

> `EventDnsBase` is available only if `Event` configured --with-event-extra ( `event_extra` library, *libevent protocol-specific functionality support including HTTP, DNS, and RPC* ).

> `EventBufferEvent::connectHost()` requires `libevent-2.0.3-alpha` or greater.

## Parameters

- **`$dns_base`** — Object of `EventDnsBase` in case if DNS is to be resolved asynchronously. Otherwise `null`.
- **`$hostname`** — Hostname to connect to. Recognized formats are: ```text www.example.com (hostname) 1.2.3.4 (ipv4address) ::1 (ipv6address) [::1] ([ipv6address]) ```
- **`$port`** — Port number
- **`$family`** — Address family. `EventUtil::AF_UNSPEC`, `EventUtil::AF_INET`, or `EventUtil::AF_INET6`. See EventUtil constants.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`EventBufferEvent::connectHost()` example**

```php


<?php
/* Read callback */
function readcb($bev, $base) {
    //$input = $bev->input; //$bev->getInput();

    //$pos = $input->search("TTP");
    $pos = $bev->input->search("TTP");

    while (($n = $bev->input->remove($buf, 1024)) > 0) {
        echo $buf;
    }
}

/* Event callback */
function eventcb($bev, $events, $base) {
    if ($events & EventBufferEvent::CONNECTED) {
        echo "Connected.\n";
    } elseif ($events & (EventBufferEvent::ERROR | EventBufferEvent::EOF)) {
        if ($events & EventBufferEvent::ERROR) {
            echo "DNS error: ", $bev->getDnsErrorString(), PHP_EOL;
        }

        echo "Closing\n";
        $base->exit();
        exit("Done\n");
    }
}

$base = new EventBase();

$dns_base = new EventDnsBase($base, TRUE); // We'll use async DNS resolving
if (!$dns_base) {
    exit("Failed to init DNS Base\n");
}

$bev = new EventBufferEvent($base, /* use internal socket */ NULL,
    EventBufferEvent::OPT_CLOSE_ON_FREE | EventBufferEvent::OPT_DEFER_CALLBACKS,
    "readcb", /* writecb */ NULL, "eventcb", $base
);
if (!$bev) {
    exit("Failed creating bufferevent socket\n");
}

//$bev->setCallbacks("readcb", /* writecb */ NULL, "eventcb", $base);
$bev->enable(Event::READ | Event::WRITE);

$output = $bev->output; //$bev->getOutput();
if (!$output->add(
    "GET {$argv[2]} HTTP/1.0\r\n".
    "Host: {$argv[1]}\r\n".
    "Connection: Close\r\n\r\n"
)) {
    exit("Failed adding request to output buffer\n");
}

if (!$bev->connectHost($dns_base, $argv[1], 80, EventUtil::AF_UNSPEC)) {
    exit("Can't connect to host {$argv[1]}\n");
}

$base->dispatch();
?>

   
```

The above example will output something similar to:

```text


Connected.
HTTP/1.0 301 Moved Permanently
Location: http://www.google.co.uk/
Content-Type: text/html; charset=UTF-8
Date: Sat, 09 Mar 2013 12:21:19 GMT
Expires: Mon, 08 Apr 2013 12:21:19 GMT
Cache-Control: public, max-age=2592000
Server: gws
Content-Length: 221
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN

<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.co.uk/">here</A>.
</BODY></HTML>
Closing
Done

   
```

## See Also

  `EventBufferEvent::connect()`
