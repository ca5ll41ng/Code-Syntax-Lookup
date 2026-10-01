---
id: "en-php-function-function-pcntl-setqos-class"
language: "php"
lang: "en"
category: "function"
name: "pcntl_setqos_class"
title: "Set the QoS class of the current thread"
signature: "void pcntl_setqos_class(Pcntl\\QosClass $qos_class = Pcntl\\QosClass::Default)"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-setqos-class.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the QoS class of the current thread

## Description

```php
void pcntl_setqos_class(Pcntl\QosClass $qos_class = Pcntl\QosClass::Default)
```

Sets the Quality of Service (QoS) class of the current thread.

## Parameters

- **`$qos_class`** — The Quality of Service class to assign to the current thread. The operating system uses this as a hint to schedule CPU time, I/O priority, and energy usage, with higher classes preempting lower ones. See `Pcntl\QosClass` for the available cases.
  - **`Pcntl\QosClass::UserInteractive`** — Highest priority. Intended for work that directly drives a user interface and must complete virtually instantly to avoid perceived delay, such as event handling or drawing.
  - **`Pcntl\QosClass::UserInitiated`** — High priority, just below `UserInteractive`. Intended for work the user has explicitly initiated and is actively waiting on, expected to complete within a few seconds.
  - **`Pcntl\QosClass::Default`** — Standard priority, used when no more specific class applies. Runs after higher-priority work but ahead of `Utility` and `Background`.
  - **`Pcntl\QosClass::Utility`** — Lower priority, intended for long-running work the user is aware of but not actively waiting on, such as downloads, imports, or bulk computation. Scheduled in an energy-efficient manner.
  - **`Pcntl\QosClass::Background`** — Lowest priority, intended for work the user is not aware of, such as prefetching, indexing, or maintenance. Heavily optimized for energy efficiency and may be deferred when the system is under load.



> This function is only available on Apple platforms.

## Return Values

No value is returned.

## Errors/Exceptions

Throws an Error if the underlying call to `pthread_set_qos_class_self_np()` fails.

## See Also

 `pcntl_getqos_class()` `Pcntl\QosClass`
