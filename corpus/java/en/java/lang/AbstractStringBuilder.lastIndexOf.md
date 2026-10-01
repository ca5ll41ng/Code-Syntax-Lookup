---
id: "java-en-function-abstractstringbuilder-lastindexof"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.lastIndexOf"
signature: "public int lastIndexOf(String str)"
title: "AbstractStringBuilder.lastIndexOf"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.lastIndexOf

```java
public int lastIndexOf(String str)
```

Returns the index within this string of the last occurrence of the
 specified substring.  The last occurrence of the empty string "" is
 considered to occur at the index value `this.length()`.

 

The returned index is the largest value `k` for which:
 
```
`this.toString().startsWith(str, k)
 `
```

 If no such value of `k` exists, then `-1` is returned.

**参数**

- **str** — the substring to search for.

**返回**

- the index of the last occurrence of the specified substring, or `-1` if there is no such occurrence.
