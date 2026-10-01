---
id: "python-en-function-select-kevent-filter"
language: "python"
lang: "en"
category: "function"
name: "kevent.filter"
directive: "attribute"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.kevent.filter"
license: "PSF"
updated: "2026-10-01"
---

# kevent.filter

Name of the kernel filter.

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
