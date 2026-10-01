---
id: "en-php-function-splobserver-update"
language: "php"
lang: "en"
category: "function"
name: "SplObserver::update"
title: "Receive update from subject"
signature: "public void SplObserver::update(SplSubject $subject)"
module: "spl"
source_url: "https://www.php.net/manual/en/splobserver.update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Receive update from subject

## Description

```php
public void SplObserver::update(SplSubject $subject)
```

This method is called when any `SplSubject` to which the observer is attached calls `SplSubject::notify()`.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$subject`** — The `SplSubject` notifying the observer of an update.

## Return Values

No value is returned.
