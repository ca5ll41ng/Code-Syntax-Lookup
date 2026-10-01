---
id: "java-en-function-sortkey-sortkey"
language: "java"
lang: "en"
category: "function"
name: "SortKey.SortKey"
signature: "public SortKey(String attrID)"
title: "SortKey.SortKey"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/SortKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortKey.SortKey

```java
public SortKey(String attrID)
```

Creates the default sort key for an attribute. Entries will be sorted
 according to the specified attribute in ascending order using the
 ordering matching rule defined for use with that attribute.

**参数**

- **attrID** — The non-null ID of the attribute to be used as a sort key.
