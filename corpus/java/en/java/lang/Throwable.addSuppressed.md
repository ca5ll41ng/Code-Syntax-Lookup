---
id: "java-en-function-throwable-addsuppressed"
language: "java"
lang: "en"
category: "function"
name: "Throwable.addSuppressed"
signature: "public final synchronized void addSuppressed(Throwable exception)"
title: "Throwable.addSuppressed"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Throwable.addSuppressed

```java
public final synchronized void addSuppressed(Throwable exception)
```

Appends the specified exception to the exceptions that were
 suppressed in order to deliver this exception. This method is
 thread-safe and typically called (automatically and implicitly)
 by the `try`-with-resources statement.

 

The suppression behavior is enabled unless disabled
 `Throwable(String, Throwable, boolean, boolean) via
 a constructor`.  When suppression is disabled, this method does
 nothing other than to validate its argument.

 

Note that when one exception `initCause(Throwable) causes` another exception, the first
 exception is usually caught and then the second exception is
 thrown in response.  In other words, there is a causal
 connection between the two exceptions.

 In contrast, there are situations where two independent
 exceptions can be thrown in sibling code blocks, in particular
 in the `try` block of a `try`-with-resources
 statement and the compiler-generated `finally` block
 which closes the resource.

 In these situations, only one of the thrown exceptions can be
 propagated.  In the `try`-with-resources statement, when
 there are two such exceptions, the exception originating from
 the `try` block is propagated and the exception from the
 `finally` block is added to the list of exceptions
 suppressed by the exception from the `try` block.  As an
 exception unwinds the stack, it can accumulate multiple
 suppressed exceptions.

 

An exception may have suppressed exceptions while also being
 caused by another exception.  Whether or not an exception has a
 cause is semantically known at the time of its creation, unlike
 whether or not an exception will suppress other exceptions
 which is typically only determined after an exception is
 thrown.

 

Note that programmer written code is also able to take
 advantage of calling this method in situations where there are
 multiple sibling exceptions and only one can be propagated.

**参数**

- **exception** — the exception to be added to the list of suppressed exceptions

**异常**

- **IllegalArgumentException** — if `exception` is this throwable; a throwable cannot suppress itself.
- **NullPointerException** — if `exception` is `null`

> *Since 1.7*
