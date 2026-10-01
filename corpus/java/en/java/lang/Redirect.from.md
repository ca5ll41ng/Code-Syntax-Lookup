---
id: "java-en-function-redirect-from"
language: "java"
lang: "en"
category: "function"
name: "Redirect.from"
signature: "public static Redirect from(final File file)"
title: "Redirect.from"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Redirect.from

```java
public static Redirect from(final File file)
```

Returns a redirect to read from the specified file.

 

It will always be true that
 {@snippet lang = "java" :
     Redirect.from(file).file() == file &&
     Redirect.from(file).type() == Redirect.Type.READ
 }

**参数**

- **file** — The `File` for the `Redirect`.

**返回**

- a redirect to read from the specified file
