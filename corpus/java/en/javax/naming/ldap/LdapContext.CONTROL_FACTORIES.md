---
id: "java-en-function-ldapcontext-control_factories"
language: "java"
lang: "en"
category: "function"
name: "LdapContext.CONTROL_FACTORIES"
signature: "static final String CONTROL_FACTORIES = \"java.naming.factory.control\""
title: "LdapContext.CONTROL_FACTORIES"
directive: "field"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapContext.CONTROL_FACTORIES

```java
static final String CONTROL_FACTORIES = "java.naming.factory.control"
```

Constant that holds the name of the environment property
 for specifying the list of control factories to use. The value
 of the property should be a colon-separated list of the fully
 qualified class names of factory classes that will create a control
 given another control. See
 `ControlFactory.getControlInstance()` for details.
 This property may be specified in the environment, a system property,
 or one or more resource files.

 The value of this constant is "java.naming.factory.control".

**参见**

- ControlFactory
- javax.naming.Context#addToEnvironment
- javax.naming.Context#removeFromEnvironment
