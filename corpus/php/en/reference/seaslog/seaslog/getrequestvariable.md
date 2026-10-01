---
id: "en-php-function-seaslog-getrequestvariable"
language: "php"
lang: "en"
category: "function"
name: "SeasLog::getRequestVariable"
title: "Get SeasLog request variable"
signature: "public static bool SeasLog::getRequestVariable(int $key)"
module: "seaslog"
source_url: "https://www.php.net/manual/en/seaslog.getrequestvariable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get SeasLog request variable

## Description

```php
public static bool SeasLog::getRequestVariable(int $key)
```

Get SeasLog request variable.

## Parameters

- **`$key`** — Constant int. SEASLOG_REQUEST_VARIABLE_DOMAIN_PORT SEASLOG_REQUEST_VARIABLE_REQUEST_URI SEASLOG_REQUEST_VARIABLE_REQUEST_METHOD SEASLOG_REQUEST_VARIABLE_CLIENT_IP

## Return Values

Return request variable value on set success.

## Examples

**`SeasLog::getRequestVariable()` example**

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

 `SeasLog::setRequestVariable()`
