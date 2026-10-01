---
id: "en-php-guide-class-eventhttprequest"
language: "php"
lang: "en"
category: "guide"
name: "class.eventhttprequest"
title: "The EventHttpRequest class"
module: "event"
source_url: "https://www.php.net/manual/en/class.eventhttprequest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EventHttpRequest class

EventHttpRequest

   Introduction  Represents an HTTP request.      Class Synopsis    `EventHttpRequest`     `EventHttpRequest`      `const` `int` `EventHttpRequest::CMD_GET` 1   `const` `int` `EventHttpRequest::CMD_POST` 2   `const` `int` `EventHttpRequest::CMD_HEAD` 4   `const` `int` `EventHttpRequest::CMD_PUT` 8   `const` `int` `EventHttpRequest::CMD_DELETE` 16   `const` `int` `EventHttpRequest::CMD_OPTIONS` 32   `const` `int` `EventHttpRequest::CMD_TRACE` 64   `const` `int` `EventHttpRequest::CMD_CONNECT` 128   `const` `int` `EventHttpRequest::CMD_PATCH` 256   `const` `int` `EventHttpRequest::INPUT_HEADER` 1   `const` `int` `EventHttpRequest::OUTPUT_HEADER` 2         Predefined Constants 
- **`EventHttpRequest::CMD_GET`** — GET method(command)
- **`EventHttpRequest::CMD_POST`** — POST method(command)
- **`EventHttpRequest::CMD_HEAD`** — HEAD method(command)
- **`EventHttpRequest::CMD_PUT`** — PUT method(command)
- **`EventHttpRequest::CMD_DELETE`** — DELETE command(method)
- **`EventHttpRequest::CMD_OPTIONS`** — OPTIONS method(command)
- **`EventHttpRequest::CMD_TRACE`** — TRACE method(command)
- **`EventHttpRequest::CMD_CONNECT`** — CONNECT method(command)
- **`EventHttpRequest::CMD_PATCH`** — PATCH method(command)
- **`EventHttpRequest::INPUT_HEADER`** — Request input header type.
- **`EventHttpRequest::OUTPUT_HEADER`** — Request output header type.
