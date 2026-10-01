---
id: "java-en-function-phantomreference-get"
language: "java"
lang: "en"
category: "function"
name: "PhantomReference.get"
signature: "public T get()"
title: "PhantomReference.get"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/PhantomReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PhantomReference.get

```java
public T get()
```

Returns this reference object's referent.  Because the referent of a
 phantom reference is always inaccessible, this method always returns
 `null`.

**返回**

- `null`
