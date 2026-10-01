---
id: "en-php-function-parallel-runtime-run"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Runtime::run"
title: "Execution"
signature: "public Future|null parallel\\Runtime::run(Closure $task)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-runtime.run.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execution

## Description

```php
public Future|null parallel\Runtime::run(Closure $task)
```

Shall schedule `$task` for execution in parallel.

```php
public Future|null parallel\Runtime::run(Closure $task, array $argv)
```

Shall schedule `$task` for execution in parallel, passing `$argv` at execution time.

## Parameters

- **`$task`** — A `Closure` with specific characteristics.
- **`$argv`** — An `array` of arguments with specific characteristics to be passed to `$task` at execution time.

## Task Characteristics

Closures scheduled for parallel execution must not: accept or return by reference accept or return internal objects (see notes) execute a limited set of instructions

Instructions prohibited in Closures intended for parallel execution are: yield use by-reference declare class declare named function

> Nested closures may yield or use by-reference, but must not contain class or named function declarations.

> No instructions are prohibited in the files which the task may include.

## Arguments Characteristics

Arguments must not: contain references contain resources contain internal objects (see notes)

> In the case of file stream resources, the resource will be cast to the file descriptor and passed as `int` where possible, this is unsupported on Windows.

## Internal Objects Notes

Internal objects generally use a custom structure which cannot be copied by value safely, PHP currently lacks the mechanics to do this (without serialization) and so only objects that do not use a custom structure may be shared.

Some internal objects do not use a custom structure, for example `parallel\Events\Event` and so may be shared.

Closures are a special kind of internal object and support being copied by value, and so may be shared.

Channels are central to writing parallel code and support concurrent access and execution by necessity, and so may be shared.

> A user class that extends an internal class may use a custom structure as defined by the internal class, in which case they cannot be copied by value safely, and so may not be shared.

## Return Values

> The return `parallel\Future` must not be ignored when the task contains a return or throw statement.

## Exceptions

> Shall throw `parallel\Runtime\Error\Closed` if `parallel\Runtime` was closed.

> Shall throw `parallel\Runtime\Error\IllegalFunction` if `$task` is a closure created from an internal function.

> Shall throw `parallel\Runtime\Error\IllegalInstruction` if `$task` contains illegal instructions.

> Shall throw `parallel\Runtime\Error\IllegalParameter` if `$task` accepts or `$argv` contains illegal variables.

> Shall throw `parallel\Runtime\Error\IllegalReturn` if `$task` returns illegally.
