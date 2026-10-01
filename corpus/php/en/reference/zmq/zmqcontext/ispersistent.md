---
id: "en-php-function-zmqcontext-ispersistent"
language: "php"
lang: "en"
category: "function"
name: "ZMQContext::isPersistent"
title: "Whether the context is persistent"
signature: "public bool ZMQContext::isPersistent()"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqcontext.ispersistent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether the context is persistent

## Description

```php
public bool ZMQContext::isPersistent()
```

Whether the context is persistent. Persistent context is needed for persistent connections as each socket is allocated from a context.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the context is persistent and `false` if the context is non-persistent.
