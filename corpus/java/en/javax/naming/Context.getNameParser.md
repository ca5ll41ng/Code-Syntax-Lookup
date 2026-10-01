---
id: "java-en-function-context-getnameparser"
language: "java"
lang: "en"
category: "function"
name: "Context.getNameParser"
signature: "public NameParser getNameParser(Name name) throws NamingException"
title: "Context.getNameParser"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.getNameParser

```java
public NameParser getNameParser(Name name) throws NamingException
```

Retrieves the parser associated with the named context.
 In a federation of namespaces, different naming systems will
 parse names differently.  This method allows an application
 to get a parser for parsing names into their atomic components
 using the naming convention of a particular naming system.
 Within any single naming system, `NameParser` objects
 returned by this method must be equal (using the `equals()`
 test).

**参数**

- **name** — the name of the context from which to get the parser

**返回**

- a name parser that can parse compound names into their atomic components

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #getNameParser(String)
- CompoundName
