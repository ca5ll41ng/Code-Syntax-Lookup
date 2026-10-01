---
id: "java-en-function-redirect-appendto"
language: "java"
lang: "en"
category: "function"
name: "Redirect.appendTo"
signature: "public static Redirect appendTo(final File file)"
title: "Redirect.appendTo"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Redirect.appendTo

```java
public static Redirect appendTo(final File file)
```

Returns a redirect to append to the specified file.
 Each write operation first advances the position to the
 end of the file and then writes the requested data.
 Whether the advancement of the position and the writing
 of the data are done in a single atomic operation is
 system-dependent and therefore unspecified.

 

It will always be true that
 {@snippet lang = "java" :
     Redirect.appendTo(file).file() == file &&
     Redirect.appendTo(file).type() == Redirect.Type.APPEND
 }

**参数**

- **file** — The `File` for the `Redirect`.

**返回**

- a redirect to append to the specified file
