---
id: "python-zh-function-select-kevent-flags"
language: "python"
lang: "zh"
category: "function"
name: "kevent.flags"
directive: "attribute"
module: "select"
source_url: "https://docs.python.org/zh-cn/3/library/select.html#select.kevent.flags"
license: "PSF"
updated: "2026-10-01"
---

# kevent.flags

筛选器操作。

+---------------------------+----------------------------------------------+
 Constant                   Meaning                                      
+===========================+==============================================+
 `KQ_EV_ADD`         Adds or modifies an event.                   
+---------------------------+----------------------------------------------+
 `KQ_EV_DELETE`      Removes an event from the queue.             
+---------------------------+----------------------------------------------+
 `KQ_EV_ENABLE`      Permits control() to return the event.       
+---------------------------+----------------------------------------------+
 `KQ_EV_DISABLE`     Disables event.                              
+---------------------------+----------------------------------------------+
 `KQ_EV_ONESHOT`     Removes event after first occurrence.        
+---------------------------+----------------------------------------------+
 `KQ_EV_CLEAR`       Reset the state after an event is retrieved. 
+---------------------------+----------------------------------------------+
 `KQ_EV_SYSFLAGS`    Internal event.                              
+---------------------------+----------------------------------------------+
 `KQ_EV_FLAG1`       Internal event.                              
+---------------------------+----------------------------------------------+
 `KQ_EV_EOF`         Filter-specific EOF condition.               
+---------------------------+----------------------------------------------+
 `KQ_EV_ERROR`       See return values.                           |
+---------------------------+----------------------------------------------+
