---
id: "java-en-function-tabulardatasupport-tabulardatasupport"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.TabularDataSupport"
signature: "public TabularDataSupport(TabularType tabularType)"
title: "TabularDataSupport.TabularDataSupport"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.TabularDataSupport

```java
public TabularDataSupport(TabularType tabularType)
```

Creates an empty `TabularDataSupport` instance
 whose open-type is tabularType,
 and whose underlying `HashMap` has a default
 initial capacity (101) and default load factor (0.75).
 

 This constructor simply calls `this(tabularType, 101, 0.75f);`

**参数**

- **tabularType** — the tabular type describing this `TabularData` instance; cannot be null.

**异常**

- **IllegalArgumentException** — if the tabular type is null.
