---
id: "java-en-function-nameparser-parse"
language: "java"
lang: "en"
category: "function"
name: "NameParser.parse"
signature: "Name parse(String name) throws NamingException"
title: "NameParser.parse"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameParser.parse

```java
Name parse(String name) throws NamingException
```

Parses a name into its components.

**参数**

- **name** — The non-null string name to parse.

**返回**

- A non-null parsed form of the name using the naming convention of this parser.

**异常**

- **InvalidNameException** — If name does not conform to syntax defined for the namespace.
- **NamingException** — If a naming exception was encountered.
