---
id: "java-en-function-transformerexception-initcause"
language: "java"
lang: "en"
category: "function"
name: "TransformerException.initCause"
signature: "public synchronized Throwable initCause(Throwable cause)"
title: "TransformerException.initCause"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerException.initCause

```java
public synchronized Throwable initCause(Throwable cause)
```

Initializes the cause of this throwable to the specified value.
 (The cause is the throwable that caused this throwable to get thrown.)

 

This method can be called at most once.  It is generally called from
 within the constructor, or immediately after creating the
 throwable.  If this throwable was created
 with `TransformerException` or
 `TransformerException`, this method cannot be called
 even once.

**参数**

- **cause** — the cause (which is saved for later retrieval by the `getCause` method).  (A null value is permitted, and indicates that the cause is nonexistent or unknown.)

**返回**

- a reference to this Throwable instance.

**异常**

- **IllegalArgumentException** — if cause is this throwable.  (A throwable cannot be its own cause.)
- **IllegalStateException** — if this throwable was created with `TransformerException` or `TransformerException`, or this method has already been called on this throwable.
