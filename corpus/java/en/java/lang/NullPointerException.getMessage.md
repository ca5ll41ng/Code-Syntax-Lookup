---
id: "java-en-function-nullpointerexception-getmessage"
language: "java"
lang: "en"
category: "function"
name: "NullPointerException.getMessage"
signature: "public String getMessage()"
title: "NullPointerException.getMessage"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/NullPointerException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NullPointerException.getMessage

```java
public String getMessage()
```

Returns the detail message string of this throwable.

 

 If a non-null message was supplied in a constructor it is
 returned. Otherwise, an implementation specific message or
 `null` is returned.

 If no explicit message was passed to the constructor, and as
 long as certain internal information is available, a verbose
 description of the null reference is returned.
 The internal information is not available in deserialized
 NullPointerExceptions.

**返回**

- the detail message string, which may be `null`.
