---
id: "java-en-function-provider-load"
language: "java"
lang: "en"
category: "function"
name: "Provider.load"
signature: "public synchronized void load(InputStream inStream) throws IOException"
title: "Provider.load"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.load

```java
public synchronized void load(InputStream inStream) throws IOException
```

Reads a property list (key and element pairs) from the input stream.

**参数**

- **inStream** — the input stream.

**异常**

- **IOException** — if an error occurred when reading from the input stream.

**参见**

- java.util.Properties#load
