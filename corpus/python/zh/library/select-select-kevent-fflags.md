---
id: "python-zh-function-select-kevent-fflags"
language: "python"
lang: "zh"
category: "function"
name: "kevent.fflags"
directive: "attribute"
module: "select"
source_url: "https://docs.python.org/zh-cn/3/library/select.html#select.kevent.fflags"
license: "PSF"
updated: "2026-10-01"
---

# kevent.fflags

Filter-specific flags.

:const:`KQ_FILTER_READ` 和  :const:`KQ_FILTER_WRITE` 筛选标志：

+----------------------------+--------------------------------------------+
 Constant                    Meaning                                    
+============================+============================================+
 `KQ_NOTE_LOWAT`      Low water mark of a socket buffer.         
+----------------------------+--------------------------------------------+

:const:`KQ_FILTER_VNODE` 筛选标志：

+----------------------------+--------------------------------------------+
 Constant                    Meaning                                    
+============================+============================================+
 `KQ_NOTE_DELETE`     *unlink()* was called.                     
+----------------------------+--------------------------------------------+
 `KQ_NOTE_WRITE`      A write occurred.                          
+----------------------------+--------------------------------------------+
 `KQ_NOTE_EXTEND`     The file was extended.                     
+----------------------------+--------------------------------------------+
 `KQ_NOTE_ATTRIB`     An attribute was changed.                  
+----------------------------+--------------------------------------------+
 `KQ_NOTE_LINK`       The link count has changed.                
+----------------------------+--------------------------------------------+
 `KQ_NOTE_RENAME`     The file was renamed.                      
+----------------------------+--------------------------------------------+
 `KQ_NOTE_REVOKE`     Access to the file was revoked.            
+----------------------------+--------------------------------------------+

:const:`KQ_FILTER_PROC` 筛选标志：

+----------------------------+--------------------------------------------+
 Constant                    Meaning                                    
+============================+============================================+
 `KQ_NOTE_EXIT`       The process has exited.                    
+----------------------------+--------------------------------------------+
 `KQ_NOTE_FORK`       The process has called *fork()*.           
+----------------------------+--------------------------------------------+
 `KQ_NOTE_EXEC`       The process has executed a new process.    
+----------------------------+--------------------------------------------+
 `KQ_NOTE_PCTRLMASK`  Internal filter flag.                      
+----------------------------+--------------------------------------------+
 `KQ_NOTE_PDATAMASK`  Internal filter flag.                      
+----------------------------+--------------------------------------------+
 `KQ_NOTE_TRACK`      Follow a process across *fork()*.          
+----------------------------+--------------------------------------------+
 `KQ_NOTE_CHILD`      Returned on the child process for          
                             *NOTE_TRACK*.                              
+----------------------------+--------------------------------------------+
 `KQ_NOTE_TRACKERR`   Unable to attach to a child.               
+----------------------------+--------------------------------------------+

:const:`KQ_FILTER_NETDEV` 筛选标志（在 macOS 上不可用）：

+----------------------------+--------------------------------------------+
 Constant                    Meaning                                    
+============================+============================================+
 `KQ_NOTE_LINKUP`     Link is up.                                
+----------------------------+--------------------------------------------+
 `KQ_NOTE_LINKDOWN`   Link is down.                              
+----------------------------+--------------------------------------------+
 `KQ_NOTE_LINKINV`    Link state is invalid.                     
+----------------------------+--------------------------------------------+
