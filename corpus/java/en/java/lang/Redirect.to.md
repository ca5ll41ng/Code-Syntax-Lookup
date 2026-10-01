---
id: "java-en-function-redirect-to"
language: "java"
lang: "en"
category: "function"
name: "Redirect.to"
signature: "public static Redirect to(final File file)"
title: "Redirect.to"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Redirect.to

```java
public static Redirect to(final File file)
```

Returns a redirect to write to the specified file.
 If the specified file exists when the subprocess is started,
 its previous contents will be discarded.

 

It will always be true that
 {@snippet lang = "java" :
     Redirect.to(file).file() == file &&
     Redirect.to(file).type() == Redirect.Type.WRITE
 }

**参数**

- **file** — The `File` for the `Redirect`.

**返回**

- a redirect to write to the specified file
