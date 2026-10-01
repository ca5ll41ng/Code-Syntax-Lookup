---
id: "java-en-function-context-composename"
language: "java"
lang: "en"
category: "function"
name: "Context.composeName"
signature: "public Name composeName(Name name, Name prefix) throws NamingException"
title: "Context.composeName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.composeName

```java
public Name composeName(Name name, Name prefix) throws NamingException
```

Composes the name of this context with a name relative to
 this context.
 Given a name (name) relative to this context, and
 the name (prefix) of this context relative to one
 of its ancestors, this method returns the composition of the
 two names using the syntax appropriate for the naming
 system(s) involved.  That is, if name names an
 object relative to this context, the result is the name of the
 same object, but relative to the ancestor context.  None of the
 names may be null.
 

 For example, if this context is named "wiz.com" relative
 to the initial context, then
 
```

  composeName("east", "wiz.com")  
```

 might return "east.wiz.com".
 If instead this context is named "org/research", then
 
```

  composeName("user/jane", "org/research")        
```

 might return "org/research/user/jane" while
 
```

  composeName("user/jane", "research")    
```

 returns "research/user/jane".

**参数**

- **name** — a name relative to this context
- **prefix** — the name of this context relative to one of its ancestors

**返回**

- the composition of prefix and name

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #composeName(String, String)
