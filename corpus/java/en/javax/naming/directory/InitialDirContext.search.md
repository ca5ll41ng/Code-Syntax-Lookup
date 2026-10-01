---
id: "java-en-function-initialdircontext-search"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["ldap"],"cwe":["CWE-90"],"params":[1,2,3]}
name: "InitialDirContext.search"
signature: "public NamingEnumeration<SearchResult> search(String name, String filter, SearchControls cons) throws NamingException"
title: "InitialDirContext.search"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/InitialDirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialDirContext.search

```java
public NamingEnumeration<SearchResult> search(String name, String filter, SearchControls cons) throws NamingException
```

**异常**

- **InvalidSearchFilterException** — {@inheritDoc}
- **InvalidSearchControlsException** — {@inheritDoc}
