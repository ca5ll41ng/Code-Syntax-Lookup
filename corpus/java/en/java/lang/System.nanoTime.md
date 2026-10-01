---
id: "java-en-function-system-nanotime"
language: "java"
lang: "en"
category: "function"
name: "System.nanoTime"
signature: "public static native long nanoTime()"
title: "System.nanoTime"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.nanoTime

```java
public static native long nanoTime()
```

Returns the current value of the running Java Virtual Machine's
 high-resolution time source, in nanoseconds.

 This method can only be used to measure elapsed time and is
 not related to any other notion of system or wall-clock time.
 The value returned represents nanoseconds since some fixed but
 arbitrary origin time (perhaps in the future, so values
 may be negative).  The same origin is used by all invocations of
 this method in an instance of a Java virtual machine; other
 virtual machine instances are likely to use a different origin.

 

This method provides nanosecond precision, but not necessarily
 nanosecond resolution (that is, how frequently the value changes)
 - no guarantees are made except that the resolution is at least as
 good as that of `currentTimeMillis`.

 

Differences in successive calls that span greater than
 approximately 292 years (263 nanoseconds) will not
 correctly compute elapsed time due to numerical overflow.

 

The values returned by this method become meaningful only when
 the difference between two such values, obtained within the same
 instance of a Java virtual machine, is computed.

 

For example, to measure how long some code takes to execute:
 
```
 `long startTime = System.nanoTime();
 // ... the code being measured ...
 long elapsedNanos = System.nanoTime() - startTime;`
```

 

To compare elapsed time against a timeout, use 
```
 `if (System.nanoTime() - startTime >= timeoutNanos) ...`
```

 instead of 
```
 `if (System.nanoTime() >= startTime + timeoutNanos) ...`
```

 because of the possibility of numerical overflow.

**返回**

- the current value of the running Java Virtual Machine's high-resolution time source, in nanoseconds

> *Since 1.5*
