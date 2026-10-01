---
id: "en-php-guide-book-sync"
language: "php"
lang: "en"
category: "guide"
name: "book.sync"
title: "Sync"
module: "sync"
source_url: "https://www.php.net/manual/en/book.sync.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sync

Sync

 Introduction  The `sync` extension introduces cross-platform synchronization objects into PHP. Named and unnamed Mutex, Semaphore, Event, Reader-Writer, and named Shared Memory objects provide OS-level synchronization on both POSIX (e.g. Linux) and Windows platforms.    Automatic cleanup of acquired synchronization objects takes place during extension teardown. This means that if PHP prematurely terminates a script (e.g. script execution time is exceeded), objects will not be left in an unknown state. The only exception to this is if PHP itself crashes (e.g. an internal buffer overflow).    Unnamed synchronization objects don't have a lot of use outside of a multithreaded scenario. Unnamed objects are more useful in conjunction with the pthreads PECL extension.   
> Named objects require additional care to be used on all systems. If an object is instantiated with a specific set of parameters, it must always be instantiated with those parameters or the object will probably end up in an inconsistent state until the next reboot or a system administrator cleans up the mess.
