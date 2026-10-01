---
id: "en-php-function-ui-executor-construct"
language: "php"
lang: "en"
category: "function"
name: "UI\\Executor::__construct"
title: "Construct a new Executor"
signature: "public UI\\Executor::__construct()"
module: "ui"
source_url: "https://www.php.net/manual/en/ui-executor.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new Executor

## Description

```php
public UI\Executor::__construct()
```

```php
public UI\Executor::__construct(int $microseconds)
```

```php
public UI\Executor::__construct(int $seconds, int $microseconds)
```

Shall construct an executor with the given interval, will not start executing until main loop is entered

## Parameters

- **`$seconds`** — Seconds between executions
- **`$microseconds`** — Microseconds between executions

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1>
