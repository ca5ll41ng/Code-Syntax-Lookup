---
id: "java-en-function-throwable-initcause"
language: "java"
lang: "en"
category: "function"
name: "Throwable.initCause"
signature: "public synchronized Throwable initCause(Throwable cause)"
title: "Throwable.initCause"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Throwable.initCause

```java
public synchronized Throwable initCause(Throwable cause)
```

Initializes the cause of this throwable to the specified value.
 (The cause is the throwable that caused this throwable to get thrown.)

 

This method can be called at most once.  It is generally called from
 within the constructor, or immediately after creating the
 throwable.  If this throwable was created
 with `Throwable` or
 `Throwable`, this method cannot be called
 even once.

 

An example of using this method on a legacy throwable type
 without other support for setting the cause is:

 
```

 try {
     lowLevelOp();
 } catch (LowLevelException le) {
     throw (HighLevelException)
           new HighLevelException().initCause(le); // Legacy constructor
 }
 
```

**参数**

- **cause** — the cause (which is saved for later retrieval by the `getCause` method).  (A `null` value is permitted, and indicates that the cause is nonexistent or unknown.)

**返回**

- a reference to this `Throwable` instance.

**异常**

- **IllegalArgumentException** — if `cause` is this throwable.  (A throwable cannot be its own cause.)
- **IllegalStateException** — if this throwable was created with `Throwable` or `Throwable`, or this method has already been called on this throwable.

> *Since 1.4*
