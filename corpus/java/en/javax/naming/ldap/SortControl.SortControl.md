---
id: "java-en-function-sortcontrol-sortcontrol"
language: "java"
lang: "en"
category: "function"
name: "SortControl.SortControl"
signature: "public SortControl(String sortBy, boolean criticality) throws IOException"
title: "SortControl.SortControl"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/SortControl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortControl.SortControl

```java
public SortControl(String sortBy, boolean criticality) throws IOException
```

Constructs a control to sort on a single attribute in ascending order.
 Sorting will be performed using the ordering matching rule defined
 for use with the specified attribute.

**参数**

- **sortBy** — An attribute ID to sort by.
- **criticality** — If true then the server must honor the control and return the search results sorted as requested or refuse to perform the search. If false, then the server need not honor the control.

**异常**

- **IOException** — If an error was encountered while encoding the supplied arguments into a control.
