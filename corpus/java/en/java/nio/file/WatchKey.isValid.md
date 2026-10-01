---
id: "java-en-function-watchkey-isvalid"
language: "java"
lang: "en"
category: "function"
name: "WatchKey.isValid"
signature: "boolean isValid()"
title: "WatchKey.isValid"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchKey.isValid

```java
boolean isValid()
```

Tells whether or not this watch key is valid.

 

 A watch key is valid upon creation and remains until it is cancelled,
 or its watch service is closed.

**返回**

- `true` if, and only if, this watch key is valid
