---
id: "en-php-guide-class-syncevent"
language: "php"
lang: "en"
category: "guide"
name: "class.syncevent"
title: "The SyncEvent class"
module: "sync"
source_url: "https://www.php.net/manual/en/class.syncevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SyncEvent class

SyncEvent

   Introduction  A cross-platform, native implementation of named and unnamed event objects. Both automatic and manual event objects are supported.    An event object waits, without polling, for the object to be fired/set. One instance waits on the event object while another instance fires/sets the event. Event objects are useful wherever a long-running process would otherwise poll a resource (e.g. checking to see if uploaded data needs to be processed).      Class Synopsis   `SyncEvent`    `SyncEvent`
