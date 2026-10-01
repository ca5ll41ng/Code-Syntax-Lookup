---
id: "java-en-function-filelock-isvalid"
language: "java"
lang: "en"
category: "function"
name: "FileLock.isValid"
signature: "public abstract boolean isValid()"
title: "FileLock.isValid"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileLock.isValid

```java
public abstract boolean isValid()
```

Tells whether or not this lock is valid.

 

 A lock object remains valid until it is released or the associated
 file channel is closed, whichever comes first.

**返回**

- `true` if, and only if, this lock is valid
