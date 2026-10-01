---
id: "python-zh-function-resource-setrlimit"
language: "python"
lang: "zh"
category: "function"
name: "setrlimit"
signature: "setrlimit(resource, limits)"
directive: "function"
module: "resource"
source_url: "https://docs.python.org/zh-cn/3/library/resource.html#resource.setrlimit"
license: "PSF"
updated: "2026-10-01"
---

# setrlimit

Sets new limits of consumption of *resource*. The *limits* argument must be a
tuple `(soft, hard)` of two integers describing the new limits. A value of
`~resource.RLIM_INFINITY` can be used to request a limit that is
unlimited.

Raises `ValueError` if an invalid resource is specified, if the new soft
limit exceeds the hard limit, or if a process tries to raise its hard limit.
Specifying a limit of `~resource.RLIM_INFINITY` when the hard or
system limit for that resource is not unlimited will result in a
`ValueError`.  A process with the effective UID of super-user can
request any valid limit value, including unlimited, but `ValueError`
will still be raised if the requested limit exceeds the system imposed
limit.

`setrlimit` may also raise `error` if the underlying system call
fails.

VxWorks 只支持设置 :const:`RLIMIT_NOFILE`。

audit-event:: resource.setrlimit resource,limits resource.setrlimit
