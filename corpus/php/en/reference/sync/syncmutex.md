---
id: "en-php-guide-class-syncmutex"
language: "php"
lang: "en"
category: "guide"
name: "class.syncmutex"
title: "The SyncMutex class"
module: "sync"
source_url: "https://www.php.net/manual/en/class.syncmutex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SyncMutex class

SyncMutex

   Introduction  A cross-platform, native implementation of named and unnamed countable mutex objects.    A mutex is a mutual exclusion object that restricts access to a shared resource (e.g. a file) to a single instance. Countable mutexes acquire the mutex a single time and internally track the number of times the mutex is locked. The mutex is unlocked as soon as it goes out of scope or is unlocked the same number of times that it was locked.      Class Synopsis   `SyncMutex`    `SyncMutex`
