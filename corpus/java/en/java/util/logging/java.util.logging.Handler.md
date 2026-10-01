---
id: "java-en-function-java-util-logging-handler"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.Handler"
title: "Handler"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Handler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Handler

A `Handler` object takes log messages from a `Logger` and
 exports them.  It might for example, write them to a console
 or write them to a file, or send them to a network logging service,
 or forward them to an OS log, or whatever.
 

 A `Handler` can be disabled by doing a `setLevel(Level.OFF)`
 and can  be re-enabled by doing a `setLevel` with an appropriate level.
 

 `Handler` classes typically use `LogManager` properties to set
 default values for the `Handler`'s `Filter`, `Formatter`,
 and `Level`.  See the specific documentation for each concrete
 `Handler` class.

 Thread Safety and Deadlock Risk in Handlers

 Implementations of `Handler` should be thread-safe. Handlers are
 expected to be invoked concurrently from arbitrary threads. However,
 over-use of synchronization may result in unwanted thread contention,
 performance issues or even deadlocking.
 

 In particular, subclasses should avoid acquiring locks around code which
 calls back to arbitrary user-supplied objects, especially during log record
 formatting. Holding a lock around any such callbacks creates a deadlock risk
 between logging code and user code.
 

 As such, general purpose `Handler` subclasses should not synchronize
 their `publish` methods, or call `super.publish()`
 while holding locks, since these are typically expected to need to process
 and format user-supplied arguments.

> *Since 1.4*
