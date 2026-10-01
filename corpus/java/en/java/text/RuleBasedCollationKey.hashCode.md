---
id: "java-en-function-rulebasedcollationkey-hashcode"
language: "java"
lang: "en"
category: "function"
name: "RuleBasedCollationKey.hashCode"
signature: "public int hashCode()"
title: "RuleBasedCollationKey.hashCode"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/RuleBasedCollationKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuleBasedCollationKey.hashCode

```java
public int hashCode()
```

Creates a hash code for this RuleBasedCollationKey. The hash value is calculated on the
 key itself, not the String from which the key was created.  Thus
 if x and y are RuleBasedCollationKeys, then x.hashCode(x) == y.hashCode() if
 x.equals(y) is true.  This allows language-sensitive comparison in a hash table.
 See the CollatinKey class description for an example.

**返回**

- the hash value based on the string's collation order.
