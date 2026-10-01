---
id: "java-en-function-java-util-eventlistenerproxy"
language: "java"
lang: "en"
category: "function"
name: "java.util.EventListenerProxy"
title: "EventListenerProxy"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EventListenerProxy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventListenerProxy

An abstract wrapper class for an `EventListener` class
 which associates a set of additional parameters with the listener.
 Subclasses must provide the storage and accessor methods
 for the additional arguments or parameters.
 

 For example, a bean which supports named properties
 would have a two argument method signature for adding
 a `PropertyChangeListener` for a property:
 
```

 public void addPropertyChangeListener(String propertyName,
                                       PropertyChangeListener listener)
 
```

 If the bean also implemented the zero argument get listener method:
 
```

 public PropertyChangeListener[] getPropertyChangeListeners()
 
```

 then the array may contain inner `PropertyChangeListeners`
 which are also `PropertyChangeListenerProxy` objects.
 

 If the calling method is interested in retrieving the named property
 then it would have to test the element to see if it is a proxy class.

**参数**

- **the** — type of `EventListener` being wrapped

> *Since 1.4*
