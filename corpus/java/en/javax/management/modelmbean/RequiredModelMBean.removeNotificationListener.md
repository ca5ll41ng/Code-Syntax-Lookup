---
id: "java-en-function-requiredmodelmbean-removenotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.removeNotificationListener"
signature: "public void removeNotificationListener(NotificationListener listener) throws ListenerNotFoundException"
title: "RequiredModelMBean.removeNotificationListener"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.removeNotificationListener

```java
public void removeNotificationListener(NotificationListener listener) throws ListenerNotFoundException
```

Removes a listener for Notifications from the RequiredModelMBean.

**参数**

- **listener** — The listener name which was handling notifications emitted by the registered MBean. This method will remove all information related to this listener.

**异常**

- **ListenerNotFoundException** — The listener is not registered in the MBean or is null.

**参见**

- #addNotificationListener
