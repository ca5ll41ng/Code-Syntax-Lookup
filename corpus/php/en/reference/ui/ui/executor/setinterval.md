---
id: "en-php-function-ui-executor-setinterval"
language: "php"
lang: "en"
category: "function"
name: "UI\\Executor::setInterval"
title: "Interval Manipulation"
signature: "public bool UI\\Executor::setInterval(int $microseconds)"
module: "ui"
source_url: "https://www.php.net/manual/en/ui-executor.setinterval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Interval Manipulation

## Description

```php
public bool UI\Executor::setInterval(int $microseconds)
```

```php
public bool UI\Executor::setInterval(int $seconds, int $microseconds)
```

Shall set the new interval. An interval of 0 will pause the executor until a new interval has been set

## Parameters

- **`$seconds`**
- **`$microseconds`**

## Return Values

Indication of success
