---
id: "java-en-function-system-in"
language: "java"
lang: "en"
category: "function"
name: "System.in"
signature: "public static final InputStream in = null"
title: "System.in"
directive: "field"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.in

```java
public static final InputStream in = null
```

The "standard" input stream. This stream is already
 open and ready to supply input data. This stream
 corresponds to keyboard input or another input source specified by
 the host environment or user. Applications should use the encoding
 specified by the `#stdin.encoding stdin.encoding` property
 to convert input bytes to character data.

 The typical approach to read character data is to wrap `System.in`
 within the object that handles character encoding. After this is done,
 subsequent reading should use only the wrapper object; continuing to
 operate directly on `System.in` results in unspecified behavior.
 

 Here are two common examples. Using an `java.io.InputStreamReader
 InputStreamReader`:
 {@snippet lang=java :
     new InputStreamReader(System.in, System.getProperty("stdin.encoding"));
 }
 Or using a `java.util.Scanner Scanner`:
 {@snippet lang=java :
     new Scanner(System.in, System.getProperty("stdin.encoding"));
 }
 

 For handling interactive input, consider using `Console`.

**参见**

- Console
- ##stdin.encoding stdin.encoding
