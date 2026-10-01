---
id: "java-en-function-handler-setformatter"
language: "java"
lang: "en"
category: "function"
name: "Handler.setFormatter"
signature: "public synchronized void setFormatter(Formatter newFormatter)"
title: "Handler.setFormatter"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Handler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Handler.setFormatter

```java
public synchronized void setFormatter(Formatter newFormatter)
```

Set a `Formatter`.  This `Formatter` will be used
 to format `LogRecords` for this `Handler`.
 

 Some `Handlers` may not use `Formatters`, in
 which case the `Formatter` will be remembered, but not used.

**参数**

- **newFormatter** — the `Formatter` to use (may not be null)
