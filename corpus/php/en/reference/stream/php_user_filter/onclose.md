---
id: "en-php-function-php-user-filter-onclose"
language: "php"
lang: "en"
category: "function"
name: "php_user_filter::onClose"
title: "Called when closing the filter"
signature: "public void php_user_filter::onClose()"
module: "stream"
source_url: "https://www.php.net/manual/en/php-user-filter.onclose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Called when closing the filter

## Description

```php
public void php_user_filter::onClose()
```

This method is called upon filter shutdown (typically, this is also during stream shutdown), and is executed *after* the `flush` method is called. If any resources were allocated or initialized during `onCreate()` this would be the time to destroy or dispose of them.

## Parameters

This function has no parameters.

## Return Values

Return value is ignored.
