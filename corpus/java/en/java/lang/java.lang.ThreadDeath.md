---
id: "java-en-function-java-lang-threaddeath"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ThreadDeath"
title: "ThreadDeath"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadDeath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadDeath

An instance of `ThreadDeath` was originally specified to be thrown
 by a victim thread when "stopped" with the `Thread` API.

> *Since 1.0*

> **⚠ Deprecated** — `Thread` originally specified a "`stop`" method to stop a victim thread by causing the victim thread to throw a `ThreadDeath`. It was inherently unsafe and deprecated in an early JDK release. The `stop` method has since been removed and `ThreadDeath` is deprecated, for removal.
