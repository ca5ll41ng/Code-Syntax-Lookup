---
id: "java-en-function-handler-close"
language: "java"
lang: "en"
category: "function"
name: "Handler.close"
signature: "public abstract void close()"
title: "Handler.close"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Handler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Handler.close

```java
public abstract void close()
```

Close the `Handler` and free all associated resources.
 

 The close method will perform a `flush` and then close the
 `Handler`.   After close has been called this `Handler`
 should no longer be used.  Method calls may either be silently
 ignored or may throw runtime exceptions.
