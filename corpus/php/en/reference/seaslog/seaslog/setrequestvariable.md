---
id: "en-php-function-seaslog-setrequestvariable"
language: "php"
lang: "en"
category: "function"
name: "SeasLog::setRequestVariable"
title: "Manually set SeasLog request variable"
signature: "public static bool SeasLog::setRequestVariable(int $key, string $value)"
module: "seaslog"
source_url: "https://www.php.net/manual/en/seaslog.setrequestvariable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Manually set SeasLog request variable

## Description

```php
public static bool SeasLog::setRequestVariable(int $key, string $value)
```

Manually set SeasLog request variable.

## Parameters

- **`$key`** — Constant int. SEASLOG_REQUEST_VARIABLE_DOMAIN_PORT SEASLOG_REQUEST_VARIABLE_REQUEST_URI SEASLOG_REQUEST_VARIABLE_REQUEST_METHOD SEASLOG_REQUEST_VARIABLE_CLIENT_IP
- **`$value`** — The request variable value.

## Return Values

Return TRUE on set success, FALSE on failure.

## Examples

**`SeasLog::setRequestVariable()` example**

```php


<?php

$sDomainPort = 'domain:port';
$sRequestUri = 'uri';
$sRequestMethod = 'method';
$sClientIp = 'client_ip';

$iErrorKey = 1000;

$oSeasLog = new SeasLog();

var_dump($oSeasLog->setRequestVariable(SEASLOG_REQUEST_VARIABLE_DOMAIN_PORT, $sDomainPort));
var_dump($oSeasLog->setRequestVariable(SEASLOG_REQUEST_VARIABLE_REQUEST_URI, $sRequestUri));
var_dump($oSeasLog->setRequestVariable(SEASLOG_REQUEST_VARIABLE_REQUEST_METHOD, $sRequestMethod));
var_dump($oSeasLog->setRequestVariable(SEASLOG_REQUEST_VARIABLE_CLIENT_IP, $sClientIp));

var_dump($oSeasLog->setRequestVariable($iErrorKey,NULL));

var_dump($oSeasLog->getRequestVariable(SEASLOG_REQUEST_VARIABLE_DOMAIN_PORT) == $sDomainPort);
var_dump($oSeasLog->getRequestVariable(SEASLOG_REQUEST_VARIABLE_REQUEST_URI) == $sRequestUri);
var_dump($oSeasLog->getRequestVariable(SEASLOG_REQUEST_VARIABLE_REQUEST_METHOD) == $sRequestMethod);
var_dump($oSeasLog->getRequestVariable(SEASLOG_REQUEST_VARIABLE_CLIENT_IP) == $sClientIp);

var_dump($oSeasLog->getRequestVariable($iErrorKey));

?>

   
```

The above example will output something similar to:

```text



bool(true)
bool(true)
bool(true)
bool(true)
bool(false)
bool(true)
bool(true)
bool(true)
bool(true)
bool(false)


   
```

## See Also

 `SeasLog::getRequestVariable()`
