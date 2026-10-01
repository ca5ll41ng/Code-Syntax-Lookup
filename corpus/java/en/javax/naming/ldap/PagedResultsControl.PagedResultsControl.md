---
id: "java-en-function-pagedresultscontrol-pagedresultscontrol"
language: "java"
lang: "en"
category: "function"
name: "PagedResultsControl.PagedResultsControl"
signature: "public PagedResultsControl(int pageSize, boolean criticality) throws IOException"
title: "PagedResultsControl.PagedResultsControl"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/PagedResultsControl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PagedResultsControl.PagedResultsControl

```java
public PagedResultsControl(int pageSize, boolean criticality) throws IOException
```

Constructs a control to set the number of entries to be returned per
 page of results.

**参数**

- **pageSize** — The number of entries to return in a page.
- **criticality** — If true then the server must honor the control and return search results as indicated by pageSize or refuse to perform the search. If false, then the server need not honor the control.

**异常**

- **IOException** — If an error was encountered while encoding the supplied arguments into a control.
