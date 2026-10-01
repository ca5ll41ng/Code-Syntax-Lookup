---
id: "java-en-function-java-util-timertask"
language: "java"
lang: "en"
category: "function"
name: "java.util.TimerTask"
title: "TimerTask"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimerTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerTask

A task that can be scheduled for one-time or repeated execution by a
 `Timer`.

 

A timer task is not reusable.  Once a task has been scheduled
 for execution on a `Timer` or cancelled, subsequent attempts to
 schedule it for execution will throw `IllegalStateException`.

> *Since 1.3*
