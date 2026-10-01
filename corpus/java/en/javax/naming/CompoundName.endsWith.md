---
id: "java-en-function-compoundname-endswith"
language: "java"
lang: "en"
category: "function"
name: "CompoundName.endsWith"
signature: "public boolean endsWith(Name n)"
title: "CompoundName.endsWith"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompoundName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompoundName.endsWith

```java
public boolean endsWith(Name n)
```

Determines whether a compound name is a suffix of this compound name.
 A compound name 'n' is a suffix if it is equal to
 getSuffix(size()-n.size())--in other words, this
 compound name ends with 'n'.
 If n is null or not a compound name, false is returned.

 Implementation note: Currently the syntax properties of n
  are not used when doing the comparison. They might be in the future.

**参数**

- **n** — The possibly null compound name to check.

**返回**

- true if n is a CompoundName and is a suffix of this compound name, false otherwise.
