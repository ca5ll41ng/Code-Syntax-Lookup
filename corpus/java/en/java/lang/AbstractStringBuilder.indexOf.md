---
id: "java-en-function-abstractstringbuilder-indexof"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.indexOf"
signature: "public int indexOf(String str)"
title: "AbstractStringBuilder.indexOf"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.indexOf

```java
public int indexOf(String str)
```

Returns the index within this string of the first occurrence of the
 specified substring.

 

The returned index is the smallest value `k` for which:
 
```
`this.toString().startsWith(str, k)
 `
```

 If no such value of `k` exists, then `-1` is returned.

**参数**

- **str** — the substring to search for.

**返回**

- the index of the first occurrence of the specified substring, or `-1` if there is no such occurrence.
