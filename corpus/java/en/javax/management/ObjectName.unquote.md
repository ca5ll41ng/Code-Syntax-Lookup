---
id: "java-en-function-objectname-unquote"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.unquote"
signature: "public static String unquote(String q)"
title: "ObjectName.unquote"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.unquote

```java
public static String unquote(String q)
```

Returns an unquoted form of the given String.  If
 q is a String returned by `quote quote`,
 then unquote(q).equals(s).  If there is no String
 s for which quote(s).equals(q), then
 unquote(q) throws an IllegalArgumentException.

 

These rules imply that there is a one-to-one mapping between
 quoted and unquoted forms.

**参数**

- **q** — the String to be unquoted.

**返回**

- the unquoted String.

**异常**

- **IllegalArgumentException** — if q could not have been returned by the `quote` method, for instance if it does not begin and end with a quote (").
- **NullPointerException** — if q is null.
