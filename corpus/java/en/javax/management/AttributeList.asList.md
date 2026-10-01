---
id: "java-en-function-attributelist-aslist"
language: "java"
lang: "en"
category: "function"
name: "AttributeList.asList"
signature: "public List<Attribute> asList()"
title: "AttributeList.asList"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeList.asList

```java
public List<Attribute> asList()
```

Return a view of this list as a `List`.
 Changes to the returned value are reflected by changes
 to the original `AttributeList` and vice versa.

**返回**

- a `List` whose contents reflect the contents of this `AttributeList`.

**异常**

- **IllegalArgumentException** — if this `AttributeList` contains an element that is not an `Attribute`.

> *Since 1.6*
