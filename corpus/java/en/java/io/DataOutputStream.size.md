---
id: "java-en-function-dataoutputstream-size"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.size"
signature: "public final int size()"
title: "DataOutputStream.size"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.size

```java
public final int size()
```

Returns the current value of the counter `written`,
 the number of bytes written to this data output stream so far.
 If the counter overflows, it will be wrapped to Integer.MAX_VALUE.

**返回**

- the value of the `written` field.

**参见**

- java.io.DataOutputStream#written
