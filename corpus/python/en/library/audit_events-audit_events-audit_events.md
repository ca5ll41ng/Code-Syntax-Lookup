---
id: "python-en-function-audit_events-audit_events"
language: "python"
lang: "en"
category: "function"
name: "audit_events"
title: "Audit events table"
directive: "module"
module: "audit_events"
source_url: "https://docs.python.org/3/library/audit_events.html#module-audit_events"
license: "PSF"
updated: "2026-10-01"
---

# Audit events table

.. _audit-events:

**Audit events table**

This table contains all events raised by `sys.audit` or
:c`PySys_Audit` calls throughout the CPython runtime and the
standard library.  These calls were added in 3.8 or later (see PEP 578).

See `sys.addaudithook` and :c`PySys_AddAuditHook` for
information on handling these events.

impl-detail::

audit-event-table::

The following events are raised internally and do not correspond to any
public API of CPython:

+----------------------------+-------------------------------------------+
 Audit event                 Arguments                                 
+============================+===========================================+
 _winapi.CreateFile          `file_name`, `desired_access`,        
                             `share_mode`, `creation_disposition`, 
                             `flags_and_attributes`                  
+----------------------------+-------------------------------------------+
 _winapi.CreateJunction      `src_path`, `dst_path`                
+----------------------------+-------------------------------------------+
 _winapi.CreateNamedPipe     `name`, `open_mode`, `pipe_mode`    
+----------------------------+-------------------------------------------+
 _winapi.CreatePipe                                                    
+----------------------------+-------------------------------------------+
 _winapi.CreateProcess       `application_name`, `command_line`,   
                             `current_directory`                     
+----------------------------+-------------------------------------------+
 _winapi.OpenProcess         `process_id`, `desired_access`        
+----------------------------+-------------------------------------------+
 _winapi.TerminateProcess    `handle`, `exit_code`                 
+----------------------------+-------------------------------------------+
 _posixsubprocess.fork_exec  `exec_list`, `args`, `env`          
+----------------------------+-------------------------------------------+
 ctypes.PyObj_FromPtr        `obj`                                   |
+----------------------------+-------------------------------------------+

> *Added in 3.14*: The ``_posixsubprocess.fork_exec`` internal audit event.
