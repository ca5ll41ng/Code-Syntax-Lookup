---
id: "java-en-function-logger-all"
language: "java"
lang: "en"
category: "function"
name: "Logger.ALL"
signature: "ALL(Integer.MIN_VALUE), // typically mapped to/from j.u.l.Level.ALL /** * {@code TRACE} level: usually used to log diagnostic information. * This level {@linkplain #getSeverity() severity} is * {@code 400}. */ TRACE(400), // typically mapped to/from j.u.l.Level.FINER /** * {@code DEBUG} level: usually used to log debug information traces. * This level {@linkplain #getSeverity() severity} is * {@code 500}. */ DEBUG(500), // typically mapped to/from j.u.l.Level.FINEST/FINE/CONFIG /** * {@code INFO} level: usually used to log information messages. * This level {@linkplain #getSeverity() severity} is * {@code 800}. */ INFO(800), // typically mapped to/from j.u.l.Level.INFO /** * {@code WARNING} level: usually used to log warning messages. * This level {@linkplain #getSeverity() severity} is * {@code 900}. */ WARNING(900), // typically mapped to/from j.u.l.Level.WARNING /** * {@code ERROR} level: usually used to log error messages. * This level {@linkplain #getSeverity() severity} is * {@code 1000}. */ ERROR(1000), // typically mapped to/from j.u.l.Level.SEVERE /** * A marker to indicate that all levels are disabled. * This level {@linkplain #getSeverity() severity} is * {@link Integer#MAX_VALUE}. */ OFF(Integer.MAX_VALUE)"
title: "Logger.ALL"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.ALL

```java
ALL(Integer.MIN_VALUE), // typically mapped to/from j.u.l.Level.ALL /** * {@code TRACE} level: usually used to log diagnostic information. * This level {@linkplain #getSeverity() severity} is * {@code 400}. */ TRACE(400), // typically mapped to/from j.u.l.Level.FINER /** * {@code DEBUG} level: usually used to log debug information traces. * This level {@linkplain #getSeverity() severity} is * {@code 500}. */ DEBUG(500), // typically mapped to/from j.u.l.Level.FINEST/FINE/CONFIG /** * {@code INFO} level: usually used to log information messages. * This level {@linkplain #getSeverity() severity} is * {@code 800}. */ INFO(800), // typically mapped to/from j.u.l.Level.INFO /** * {@code WARNING} level: usually used to log warning messages. * This level {@linkplain #getSeverity() severity} is * {@code 900}. */ WARNING(900), // typically mapped to/from j.u.l.Level.WARNING /** * {@code ERROR} level: usually used to log error messages. * This level {@linkplain #getSeverity() severity} is * {@code 1000}. */ ERROR(1000), // typically mapped to/from j.u.l.Level.SEVERE /** * A marker to indicate that all levels are disabled. * This level {@linkplain #getSeverity() severity} is * {@link Integer#MAX_VALUE}. */ OFF(Integer.MAX_VALUE)
```

A marker to indicate that all levels are enabled.
 This level `getSeverity() severity` is
 `MIN_VALUE`.
