---
id: "java-en-function-scanner-reset"
language: "java"
lang: "en"
category: "function"
name: "Scanner.reset"
signature: "public Scanner reset()"
title: "Scanner.reset"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.reset

```java
public Scanner reset()
```

Resets this scanner.

 

 Resetting a scanner discards all of its explicit state
 information which may have been changed by invocations of
 `useDelimiter useDelimiter`,
 `useLocale useLocale`, or
 `useRadix useRadix`.

 

 An invocation of this method of the form
 `scanner.reset()` behaves in exactly the same way as the
 invocation

 
```
`scanner.useDelimiter("\\p{javaWhitespace`+")
          .useLocale(Locale.getDefault(Locale.Category.FORMAT))
          .useRadix(10);
 }
```

**返回**

- this scanner

> *Since 1.6*
