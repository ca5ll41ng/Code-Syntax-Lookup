---
id: "python-zh-function-select-kevent-filter"
language: "python"
lang: "zh"
category: "function"
name: "kevent.filter"
directive: "attribute"
module: "select"
source_url: "https://docs.python.org/zh-cn/3/library/select.html#select.kevent.filter"
license: "PSF"
updated: "2026-10-01"
---

# kevent.filter

内核筛选器的名称。

+---------------------------+---------------------------------------------+
 Constant                   Meaning                                     
+===========================+=============================================+
 `KQ_FILTER_READ`    Takes a descriptor and returns whenever     
                            there is data available to read.            
+---------------------------+---------------------------------------------+
 `KQ_FILTER_WRITE`   Takes a descriptor and returns whenever     
                            there is data available to write.           
+---------------------------+---------------------------------------------+
 `KQ_FILTER_AIO`     AIO requests.                               
+---------------------------+---------------------------------------------+
 `KQ_FILTER_VNODE`   Returns when one or more of the requested   
                            events watched in *fflag* occurs.           
+---------------------------+---------------------------------------------+
 `KQ_FILTER_PROC`    Watch for events on a process ID.           
+---------------------------+---------------------------------------------+
 `KQ_FILTER_NETDEV`  Watch for events on a network device        
                            (not available on macOS).                   
+---------------------------+---------------------------------------------+
 `KQ_FILTER_SIGNAL`  Returns whenever the watched signal is      
                            delivered to the process.                   
+---------------------------+---------------------------------------------+
 `KQ_FILTER_TIMER`   Establishes an arbitrary timer.             
+---------------------------+---------------------------------------------+
