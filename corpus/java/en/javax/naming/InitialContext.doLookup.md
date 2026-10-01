---
id: "java-en-function-initialcontext-dolookup"
language: "java"
lang: "en"
category: "function"
name: "InitialContext.doLookup"
signature: "public static <T> T doLookup(Name name) throws NamingException"
title: "InitialContext.doLookup"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InitialContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContext.doLookup

```java
public static <T> T doLookup(Name name) throws NamingException
```

A static method to retrieve the named object.
 This is a shortcut method equivalent to invoking:
 

 
        InitialContext ic = new InitialContext();
        Object obj = ic.lookup();
 
 

 If `name` is empty, returns a new instance of this context
 (which represents the same naming context as this context, but its
 environment may be modified independently and it may be accessed
 concurrently).

**参数**

- **the** — type of the returned object
- **name** — the name of the object to look up

**返回**

- the object bound to `name`

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #doLookup(String)
- #lookup(Name)

> *Since 1.6*
