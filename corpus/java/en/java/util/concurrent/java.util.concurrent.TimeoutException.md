---
id: "java-en-function-java-util-concurrent-timeoutexception"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.TimeoutException"
title: "TimeoutException"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TimeoutException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeoutException

Exception thrown when a blocking operation times out.  Blocking
 operations for which a timeout is specified need a means to
 indicate that the timeout has occurred. For many such operations it
 is possible to return a value that indicates timeout; when that is
 not possible or desirable then `TimeoutException` should be
 declared and thrown.

> *Since 1.5*
