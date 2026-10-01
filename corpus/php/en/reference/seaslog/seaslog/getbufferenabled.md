---
id: "en-php-function-seaslog-getbufferenabled"
language: "php"
lang: "en"
category: "function"
name: "SeasLog::getBufferEnabled"
title: "Determin if buffer enabled"
signature: "public static bool SeasLog::getBufferEnabled()"
module: "seaslog"
source_url: "https://www.php.net/manual/en/seaslog.getbufferenabled.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determin if buffer enabled

## Description

```php
public static bool SeasLog::getBufferEnabled()
```

Result join seaslog.use_buffer and seaslog.buffer_disabled_in_cli.

## Parameters

This function has no parameters.

## Return Values

Return TRUE on seaslog.use_buffer is true. If switch seaslog.buffer_disabled_in_cli on, and running in cli, seaslog.use_buffer setting will be discarded, Seaslog write to the Data Store IMMEDIATELY.

## Examples

**`SeasLog::getBufferEnabled()` example**

```php


<?php

var_dump(SeasLog::getBufferEnabled());

?>

   
```

The above example will output something similar to:

```text


bool(false)

   
```

## See Also

 seaslog.use_buffer seaslog.buffer_size seaslog.buffer_disabled_in_cli `SeasLog::getBuffer()` `SeasLog::flushBuffer()`
