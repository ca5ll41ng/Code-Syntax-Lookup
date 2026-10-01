---
id: "java-en-function-string-join"
language: "java"
lang: "en"
category: "function"
name: "String.join"
signature: "public static String join(CharSequence delimiter, CharSequence... elements)"
title: "String.join"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.join

```java
public static String join(CharSequence delimiter, CharSequence... elements)
```

Returns a new String composed of copies of the
 `CharSequence elements` joined together with a copy of
 the specified `delimiter`.

 For example,
 
```
`String message = String.join("-", "Java", "is", "cool");
     // message returned is: "Java-is-cool"
 `
```

 Note that if an element is null, then `"null"` is added.

**参数**

- **delimiter** — the delimiter that separates each element
- **elements** — the elements to join together.

**返回**

- a new `String` that is composed of the `elements` separated by the `delimiter`

**异常**

- **NullPointerException** — If `delimiter` or `elements` is `null`

**参见**

- java.util.StringJoiner

> *Since 1.8*
